self.addEventListener('install', function (event) {
    console.log(event);
    event.waitUntil(
        caches.open('app')
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(['/', '/public/index.html', '/public/', '/public/test.js', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.log("activated");
    console.log(event);
});

self.addEventListener('fetch', function(event) {
    console.log('fetching data');
    
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                console.log("service worker found in cache");
                console.log(response);
                return response;
            }

            return fetch(event.request);
        })
    )
});

console.log('hello');