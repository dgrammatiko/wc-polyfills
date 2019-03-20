/**
 * Build it!
 * 
 * Brotli is build in for node >= 11.7.0!!!
 */
const path = require('path');
const readdir = require("recursive-readdir");
const zopfli = require('@gfx/zopfli');

const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

let config;

const commonConfig = {
  mode: "production",
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CompressionPlugin(
      {
        test: /\.js$/i,
        compressionOptions: {
           numiterations: 15
        },
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        }
      }
    ),
    new CompressionPlugin({
      filename: '[path].br',
      algorithm: 'brotliCompress',
      test: /\.js$/i,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    })
  ]
};

const doThePackaging = (config) => {
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log('oops', err)
    }
  });
}
readdir("src").then(
  (files) => {
    files.forEach(file => {
      switch (file) {
        // These needs to be ES5
        case 'src/nevergreen.js':

          config = commonConfig;
          config.entry = path.resolve(__dirname, file);
          config.output = {
            filename: 'nevergreen.js',
            path: path.resolve(__dirname, 'dist')
          };
          config.module.rules.use = {
            loader: "babel-loader",
            options: {
              presets: [
                ['@babel/preset-env',
                  {
                    targets: {
                      "browsers": ["ie >= 11"]
                    },
                    modules: false,
                    useBuiltIns: false,
                    forceAllTransforms: true,
                  }]
              ],
            },
          };
          config.optimization = {
            minimizer: [
              new TerserPlugin({
                terserOptions: {
                  test: /\.js(\?.*)?$/i,
                  ecma: 5,
                  mangle: true,
                  sourceMap: false,
                  output: {
                    comments: false,
                  }
                },
              }),
            ],
          };

          doThePackaging(config);
          break;

        case 'src/evergreen.js':
        config = commonConfig;
        config.entry = path.resolve(__dirname, file);
        config.output = {
          filename: 'evergreen.js',
          path: path.resolve(__dirname, 'dist')
        };
        config.module.rules.use = {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env',
              {
                targets: {
                  chrome: "70"
                },
                modules: 'auto',
              }]
            ],
          },
        };
          config.optimization = {
            minimizer: [
              new TerserPlugin({
                terserOptions: {
                  test: /\.js(\?.*)?$/i,
                  ecma: 6,
                  mangle: true,
                  sourceMap: false,
                  output: {
                    comments: false,
                  }
                },
              }),
            ],
          };

          doThePackaging(config);
          break;
        default:
          break;
      }
    })
  },
  function(error) {
    console.error("something exploded", error);
  }
);
