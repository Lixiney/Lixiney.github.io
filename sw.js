/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","17473fa9200c3e1e77efd0b7b332138e"],["/WriteUp/index.html","9d91c0cb109052003c781772e89d4e8c"],["/archives/2024/09/index.html","2817d829dd0dd697e4c145bf0a49caa1"],["/archives/2024/index.html","767064248facfb5df0d95b245a82e8e6"],["/archives/2025/06/index.html","937fc1f3b3639a519fee497c4775450a"],["/archives/2025/07/index.html","c13dc39060718b76e4cbf3a5f9d2a321"],["/archives/2025/08/index.html","e0d639a7a7160d5a4c6610f440bef57e"],["/archives/2025/index.html","470837b9ef930d8bdf91d4b94ff96766"],["/archives/2025/page/2/index.html","ecaac52894b420c6f6b8c5e5fed4259c"],["/archives/index.html","403122fc68380050475883d2e586ac69"],["/archives/page/2/index.html","e1c3011430eb923078b78d74732217f7"],["/categories/WriteUp/index.html","f42e31a4c08bdfcee8ee28572e18de73"],["/categories/index.html","0838b8d864b7125d25871d398d06b416"],["/categories/开发/index.html","48b6e5a496eed22cdddb1834606350da"],["/categories/网络安全/index.html","9d98e4d63b0160528bcf20f4c2471091"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/background.png","bf30218c452c2f749d01c644053fe661"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/index.html","b11f6d00792fa6e1558d447e7ac7c267"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","c70d4528f457ce4570bded3187629b9a"],["/page/2/index.html","47fd4ec0cdf2c107c09158e5a4e12fdd"],["/posts/2bf21027/index.html","a7cf78d653cd11d81b68009df14b284e"],["/posts/2dff4083/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/posts/2dff4083/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/posts/2dff4083/index.html","6e54703d35ee06db0ab2032435840fe8"],["/posts/3b86160f/index.html","0c553355149225b0378d3ed021f434c5"],["/posts/4278955b/index.html","7b79ca26f24b7f442c1372f0db2f6b3d"],["/posts/483d9cef/index.html","340948e4e7926ac85ad32a08cf6460ff"],["/posts/5fe44501/index.html","34e2f9a95656fd518db40f520f78ba0f"],["/posts/83c1bda7/index.html","e6b05b8802c7f0f7d5f063a3e7769d6d"],["/posts/879a70bf/index.html","f66acde4efe1e4e26bc7ed28cf9d2d4d"],["/posts/98d7f58f/index.html","d1b83c2e66ad1133b19b23a26d1aa40d"],["/posts/9f9af3f5/index.html","cfd1bd115ae1aecceed39ca74c6e2d4a"],["/posts/afe38b32/index.html","34852f73ced0e5da2f28f02dd32dbe85"],["/posts/b710732f/index.html","347e13c75eaaa24f68f137e08e07205d"],["/posts/bcdf8f30/index.html","e8074210a5b800fad086957fa47a2fb1"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/index.html","6f10ae08a68fd9bf92f6bd3c00e81dd7"],["/posts/db284c9b/index.html","dbd07fc52ee41f3f08ce3111d2d7f2d0"],["/posts/df8caf15/index.html","9f1ec8c0855b5412abd65f0eede36463"],["/posts/faa6e9cf/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/posts/faa6e9cf/index.html","22671ea67caf20c665c2ba3e1f70b13d"],["/sw-register.js","bf1d926f423f95d675b34a204f5e7920"],["/tags/C/index.html","5fbae8f2778dfad9bf3ba83f7f91f8fe"],["/tags/CTF/index.html","519a0e58aeea681d5421b7022fd6983f"],["/tags/Django/index.html","8da8242fb9348df6fee47724c43a8196"],["/tags/Flask/index.html","a64bd821491c5c9566f08d8992612dfc"],["/tags/MISC/index.html","ba5bc9a01202ce8b52e556ed24fbc8f7"],["/tags/Mysql/index.html","d38f3dd075770d26a7db9da6993ee6a1"],["/tags/PHP/index.html","906dec73f7176688fba90f1ed0f08ce5"],["/tags/Python/index.html","0fcdb4c5c32567981119b2b6c986305c"],["/tags/SQL注入/index.html","78bf511e0963cbccc4a3d5f8a869fb41"],["/tags/STL/index.html","b673f6171d7afb225353705019a6f138"],["/tags/Web安全/index.html","7551992000807fdb9855a9bc025a115a"],["/tags/WriteUp/index.html","f6bf6f4ec3fa9336028a76c6697c8f44"],["/tags/index.html","4a9f3f0872572930fde19acc3dce5805"],["/tags/ssti/index.html","5b955a471c6f10fe85f701caeb540ec2"],["/tags/xss/index.html","d5d8e595438e5183d4f33f20028c6496"],["/tags/代码审计/index.html","290e148aa7226ecade6f806199a8faef"],["/tags/前端/index.html","1b2393e6b1defa0e1fe541e31226d113"],["/tags/反序列化/index.html","1e0a7a2d20e4c288abf1ece235d025c7"],["/tags/命令执行/index.html","8069ee57d13fbd12631f5d3ca75d0657"],["/tags/开发/index.html","382055001300bdb46223609ab19f990d"],["/tags/数据结构/index.html","1f7fa6840c495b9539c014c8d2cb541c"],["/tags/算法/index.html","658d27671827db2c71e7758cab21a447"],["/tags/网络安全/index.html","6568b5551a53e4c9455d66988b317a4c"]];
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
