self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./index.html', './assets/css/main.css','assets/css/fontawesome-all.min.css','./assets/css/noscript.css','./assets/js/breakpoints.min.js', './assets/js/browser.min.js','./assets/js/jquery.min.js','./assets/js/util.js','./assets/js/main.js','./images/aiml-community.jpeg','./images/awsbg1.png','./images/awsugkol_logo.jpeg','./images/overlay.png ','./images/awsback.jpg','./images/awsintro.png','./images/bg.jpgg','./images/pic2.jpg','./images/jan-event-24.webp','./images/pic1.jpg','./images/pic4.jpg','./images/pic3.jpg','./images/sam.jpeg','./images/ankit.jpeg','./images/event3.jpg',
        'images/pic5.webp','images/pic6.jpg','images/pic7.png','images/pic8.jpg','images/pic9.jpg','images/pic10.jpg','images/pic11.jpg','images/pci12.jpg','images/pic13.jpg','images/pic14.jpg','images/pic15.jpg','images/pic16.jpg','images/pic17.jpg','images/pic18.jpg','images/pic19.jpg','images/pic20.jpg','images/pic21.jpg','images/pic22.jpg','images/pic23.jpg','images/pic24.jpg','images/pic25.jpg,','images/awschapter.png']);
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
