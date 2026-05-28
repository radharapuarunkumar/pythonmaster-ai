// Service Worker for Python Master AI - Offline Mode Support
const CACHE_NAME = 'python-master-v1';
const STATIC_CACHE = 'python-master-static-v1';
const DYNAMIC_CACHE = 'python-master-dynamic-v1';

// Assets to cache for offline use
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/roadmapData.js',
  '/projectsData.js',
  '/firebase-init.js',
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, then network
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external API calls (Firebase, etc.)
  if (url.origin !== self.location.origin && 
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if available
      if (cachedResponse) {
        // Update cache in background
        fetchAndCache(event.request);
        return cachedResponse;
      }
      
      // Otherwise fetch from network
      return fetchAndCache(event.request);
    }).catch((error) => {
      console.log('[Service Worker] Fetch failed:', error);
      
      // Return offline page for navigation requests
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
      
      // Return a custom offline response
      return new Response('Offline - Content not available', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      });
    })
  );
});

// Fetch and cache response
function fetchAndCache(request) {
  return fetch(request).then((response) => {
    // Clone response to cache
    const responseToCache = response.clone();
    
    // Cache successful responses
    if (response.status === 200) {
      caches.open(DYNAMIC_CACHE).then((cache) => {
        cache.put(request, responseToCache);
      });
    }
    
    return response;
  }).catch((error) => {
    console.log('[Service Worker] Network request failed:', error);
    throw error;
  });
}

// Message event - handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// Sync event - handle background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

// Sync progress to server
async function syncProgress() {
  try {
    // Get cached progress from IndexedDB
    const cachedProgress = await getCachedProgress();
    
    // Sync to server if online
    if (cachedProgress && navigator.onLine) {
      await syncToServer(cachedProgress);
      await clearCachedProgress();
    }
  } catch (error) {
    console.error('[Service Worker] Sync failed:', error);
  }
}

// Get cached progress from IndexedDB
function getCachedProgress() {
  return new Promise((resolve, reject) => {
    // In a real implementation, use IndexedDB
    // For now, return null
    resolve(null);
  });
}

// Sync to server
async function syncToServer(progress) {
  // In a real implementation, sync to Firebase
  console.log('[Service Worker] Syncing progress to server:', progress);
}

// Clear cached progress
async function clearCachedProgress() {
  // In a real implementation, clear IndexedDB
  console.log('[Service Worker] Clearing cached progress');
}

// Push event - handle push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'You have a new notification',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/badge-72.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Python Master AI', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});
