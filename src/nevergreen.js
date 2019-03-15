// From MDN: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
import './needs-custom-events.js';

// From from https://github.com/ungap/url-search-params
import '@ungap/url-search-params';

// From https://github.com/zloirock/core-js
import 'core-js/modules/_array-from-iterable';
import 'core-js/modules/es6.symbol';
import 'core-js/modules/es6.promise';

// The @webcomponents polyfills
import '@webcomponents/webcomponents-platform/webcomponents-platform.js';
import '@webcomponents/template/template.js';
import '@webcomponents/shadydom/src/shadydom.js';
import '@webcomponents/custom-elements/src/custom-elements.js';
import '@webcomponents/shadycss/entrypoints/scoping-shim.js';

// Fire a WebComponentsReady event
import './fire-wc-event.js';
