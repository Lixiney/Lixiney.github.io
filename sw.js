/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/WriteUp/index.html","5c2d39f97a5856cc24a373359238395f"],["/archives/2024/09/index.html","e4532f15f6421cfe5ebaf1818f0d80a6"],["/archives/2024/index.html","e4532f15f6421cfe5ebaf1818f0d80a6"],["/archives/2025/06/index.html","5c262c22532e4e35a5d3d701cb2696fb"],["/archives/2025/07/index.html","95b055d15210ef5ade640a6ae0dc72a4"],["/archives/2025/index.html","7b2e01a189e52baa81b9d1318838850c"],["/archives/2025/page/2/index.html","18add0479c71a0a8dd1319c8b5bdbb6c"],["/archives/index.html","b4e6bb1004747f025864ec5b8085a59d"],["/archives/page/2/index.html","42b5b7f6b9b04d3831d463d68a904d37"],["/categories/WriteUp/index.html","48c5df18584f59ab54f8f028d8be4192"],["/categories/开发/index.html","c183bb5ca4c2651e7cea942999deac97"],["/categories/网络安全/index.html","d639615f0c89c888b237b35104eb3361"],["/images/avatar.png","d3a5dd0236961fee66483534cc436e82"],["/images/banner-large.png","15e2a39a0118d613644a110a154ea569"],["/images/banner-small.png","ae232a8fbec32afff8dbf681a77075c2"],["/index.html","2c20ce3a3201869b350339a43f137165"],["/js/app.js","f15a43914e3a76ce544d960154b140f8"],["/page/2/index.html","fd425d954a8ba71a47b44a0d2f10b8d1"],["/posts/2bf21027/index.html","19f7359814b78ea1c9970616967f2131"],["/posts/2dff4083/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/posts/2dff4083/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/index.html","8f19737320243bee98e9beac4b56fad1"],["/posts/3b86160f/index.html","9aaeb86ca579268b7a8eb0bcaffce098"],["/posts/483d9cef/index.html","a28c3030a8130c1f69527ffd40e90e38"],["/posts/5fe44501/index.html","cb0030757a736dfeebf87eed45de9a66"],["/posts/83c1bda7/index.html","3e1f99b528927f6791df79c543922d6c"],["/posts/879a70bf/index.html","6cad886f3b72dc75e721d9192002566c"],["/posts/98d7f58f/index.html","3dc2e3577be31e7c61c3b2d40af68013"],["/posts/9f9af3f5/index.html","34700512224e374250bfe3e138a4d24f"],["/posts/afe38b32/index.html","b86d1bd58a5f4db2f2c66483ecdea6d1"],["/posts/b710732f/index.html","9c1de66dd0e577000f41970c97488ffc"],["/posts/bcdf8f30/index.html","66d100b2897582602a7d3b4412adf707"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/index.html","93667d59f518d47d4fa65a164c167dfe"],["/posts/db284c9b/index.html","e13aa03181db6043fd742e8a7bc3f59a"],["/posts/df8caf15/index.html","6b6976e43499daa24f58821fdb4956bf"],["/sw-register.js","6f93d01d3893e7647bbcbdc8c39743e6"],["/tags/C/index.html","25ede678923396bbd881d2ff53326aa1"],["/tags/CTF/index.html","6b9246b848b82f45ee08e56db46903be"],["/tags/Django/index.html","44300641d302ec49b863d7d500f860d0"],["/tags/Flask/index.html","d02646d0442345109f5c9e634a124c1d"],["/tags/MISC/index.html","9d85f7afe9016d8aa036abe2dc4393aa"],["/tags/Mysql/index.html","7d490c424a24dea23a5988bf91538510"],["/tags/PHP/index.html","a4b9e3c259e28a9bdacf306c0863177d"],["/tags/Python/index.html","ccf3395c1c432eb9053664df78d2164f"],["/tags/SQL注入/index.html","48c5df18584f59ab54f8f028d8be4192"],["/tags/STL/index.html","25ede678923396bbd881d2ff53326aa1"],["/tags/WriteUp/index.html","7fbfe32d2e1343be81dc6320284d3b55"],["/tags/ssti/index.html","ccf3395c1c432eb9053664df78d2164f"],["/tags/代码审计/index.html","d46969c526fb8bb205e55fe3bbe7b9de"],["/tags/前端/index.html","3168597409d137d6cfe8fcfd5db88ba4"],["/tags/反序列化/index.html","a4b9e3c259e28a9bdacf306c0863177d"],["/tags/命令执行/index.html","7fbfe32d2e1343be81dc6320284d3b55"],["/tags/开发/index.html","eac8ab3db1e88e067feb950e7e76fdb6"],["/tags/数据结构/index.html","eac8ab3db1e88e067feb950e7e76fdb6"],["/tags/算法/index.html","25ede678923396bbd881d2ff53326aa1"],["/tags/网络安全/index.html","48c5df18584f59ab54f8f028d8be4192"]];
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
