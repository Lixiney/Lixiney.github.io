/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","eff5785e6593eff8f3030570283144a9"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","b10836323c63991fc301d52e9d43940e"],["/2023/09/29/Web安全-PHP基础/index.html","db5f7e14220eb712e86f8a35825fc904"],["/2023/09/29/Web安全-信息搜集篇/index.html","fcb441d3c81ef52c8f0fb7e67f1d92d9"],["/2023/09/29/虚拟机快速自建web环境/index.html","e70549455a3bfed02233d5411473689c"],["/2023/10/04/前端基础/index.html","7b14d3cf560c591febfa69cb1976611d"],["/2023/10/05/Mysql数据库基础/index.html","277b97a97dc7d8dc5322e7adce1bdb71"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","c32081c16ee03fed0452b4efb36c2c2d"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","edfa8a45b14cba2edaf2700b46e50b42"],["/2023/11/05/Javascript基础/index.html","46b9dc598c75526d5892a1853764fb03"],["/2023/12/06/Web安全——SQL注入篇/index.html","c99498b2b72010af1d71f5883de823fa"],["/2023/12/07/SQL注入-盲注/index.html","4a6641ef79e177b5c5f178781a07cb2d"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","9919602b7ac64108d42a791d6ad3f249"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","407c761fb601bda4508c43b5cee42b65"],["/2024/06/12/Python-Flask模板/index.html","4336433968104b610c145e6108e6c6ac"],["/2024/06/14/CTF-MISC-杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/06/14/CTF-MISC-杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/06/14/CTF-MISC-杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/06/14/CTF-MISC-杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/06/14/CTF-MISC-杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/06/14/CTF-MISC-杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/06/14/CTF-MISC-杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/06/14/CTF-MISC-杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/06/14/CTF-MISC-杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/06/14/CTF-MISC-杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/06/14/CTF-MISC-杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/06/14/CTF-MISC-杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/06/14/CTF-MISC-杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/06/14/CTF-MISC-杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/06/14/CTF-MISC-杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/06/14/CTF-MISC-杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/06/14/CTF-MISC-杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/06/14/CTF-MISC-杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/06/14/CTF-MISC-杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/06/14/CTF-MISC-杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/06/14/CTF-MISC-杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/06/14/CTF-MISC-杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/06/14/CTF-MISC-杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/06/14/CTF-MISC-杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/06/14/CTF-MISC-杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/06/14/CTF-MISC-杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/06/14/CTF-MISC-杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/06/14/CTF-MISC-杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/06/14/CTF-MISC-杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/06/14/CTF-MISC-杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/06/14/CTF-MISC-杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/06/14/CTF-MISC-杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/06/14/CTF-MISC-杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/06/14/CTF-MISC-杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/06/14/CTF-MISC-杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/06/14/CTF-MISC-杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/06/14/CTF-MISC-杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/06/14/CTF-MISC-杂项/index.html","03e35469d8034af3cfb5222d74e1e664"],["/2024/06/15/Web安全-文件上传绕过/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/06/15/Web安全-文件上传绕过/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/06/15/Web安全-文件上传绕过/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/06/15/Web安全-文件上传绕过/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/06/15/Web安全-文件上传绕过/index.html","ceba28dc369c0498695915c73839d2a8"],["/2024/08/01/PHP使用预处理方法防止SQL注入/index.html","8e1167ba120c0cbda48a3528e9bacc6f"],["/archives/2023/05/index.html","dc1739282d11620d895ccddf7c2b0497"],["/archives/2023/09/index.html","92f7cfde90918b29081e38efe6924eff"],["/archives/2023/10/index.html","9ce15ece339c2e2f4dd4876ce8e810ae"],["/archives/2023/11/index.html","b95c6d1c979593f897a4e533370ef29e"],["/archives/2023/12/index.html","44a7e89f8fd66378b8153e66231b0821"],["/archives/2023/index.html","ddaa96b69fd28198792f2149b1779c9f"],["/archives/2023/page/2/index.html","e58ccaddb60c1e0c51d31b47c678b992"],["/archives/2024/06/index.html","c69838db4c2888d985b8acf26eedd8cf"],["/archives/2024/08/index.html","05d572dc3bc5589e3aa29f659db9af75"],["/archives/2024/index.html","cea89699c3e7f02de56a7a95853b9949"],["/archives/index.html","0928ba4ee91a5928acfa8ac19d4e2358"],["/archives/page/2/index.html","ef85a03208931cbded02540be2a18173"],["/categories/玄学/index.html","b565acdc6bb40c91c09ca98d8104da5f"],["/categories/网络安全/CTF/index.html","84020e08b74ea039df8a1efebbd67326"],["/categories/网络安全/index.html","0c49bb10d8dccac98649f0635b633a3e"],["/categories/计算机/index.html","63c1c1697c23b978c63981ec7adafefd"],["/css/index.css","64de6774f719b5b8b67965ed8e08f96d"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","b04becaeec6055f37cdae425a73a8ca1"],["/img/2.jpg","045432ad4a9bdc91bf62c9b97f233c3a"],["/img/3.jpg","8cf434b0d2318d3da901442e46f35942"],["/img/4.png","cf4e4eec4e41787ad9e3961d72066562"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","0b1aa255b9d3026d82e89f6bd65c330a"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","b6cfd6a05e2402f794c3da56a61cf979"],["/sw-register.js","bda43d9d116edbd04149e3f64000d19f"],["/tags/C/index.html","7c950a5b41f5dd4bd2166a39ee1f5c7f"],["/tags/CTF/index.html","fd5e8066d633251ef9d14fe129d1f0cc"],["/tags/JS/index.html","b2c7403f9029e755047a9cefae827bbf"],["/tags/MISC/index.html","150b5158955c8ccbde224fb7f4ba1593"],["/tags/MySQL/index.html","a93961ed63391321b18208b251e51631"],["/tags/PHP/index.html","919a44cf458c020d1cd94d5ab699ce80"],["/tags/SQL注入/index.html","1e06a8908c159facd2d537419bea250c"],["/tags/Sql注入/index.html","19d675027d6fba90874910d1e0359348"],["/tags/Web安全/index.html","06cb9be2ba0af6de1ab4ab0b779dd4f5"],["/tags/css/index.html","10b952e5057812488c531e3ea50d5dbc"],["/tags/hexo/index.html","906a65079aaeb3fcaeeb2c0c9ac39626"],["/tags/html/index.html","a73b9451b31fe06098fff20d06ecfe14"],["/tags/index.html","c7076c6e5d06d647b18bd241e384b863"],["/tags/sql/index.html","dc6800763b0afc8d0dbd88f2265b25f5"],["/tags/ssti-注入/index.html","cd39f8a9bbbc0d23923aebf5969d68cf"],["/tags/web安全/index.html","e999fd59c01b6127347db8a2d996f331"],["/tags/www网站/index.html","f09cc8be0e7ca5346e0350bbdb8bdb11"],["/tags/代码审计/index.html","872f13d6d60b87e98741da2a906903cc"],["/tags/信息搜集/index.html","9f0dd924c0539ff5299181392ddd2a35"],["/tags/前端/index.html","e00df4566a1a6a33c840c8f023b8520b"],["/tags/数据库/index.html","4d0f3eb9e272e418201edb8b47a94c02"],["/tags/文件上传/index.html","a96d67c3c8fb7fef3a21a8e6c24c542d"],["/tags/易经/index.html","b89b0a93079d95d60dec4ff29438ac2c"],["/tags/梅花易数/index.html","26e3086f953e11814a4b0dddc8209ce9"],["/tags/算法/index.html","b047d370bef973471313a435a38c22b4"],["/tags/计算机/index.html","5a945510321040f944ba329b43a09555"]];
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
