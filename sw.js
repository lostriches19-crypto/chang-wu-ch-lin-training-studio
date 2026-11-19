'use strict';
// Bump this version whenever the app shell changes. Waiting updates activate
// after all app windows close, so a training session is never reloaded.
const CACHE = 'cwcl-studio-shell-v2';
const BASE = new URL('./', self.location.href);
const ASSETS = ['index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const urls = ASSETS.map(path => new URL(path, BASE).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urls.map(url => new Request(url, {cache:'reload'})))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('cwcl-studio-shell-') && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data !== 'CHECK_OFFLINE' || !event.ports[0]) return;
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const ready = (await Promise.all(urls.map(url => cache.match(url)))).every(Boolean);
    event.ports[0].postMessage({ready});
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== BASE.origin) return;
  // Only the app shell is cached; journal/workout data never enters this cache.
  const isPage = event.request.mode === 'navigate' && (url.pathname === BASE.pathname || url.pathname === new URL('index.html', BASE).pathname);
  const asset = urls.find(value => new URL(value).pathname === url.pathname);
  if (!isPage && !asset) return;
  const key = isPage ? urls[0] : asset;
  event.respondWith((async () => {
    const cached = await (await caches.open(CACHE)).match(key);
    return cached || fetch(event.request);
  })());
});
