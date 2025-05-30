'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "bafd5fd38bd5bb4b2bc26da56af07752",
"/": "bafd5fd38bd5bb4b2bc26da56af07752",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"assets/FontManifest.json": "eedddda1106c57b8ecbbbdcc43e31ded",
"assets/fonts/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/fonts/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/fonts/MaterialIcons-Regular.otf": "9e903fc10547bfe64363af658361b778",
"assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/fonts/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/AssetManifest.bin.json": "0c31372f8c0447ff2310d24ca00c0fe0",
"assets/assets/images/Bianco.svg": "a385f0805ed4eb6283d976c1b2b55a07",
"assets/assets/images/Rosso.svg.vec": "6ed0e8b6737c87291904aa04427aedbb",
"assets/assets/images/Pasta.svg.vec": "28db2685ba48490628f009fa0e16b8a3",
"assets/assets/images/Frizzante.svg": "9bec95ad8fd83b9795c618f4f4e5518b",
"assets/assets/images/Carne.svg.vec": "3ec6b300afcd6d3d295ee56a7f1b0265",
"assets/assets/images/Insalata.svg.vec": "f2caad79eb134e0f2421c09ecd3691fd",
"assets/assets/images/Frizzante.svg.vec": "4dc4c82a40eb5a70560d44c82948ceb6",
"assets/assets/images/Bianco.svg.vec": "be393b581298e74475700d0d43bc4ae9",
"assets/assets/images/Rosso.svg": "075e13d5f4c9d18390e5b2825d880d0e",
"assets/assets/images/Rosato.svg": "c53700fca9f8b0f556cb69a49e3bf669",
"assets/assets/images/Rosato.svg.vec": "ce32d7b8649b47b653682ed368e9d0f4",
"assets/assets/images/Insalata.svg": "91faa586dc2eb538329910a0af1a528a",
"assets/assets/images/Carne.svg": "905733940d21ab8f294cc0d745fcf122",
"assets/assets/images/Pasta.svg": "7df07791a49fbd7942ed48b6aad8dbd7",
"assets/AssetManifest.bin": "fd5abe82dacc04c25cc50ef8327dc0d9",
"assets/NOTICES": "eb2d8acae119e67fe52868a0cd71aacf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "045db16df5acc0490d6bab8db2d04900",
"version.json": "a398af950d33fea50d41e00795f515df",
"icons/Icon-512.png": "e848ecec5d4e175b69cd4a5b92088c13",
"icons/Icon-maskable-192.png": "fffb24b7ace34ed9468fb18d97a45c4f",
"icons/apple-touch-icon.png": "1a6f0ce0f21c83422550cf5073de284a",
"icons/Icon-maskable-512.png": "957344b05b454f7b0161b98ccc57fd20",
"icons/Icon-192.png": "9db5be6f8a1bdd4a1f6306d9a787d96e",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"favicon.ico": "24e06b7c15a4e58e19248355a1fe96c1",
"manifest.json": "7b3c33aad5452cb79dd17a49f636764f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"screenshots/5.png": "75d986520be7573b20edcde5b970ce11",
"screenshots/3.png": "d45c1de7ee3c6a8336ca4f98f0e3d29a",
"screenshots/1.png": "34819ed8bcf197567a6796f9f4295e37",
"screenshots/4.png": "f55971a56ce6b76d6250043ebed29dc8",
"screenshots/2.png": "f9679ae913e42045452827e854c9352b",
"screenshots/6.png": "1f5b0eeed7a6d630e936db4b20ba5dcc",
"screenshots/7.png": "7ff3eb8dd066ade1fbb7c81c579bd118",
"main.dart.js": "070588e9fd28cbd7d6eb9518ff3806f3",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
