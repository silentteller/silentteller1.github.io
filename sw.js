const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1cf8a0eaca5951157145aa6bcb10232e",url:"./404.html"},{revision:"6a4135df9e0157c67493e84d74b13396",url:"./about/index.html"},{revision:"fea0ca5eec7cdaab9eb810d10c86506f",url:"./archives/2019/10/index.html"},{revision:"71788b0ed7e7c4124dce835b1e01a3d4",url:"./archives/2019/index.html"},{revision:"ae81c4f9c912414484affba6f9b9c9ae",url:"./archives/2020/01/index.html"},{revision:"9cfb91d7206cb76e4824a7cd3b30d07e",url:"./archives/2020/index.html"},{revision:"7418d11e28b0162e8d529e65ead67630",url:"./archives/index.html"},{revision:"bd235d6a05375f4dcc2f83ca93e131f3",url:"./categories/Handbook/index.html"},{revision:"205d6a44edd06941a61aecfebc457f66",url:"./categories/Handbook/latex/index.html"},{revision:"02553aa05bad07bb87c20357054075e4",url:"./categories/Handbook/Windows/index.html"},{revision:"a48715634a00bf1acbeacc1e0ba48b6f",url:"./categories/index.html"},{revision:"033cff462299f57255dc108634f754bc",url:"./categories/技术分享/index.html"},{revision:"c209cce1ccc4352b06fad762e210f5af",url:"./categories/技术分享/博客搭建/index.html"},{revision:"e0ef1ff77ff09ca716c4497dd870d3ce",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"02a2d05603bf1c004212477262b7494d",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"acdb8b3def033da387cbe40a95a5cd84",url:"./LaTeX搭建教程.html"},{revision:"05b58bda81e8e4dffa9507f80a16a995",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"c495654869785bc3df60216616814ad1",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"24a1cdb3a02086b5efe581296e5da569",url:"./manifest.json"},{revision:"2772bfc3b13749f46c26f4e3c4649b73",url:"./tags/GitHub/index.html"},{revision:"f1f4dcdde080343ce522f2758154c083",url:"./tags/Hexo-Blog/index.html"},{revision:"531fddd0494c2920442931ffcfc04c1d",url:"./tags/Hexo/index.html"},{revision:"fb6eb40d73d3820f2d6e63f50340632a",url:"./tags/index.html"},{revision:"d9ef02a012f67f072172ebd18978b3c4",url:"./tags/Latex安装/index.html"},{revision:"ccb73f8f60f8ab007b9a4b5359bf0f14",url:"./tags/Mist/index.html"},{revision:"26709917d60aa6989e1cc22363a138ba",url:"./tags/Next/index.html"},{revision:"67a13cef50c27c381e3685234e24a287",url:"./tags/Windows10/index.html"},{revision:"0bf32ec1af561e390b0e2ccea81e43a7",url:"./tags/博客/index.html"},{revision:"43b4ebacd543757a93544b96272cbabe",url:"./tags/端口查看/index.html"},{revision:"f7a9df7dc8fd995bfbf267f09528d3dd",url:"./Windows查看端口占用.html"},{revision:"3749a88157e3046b60928e6bb2efc897",url:"./博客优化.html"},{revision:"5f675a8957d4f0bbf82c658cf3931ffa",url:"./搭建个人博客.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();