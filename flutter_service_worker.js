'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assest/files/syllabus/civil/1civil.pdf": "6ba189ee565fe474aab2a7d72abb3332",
"assets/assest/files/syllabus/civil/2civil.pdf": "8e5a4501a4f73202070256fe71261642",
"assets/assest/files/syllabus/civil/3civil.pdf": "265ea7cfcbab4bbd1d0c28e7ff9a6d63",
"assets/assest/files/syllabus/civil/4civil.pdf": "e171a37c67070c6667fb486da4b9b575",
"assets/assest/files/syllabus/civil/5civil.pdf": "ed77ac68c1b062519bfc77fd4644e09a",
"assets/assest/files/syllabus/civil/6civil.pdf": "624c45b7621397180bfccc3876889bb5",
"assets/assest/files/syllabus/civil/7civil.pdf": "8711abebb55e63221c74762b33c07d29",
"assets/assest/files/syllabus/civil/8civil.pdf": "d84298b06c98f00abeea15f59e80df9c",
"assets/assest/files/syllabus/computer/1syllabus.pdf": "c34b9b9e7548ecba3dfa82e528a343b8",
"assets/assest/files/syllabus/computer/2syllabus.pdf": "6e519b657fe4cbfe27016a23002f4bd4",
"assets/assest/files/syllabus/computer/3syllabus.pdf": "29e9a3af0de4c5599960c3e9ebab1cdb",
"assets/assest/files/syllabus/computer/4syllabus.pdf": "699ca5d7ca28cdbfa028d58bed2b27ef",
"assets/assest/files/syllabus/computer/5syllabus.pdf": "3c9bb3d898cfd290f7f685809ceeb478",
"assets/assest/files/syllabus/computer/6syllabus.pdf": "1a68f305655b9b045854c92df4b69162",
"assets/assest/files/syllabus/computer/7syllabus.pdf": "2e2117fcded20f65915a137071a83015",
"assets/assest/files/syllabus/computer/8syllabus.pdf": "ef11e133019c1893f0539819754c955f",
"assets/assest/files/syllabus/electrical/3electrical.pdf": "fea02dc7bbcfd5256ca72e01217f08c6",
"assets/assest/files/syllabus/electrical/4electrical.pdf": "fefca3ea5c9ac89e2037abefc4b49f85",
"assets/assest/files/syllabus/electrical/5electrical.pdf": "27b97c25780b94a2dc8c5d71593256ba",
"assets/assest/files/syllabus/electrical/6electrical.pdf": "7ae4566a2be761c9aecd93aa6e6a5993",
"assets/assest/files/syllabus/electrical/7electrical.pdf": "e7983f89489f22d480a4eb26e68118a3",
"assets/assest/files/syllabus/electrical/8electrical.pdf": "0bc044b5ae3e96aa06ff9b5944430787",
"assets/assest/files/syllabus/electronics/3electronics.pdf": "4ae7ca7bf4ba91d6f2407d290837f05a",
"assets/assest/files/syllabus/electronics/4electronics.pdf": "e69e274ecd053b962376f1057031ee94",
"assets/assest/files/syllabus/electronics/5electronics.pdf": "ec5061f76d7cdf65b7ed437d2bf0457f",
"assets/assest/files/syllabus/electronics/6electronics.pdf": "448030c2ee69dcaafe17e580b301f2fe",
"assets/assest/files/syllabus/electronics/7electronics.pdf": "b1b4c5b7e0813df84f3b7f665a8f37a6",
"assets/assest/files/syllabus/electronics/8electronics.pdf": "fc863b762d476fe182288ff0bd813493",
"assets/assest/img/Civil.png": "6f2297f3aa9ee3dcd0af9bfd67e377c3",
"assets/assest/img/Computer.png": "21ccc51e55ed5456b229d09b5f463794",
"assets/assest/img/Electrical.png": "474a3f5fb861f8e2edb503c6996f9f03",
"assets/assest/img/Electronics.png": "ee21c9b85f9bd36353f722876c5e711e",
"assets/assest/img/Logo.png": "7c4bc1da2af2d4f2501013fc52485739",
"assets/assest/img/manjil.jpg": "e0bd33a9ada7e5765981e9a044c14f6f",
"assets/AssetManifest.json": "34210c14e942b54a010982e07f9cda1d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "39638bdce22f7284e8c9e02d48f155f2",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f13a203d267fa27fa8def5fbed6b4af",
"/": "1f13a203d267fa27fa8def5fbed6b4af",
"main.dart.js": "1f1e8c4714c412bb830b9daced5b7dda",
"manifest.json": "896a28f7d296d8e7ed620ff60ef411c0",
"version.json": "2841ad0d6083f39cb2c8bf52e9f40d80"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
