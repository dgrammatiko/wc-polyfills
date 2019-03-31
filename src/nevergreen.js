// Basic pathes (IE, Events, Array.from, Object.assign)
import '@webcomponents/webcomponents-platform/webcomponents-platform.js';

// The @webcomponents polyfills
import '@webcomponents/template/template.js';

// From https://github.com/zloirock/core-js
import 'core-js/features/promise';

// The @webcomponents polyfills
import '@webcomponents/shadydom/src/shadydom.js';
import '@webcomponents/custom-elements/src/custom-elements.js';
import '@webcomponents/shadycss/entrypoints/scoping-shim.js';

// From https://github.com/zloirock/core-js
import 'core-js/features/symbol';
import 'core-js/features/url';
import 'core-js/features/url-search-params';

// Fire a WebComponentsReady event
import './fire-wc-event.js';
