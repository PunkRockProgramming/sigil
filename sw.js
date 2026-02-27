// Mystical Path Tools - Service Worker
// Enables offline functionality and fast loading

const CACHE_NAME = 'mystical-path-v1.8';
const OFFLINE_URL = '/offline.html';

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  
  // Core CSS
  '/css/shared-theme.css',
  '/css/expandable-card.css',
  '/css/nav-menu.css',
  '/css/print.css',
  '/css/homepage-styles.css',
  
  // Core JavaScript
  '/js/theme-manager.js',
  '/js/nav-menu.js',
  '/js/filter-utils.js',
  '/js/keyboard-nav.js',
  '/js/canvas-utils.js',
  
  // All 12 tools
  '/html/sigil-maker.html',
  '/html/moon-tracker.html',
  '/html/rune-caster.html',
  '/html/sabbat-calendar.html',
  '/html/crystal-database.html',
  '/html/herbal-database.html',
  '/html/meditation-timer.html',
  '/html/spell-builder.html',
  '/html/numerology-calculator.html',
  '/html/affirmation-generator.html',
  '/html/pendulum-tool.html',
  '/html/witchy-weather.html',
  '/html/altar-setup.html',
  '/html/candle-magic.html',
  '/html/angel-numbers.html',
  '/html/retrograde-tracker.html',
  '/html/correspondence-lookup.html',
  '/html/daily-dashboard.html',

  // Tool-specific CSS
  '/css/sigil-styles.css',
  '/css/moon-styles.css',
  '/css/rune-styles.css',
  '/css/sabbat-styles.css',
  '/css/crystal-styles.css',
  '/css/herbal-styles.css',
  '/css/meditation-timer-styles.css',
  '/css/spell-styles.css',
  '/css/numerology-styles.css',
  '/css/affirmation-styles.css',
  '/css/pendulum-styles.css',
  '/css/weather-styles.css',
  '/css/altar-styles.css',
  '/css/candle-magic-styles.css',
  '/css/angel-numbers-styles.css',
  '/css/retrograde-styles.css',
  '/css/correspondence-styles.css',
  '/css/dashboard-styles.css',

  // Tool-specific JavaScript
  '/js/sigil-script.js',
  '/js/moon-script.js',
  '/js/rune-script.js',
  '/js/sabbat-script.js',
  '/js/crystal-script.js',
  '/js/herbal-script.js',
  '/js/meditation-timer-script.js',
  '/js/spell-builder-script.js',
  '/js/numerology-script.js',
  '/js/affirmation-script.js',
  '/js/pendulum-script.js',
  '/js/weather-script.js',
  '/js/altar-script.js',
  '/js/candle-magic-script.js',
  '/js/angel-numbers-script.js',
  '/js/retrograde-script.js',
  '/js/correspondence-data.js',
  '/js/correspondence-script.js',
  '/js/homepage-search.js',
  '/js/dashboard-script.js',

  // Manifest
  '/manifest.json'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Precaching app shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request)
            .then((response) => {
              return response || caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // Cache-first strategy for all other requests
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }
        
        // Not in cache - fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Cache the fetched resource
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Network failed - return offline page for HTML requests
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});

// Background sync for future use (Weather API updates, etc.)
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync:', event.tag);
  
  if (event.tag === 'sync-weather') {
    event.waitUntil(
      // Future: sync weather data when back online
      Promise.resolve()
    );
  }
});

// Push notifications for future use (moon phase alerts, sabbat reminders)
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New mystical insights await',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'mystical-path-notification',
    requireInteraction: false
  };
  
  event.waitUntil(
    self.registration.showNotification('Mystical Path Tools', options)
  );
});
