// Gurnee Maintenance — minimal service worker.
// Its only job is to make the app installable on phones. It does not cache app data,
// so you always see live work orders (no stale data).
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => { /* pass through to network */ });
