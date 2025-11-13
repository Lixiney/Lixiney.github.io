/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7479e50086c3caeccb236924f623403a"],["/WriteUp/index.html","12a470daee84ca94a151b339399dfb3b"],["/archives/2024/09/index.html","b976b45c28f2b2a3956e742a7c57d4b7"],["/archives/2024/index.html","d326df300e0565179f85c37ef6426bd0"],["/archives/2025/06/index.html","61a42fb9f38af0006d7af42d3d5718a4"],["/archives/2025/07/index.html","a798adf9d44f0309662a591e9e13d9ac"],["/archives/2025/08/index.html","8bd4eee967c777c5a2a275026458d602"],["/archives/2025/09/index.html","e10d20613ca6676aefe292f7d0072ee8"],["/archives/2025/10/index.html","17d4b4c2035c3e4415bc696a775ae593"],["/archives/2025/11/index.html","a08f1e469afd71018f6a4162f3903a30"],["/archives/2025/index.html","8c80b6f6921868b320f2111cf1c0ab73"],["/archives/2025/page/2/index.html","21206afae8315bf0f7cb1e21862f1c9f"],["/archives/2025/page/3/index.html","f463562931473134b12cf58788258489"],["/archives/index.html","7dbafc0d0ed817de3f2cc997ddada21b"],["/archives/page/2/index.html","ad131600435064921336f497190addb5"],["/archives/page/3/index.html","a6016ae448a17a55c019403d27de9ca2"],["/categories/WriteUp/index.html","75f39f2e27d1233dd98edf41df6977b1"],["/categories/index.html","b12c25df07137154b15bcebf3980cb32"],["/categories/web安全/index.html","c34e1f5dce9c7b9b063ae1a1297dbcb7"],["/categories/开发/index.html","c3c4a28f86bbd7b128dcca724c35863d"],["/categories/网络安全/index.html","42ccd43cb2d883a655826abda60c5cc9"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/background.png","bf30218c452c2f749d01c644053fe661"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/index.html","9dce162faf34c529b6e39b21713f9b1a"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","21762c914fdb6625e1fddac227e059cc"],["/page/2/index.html","a05e828ef4e7ac9b54912397a9c82775"],["/page/3/index.html","80db6221ca2216ef2fed98d98ce5e1ee"],["/posts/15cede88/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/posts/15cede88/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/posts/15cede88/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/posts/15cede88/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/posts/15cede88/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/posts/15cede88/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/posts/15cede88/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/posts/15cede88/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/posts/15cede88/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/posts/15cede88/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/posts/15cede88/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/posts/15cede88/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/posts/15cede88/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/posts/15cede88/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/posts/15cede88/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/posts/15cede88/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/posts/15cede88/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/posts/15cede88/index.html","b3653c3c1e5fe46a883b150befefe8b5"],["/posts/213f8363/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/posts/213f8363/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/posts/213f8363/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/posts/213f8363/index.html","3bd03505402a265b141a7a939e8a8744"],["/posts/2bf21027/index.html","093f199b603d5bc21d30da83c92c0db1"],["/posts/2dff4083/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/posts/2dff4083/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/index.html","bdf1baeb4e7b2820e95c3d3777b29451"],["/posts/39c6ae33/index.html","9127e8b7024042e472cdf3f486689192"],["/posts/3b86160f/index.html","ccb54c2b3986b897d8753fb518d2f8e0"],["/posts/3e0906bb/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/posts/3e0906bb/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/posts/3e0906bb/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/posts/3e0906bb/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/posts/3e0906bb/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/posts/3e0906bb/index.html","053030e6c9ed419017f784d35e9ce269"],["/posts/4278955b/index.html","2196bf46b5296da5b31adf4d21d49e3d"],["/posts/430d67de/index.html","f58767241f047baedef9c30081aeac48"],["/posts/483d9cef/index.html","53d464aad8958414b9c9d504c360c169"],["/posts/5fe44501/index.html","9248daec30876b22941f879cf5b0fcfc"],["/posts/6a2b5ddf/index.html","925b9c0c10ead2227c1f5b0fe9ad7d8f"],["/posts/83c1bda7/index.html","ffc8ce2256f0aeea3b8bd642652f2c79"],["/posts/879a70bf/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/posts/879a70bf/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/posts/879a70bf/index.html","16e19af065de0d16e681ffe85ddacf6c"],["/posts/90b3b820/index.html","734a3656fef303b07f61f5e10e4a7ead"],["/posts/98d7f58f/index.html","161f61a803b29faab87a81ceb40fa581"],["/posts/9f0e9b52/index.html","d12fbdd5856ae458b3310d731659eebd"],["/posts/9f9af3f5/index.html","70489fc18ca6a10fe2d6272da0d23330"],["/posts/afe38b32/index.html","ff0ddda101510725276d8b0c7afc6a4f"],["/posts/b710732f/index.html","3dfb027692f48663a719fc5e2b08acec"],["/posts/bcdf8f30/index.html","aabefce6c932ebcc37e979d84d9e3765"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/posts/d708c66/index.html","3bff71d2528e775ccba62b7abf5183ad"],["/posts/db284c9b/index.html","6e362a61f230078876a76c72428364b6"],["/posts/df8caf15/index.html","edd1ad4f9063f2a6ae3990ff028c8e80"],["/posts/f6aaed80/index.html","5d4fda397feecbfa3430caa0d2af7653"],["/posts/faa6e9cf/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/posts/faa6e9cf/index.html","d2c1bfd46d5f4ea669498346ac979ec5"],["/sw-register.js","ab768f0abd54880466089f36d8d9c522"],["/tags/C/index.html","60b8a2f83028572ac260066f7da5de51"],["/tags/CTF/index.html","947a87c4456cb7490ebfd61f1042d754"],["/tags/Django/index.html","59076bd358086f58fed1188f739e411f"],["/tags/Flask/index.html","cd9a078397fb9fa1ad8f5fd511c8de90"],["/tags/MISC/index.html","cd2f76d4360bbb28098c47b6bd6d4087"],["/tags/Mysql/index.html","9ebedc6a1d1175b3e3377a1160cbf1cc"],["/tags/PHP/index.html","2e7063f3febe4054d524b44f5417c72b"],["/tags/PWN/index.html","613039766b0a4737ffe20da29efeac4f"],["/tags/Python/index.html","9cdf1125c038ed36985598c0d22a4381"],["/tags/SQL注入/index.html","48a147db813358c4d925e8d7b356b7ad"],["/tags/STL/index.html","44e98f6be538f46a404afa7666305d16"],["/tags/WriteUp/index.html","1ec649742b72b9734a0713dd7e8e4fb1"],["/tags/index.html","939f961829cfcb9904e70f93820ead02"],["/tags/jsonp/index.html","1b1a32eec0ab5027a3581c133d35a486"],["/tags/ssti/index.html","b7267a8edc560c158490d362a250ef39"],["/tags/web/index.html","e88441c5207c62bfb82d44cff470c53e"],["/tags/webshell/index.html","12c02ce2b1f91ac48ac78cfd28574315"],["/tags/web安全/index.html","4857ca4edbbc4beef6eebf522e084794"],["/tags/xss/index.html","06fd5d58e8d38aed0017641793b032c0"],["/tags/代码审计/index.html","5e866a3ddf21dc65a8710d013c5127c5"],["/tags/前端/index.html","d4bac0fc61e3179a891b6222bf06ff6f"],["/tags/反序列化/index.html","62725066e352093665c0bba221399177"],["/tags/同源策略/index.html","a2f6b743fec6ee3c13624db322c00c4a"],["/tags/命令执行/index.html","86b971658b15b54f008659826ca0c1d4"],["/tags/开发/index.html","8c04ec4f713e3d16862dd372057c46c5"],["/tags/数据结构/index.html","2cdd2237c2af6e75dd4b286b05deadeb"],["/tags/杂记/index.html","11730439c2d223b9d2b4e660db8d8f4c"],["/tags/算法/index.html","b0aa5a3e7edf8c7d5d0160978d788cce"],["/tags/网络安全/index.html","f46d2fc05fb2bbfd29b992e25efa7484"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
