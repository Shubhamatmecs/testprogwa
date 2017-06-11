const cacheList = ['/', '/public/index.html', '/public/icon1.png',
                    '/public/', '/public/test.js', '/public/error.html',
                    'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']

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
            return caches.match('/public/error.html')
        })
    )
});

console.log('hello');