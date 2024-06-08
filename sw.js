/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","a3fe903e71736b4fbcc961caed3bc7f9"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","49355fc339f93feaa90a4c7e9413f00e"],["/2023/09/29/Web安全-PHP基础/index.html","57e54398fd570c562700b7083b3aa756"],["/2023/09/29/Web安全-信息搜集篇/index.html","05ef0684f30c19e070f54f62e6b973a9"],["/2023/09/29/虚拟机快速自建web环境/index.html","a6db134cdabd8c431391072d0d405c40"],["/2023/10/04/前端基础/index.html","66a4dd981a617dc1ee3fdbf7825087cc"],["/2023/10/05/Mysql数据库基础/index.html","7895a4ea9c831fe92d018df714697d4f"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","cad998a20d34a95417d964c0e4e34c08"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","35efcbe8cbea0ba1d0de7a41d305f219"],["/2023/11/05/Javascript基础/index.html","42f0f7457b0a4b633d286b8450e49fe6"],["/2023/12/06/SQL注入篇（GET注入）/index.html","00236a6015f56dfe424837874275081c"],["/2023/12/06/Web安全——SQL注入篇/index.html","de6405e8fcdc2d1d2f7e440f37370244"],["/2023/12/07/SQL注入-盲注/index.html","3243e7e8c9f6c118c1a5b361fde73b51"],["/2024/06/06/Python————Flask模板基础/index.html","7ba3a834e67288189fbfb09cade8e1c4"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","2a4e81e08ab636289e858cce151a2796"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608225941.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608230153.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608230438.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/archives/2023/05/index.html","8f42bedc63953c1656c72092e04d405a"],["/archives/2023/09/index.html","e55003f8d8e95959968db2b17c9d938d"],["/archives/2023/10/index.html","11c0788e6edc8b28f296b134a0b6f410"],["/archives/2023/11/index.html","33b928d87ba7f6fa393273e0ea4544d0"],["/archives/2023/12/index.html","81a6dbe557e62c4c83ac1b52f903d0cf"],["/archives/2023/index.html","ddc9eaa6233ac0740b9bdba454ec8d49"],["/archives/2023/page/2/index.html","998e5f7d396eca918e68936b647d929e"],["/archives/2024/06/index.html","0023aaf70232c544f37ca82d240167bf"],["/archives/2024/index.html","db5be4ce5625e68f55c455078dc730cd"],["/archives/index.html","093ab88c9daf0381d062a6da43361cfc"],["/archives/page/2/index.html","125d02840f9000936ecd15349136cbbf"],["/categories/玄学/index.html","0759bf9af57822b230cd0f1de5c42ed9"],["/categories/网络安全/CTF/index.html","eff2acd670193b491b6dce4002feed1a"],["/categories/网络安全/index.html","8302326ac5b1f07d0595b49ed54ed153"],["/categories/计算机/index.html","f8d7602621b631f83cc1604efeaaed6d"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","70c07d793d66c21571deab89223157e6"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","8ba3e651eb0604cab76da9eba4cd9c2e"],["/images/donate/alipayimg.png","27d92461ccd1df8d478295d6955720df"],["/images/donate/wechatpayimg.png","1a851c329cde8fc592b8b064af16642d"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","0c96aa56354dc058e42a264dad35933e"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/page/2/index.html","e67e3ece040091127f37185a03f18cdd"],["/sw-register.js","6da8c281c08e6393b2cbd7403b60db55"],["/tags/C/index.html","8fc96e73c9f1d52bb1cf9f15e108bffb"],["/tags/JS/index.html","52ecafefc5cbabbb357b54836d4eff62"],["/tags/PHP/index.html","593e6bb4b333ee54a9fdf6c1cca7992c"],["/tags/Sql注入/index.html","aec02e141602d5e910f7cb92c502082e"],["/tags/Web安全/index.html","a7a6b2c1297af0d89b6f31dcc1d1691b"],["/tags/css/index.html","335ed3771cb3d32ca3bac7eff504ef2f"],["/tags/hexo/index.html","658d4ef26c57173c6acd78d4a19d84fd"],["/tags/html/index.html","239ea79436f4f2ed212b66ad60a94dae"],["/tags/sql/index.html","99c21f500f34ecea5d4055d04d1728b8"],["/tags/ssti注入/index.html","e37310e379d182b40b3e2bfdfd044173"],["/tags/www网站/index.html","b4eca52db7a7384f53825af488e76ff3"],["/tags/信息搜集/index.html","732f2cbd5e458a8a284e60562ed9a60b"],["/tags/前端/index.html","99fed59ff9c086e15e454d6d3eff6e34"],["/tags/数据库/index.html","3aada192e3b995999c0ab85f5eb67ff8"],["/tags/易经/index.html","f6db40fd21a60fe783c1947152f1e61d"],["/tags/梅花易数/index.html","ad34bfe7868fa90674b7d56c552e1767"],["/tags/算法/index.html","415d746f83ac29e5b44bb067f76fdfcc"],["/tags/计算机/index.html","69ee16b1563a3702ed832a95bbfe1b16"]];
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
