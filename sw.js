/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","cab4d265daa1efb977b10fbd5f08d447"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","2a670224854c82f8616e27f56924cf82"],["/2023/09/29/Web安全-PHP基础/index.html","a04eec554be399e783241c71d9f846ea"],["/2023/09/29/Web安全-信息搜集篇/index.html","ae79e758f0f1e102bb37c719f6de5b64"],["/2023/09/29/虚拟机快速自建web环境/index.html","194005faf1c4607c25988a0cbd0c0a13"],["/2023/10/04/前端基础/index.html","73fc1a5a132205cf26007e4ee01062c6"],["/2023/10/05/Mysql数据库基础/index.html","1efef2c189c8d576e04fbd0dee03cf8e"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","c726f9fa92c357014406a5918f3ec2d1"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","00631031b1fbdbd08243ddfd343ac3ca"],["/2023/11/05/Javascript基础/index.html","e532e2166f1584bb759d0a46d5354b2d"],["/2023/12/06/SQL注入篇（GET注入）/index.html","61c41d1bdbef0b0bfe5721dbb9918600"],["/2023/12/06/Web安全——SQL注入篇/index.html","4665e276a8f027deab3b067cfe234f61"],["/2023/12/07/SQL注入-Head注入/index.html","2ffcd2ce4012be6d7b942f006b5850b5"],["/2023/12/07/SQL注入-POST注入/index.html","8ac9beb524f3961842f57fe3b56ccac9"],["/2023/12/07/SQL注入-盲注/index.html","d50c30920cdfbb0885125ecdf2b26478"],["/archives/2023/05/index.html","2afcd86fcceb50db717f4b2b658e7266"],["/archives/2023/09/index.html","f2a4671cea4cdcf22d4703a5ed51fb9c"],["/archives/2023/10/index.html","730822b70b269960f67fef93ff34b402"],["/archives/2023/11/index.html","8e634f70e3a340e45ada69afd0adfccb"],["/archives/2023/12/index.html","b9a5be229db80acb94f63560ca18337f"],["/archives/2023/index.html","bc6e6c379f7af454639cc2f246bec6f0"],["/archives/2023/page/2/index.html","56b7f5f28c90e6c6f33757034c37f77c"],["/archives/index.html","53a1b4447855d38a28d5a97ef1af1f0a"],["/archives/page/2/index.html","2636c5e39fc57212bcefc5b1bde65d7d"],["/categories/玄学/index.html","c7f0db1b159b656066394ce9195a7fa6"],["/categories/网络安全/CTF/index.html","8e836bde1684f4be0f85a72266396934"],["/categories/网络安全/index.html","c52e65ee56a39d730c479d67951a9c07"],["/categories/计算机/index.html","139aad292bdfc502e48f6a51975bc7f5"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","70c07d793d66c21571deab89223157e6"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","8ba3e651eb0604cab76da9eba4cd9c2e"],["/images/donate/alipayimg.png","27d92461ccd1df8d478295d6955720df"],["/images/donate/wechatpayimg.png","1a851c329cde8fc592b8b064af16642d"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","f6da5dd8549d8f0d5db3ccc85cd65ff5"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/page/2/index.html","4373505b71fadd1ff26cf9baffb7a949"],["/sw-register.js","8d10097890fb4491b335f423d9d2d71f"],["/tags/C/index.html","166b61e78d5f740df2f3916902dd3be5"],["/tags/JS/index.html","a9514b1215dbed1baa65f1e0d74fea17"],["/tags/PHP/index.html","e7c51bb7c3e1dcd417527f857d194a7d"],["/tags/Sql注入/index.html","87e27088cf15b3c02fbee8b5522c8258"],["/tags/Web安全/index.html","864b41f68d07574127a294bcf6974d8b"],["/tags/css/index.html","f176fc81599668cc64f4bcc66ab271c2"],["/tags/html/index.html","564af2f1373ef8fdc5b6d73be75de41c"],["/tags/sql/index.html","0bbadc32add4874050185ffc7a5eaa1b"],["/tags/www网站/index.html","cf1f98d6da7d69f504ad80934d1d58f8"],["/tags/信息搜集/index.html","d7c00c784745f7cc2ae047dc4011d3eb"],["/tags/前端/index.html","2f9f77ffae6e100e3836b27e9bc979e1"],["/tags/数据库/index.html","2c5100fa2e1bd860ccf01cc56d387d2e"],["/tags/易经/index.html","5565de118324bbcd29b1a54dd3827b66"],["/tags/梅花易数/index.html","65e44ecec5fd296edf605fc944870c26"],["/tags/算法/index.html","a566b205cd74bf0eec67bc75051f52f6"],["/tags/计算机/index.html","a3ccc9410c507b806837bb5ff40cca33"]];
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
