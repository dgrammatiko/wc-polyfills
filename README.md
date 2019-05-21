## Web Components polyfills

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdgrammatiko%2Fwc-polyfills.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdgrammatiko%2Fwc-polyfills?ref=badge_shield)

For browsers with ES2015+ support:
A repackaging of the polyfills from https://github.com/webcomponents
- `customElements`
- `ShadowDOM`

For browsers with ES5 support:
- `Array.from`, `Object.assign`, `customEvent`, `defaultPrevented` from https://github.com/webcomponents/webcomponents-platform/webcomponents-platform.js
- `Promise`, `URL` and `URLSearchParams` from https://github.com/zloirock/core-js
- `customElements` as above but ES5 version
- `ShadowDOM` as above but ES5 version

### How to
- Clone the repo
- run `npm install`
- run `node build.js` or `npm run build`


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdgrammatiko%2Fwc-polyfills.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdgrammatiko%2Fwc-polyfills?ref=badge_large)