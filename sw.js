/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","650bbad4dfe7e2ec44cce104a4cd2812"],["/WriteUp/index.html","80b78e34ab004b21a0b48af17c392d68"],["/archives/2024/09/index.html","17400599118055aa02a082733acc8ba1"],["/archives/2024/index.html","8530275ba66f45ca65e66600825d53bf"],["/archives/2025/06/index.html","faeb3dacf646898a66a1bff5e77bf31a"],["/archives/2025/07/index.html","fd7c2b5dc2f2bd7f09659a4214080ca3"],["/archives/2025/08/index.html","a72026d14f854a6c4dd756b2860736b5"],["/archives/2025/09/index.html","c8c43cf3c1ae0df945e63b3518bcb754"],["/archives/2025/10/index.html","9bcf37dcb9da074f9281397657890159"],["/archives/2025/index.html","a82d5fe6f317a39df06694ba2f939dc6"],["/archives/2025/page/2/index.html","5b7254f5015b0eb6578795e8ac8b20d7"],["/archives/2025/page/3/index.html","7dfdeb06d53d99700e1f4226d740f38c"],["/archives/index.html","331afd261cdc64fd7bfe6f3d89d395dc"],["/archives/page/2/index.html","09fcfa5b992df53bd5d9b1cb07f89ce2"],["/archives/page/3/index.html","27a1e236328cc06ed13d19760f12c9f8"],["/categories/WriteUp/index.html","892dfd4b9afe83fb48c1432bd6711031"],["/categories/index.html","25fc57501cbc43f6f4d5078c09ba7c5a"],["/categories/web安全/index.html","c13bc0ed27fc0c9a9ec47d678a9ed481"],["/categories/开发/index.html","3f07fb0937a2a815c70bc5894b79ca17"],["/categories/网络安全/index.html","de1bce5b2f130ac9df406bd17ce645ba"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/background.png","bf30218c452c2f749d01c644053fe661"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/index.html","054ac78e7ad27ed51b87ba5fe4355b72"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","3f10d44d40480c153c65876144884df1"],["/page/2/index.html","3fec206cf8639c95119d51437a22a847"],["/page/3/index.html","0ff59db2a81cc2d7e7cbb852a22704c0"],["/posts/15cede88/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/posts/15cede88/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/posts/15cede88/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/posts/15cede88/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/posts/15cede88/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/posts/15cede88/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/posts/15cede88/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/posts/15cede88/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/posts/15cede88/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/posts/15cede88/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/posts/15cede88/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/posts/15cede88/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/posts/15cede88/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/posts/15cede88/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/posts/15cede88/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/posts/15cede88/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/posts/15cede88/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/posts/15cede88/index.html","6b463e153acdb42b92b062c42f4ef47f"],["/posts/2bf21027/index.html","895b64a2cb590f8e293be919edd3845b"],["/posts/2dff4083/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/posts/2dff4083/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/index.html","049c6ceb3b2a9158f04987a98e6ef5be"],["/posts/39c6ae33/index.html","3bd777bb009471bcf78fbf0c86425f09"],["/posts/3b86160f/index.html","21e9dd690ca85221f989e6e52e69ce46"],["/posts/3e0906bb/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/posts/3e0906bb/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/posts/3e0906bb/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/posts/3e0906bb/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/posts/3e0906bb/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/posts/3e0906bb/index.html","23c4933950d8d1c6fd0e9cdcb4d33f80"],["/posts/4278955b/index.html","4ca79de1935f50a7ca4b804fd747f993"],["/posts/430d67de/index.html","3411b4d2761f2692c4706fd96296681c"],["/posts/483d9cef/index.html","dddb44b52771599a17fcd76c68fc4629"],["/posts/5fe44501/index.html","f26c108ca65f9af90cae4ee85b69c626"],["/posts/6a2b5ddf/index.html","4b82090131320ad74f6a6b390a0c4afd"],["/posts/83c1bda7/index.html","700a86e0b2832f848705de1e4da0213a"],["/posts/879a70bf/index.html","99da49c39f3a65d48f5ea967689e7475"],["/posts/90b3b820/index.html","6a9e1c673b472d01689ce3e32cb78268"],["/posts/98d7f58f/index.html","ac24ca0ab8128cbd95ba691aca21cbc1"],["/posts/9f0e9b52/index.html","2d14dbc38cc2bda36016c109adb19e33"],["/posts/9f9af3f5/index.html","00451e4d7f6f07b76e26212576a063e1"],["/posts/afe38b32/index.html","4b85efec8baa566878d345d5cced7346"],["/posts/b710732f/index.html","3dc629e80bfac854c207a9cb2315c23c"],["/posts/bcdf8f30/index.html","5c634d85db9a9c1838e365de36307453"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/index.html","c0c10b3c2241087a7fe2686aebe29d12"],["/posts/db284c9b/index.html","2f727c33490299a1a8370b47e53834ab"],["/posts/df8caf15/index.html","d10e79245e23f24190e8b1e7eb48cc77"],["/posts/f6aaed80/index.html","39af96bd833713beeff30ad614ea59ff"],["/posts/faa6e9cf/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/posts/faa6e9cf/index.html","2994cc5ff461a420c7aa44e25cf8ba5b"],["/sw-register.js","905f3b15ec5fbb6420f65b74a9331d4c"],["/tags/C/index.html","9fe155c9ca0a852e61673a7dc489342a"],["/tags/CTF/index.html","78624b4be32350f2a882e88e25cbc3ec"],["/tags/Django/index.html","e17e2916f4bda7fd696151556382e730"],["/tags/Flask/index.html","f5977786844ca953b2ddb82df5761707"],["/tags/MISC/index.html","7ffd9b36d084238ac419a547e416ea3d"],["/tags/Mysql/index.html","f85bfc493c1943b71874f88333f2c15e"],["/tags/PWN/index.html","7699012b33fc4cb788025246ffcb9670"],["/tags/Python/index.html","b78dc53c598c13f461da26339d63e05d"],["/tags/SQL注入/index.html","33b63a9220aaaec7dfe74eb45b029774"],["/tags/STL/index.html","eb4cd545aa7ac26907ee7f2b9b453beb"],["/tags/WriteUp/index.html","c1007d2d4bce89f2ebb553b0fcb1dc0d"],["/tags/index.html","3c43757165340cf8d7ced0238aca14a0"],["/tags/jsonp/index.html","2fa9b39b30816b1634c7649b57c244cf"],["/tags/php/index.html","05936667ca074c036723eed06393cd41"],["/tags/ssti/index.html","5edc5ea2f113a6d333c01803a7234541"],["/tags/web/index.html","0167b813fc4fb7e6b9e891a099e822d7"],["/tags/webshell/index.html","437be9595093b54b3bb1deff587197b4"],["/tags/web安全/index.html","da386ceef0fb2a8d305b4cdfe4704efb"],["/tags/xss/index.html","80bf7e6d6fdf105eca765310131d70d0"],["/tags/代码审计/index.html","bcd17f81e51456fae479312676b6081e"],["/tags/前端/index.html","87d17194d36666ff7c92f8a83f7a5a64"],["/tags/反序列化/index.html","a2cf3a841a8c83bfb707dc0a51234cb8"],["/tags/同源策略/index.html","8da991c735ffade055b00f45716f3590"],["/tags/命令执行/index.html","21b1129ed597c642b8f6ea99f502c02a"],["/tags/开发/index.html","bd0f5dec9c1441695a1a24fe59c3e674"],["/tags/数据结构/index.html","e11644f695d41d6e861342d05c595617"],["/tags/杂记/index.html","1dd21c6f8fd238de0e15b34329edb2ad"],["/tags/算法/index.html","1ef0c116f18c32242fc9f9042e26bb4d"],["/tags/网络安全/index.html","e838c7d9999d70ddbf69fbfbcafffe92"]];
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
