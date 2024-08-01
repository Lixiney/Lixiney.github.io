/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","16eeb35a8151839948df17c483351494"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","7a6a6fd3eb28cb5450ab9c0805408612"],["/2023/09/29/Web安全-PHP基础/index.html","adcb64cb2f40c075351e3838f275ae4e"],["/2023/09/29/Web安全-信息搜集篇/index.html","74821b466a779a8f416fda6d23f66c63"],["/2023/09/29/虚拟机快速自建web环境/index.html","750156f2aaadf5b26d89e8bac529cbdf"],["/2023/10/04/前端基础/index.html","4e1068b68b3ebbdd65234d7c25d0f2b6"],["/2023/10/05/Mysql数据库基础/index.html","59182887d88cae97f05668509ff53260"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","68a864728af34f9d33b1caa837c787a5"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","c82b33130f70e7bfbdb0f4518add04b0"],["/2023/11/05/Javascript基础/index.html","ed772ef2019cfa8bb3194c00f6640bba"],["/2023/12/06/Web安全——SQL注入篇/index.html","2f111804ddbfe541e937ba45b9a0542d"],["/2023/12/07/SQL注入-盲注/index.html","07bdf46ba7331f0ec7d6c186da5f700c"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","33439682df0d48486549a7dc1d1203bc"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","90b1197905799f6ff3ee73915b37e9a3"],["/2024/06/12/Python-Flask模板/index.html","4b196ec2c662588884749ebcb428b704"],["/2024/06/14/CTF-MISC-杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/06/14/CTF-MISC-杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/06/14/CTF-MISC-杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/06/14/CTF-MISC-杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/06/14/CTF-MISC-杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/06/14/CTF-MISC-杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/06/14/CTF-MISC-杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/06/14/CTF-MISC-杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/06/14/CTF-MISC-杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/06/14/CTF-MISC-杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/06/14/CTF-MISC-杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/06/14/CTF-MISC-杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/06/14/CTF-MISC-杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/06/14/CTF-MISC-杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/06/14/CTF-MISC-杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/06/14/CTF-MISC-杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/06/14/CTF-MISC-杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/06/14/CTF-MISC-杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/06/14/CTF-MISC-杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/06/14/CTF-MISC-杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/06/14/CTF-MISC-杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/06/14/CTF-MISC-杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/06/14/CTF-MISC-杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/06/14/CTF-MISC-杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/06/14/CTF-MISC-杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/06/14/CTF-MISC-杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/06/14/CTF-MISC-杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/06/14/CTF-MISC-杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/06/14/CTF-MISC-杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/06/14/CTF-MISC-杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/06/14/CTF-MISC-杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/06/14/CTF-MISC-杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/06/14/CTF-MISC-杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/06/14/CTF-MISC-杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/06/14/CTF-MISC-杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/06/14/CTF-MISC-杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/06/14/CTF-MISC-杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/06/14/CTF-MISC-杂项/index.html","aa71bb82bad467cf271e190de9e76dda"],["/2024/06/15/Web安全-文件上传绕过/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/06/15/Web安全-文件上传绕过/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/06/15/Web安全-文件上传绕过/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/06/15/Web安全-文件上传绕过/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/06/15/Web安全-文件上传绕过/index.html","49b90481bc4c6d911e17d5969f78965d"],["/archives/2023/05/index.html","72ee31aa6d777a1ae026fd04b8663bc8"],["/archives/2023/09/index.html","5f721740d868c32f18d258c0f3ddae8c"],["/archives/2023/10/index.html","db477b58691905310c899e8fc50e5f27"],["/archives/2023/11/index.html","39b9234dcbd5a8cac4134d670c4f3dc9"],["/archives/2023/12/index.html","5e014ebe908a9f88e3ad49450e6d2517"],["/archives/2023/index.html","51d0463d4c9032cbeba3bd8ab94efcaa"],["/archives/2023/page/2/index.html","2d794906265c26a1eb5ab41b761b299c"],["/archives/2024/06/index.html","b63edc877a25a17d5dc09a97b51b8283"],["/archives/2024/index.html","aad6870138cc93be271e0bb53bdcc838"],["/archives/index.html","cd00895d394a1b7302d07d626e08937f"],["/archives/page/2/index.html","9f88dab06e90c260995fb7555b4dff2f"],["/categories/玄学/index.html","ab790cbcd3998f88825e02fe3a3c8e98"],["/categories/网络安全/CTF/index.html","8b57fb81ca0acac8fff71dce9744b08a"],["/categories/网络安全/index.html","8f303985a760123f4462b3358c6831ca"],["/categories/计算机/index.html","e8eaed6b241438d23f7f591ac51f2a4b"],["/css/index.css","64de6774f719b5b8b67965ed8e08f96d"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","b04becaeec6055f37cdae425a73a8ca1"],["/img/2.jpg","045432ad4a9bdc91bf62c9b97f233c3a"],["/img/3.jpg","8cf434b0d2318d3da901442e46f35942"],["/img/4.png","cf4e4eec4e41787ad9e3961d72066562"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","fcb1c6f0c16904202692c2cda1e9d5c3"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","2fb48b536bf0f2c5aaf921048e254dd2"],["/sw-register.js","ff25fc2252318ea10ed8b382a4eafda2"],["/tags/C/index.html","952e4f035f271d5230698414f5f29a30"],["/tags/CTF/index.html","17bfccc9d536461300cea122b8adeac0"],["/tags/JS/index.html","a9c82fbd2dc8e27d486647a64f6e7318"],["/tags/MISC/index.html","623c326c47a79fd3d1f76cbd38eaa5c9"],["/tags/MySQL/index.html","2ecc3d8f52154ecc1f11d6c91e915a2e"],["/tags/PHP/index.html","7a4c9d668f18e5ec763fdd856f3675e1"],["/tags/SQL注入/index.html","36f4035c98a28b4233a05a6525ad1c80"],["/tags/Sql注入/index.html","1f2cb78843270cf9aef2d0b877ad1c1c"],["/tags/Web安全/index.html","f80a4dd872567ba5f14edbbc013546bf"],["/tags/css/index.html","8f4978c7869708c0888610d7c9e93b5f"],["/tags/hexo/index.html","560b1858c3bd4f452511d4ca017d6d7a"],["/tags/html/index.html","d8b8e1ce5119a6b42aa8effd5846bb7f"],["/tags/index.html","8b6aeb2a4e084217691cdc0e69a7e405"],["/tags/sql/index.html","f94205e7f35dd5a23542fa4f326eadcf"],["/tags/ssti-注入/index.html","b72975a7aa3e087d908e153b3ae576a1"],["/tags/web安全/index.html","c5176b5656952d9a8cffb17d063674b7"],["/tags/www网站/index.html","01a529a256d375cffa5cb2019468cacc"],["/tags/信息搜集/index.html","dd7d5e0ff73bbf4db274d4ee99982804"],["/tags/前端/index.html","1785c459528e7cd7626b5c000e6ca317"],["/tags/数据库/index.html","f4083a0db379651ecb003c472e05b7d5"],["/tags/文件上传/index.html","5ad5894f7625e4ef1cb6fd86ea9a807a"],["/tags/易经/index.html","d7e43daee2614230b4d2e0f959dbd191"],["/tags/梅花易数/index.html","fd24ba10dc8e8534a55b661715eae8e6"],["/tags/算法/index.html","0eb7caf1485c721a2200229aa860a8dd"],["/tags/计算机/index.html","e858e15bdf071f45d16dfea61f77d76a"]];
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
