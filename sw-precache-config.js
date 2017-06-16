/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */
module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/images/**/*.{css,png,jpg,gif,svg}',
    '/src/**/**/**/**/.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js',
    '/bower_components/app-storage/app-indexeddb-mirror/common-worker-scope.js',
    '/bower_components/app-storage/app-indexeddb-mirror/common-worker.html'
  ],
  ignoreUrlParametersMatching: [
    /app-indexeddb-mirror/
  ],
  skipWaiting: true,
  navigateFallback: 'index.html',
  runtimeCaching: [{
  urlPattern: /https:\/\/firebasestorage\.googleapis\.com\/(.*?)\/(.*?)\/afrodapp-blog\.appspot\.com\/(.*)/,
  handler: 'fastest',
  options: {
    cache: {
      maxEntries: 20,
      name: 'media'
    }
  }
}
// ,
// {
//   urlPattern: /\/(.*?)/,
//   handler: 'fastest',
//   options: {
//     cache: {
//       maxEntries: 10,
//       name: 'pages'
//     }
//   }
// }
]


};