/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","328872e8666a3d409c5094e510270438"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","a9bd3e197659be408e099d47b5c165c3"],["/2023/09/29/Web安全-PHP基础/index.html","903993c57d7f51e705dfa18f37e1ae07"],["/2023/09/29/Web安全-信息搜集篇/index.html","8e9af35d59fb7e2d9cd7f727bc1ff3f5"],["/2023/09/29/虚拟机快速自建web环境/index.html","7c30496141e06f226552e912a8ea45f0"],["/2023/10/04/前端基础/index.html","d6255a237d470059fed502a448651b77"],["/2023/10/05/Mysql数据库基础/index.html","9159f67ba09ad0b0829fa218708a1f93"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","d0c5072fcc3b5c8634479107a062243b"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","43ec37c98978a1d10013f5ce2f039d06"],["/2023/11/05/Javascript基础/index.html","255a5066a451a65380ae8defeabcc447"],["/2023/12/06/Web安全——SQL注入篇/index.html","bdc2893eb03c9d4c500ea83990d0b894"],["/2023/12/07/SQL注入-盲注/index.html","98306830ff0d5581d179bb979378e9dd"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","1621ec6d11cc82453df70dc8fad6b152"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","67180b211202b753264b68c347c1a10b"],["/2024/06/12/Python-Flask模板/index.html","20828a1d36bbbb1c4f7932772c222ddf"],["/2024/06/14/CTF-MISC-杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/06/14/CTF-MISC-杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/06/14/CTF-MISC-杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/06/14/CTF-MISC-杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/06/14/CTF-MISC-杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/06/14/CTF-MISC-杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/06/14/CTF-MISC-杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/06/14/CTF-MISC-杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/06/14/CTF-MISC-杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/06/14/CTF-MISC-杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/06/14/CTF-MISC-杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/06/14/CTF-MISC-杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/06/14/CTF-MISC-杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/06/14/CTF-MISC-杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/06/14/CTF-MISC-杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/06/14/CTF-MISC-杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/06/14/CTF-MISC-杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/06/14/CTF-MISC-杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/06/14/CTF-MISC-杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/06/14/CTF-MISC-杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/06/14/CTF-MISC-杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/06/14/CTF-MISC-杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/06/14/CTF-MISC-杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/06/14/CTF-MISC-杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/06/14/CTF-MISC-杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/06/14/CTF-MISC-杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/06/14/CTF-MISC-杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/06/14/CTF-MISC-杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/06/14/CTF-MISC-杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/06/14/CTF-MISC-杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/06/14/CTF-MISC-杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/06/14/CTF-MISC-杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/06/14/CTF-MISC-杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/06/14/CTF-MISC-杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/06/14/CTF-MISC-杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/06/14/CTF-MISC-杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/06/14/CTF-MISC-杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/06/14/CTF-MISC-杂项/index.html","6c7747072009551fec874561b54834bb"],["/2024/06/15/Web安全-文件上传绕过/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/06/15/Web安全-文件上传绕过/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/06/15/Web安全-文件上传绕过/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/06/15/Web安全-文件上传绕过/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/06/15/Web安全-文件上传绕过/index.html","a58f7094db77b58b4633992c034b3cab"],["/archives/2023/05/index.html","f0c0d50bd03f2f08f87f5019e0320341"],["/archives/2023/09/index.html","8f0a7dc4447c4acf233aed45ab63247e"],["/archives/2023/10/index.html","c22ad29b69a33f91d9fddacbe7745038"],["/archives/2023/11/index.html","e3c99d385e4f62daa1082f16045bff84"],["/archives/2023/12/index.html","bc17432239fa90a3deac4fbb844cf91a"],["/archives/2023/index.html","ff9b3525d2b77b4e4cae2c82ec28aa91"],["/archives/2023/page/2/index.html","2f6c8315ca4827a82409a55d0752214e"],["/archives/2024/06/index.html","c1c1679420c97719af00ec3cd1924a07"],["/archives/2024/index.html","2bd0b6e0a9a5ea0e770e21965dc9e4ab"],["/archives/index.html","0c21911fc2b384876b5e5ea1e101480c"],["/archives/page/2/index.html","f9e46ab8850a7f3b6b052e5c793e07cb"],["/categories/玄学/index.html","3d1809c1666e7e28338918acef1cfbf3"],["/categories/网络安全/CTF/index.html","dc0d40533c5d8cdc4fb16796e5a7dcf9"],["/categories/网络安全/index.html","c8f332cbcc7a2ac9d587697a084f61af"],["/categories/计算机/index.html","b0500b9eab3316a3acb71b76d21ff2ed"],["/css/index.css","82a56cbb4e645d542e289c23999a148e"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","8cb34ba26d2bb76584541136f9b0aad5"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","44da94a3cd06ff0ad3b8a82ec8062e9d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","ef488863fc3351a67cba277628a64476"],["/sw-register.js","601dcaa83c4726c87849868ea0b46f60"],["/tags/C/index.html","47ed62e9e5ff594179e565053d4fc04d"],["/tags/CTF/index.html","4b143e20f9a81cbab71cc8950354dc3a"],["/tags/JS/index.html","3a78080305f34f17ea4cb76e211cee43"],["/tags/MISC/index.html","9ff51a56b367900612ca5107f68cd683"],["/tags/MySQL/index.html","5148f9d018c62df4d12814f3a2b422e7"],["/tags/PHP/index.html","613d0cd0484f35a9db915c005de080eb"],["/tags/SQL注入/index.html","832468f5bc093e3a946ab726435c9c62"],["/tags/Sql注入/index.html","7c4500c46229327023ea4a8036e453d4"],["/tags/Web安全/index.html","a695e45d042a0b8905be23f745650ac9"],["/tags/css/index.html","05ce5f13c671eef25c8076db758a0e97"],["/tags/hexo/index.html","7daf96df9d5a8a2e534697e585f578c2"],["/tags/html/index.html","f12ec2f99ad18f7459db9e4bb03d472e"],["/tags/index.html","e0487c2fddcaded47de9445dc053e39c"],["/tags/sql/index.html","6c25e72ee068da6e066ac39d443ca088"],["/tags/ssti-注入/index.html","e98b7d0a5b064bcd5ce895f3c6f9b247"],["/tags/web安全/index.html","2829599b635c2c59c71a3b6ee12ccbcc"],["/tags/www网站/index.html","bb5dea7c70a12da9f66d276d00c948b0"],["/tags/信息搜集/index.html","35969835a60cc528237c1198d47c9a4d"],["/tags/前端/index.html","098af444ed3fcc444d7955e63c881f6a"],["/tags/数据库/index.html","610cbf12bf693fdcd3f569144e7fef62"],["/tags/文件上传/index.html","4907c24e245172170357ff788a0fe2c1"],["/tags/易经/index.html","75e81adcce883cebf25df6e3d27518c8"],["/tags/梅花易数/index.html","f375535c3b95665dfc9f789d151fe416"],["/tags/算法/index.html","2baa8f99000e2273fd621da73c4c5ec6"],["/tags/计算机/index.html","3fbb63843cb230c2482f7567fcd48d63"]];
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
