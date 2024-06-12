/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","14e844063cdcddffc1060e99db5bb9b3"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","6d52ccabcfa6874f1f35403b25018b0d"],["/2023/09/29/Web安全-PHP基础/index.html","6aa9d2ac1d4c3e8da2f6c1edee023b5c"],["/2023/09/29/Web安全-信息搜集篇/index.html","fd10fd070ed2b52d10e63fff10f71a3c"],["/2023/09/29/虚拟机快速自建web环境/index.html","b78eac9bb3daee0470efff08c1ba895e"],["/2023/10/04/前端基础/index.html","a6a0365c1c1173dbfb93a4f3b5df35ad"],["/2023/10/05/Mysql数据库基础/index.html","67d0ab93134f46e44204c02e28dfb4c8"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","60351d4e0358d737919dcafedac79f2c"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","184f380690d8356c0d8f34d2555dafbc"],["/2023/11/05/Javascript基础/index.html","0917ab367c83ba73127581f7549c0a3b"],["/2023/12/06/Web安全——SQL注入篇/index.html","710a6240249f4519208ea894aea9465d"],["/2023/12/07/SQL注入-盲注/index.html","031f519cf7d9cb21e05ac506fa4831e5"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","757e59a74cdef6bbbcb648ba1248969d"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","97d783c1e724ed4e256e05fd24d0900e"],["/2024/06/12/Python-Flask模板/index.html","d274c58fc8103339e28b9d76f9ca0497"],["/archives/2023/05/index.html","8f42bedc63953c1656c72092e04d405a"],["/archives/2023/09/index.html","e55003f8d8e95959968db2b17c9d938d"],["/archives/2023/10/index.html","11c0788e6edc8b28f296b134a0b6f410"],["/archives/2023/11/index.html","33b928d87ba7f6fa393273e0ea4544d0"],["/archives/2023/12/index.html","fb21b26a91fbca3284b46477a7ca66fe"],["/archives/2023/index.html","5c2048e372dc939ac146d580c1e768f7"],["/archives/2023/page/2/index.html","97eca1f3496bae8297aa06389e1958fe"],["/archives/2024/06/index.html","027e0b8c200cbf666a02c43d5df21289"],["/archives/2024/index.html","268c485dd72772084ba6896a4256e20b"],["/archives/index.html","1d10c403ca49125fb55bf5a83f1ed44d"],["/archives/page/2/index.html","125d02840f9000936ecd15349136cbbf"],["/categories/玄学/index.html","0759bf9af57822b230cd0f1de5c42ed9"],["/categories/网络安全/CTF/index.html","eff2acd670193b491b6dce4002feed1a"],["/categories/网络安全/index.html","8302326ac5b1f07d0595b49ed54ed153"],["/categories/计算机/index.html","2d6b06dfb78344caf9f25d90b458f3f2"],["/css/style.css","a7b014679c3a39f1e602ca0bc9a3cf62"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","8ba3e651eb0604cab76da9eba4cd9c2e"],["/images/donate/alipayimg.png","27d92461ccd1df8d478295d6955720df"],["/images/donate/wechatpayimg.png","1a851c329cde8fc592b8b064af16642d"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","2f8aaa7d19485e529ea72c01c1487e18"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/page/2/index.html","e67e3ece040091127f37185a03f18cdd"],["/sw-register.js","816044ac1da7ebf85a53319aa190f634"],["/tags/C/index.html","8d8a1d6e73e903c46762729e29e94e24"],["/tags/JS/index.html","cd83283e2bf96270c1e9cd09f2d6ccec"],["/tags/MySQL/index.html","85538a3cfce5ed3bb007adfdebdd84a9"],["/tags/PHP/index.html","cb9abae23b2b274e0bde56c8b177174b"],["/tags/Sql注入/index.html","cb2c7308600bec015a9fbc6cebdcbd98"],["/tags/Web安全/index.html","ec80675f9cb914829cc39a25c1be139f"],["/tags/css/index.html","479cdae94fa45b5ff68ea9095345b906"],["/tags/hexo/index.html","782811c66a89980d624152677270c1b8"],["/tags/html/index.html","b1af84324cf3b9c07d65bc09c8f9213a"],["/tags/index.html","74a110ceb8b5ffd9e86f46dadc0dcaba"],["/tags/sql/index.html","d307c3c9ebed99190480c33f5ceaf78f"],["/tags/ssti-注入/index.html","5be3f0501e59b3a9e89d4c5c3d7f8020"],["/tags/www网站/index.html","319f775ec20a36863c231c6e6cbe9a0d"],["/tags/信息搜集/index.html","2dbc0997c2b217d8409aa191d5238a5d"],["/tags/前端/index.html","68575700bafdcb84416a9822835973b7"],["/tags/数据库/index.html","0b07cc672cedb8be0b70fa4bc6cc37e4"],["/tags/易经/index.html","23146ef2cafbfe37dfd9cbe4ba423de7"],["/tags/梅花易数/index.html","d1f2c8227252ee9dfe59b68139829b37"],["/tags/算法/index.html","3711264c2b753d06e1a432eb1acaac0e"],["/tags/计算机/index.html","a9d377658d81bd5d7206241d5630f2d6"]];
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
