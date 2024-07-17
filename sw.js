/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","16c4fe51b6a98be07a6c89523715dec1"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","e4639e52ef7e319f337492ffdfe23d60"],["/2023/09/29/Web安全-PHP基础/index.html","08e14dd90e9d87a2e57d4d6c47727682"],["/2023/09/29/Web安全-信息搜集篇/index.html","a351769ea428e8928242eda4dbfc6a40"],["/2023/09/29/虚拟机快速自建web环境/index.html","ab075166301c3232a19cd063bcc989a9"],["/2023/10/04/前端基础/index.html","553beb239e2031bc99af9ce856772c9c"],["/2023/10/05/Mysql数据库基础/index.html","5b8209a462ee5aaee2fe315a14b80f16"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","2a0bbec70d8e576c4743e6f1a9524906"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","5715a15705499f14edc3ef72db781e9d"],["/2023/11/05/Javascript基础/index.html","33c9fff6fe2952c8a695725f2134a0b6"],["/2023/12/06/Web安全——SQL注入篇/index.html","89660c0f2e7e510e61479dd3a119e8a3"],["/2023/12/07/SQL注入-盲注/index.html","de97adf412c9a60e2298739abdc4fcb6"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","ef0fd0114c0174d07d09670d998e1486"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","d420c148900b837c2a5c73f3035a8b22"],["/2024/06/12/Python-Flask模板/index.html","dcce37a59323cf3d853669dc665c542a"],["/2024/06/14/CTF-MISC-杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/06/14/CTF-MISC-杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/06/14/CTF-MISC-杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/06/14/CTF-MISC-杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/06/14/CTF-MISC-杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/06/14/CTF-MISC-杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/06/14/CTF-MISC-杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/06/14/CTF-MISC-杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/06/14/CTF-MISC-杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/06/14/CTF-MISC-杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/06/14/CTF-MISC-杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/06/14/CTF-MISC-杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/06/14/CTF-MISC-杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/06/14/CTF-MISC-杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/06/14/CTF-MISC-杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/06/14/CTF-MISC-杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/06/14/CTF-MISC-杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/06/14/CTF-MISC-杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/06/14/CTF-MISC-杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/06/14/CTF-MISC-杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/06/14/CTF-MISC-杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/06/14/CTF-MISC-杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/06/14/CTF-MISC-杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/06/14/CTF-MISC-杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/06/14/CTF-MISC-杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/06/14/CTF-MISC-杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/06/14/CTF-MISC-杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/06/14/CTF-MISC-杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/06/14/CTF-MISC-杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/06/14/CTF-MISC-杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/06/14/CTF-MISC-杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/06/14/CTF-MISC-杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/06/14/CTF-MISC-杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/06/14/CTF-MISC-杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/06/14/CTF-MISC-杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/06/14/CTF-MISC-杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/06/14/CTF-MISC-杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/06/14/CTF-MISC-杂项/index.html","8280916d4b5db0d70d0ff5431992947e"],["/2024/06/15/Web安全-文件上传绕过/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/06/15/Web安全-文件上传绕过/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/06/15/Web安全-文件上传绕过/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/06/15/Web安全-文件上传绕过/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/06/15/Web安全-文件上传绕过/index.html","6d6cf67947b0395d349d6134d9b364ec"],["/archives/2023/05/index.html","59ab430defb29a483ef263e6bb423bb8"],["/archives/2023/09/index.html","666624da0c8737d1e1c97e0ae4b2e1e6"],["/archives/2023/10/index.html","1e4cac9cc0543f53419a2a9f50343856"],["/archives/2023/11/index.html","e03fc17548f8050335b3f65a9ac2d244"],["/archives/2023/12/index.html","1cb068b0f956c0857d54304271814c53"],["/archives/2023/index.html","c74bf3b825fb45752055372b270f855c"],["/archives/2023/page/2/index.html","003a13d8933b3c816b1a4a692871f57b"],["/archives/2024/06/index.html","d4f761676fe86d74c0abb3cd185fa519"],["/archives/2024/index.html","a5ab6f0157487ba8cfe655e1114f2b05"],["/archives/index.html","14a759b697af46426f5e269593d00107"],["/archives/page/2/index.html","13b11ef07d3061992fc7f4a40aa590f4"],["/categories/玄学/index.html","770c7954298cfe64349c43824fa80335"],["/categories/网络安全/CTF/index.html","99e139f7d7baa3b5c4027eb37e7f472d"],["/categories/网络安全/index.html","3762fc6bc7612421aa6cf07d8b4fc636"],["/categories/计算机/index.html","425282f11ad0dc31971577442ed06c72"],["/css/index.css","64de6774f719b5b8b67965ed8e08f96d"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","b04becaeec6055f37cdae425a73a8ca1"],["/img/2.jpg","045432ad4a9bdc91bf62c9b97f233c3a"],["/img/3.jpg","8cf434b0d2318d3da901442e46f35942"],["/img/4.png","cf4e4eec4e41787ad9e3961d72066562"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","aa2f36edb3a8ecca82880e3b3a5bcb98"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","5cd4d4d942a9e703d53532a9e50da97b"],["/sw-register.js","0ac062a2c953e40435f68ad50cff21e9"],["/tags/C/index.html","1adb4f0c1c12edad21788327794a8af5"],["/tags/CTF/index.html","c45845549e319c3aaf79fae683862deb"],["/tags/JS/index.html","f608ddabc8516dc1901e25f43cdd07c5"],["/tags/MISC/index.html","8d755bd99c745d596153c1bba1cd9bd3"],["/tags/MySQL/index.html","ef4c6147b319183a5dd0e0d0b143831d"],["/tags/PHP/index.html","76ff7fd678753ed4aba4b9b92d64e30e"],["/tags/SQL注入/index.html","cd3f7766de4e36850c5d8b68a75df018"],["/tags/Sql注入/index.html","f509794c68272b6ced7f20aa60e080bc"],["/tags/Web安全/index.html","2fc7c9d6fd039bde746dd633a3f82d6f"],["/tags/css/index.html","32488181b639c9f56db99dfd3f61ab7d"],["/tags/hexo/index.html","a1ce80e276630f84995a032481889464"],["/tags/html/index.html","78d19395abc3a25295a0d2f69e0347a6"],["/tags/index.html","466eb94577d2070f86660822d37611ff"],["/tags/sql/index.html","901f9f71d0dbe503a68691df84841325"],["/tags/ssti-注入/index.html","8816615dd69e77455bdfb7e8b2677943"],["/tags/web安全/index.html","9a2c9a516991c8a1bef75e608cdeb3d0"],["/tags/www网站/index.html","8ac69fa394f8f6c9b05f6569d8a40d81"],["/tags/信息搜集/index.html","a9b33bb8b87ae88394f74c502e83e5f3"],["/tags/前端/index.html","52fe610da58fb76d3ab5f8d65dd55718"],["/tags/数据库/index.html","1242f01348c19be64498913bfac13637"],["/tags/文件上传/index.html","41fde0636867b426ae7e3cc3ebdee2a4"],["/tags/易经/index.html","ae57abdb14ed16900424c4781fa9dab7"],["/tags/梅花易数/index.html","e1ddb739315ff1e597ebcb2903f54b79"],["/tags/算法/index.html","2cc70e977aca2abfef6581f653bfd07e"],["/tags/计算机/index.html","fd7be265df225d8d94d21e7068379187"]];
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
