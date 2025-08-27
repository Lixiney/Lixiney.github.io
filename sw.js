/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","650bbad4dfe7e2ec44cce104a4cd2812"],["/WriteUp/index.html","80b78e34ab004b21a0b48af17c392d68"],["/archives/2024/09/index.html","a26e94507e76785ea9d904ac931b2c76"],["/archives/2024/index.html","21db82de2800a6603ca79aa071e01d19"],["/archives/2025/06/index.html","332e79b7f97065bf0f5dfc0879a5bf4a"],["/archives/2025/07/index.html","e7490b1d93965dd7cb631ae2fc3ea650"],["/archives/2025/08/index.html","7be9ceae64413e8dfd1610cab722a48a"],["/archives/2025/index.html","1311083c2e68c9cd815195f6b04a7e3e"],["/archives/2025/page/2/index.html","007b0f5fe8e6b597b09ffbc1642bca0c"],["/archives/index.html","6cf72a60ada923b1fe5d635eb20fa874"],["/archives/page/2/index.html","d5d7672bef67241a6e257f2a3a62ed64"],["/archives/page/3/index.html","23e127b299115ccd170a195dfacc186d"],["/categories/WriteUp/index.html","892dfd4b9afe83fb48c1432bd6711031"],["/categories/index.html","aff2164e2d791ffba657467660ee595b"],["/categories/web安全/index.html","c13bc0ed27fc0c9a9ec47d678a9ed481"],["/categories/开发/index.html","ffc3b27e5b235db175f2519fe9e0c139"],["/categories/网络安全/index.html","c8149ec9f59baf32d1afaebb3fc8347f"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/background.png","bf30218c452c2f749d01c644053fe661"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/index.html","0188c95ec726f4f61278b408b35e063e"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","3f10d44d40480c153c65876144884df1"],["/page/2/index.html","0012a647b81d07e03b543107ee09c5a6"],["/page/3/index.html","a16f5ea433ab0761193e940d38b09f2a"],["/posts/2bf21027/index.html","895b64a2cb590f8e293be919edd3845b"],["/posts/2dff4083/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/posts/2dff4083/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/index.html","049c6ceb3b2a9158f04987a98e6ef5be"],["/posts/3b86160f/index.html","21e9dd690ca85221f989e6e52e69ce46"],["/posts/4278955b/index.html","4ca79de1935f50a7ca4b804fd747f993"],["/posts/430d67de/index.html","fc40096f538e8ffb545bdfdfe270f7b5"],["/posts/483d9cef/index.html","dddb44b52771599a17fcd76c68fc4629"],["/posts/5fe44501/index.html","0007d5eb2b4a45bab7fe7d953ea971fc"],["/posts/6a2b5ddf/index.html","4b82090131320ad74f6a6b390a0c4afd"],["/posts/83c1bda7/index.html","700a86e0b2832f848705de1e4da0213a"],["/posts/879a70bf/index.html","99da49c39f3a65d48f5ea967689e7475"],["/posts/90b3b820/index.html","59e8082ee82d43a28e63f4c495b07504"],["/posts/98d7f58f/index.html","ac24ca0ab8128cbd95ba691aca21cbc1"],["/posts/9f0e9b52/index.html","2d14dbc38cc2bda36016c109adb19e33"],["/posts/9f9af3f5/index.html","00451e4d7f6f07b76e26212576a063e1"],["/posts/afe38b32/index.html","4b85efec8baa566878d345d5cced7346"],["/posts/b710732f/index.html","3dc629e80bfac854c207a9cb2315c23c"],["/posts/bcdf8f30/index.html","5c634d85db9a9c1838e365de36307453"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/index.html","291851c18d6fa8c08e5f3f9082a9692f"],["/posts/db284c9b/index.html","2f727c33490299a1a8370b47e53834ab"],["/posts/df8caf15/index.html","d10e79245e23f24190e8b1e7eb48cc77"],["/posts/faa6e9cf/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/posts/faa6e9cf/index.html","2994cc5ff461a420c7aa44e25cf8ba5b"],["/sw-register.js","dfd7e700621e6524722b586bf1a6d0c2"],["/tags/C/index.html","9fe155c9ca0a852e61673a7dc489342a"],["/tags/CTF/index.html","78624b4be32350f2a882e88e25cbc3ec"],["/tags/Django/index.html","e17e2916f4bda7fd696151556382e730"],["/tags/Flask/index.html","f5977786844ca953b2ddb82df5761707"],["/tags/MISC/index.html","7ffd9b36d084238ac419a547e416ea3d"],["/tags/Mysql/index.html","f85bfc493c1943b71874f88333f2c15e"],["/tags/Python/index.html","b78dc53c598c13f461da26339d63e05d"],["/tags/SQL注入/index.html","33b63a9220aaaec7dfe74eb45b029774"],["/tags/STL/index.html","eb4cd545aa7ac26907ee7f2b9b453beb"],["/tags/Web安全/index.html","d1938239ac6f4840b54ff2a6a527121f"],["/tags/WriteUp/index.html","c1007d2d4bce89f2ebb553b0fcb1dc0d"],["/tags/index.html","ad31d140701c79287fe31a76dc54ad46"],["/tags/php/index.html","05936667ca074c036723eed06393cd41"],["/tags/ssti/index.html","5edc5ea2f113a6d333c01803a7234541"],["/tags/web/index.html","0167b813fc4fb7e6b9e891a099e822d7"],["/tags/webshell/index.html","437be9595093b54b3bb1deff587197b4"],["/tags/xss/index.html","80bf7e6d6fdf105eca765310131d70d0"],["/tags/代码审计/index.html","bcd17f81e51456fae479312676b6081e"],["/tags/前端/index.html","87d17194d36666ff7c92f8a83f7a5a64"],["/tags/反序列化/index.html","908420c509c5f5cf8b6092cee9d9279b"],["/tags/命令执行/index.html","21b1129ed597c642b8f6ea99f502c02a"],["/tags/开发/index.html","bd0f5dec9c1441695a1a24fe59c3e674"],["/tags/数据结构/index.html","e11644f695d41d6e861342d05c595617"],["/tags/杂记/index.html","1dd21c6f8fd238de0e15b34329edb2ad"],["/tags/算法/index.html","1ef0c116f18c32242fc9f9042e26bb4d"],["/tags/网络安全/index.html","e838c7d9999d70ddbf69fbfbcafffe92"]];
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
