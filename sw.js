/* Service Worker — Cassio (Révision CM2)
   Stratégie : "cache-first" pour un fonctionnement hors-ligne complet.
   Tous les fichiers de l'app sont mis en cache à l'installation.

   IMPORTANT — mise à jour de l'app :
   Quand tu modifies un fichier (questions, code, style), incrémente CACHE_VERSION
   ci-dessous. Cela force le service worker à reconstruire le cache avec les
   nouveaux fichiers. Sans ce changement de version, les utilisateurs déjà
   installés continueraient de voir l'ancienne version en cache. */

const CACHE_VERSION = 'cassio-v19';

/* Liste de tous les fichiers nécessaires au fonctionnement hors-ligne.
   Les chemins sont relatifs au scope du service worker (la racine de l'app). */
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './styles/main.css',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  // Données — niveau CM2
  './data/cm2/maths.js',
  './data/cm2/francais.js',
  './data/cm2/histoire.js',
  './data/cm2/sciences.js',
  './data/cm2/anglais.js',
  './data/cm2/emc.js',
  './data/cm2/svt.js',
  './data/cm2/techno.js',
  './data/cm2/physchim.js',
  './data/cm2/latin.js',
  './data/cm2/numerique.js',
  // Données — niveau 6ème (v17 : 5 matières)
  './data/6eme/maths.js',
  './data/6eme/francais.js',
  './data/6eme/histoire-geo.js',
  './data/6eme/svt.js',
  './data/6eme/anglais.js',
  './data/6eme/espagnol.js',
  // Manifest curriculum (multi-niveaux)
  './data/curriculum.js',
  // Logique
  './scripts/config.js',
  './scripts/state.js',
  './scripts/render.js',
  './scripts/app.js'
];

/* Installation : on met en cache tous les fichiers de l'app. */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()) // active immédiatement la nouvelle version
  );
});

/* Activation : on supprime les anciens caches (versions précédentes). */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim()) // prend le contrôle des pages ouvertes
  );
});

/* Interception des requêtes : on sert depuis le cache en priorité (instantané + hors-ligne).
   Si absent du cache, on va sur le réseau et on met en cache au passage.
   Ne concerne que les requêtes GET de même origine. */
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        // On ne met en cache que les réponses valides
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, clone));
        }
        return resp;
      }).catch(() => {
        // Hors-ligne et pas en cache : pour une navigation, on retombe sur index.html
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
