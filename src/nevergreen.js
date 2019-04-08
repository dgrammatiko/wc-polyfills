// Basic pathes (IE, Events, Array.from, Object.assign)
import '@webcomponents/webcomponents-platform/webcomponents-platform.js';

// From from https://github.com/ungap/url-search-params
import '@ungap/url-search-params';

// From https://github.com/zloirock/core-js
import 'core-js/features/promise';

// From https://github.com/rousan/symbol-es6
// import 'symbol-es6';

// The @webcomponents polyfills
import '@webcomponents/shadydom/src/shadydom.js';
import '@webcomponents/custom-elements/src/custom-elements.js';
import '@webcomponents/shadycss/entrypoints/scoping-shim.js';

// Fire a WebComponentsReady event
import './fire-wc-event.js';
