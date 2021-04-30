const APP_PREFIX = 'BudgetTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
  "./index.html",
  "./js/index.js",
  "./idb.js",
  "./css/style.css",
  "manifest.json"
];

self.addEventListener('fetch', function (e) {
});

self.addEventListener('install', function (e) {
});

self.addEventListener('activate', function(e) {
});