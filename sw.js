/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/梅花易数-【卷一】-象数易理篇/index.html","aeee2e6a6d2548659f613c530f67ea13"],["/2023/05/14/渔樵对问-【上】-康节先生/index.html","87d52768ffba94392f882e566f5298ff"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","19b43b4cf1248dde921925dbd362a01e"],["/2023/09/29/Web安全-PHP基础/index.html","e6a7d96a2ffc6d782848721e124b47d3"],["/2023/09/29/Web安全-信息搜集篇/index.html","de91818c89b84d2441420ed10dbbd6d7"],["/2023/09/29/河洛理数-五行八卦起源/index.html","aad5375df9145001507eccac3795abc8"],["/2023/09/29/虚拟机快速自建web环境/index.html","247ee150b28ff05f4295f15cafc2878f"],["/2023/10/04/前端基础/index.html","423fff4d7f4a6fdff2981fc6a23787bb"],["/2023/10/05/Mysql数据库基础/index.html","2e5102831b7cc71e79d748186a234a50"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","c9815a85033bcabceecf793201a4592e"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","33e391b72b74de973c43cdec451370dc"],["/2023/11/05/Javascript基础/index.html","214e18be4a99abfabd3502640af3dbd5"],["/2023/12/06/SQL注入篇（GET注入）/index.html","a9fade8bc37c8163efcea131ee5b333e"],["/2023/12/06/Web安全——SQL注入篇/index.html","aabb0c0b026b0ad978e3b94607de7c6b"],["/2023/12/07/SQL注入-Head注入/index.html","055412513f60c1c3a6a198751d363643"],["/2023/12/07/SQL注入-POST注入/index.html","f8a8a1ac7335ba14de1e38ac56066793"],["/2023/12/07/SQL注入-盲注/index.html","cfb9a19d11356eecf6c63dfb5b8b8296"],["/archives/2023/05/index.html","ec5f56c19b5213563c4a69c82816d6f8"],["/archives/2023/09/index.html","c28576768623e92bd356069396ea8615"],["/archives/2023/10/index.html","fd5e7c4fd355572e18d376a298bfcee7"],["/archives/2023/11/index.html","390c4c4262c9e4d65ebfd83c4fd17be7"],["/archives/2023/12/index.html","2b05f85c9a2948ff7505d43f89bcff57"],["/archives/2023/index.html","821a89797aa24c95ca54ea37e6f56393"],["/archives/2023/page/2/index.html","968e37ad4be8a9cd3c539196ef13e18b"],["/archives/index.html","b7ecb1ef5663f1e4ab7a6660f8acdd0d"],["/archives/page/2/index.html","a2bf5f8bf6da0699e229e982c26abf2e"],["/background.jpg","d2d652f55cd647c3993cbf19ab45f831"],["/categories/玄学/index.html","b27951c807cdc3afe27d1d57abc106e9"],["/categories/计算机/index.html","b518ec06108aae00f18f7168e9717339"],["/css/style.css","1ffda6bd12fa91baed550f84726873ec"],["/fav.png","935972e0b96691c01330fe3ff1956aef"],["/ico.png","2c25a48db8beccc3b1bde5ecba580844"],["/icons-192.png","19eb65473fc0563716ab31696d278983"],["/icons-512.png","d12a987043264fb97edfbc94be33122b"],["/index.html","319e5a61097fd707addf7be847aadcb1"],["/js/script.js","a8d09578bad6c6236066485d7b31ce12"],["/page/2/index.html","e42e10abe59f7cbba2195d0058e92b7f"],["/sw-register.js","00503e66bd891d4d421eebadff860dbe"],["/tags/C/index.html","5d094827e3da6dfbdd0115bbe5f85286"],["/tags/JS/index.html","37928d444018d0c83907ec3ceb6b7419"],["/tags/PHP/index.html","bc1c4e42f1d786aa4ed890340b943cfa"],["/tags/Sql注入/index.html","501871c2a497fb0f035af34d01abfca4"],["/tags/Web安全/index.html","3871dda64d5ca690b6ec4fc94721beb9"],["/tags/css/index.html","05e034952823eaccf8100fa5d241d906"],["/tags/html/index.html","f951fddcb5b4211e1b67a8057838a0f3"],["/tags/sql/index.html","eb11100e666b4891075de658bdbe540e"],["/tags/www网站/index.html","348295675f99842ce054909179dca2ec"],["/tags/信息搜集/index.html","299a7101d4a7cc9c6ca8a7051c85ab86"],["/tags/前端/index.html","fea29c866f31898e63a60ca44046a4d2"],["/tags/周易/index.html","82a95f0b0efe6867e89ff0cfb7737fd1"],["/tags/数据库/index.html","0984b205b25df712c9f4cafcae0b821b"],["/tags/易经/index.html","f914094197247679adfdd7f8437d1d3e"],["/tags/梅花易数/index.html","f6393138ae9d650e7b3ebadef2969d23"],["/tags/算法/index.html","b95fe873914e369bda3044e6badc459b"],["/tags/计算机/index.html","5e6064ba3157ca80df54fd298b2fe2d4"],["/title.png","a3e3d3e1af8a679be0e6331eb72413e7"]];
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
