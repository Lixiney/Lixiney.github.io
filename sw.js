/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/14/渔樵对问-【上】-康节先生/index.html","301223bfcfa267c64819a549177fdf9d"],["/2023/05/14/渔樵对问-【下】-康节先生/index.html","a8d33d2daeae3835cdf502d84ab168dd"],["/2023/09/29/Web安全-PHP基础/index.html","dd65f51db94f662010b6a0b3f42df5ca"],["/2023/09/29/Web安全-信息搜集篇/index.html","9643665ba3f1d93bcce5abc5abe968a1"],["/2023/09/29/虚拟机快速自建web环境/index.html","dce6209475aa299d3c8cdc30ae4829c1"],["/2023/10/04/前端基础/index.html","c908be6c89f7e4bcfe4f273e18a5fc6e"],["/2023/10/05/Mysql数据库基础/index.html","cd970634c9bd88259e181fc17dac078a"],["/2023/10/22/C-STL库（一）Vector【动态数组】/index.html","f008e1b889774e21416d21bf8bccc1ce"],["/2023/10/22/C-STL库（二）Pair-x-y/index.html","92e8f533efcbdb12d866917adce1342a"],["/2023/11/05/Javascript基础/index.html","9b415c0df9d148749a389b5a7726f2fe"],["/2023/12/06/Web安全——SQL注入篇/index.html","bf9309a124f2cd6a14a62c1872d6b12e"],["/2023/12/07/SQL注入-盲注/index.html","81a04d16df5f83389403e7c8df65170c"],["/2024/06/08/hexo-使用相对路径引入图片/1.png","faa233fda6da895ffba56c9b9ca005cd"],["/2024/06/08/hexo-使用相对路径引入图片/2.png","f638762b5506b2fb92db076cf0f8f588"],["/2024/06/08/hexo-使用相对路径引入图片/3.png","95e4a717bdee54b4e1d9f3ba1031fc47"],["/2024/06/08/hexo-使用相对路径引入图片/index.html","6a6965b83bd3d16e399dbcb9682c27d1"],["/2024/06/12/PHP-MySQL-登录功能实现/index.html","3d7c07da3cdf644d8b4bffb163da5669"],["/2024/06/12/Python-Flask模板/index.html","9d32c38c1db3ce0b975b7c05582038a5"],["/2024/06/14/CTF-MISC-杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/06/14/CTF-MISC-杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/06/14/CTF-MISC-杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/06/14/CTF-MISC-杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/06/14/CTF-MISC-杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/06/14/CTF-MISC-杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/06/14/CTF-MISC-杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/06/14/CTF-MISC-杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/06/14/CTF-MISC-杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/06/14/CTF-MISC-杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/06/14/CTF-MISC-杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/06/14/CTF-MISC-杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/06/14/CTF-MISC-杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/06/14/CTF-MISC-杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/06/14/CTF-MISC-杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/06/14/CTF-MISC-杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/06/14/CTF-MISC-杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/06/14/CTF-MISC-杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/06/14/CTF-MISC-杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/06/14/CTF-MISC-杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/06/14/CTF-MISC-杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/06/14/CTF-MISC-杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/06/14/CTF-MISC-杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/06/14/CTF-MISC-杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/06/14/CTF-MISC-杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/06/14/CTF-MISC-杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/06/14/CTF-MISC-杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/06/14/CTF-MISC-杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/06/14/CTF-MISC-杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/06/14/CTF-MISC-杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/06/14/CTF-MISC-杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/06/14/CTF-MISC-杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/06/14/CTF-MISC-杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/06/14/CTF-MISC-杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/06/14/CTF-MISC-杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/06/14/CTF-MISC-杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/06/14/CTF-MISC-杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/06/14/CTF-MISC-杂项/index.html","0c932a38ecee858e943c65b6c13183bf"],["/2024/06/15/Web安全-文件上传绕过/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/06/15/Web安全-文件上传绕过/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/06/15/Web安全-文件上传绕过/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/06/15/Web安全-文件上传绕过/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/06/15/Web安全-文件上传绕过/index.html","afef1b0f3812d4df8d07231bbfa8beca"],["/archives/2023/05/index.html","190f428fb1c62bf6d60959e5b7b789c2"],["/archives/2023/09/index.html","02743249295f13845cdae3071922a865"],["/archives/2023/10/index.html","212681bfc0b24c5bac7f1c0796b6b65f"],["/archives/2023/11/index.html","f69863bdb137e7c84f5da99f3ee92d27"],["/archives/2023/12/index.html","85bc63f6ce26965297afb309289c5ce8"],["/archives/2023/index.html","5c60e29b4392e4b053a9f2e535fd14b7"],["/archives/2023/page/2/index.html","2eaa93b609bbc06b90a68444b21c2f97"],["/archives/2024/06/index.html","1dce7439516b1e658231d285f5572b0d"],["/archives/2024/index.html","a5fdb10f240fdd07b07451fd76902d0e"],["/archives/index.html","bc12d2c27d9a39abb993786b213ff6ba"],["/archives/page/2/index.html","c9113bb93bdb8e2a6562ca1912101b08"],["/categories/玄学/index.html","024c6762f1a7c5feb482e93239196aff"],["/categories/网络安全/CTF/index.html","960f5c5a152289611133fc54f41b82d8"],["/categories/网络安全/index.html","645c1487af95f9d4a4a440c5c9d9c5bd"],["/categories/计算机/index.html","eb3d8a6378861c864e67349d7989f848"],["/css/index.css","64de6774f719b5b8b67965ed8e08f96d"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","b04becaeec6055f37cdae425a73a8ca1"],["/img/2.jpg","045432ad4a9bdc91bf62c9b97f233c3a"],["/img/3.jpg","8cf434b0d2318d3da901442e46f35942"],["/img/4.png","cf4e4eec4e41787ad9e3961d72066562"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","928122b2e6ab6489edba6215131ebac4"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","a0bef0ab69a7390f8e621b00dc198847"],["/sw-register.js","ac956be739e5ce374be3250b009926d7"],["/tags/C/index.html","c5c6dc78fcbb230262c9a585cfa65387"],["/tags/CTF/index.html","6e7694747f41518f2fe7533c6f435937"],["/tags/JS/index.html","c707a41543c6af5619fdb6300ae531e0"],["/tags/MISC/index.html","309086c0323938d2b57b9ee2908dc6c4"],["/tags/MySQL/index.html","937aca3abf125ebe35d129a1c3e3d2a0"],["/tags/PHP/index.html","d5c801cff62a1bde62ad4f7d056e15ab"],["/tags/SQL注入/index.html","3bcc1303d3597eb4d56ba4d5240fb9ee"],["/tags/Sql注入/index.html","7e8e5c2ab3eaa1a880d2830b2a3129b8"],["/tags/Web安全/index.html","5a56212afeb16bf8d02ddbadd8bab50e"],["/tags/css/index.html","b4a64e10a618356e55803a0763902c01"],["/tags/hexo/index.html","cedb1d44bbb84a0f2fff7c373353f545"],["/tags/html/index.html","7ed3d20f315a1bef548dcb34e7db5edf"],["/tags/index.html","35393bcca34883d100acb3f44c319ca1"],["/tags/sql/index.html","36fb75c87ed7c9cc09ede753968b0da7"],["/tags/ssti-注入/index.html","ccc970b5654b606f391f117d742bc85a"],["/tags/web安全/index.html","db43bd54e7722741f8d96813f3d55afd"],["/tags/www网站/index.html","4f1bb6b6b35942f8e9232c11363a8a8d"],["/tags/信息搜集/index.html","2ab80e61ef0cada3efd3811882c82eda"],["/tags/前端/index.html","ab7423b2090cd4404ad49e9a67191e78"],["/tags/数据库/index.html","32430edb69725121c914f76d5fbf1a25"],["/tags/文件上传/index.html","9d96481eea3873ba8c8b895cd8ba3ac5"],["/tags/易经/index.html","3cf6895902d0cc59172f63428c1d7984"],["/tags/梅花易数/index.html","eefb3714e2188449e43c5ec23f639ac4"],["/tags/算法/index.html","6fb7aa6e1c80baa40139ff0ec4b0a51d"],["/tags/计算机/index.html","e4afc31757f3a220634c9d8beac8d8c1"]];
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
