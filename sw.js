// Lock In service worker: only used to show reminder notifications. It caches nothing, so updates are never stuck.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then((list) => list.length ? list[0].focus() : self.clients.openWindow("./")));
});
