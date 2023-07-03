'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "6069dd58063a5689f91d816b9105d4ab",
"assets/assets/data/ancient_gods.json": "b7db30452ff75f422041e956f6467b16",
"assets/assets/data/pharaohs.json": "05c271f69a44e82152a349bb4609572f",
"assets/assets/images/militry.jpg": "54d95b6b7760d199bb879d80d0680abb",
"assets/assets/images/sekhmet.jpg": "44f434fb1d34fa4dfc4ffaf23f2a0261",
"assets/assets/images/sun.jpg": "5de262cd908f59a6707e129a51ef5954",
"assets/assets/images/Set.png": "f7b89be4f925fe783bfab5e4817d7ecb",
"assets/assets/images/magic.png": "515c85f8bed7d1ea154abdef2162ad0a",
"assets/assets/images/Nefertiti.png": "06ade367ee10467ffe24204acb65fa31",
"assets/assets/images/death.png": "19bbdbca78f4f33d513887cdd8d74beb",
"assets/assets/images/horus.png": "80978b67d4c18a1eb74a9c3328e52288",
"assets/assets/images/sunny.png": "782c0c0f8d97ef03d5294850253b34ec",
"assets/assets/images/power.png": "c6e662227f85641ec7ac659c72a9ae7d",
"assets/assets/images/nilegiftIcon.png": "ab14968b61ae928073d20fe5c266e285",
"assets/assets/images/fci_en.png": "2bc78bbcd72a0c7cc5f9420f504524c5",
"assets/assets/images/desert.png": "cbbfb1e92f47e1ceb1f3dc7069371640",
"assets/assets/images/uni_en.png": "925c8e55a1045672166d7300277d73d8",
"assets/assets/images/sky.png": "1d69843c13a1154fcf9586977352b961",
"assets/assets/images/khufu.png": "a222dc90ea83298751bafc0555d705a7",
"assets/assets/images/ramsesii.png": "c57b782b5668fea48162711f43b8a16f",
"assets/assets/images/medicine.png": "c203a95a6457f67b291dd3972e558b0b",
"assets/assets/images/fertilizer.png": "a1ed5458638cdb42cdbb16d7086a60df",
"assets/assets/images/croco.png": "afcf10d2572e62e42ffe2e6408d1f504",
"assets/assets/images/storm.png": "5ddbae2282bb4c72f3ac2ae122c200f4",
"assets/assets/images/Akhenaton.png": "74cbe176157f9484659d338016e0c3a7",
"assets/assets/images/violent.png": "55b139ed9cef5572b7f6f35e6d2d0fb1",
"assets/assets/images/isis.png": "d8b0b834df6ec824e4f0177a78774904",
"assets/assets/images/swords.png": "c822995bc205f289295fc6e13711f96d",
"assets/assets/images/fire.png": "59e32081e759efd7b7557e82ec09aef3",
"assets/assets/images/ramsesiii.png": "3ba196b95d11f2e0f0e7e60b92bf9c61",
"assets/assets/images/crocodile.png": "2ccfeef01ff875b5f2ebc061d223ef05",
"assets/assets/images/crops.png": "d3e1681d4e8dee83c006d850229845bc",
"assets/assets/images/moon.png": "a3116fa3225b91cafe3a88dba64e5c6b",
"assets/assets/images/heroBackground.jpg": "585720d4a0a14199e20ffd1f129beedc",
"assets/assets/images/king_tut.png": "1d6d66be8b43261750c6d623b04dabd5",
"assets/assets/images/tombstone.png": "38eab8c3037e33208b3cb47c3c062d5a",
"assets/assets/images/evil.png": "52ba0c816e19859ad361ae12e8237dca",
"assets/assets/images/background.png": "9fce6b8a5fb24d650fd4f656c9758b67",
"assets/assets/images/anubis.png": "c512d456bc7671d0be0c830569ff3a30",
"assets/assets/images/pyramids.png": "d88cb827545228be5c86acd5618c58fd",
"assets/assets/images/amenhotep_iii.png": "f0f9c8b18c516f8a687587c2ea023add",
"assets/assets/images/hatsh.png": "c96514a70164262aaa57cca17b86bae6",
"assets/assets/images/logo-gray-wide.png": "329146fef6e0e9529df8581bc45c9311",
"assets/assets/images/heartbeat.png": "299a79be43c083e93d6ad1fea68f8351",
"assets/assets/images/Khafra.png": "b682111088ac5cacdef2895a00a8d4a9",
"assets/assets/images/ThutmoseIII.png": "ccc3ac27782637881154c9f18f17ca70",
"assets/assets/images/crown.png": "48e09feea1579ba9aaec39e0e028b2c3",
"assets/assets/images/envy.png": "19b2ae0f932ad413a5b1bef873dba75c",
"assets/assets/images/cloudy.png": "1d69843c13a1154fcf9586977352b961",
"assets/assets/animation/reaction_love.flr": "9e67c9fbb8e8cb097f88467f88731cd6",
"assets/assets/animation/pharoh.flr": "d0bfe91e4d4ae506c2e2f2d44710d9a9",
"assets/assets/animation/cat.flr": "a01ec146ff187145e7399cfddae04daf",
"assets/assets/animation/egyptian_letters.flr": "2a25e95e398b533c4b697bdff17ca39f",
"assets/assets/animation/bug.flr": "8b5a8548ceef21e53eed20075128b3f3",
"assets/assets/animation/Ra.flr": "29107f15fc9cf5cac6b3e1678458c90f",
"assets/assets/animation/Judge.flr": "3c1a14ec504d3cd07a0b0a839af65109",
"assets/assets/animation/favorite_icon.flr": "2c1426c212ddc69741ec3ba6311eeb41",
"assets/assets/fonts/AncientEgyptianHieroglyphs.otf": "cb5fd06a5413094f6a634b4867779a3a",
"assets/assets/fonts/Pacifico-Regular.ttf": "c1a28478f7a0cc5e25bb395d0543274d",
"assets/assets/fonts/Righteous-Regular.ttf": "77fa00996ecb4104c7880b8749c7c4e0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a7fad3dfc19d19b0f49c35f52d7eeeca",
"assets/AssetManifest.json": "b1490f900d2fe512bd5b09a270bbff03",
"assets/FontManifest.json": "ad72a789e1de3cd4282f304ab98bcbd7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/fonts/MaterialIcons-Regular.otf": "1adb39a268c88011fe75edc56952adb4",
"index.html": "53640e2262fb5a1d8e7c4eaaf4c3c266",
"/": "53640e2262fb5a1d8e7c4eaaf4c3c266",
"main.dart.js": "3414f20b6ca1e5b8270677a59e41def9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "3b57c15bf2f7dfd7ee6befd64475d9f2",
"manifest.json": "e27dc54cf70f4e20aabdfa732892fd4a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "54a6f167eb8713f3b17c66ddea0c5cde",
"icons/Icon-maskable-192.png": "f7a712f5ca0102d388d8077ad61472e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "ef4fdce83df024f96cdef4b2b716cdee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
