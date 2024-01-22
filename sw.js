self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./index.html', './assets/css/main.css','assets/css/fontawesome-all.min.css','./assets/css/noscript.css','./assets/js/breakpoints.min.js', './assets/js/browser.min.js','./assets/js/jquery.min.js','./assets/js/util.js','./assets/js/main.js','./images/aiml-community.jpeg','./images/awsbg1.png','./images/awsugkol_logo.jpeg','./images/overlay.png ','./images/awsback.jpg','./images/awsintro.png','./images/bg.jpgg','./images/pic2.jpg','./images/jan-event-24.webp','./images/pic1.jpg','./images/pic4.jpg','./images/pic3.jpg','./images/sam.jpeg','./images/ankit.jpeg']);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
