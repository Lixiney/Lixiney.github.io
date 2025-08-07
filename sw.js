/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e134cbae93e1b2052eeff424b8327563"],["/WriteUp/index.html","ed05d75b59e98d88974fb6ee69f2f620"],["/anzhiyu/random.js","4d499c799770f3844368f5ebe812ac0a"],["/archives/2024/09/index.html","1dc09d5e5d3139108fcd4a34988272ae"],["/archives/2024/index.html","2d92f0f614cdfa0e7065e207a69ada6f"],["/archives/2025/06/index.html","8a5007d526aa95924bbc7e232cef0fe2"],["/archives/2025/07/index.html","e9d204c30d110537c89f1491a9daf23c"],["/archives/2025/index.html","ec1e14b62e1a6e769b9a603979238e8b"],["/archives/2025/page/2/index.html","68ddd479ca02f8172193140d544dfb1c"],["/archives/index.html","ebe40eedf5077a02e698b208f4635c5e"],["/archives/page/2/index.html","9248a9c0f08568c402252aadfa12d975"],["/categories/WriteUp/index.html","0f3656364962e6b0d5678f59a8100aaf"],["/categories/开发/index.html","400a2a55cef57e5d2997ede813a00391"],["/categories/网络安全/index.html","5c808da5c193c7ac5b3b3e8e4574470a"],["/css/index.css","e314ad250104e2ae098caebbfcac1d5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/index.html","4304d49a5475374dcc0a07aa284208de"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","5e46ef2a6caf9e3430fe9dc22dd30075"],["/page/2/index.html","d7521c70fafacd2b778325231747f5e3"],["/posts/2bf21027/index.html","ec1a5f9e0fcfd35b0f04cc5e1411425e"],["/posts/2dff4083/index.html","dd354daa7ac178e0b44e1c5d47066956"],["/posts/3b86160f/index.html","91d2ba0e6832d58ed5b4fb1725053942"],["/posts/483d9cef/index.html","a1391e7f17e1f78a9ad12689af06c786"],["/posts/5fe44501/index.html","ccdbcc9a8c6b80d15fff411d59250cc3"],["/posts/83c1bda7/index.html","8a2e0b8897be2922c1f15d7ae73c29ec"],["/posts/879a70bf/index.html","2b666b3ee2b5d05f27769c789cf2a99f"],["/posts/98d7f58f/index.html","7b3ff15a1cacb9e30144573f6fc582bf"],["/posts/9f9af3f5/index.html","bf95ff21d0e19e9bf40bbe8c11416ad5"],["/posts/afe38b32/index.html","9ff5a4837ed31e23dfa1225f3a585d18"],["/posts/b710732f/index.html","b94802bae562aa056d861e7025395ffb"],["/posts/bcdf8f30/index.html","5f9eb9186254360b23cf3766fff6482a"],["/posts/d708c66/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/posts/d708c66/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/posts/d708c66/11.png","632743aa25dd12abd402b9cbd07922db"],["/posts/d708c66/12.png","f234877bfb7b8c589922442b3ac34230"],["/posts/d708c66/13.png","409afcfab151d464fc9b0f72fba0a024"],["/posts/d708c66/14.png","1d5586234c96048e17ad23833d85351e"],["/posts/d708c66/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/posts/d708c66/16.png","0e75817718fbec22671ca7640d0d14bf"],["/posts/d708c66/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/posts/d708c66/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/posts/d708c66/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/posts/d708c66/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/posts/d708c66/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/posts/d708c66/21.png","1f71f461f3633cd57c6269411fe29be7"],["/posts/d708c66/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/posts/d708c66/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/posts/d708c66/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/posts/d708c66/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/posts/d708c66/26.png","828502176f804a0a06d9f582ea27b88e"],["/posts/d708c66/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/posts/d708c66/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/posts/d708c66/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/posts/d708c66/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/posts/d708c66/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/posts/d708c66/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/posts/d708c66/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/posts/d708c66/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/posts/d708c66/34.png","4010e0abeb962759213178015ee9e9d2"],["/posts/d708c66/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/posts/d708c66/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/posts/d708c66/6.png","89da246e43ebbfdab47811875bccd2ae"],["/posts/d708c66/7.png","551ef643af504f9d22fda0085c200706"],["/posts/d708c66/8.png","e669c8a27a2bb300202df722b8e9354b"],["/posts/d708c66/9.png","44a9b3d8245ad8bea494519e99142e39"],["/posts/d708c66/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/posts/d708c66/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/posts/d708c66/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/posts/d708c66/index.html","abca3ac84628051eea7890d0d7902216"],["/posts/db284c9b/index.html","3c1dfa8045f5ff7a5ae159b0d1c56dd0"],["/posts/df8caf15/index.html","3762cb540bc61aa28ce516b66106acf0"],["/sw-register.js","ca42f827c32953081eb8e13d68c3ac1a"],["/tags/C/index.html","cbc768a3e75ccbfbdebeefa21ca5f3ca"],["/tags/CTF/index.html","bcffe0ab1796fe578cbfed5bb3d3aaa1"],["/tags/Django/index.html","4204d373d311f7705d5e24c047eda159"],["/tags/Flask/index.html","25ff620038abb0e4b286327cb2c32c11"],["/tags/MISC/index.html","ab2d1e6e8320ac34897192f4f59413c1"],["/tags/Mysql/index.html","5f0ca565166bfb32ab3a6dac227d917d"],["/tags/Python/index.html","b92101f05d48be0e51384abd749191e5"],["/tags/SQL注入/index.html","3c81ab4793d4e5c040d36b08bcdbbee3"],["/tags/STL/index.html","96a88a6d8a15bb1c7771477c105191aa"],["/tags/WriteUp/index.html","6478f0b63db9609192a5f23fe551e05e"],["/tags/php/index.html","4d6de902cba0a3a701020ad6ff4083f5"],["/tags/ssti/index.html","e5432a2d414b142e04260760e3a22d92"],["/tags/代码审计/index.html","520f150397fc28079d8e52b6eb8edcce"],["/tags/前端/index.html","96cc66cbad1af19d2103f17cf4051d05"],["/tags/反序列化/index.html","7d9b8db8c354c3826128231acaccb621"],["/tags/命令执行/index.html","71047b7f956ad1b0093480401adece3a"],["/tags/开发/index.html","b2da5902ef734f95521a3488a60f37ed"],["/tags/数据结构/index.html","e53d0e8a1e9b42f610949bcc196fcd4a"],["/tags/算法/index.html","b1f6274b560d3a86c4d736f579aefa67"],["/tags/网络安全/index.html","a045a63e2a39e198ce7a90ea64aae708"]];
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
