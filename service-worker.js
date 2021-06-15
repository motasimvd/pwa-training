const todoApp = "todo-app-v1"
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/css/bootstrap.min.css",
    "/js/index.js",
    "/js/app.js",
    "/images/icon-192.png",
    "/images/icon-512.png",
    "https://unpkg.com/react@17/umd/react.development.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.development.js"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(todoApp).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
