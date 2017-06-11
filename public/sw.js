const cacheList = ['./', './index.html', './icon1.png',
                    './test.js', './error.html']

self.addEventListener('install', function (event) {
    console.log(event);
    event.waitUntil(
        caches.open('app')
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cacheList);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.log("activated");
    console.log(event);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(resp) {
                caches.open('app').then(function(cache) {
                    cache.put(event.request, resp.clone())
                })
                return response;
            })
        }).catch(function() {
            return caches.match('./error.html')
        })
    )
});

console.log('hello');