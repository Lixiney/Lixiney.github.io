/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","e30e6c274c377da50edc0517b9cb6eb7"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","6196c5b21c9520d150e5a027fd9039ea"],["/2023/09/29/Web安全-PHP基础/index.html","f245859b0d1c461bb25215b86e648ac4"],["/2023/09/29/Web安全-信息搜集篇/index.html","d5785147a4e64a0a479ae9b64ee701c2"],["/2023/09/29/虚拟机快速自建web环境/index.html","360142bca839414fa701d68953db075a"],["/2023/10/04/前端基础/index.html","20370d14fa9a3f94411eda005c051535"],["/2023/10/05/Mysql数据库基础/index.html","a46b78b8435451940cbf22ae6f1ba953"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","52ee2aafdf85455a5177c31a885369d3"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","0924aa38447010a3bcecf95ad75c6728"],["/2023/11/05/Javascript基础/index.html","f1cdc515b8a9aa74b9cb2fd7ba438846"],["/2023/12/06/SQL注入篇（GET注入）/index.html","41e6c62d362b202c6d23de0db310a2b0"],["/2023/12/06/Web安全——SQL注入篇/index.html","4d255510bda7e4d32f6723cda2469a32"],["/2023/12/07/SQL注入-盲注/index.html","0e12a4d10f6f6b61806cc0c674fa5fe5"],["/2024/06/06/Python————Flask模板基础/index.html","77321d1d823f24ceb5a316bcffb04428"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","fdc0cea38a726175550719de559fcb7e"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608225941.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608230153.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/微信截图_20240608230438.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/archives/2023/05/index.html","e874cba4ee344b905e273e4db155c0ac"],["/archives/2023/09/index.html","21303e68930ee2f7ff13253acf3a0db1"],["/archives/2023/10/index.html","be4e5a80d8b5debed5a13bcf236cffcc"],["/archives/2023/11/index.html","41343920cb46accdfe25bbdb6a9dcecc"],["/archives/2023/12/index.html","3b2775c7ec11fc031b4d5f476ebbaa07"],["/archives/2023/index.html","8fc05f41bebe2dc0744e612c7f7148ef"],["/archives/2023/page/2/index.html","7ff129f3d0ad4ea289a51afca9cc6261"],["/archives/2024/06/index.html","ba641435fbc7b04cacdb179682583e04"],["/archives/2024/index.html","12064f0bb2da6dc21e3f166ef9580699"],["/archives/index.html","3a33c125b8e3e8c664e3b98822068af7"],["/archives/page/2/index.html","1d17b67074a5829cac1df7c2dd7e5ce7"],["/categories/玄学/index.html","397d12a91a2d3cdf2528ab236902ae98"],["/categories/网络安全/CTF/index.html","650238d825a0149fe8b723a8a3009b42"],["/categories/网络安全/index.html","376479754d607279eb7327e70e1d803d"],["/categories/计算机/index.html","7274537471c0bb57f5940f2bc4798ba7"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","70c07d793d66c21571deab89223157e6"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","8ba3e651eb0604cab76da9eba4cd9c2e"],["/images/donate/alipayimg.png","27d92461ccd1df8d478295d6955720df"],["/images/donate/wechatpayimg.png","1a851c329cde8fc592b8b064af16642d"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","1bf1d8b750910ab2bbaca4743dd81834"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/page/2/index.html","42cbff09df9029c94029daf5a867e87f"],["/sw-register.js","138ce0f00241bfa82a80ac0564dd24a1"],["/tags/C/index.html","cce8e3497f10513c47a1374d075100fa"],["/tags/JS/index.html","fe51bac5c6611815f52e0dd9a8412bf7"],["/tags/PHP/index.html","4a188295eb830b259bde23904e2daad6"],["/tags/Sql注入/index.html","bd5bdfd289059390da1b0fb3695482f2"],["/tags/Web安全/index.html","118d014270dfe661c06b88b6d8896337"],["/tags/css/index.html","35eed4751ff12dd22c2c422b8bc02110"],["/tags/hexo/index.html","ac8df68f4e98ad9d96a2dc46062da170"],["/tags/html/index.html","8aa169cc9b5476a33301ef81cf08e285"],["/tags/sql/index.html","676624c27e61502e0489eff891158ee5"],["/tags/ssti注入/index.html","8bf659831dd9a39067db7c65f6dc77bd"],["/tags/www网站/index.html","e43dee0cc916910865df9dcccb3f1766"],["/tags/信息搜集/index.html","10aee62f998c4bdf8813f65eb48235ad"],["/tags/前端/index.html","41074b8f3cde198fc6793300dd189336"],["/tags/数据库/index.html","788ced5de3e277e5a1759f2d11b7e08d"],["/tags/易经/index.html","f9cfc8a00cb645b75cb4d876d1bde8b0"],["/tags/梅花易数/index.html","acd214326494925635a5aaa435e7a3a7"],["/tags/算法/index.html","fe3d753a4dc5579f67acfb16c47d69e5"],["/tags/计算机/index.html","7b3667d12ab6cbf008f3673dc8f60084"]];
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
