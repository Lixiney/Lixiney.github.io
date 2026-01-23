/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","80a0cf4e4e84c8ccdba6f1e51d3e4557"],["/Ajax技术-前后端交互/index.html","69bc59f51b087d1ae6a388cfaabd158e"],["/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/CTF-MISC杂项/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/CTF-MISC杂项/image-20251128215529315.png","0cc02a6704d92066e94a5cdc7ae60b56"],["/CTF-MISC杂项/image-20251128215627441.png","03abc1b6bfd76a9a20f9db025418ad8c"],["/CTF-MISC杂项/image-20251128215714901.png","bc369487e010b2137be55fa61d2d48b2"],["/CTF-MISC杂项/index.html","789703e8803d48941baecd24d259d033"],["/CTF-PHP代码审计/index.html","d22c3009258bd8bbce971ef8bf3461ff"],["/JSONP-漏洞/index.html","80b63610b2551f6fb65e423577ee3ba1"],["/Mysql增删改查基础/index.html","4848b22619eedc4a8aedb54eb116ee23"],["/PHP代码审计-反序列化漏洞/index.html","cf316458f77f5a355b1648f4d69c68a0"],["/PHP反序列化-WriteUp/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/PHP反序列化-WriteUp/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/PHP反序列化-WriteUp/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/PHP反序列化-WriteUp/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/PHP反序列化-WriteUp/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/PHP反序列化-WriteUp/index.html","001be4f137370ef7d54ba54d59f3f6f3"],["/PHP文件包含-伪协议/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/PHP文件包含-伪协议/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/PHP文件包含-伪协议/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/PHP文件包含-伪协议/index.html","d8a46187045bc7abdc6d040a7d394539"],["/PWN-入门基础笔记/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/PWN-入门基础笔记/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/PWN-入门基础笔记/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/PWN-入门基础笔记/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/PWN-入门基础笔记/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/PWN-入门基础笔记/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/PWN-入门基础笔记/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/PWN-入门基础笔记/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/PWN-入门基础笔记/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/PWN-入门基础笔记/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/PWN-入门基础笔记/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/PWN-入门基础笔记/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/PWN-入门基础笔记/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/PWN-入门基础笔记/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/PWN-入门基础笔记/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/PWN-入门基础笔记/index.html","ff5d944bdfa02ccc670a769603ddde35"],["/Python-Django开发/index.html","783dc26180e3ecfc7cada17efe5157fa"],["/Python-PyMySQL/index.html","286215cc9473eced432211c10d2fda8c"],["/Python-列表、元组、字典、集合/index.html","477eb9bbcf69dea96de9dcd39c45740a"],["/Python创建env虚拟环境/index.html","5a39333caa018039402d23bad6612e67"],["/Python开发-Flask框架/index.html","0f7b7f4e31c7d8be05497ac35dd6960d"],["/SSTI模板注入漏洞/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/SSTI模板注入漏洞/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/index.html","d942b2998b15543c4e7c1c9f19ccbe0a"],["/STL库（一）-Vector/index.html","1bb611df17cc7481cff59a5cad5e3163"],["/STL库（二）-Pair-x-y/index.html","0771c42abc21f93fa498d5db7cee8032"],["/Sqli-Labs-通关文档/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/Sqli-Labs-通关文档/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/Sqli-Labs-通关文档/index.html","b45eda65eb5c194203f6351fe55f97d2"],["/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/Web安全-信息收集/index.html","cef663812cbd5d3d2e3bd285177ac28c"],["/XSS-labs通关文档/index.html","c354d5fa62c80c2dc95a3c28f9581f57"],["/archives/2024/09/index.html","83b2489ec242d300f5f621a49d94ce4d"],["/archives/2024/index.html","c300459143a93b627e7ef44a77938866"],["/archives/2025/06/index.html","db4c9fdf046d43d6302cb30a7e663b53"],["/archives/2025/07/index.html","30ac4c77134d84d0865d0176a9fc3bc9"],["/archives/2025/08/index.html","ab5e928d6e002c1654da59c306973783"],["/archives/2025/09/index.html","637cdd0a70360f57fdaf4a519b12f7a2"],["/archives/2025/10/index.html","ef8786f1b1bc9a08913c4d51c9ef2649"],["/archives/2025/11/index.html","c85632cb10b4d1426c06652bb1c1d8f0"],["/archives/2025/index.html","b69258cef055d6fcac5c270a7eaf98f3"],["/archives/2025/page/2/index.html","2fe26d26ff674837464d385afe76ec16"],["/archives/2025/page/3/index.html","05de7d9074ced009859325d351fecedc"],["/archives/2026/01/index.html","4545c55fc4e67bb58ce186f147232228"],["/archives/2026/index.html","f34e2911f1d9435addf090d2e16a378e"],["/archives/index.html","29fe8b2f6264e04e3075820ae8a5f291"],["/archives/page/2/index.html","edbe531e55b0d89477e66e3308fee001"],["/archives/page/3/index.html","0fa815b0a2cdc6bb5fb32348c49d4188"],["/categories/WriteUp/index.html","211d8702f0664730c5087bdecb35e72e"],["/categories/index.html","b4105af13e3cd64a691c520ab3c7f410"],["/categories/web安全/index.html","172a3ee8666a8d1d566fd841f67440e3"],["/categories/开发/index.html","e432ae5ddb6e575c34c81ce98fa7ed99"],["/categories/网络安全/index.html","330f9d457195b2c3fb3171a04e924736"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","0d6c8d30cfa8c169d5f85ae331c118cb"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/fluid.png","8423b3728cf6badec63fc07e807f577c"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","54dc80046af7ecd8bc74862a1607ae3d"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","b61387df299910fa2c86717bcf79a1d4"],["/page/2/index.html","95a9e12a6de20a453a060cfc4f2b98fa"],["/page/3/index.html","3652c4507f415d74599c74b549dba8f8"],["/sw-register.js","43a1430d6c7d8532189437107ca22d8e"],["/tags/C/index.html","512a4f613b87b7066759be184ec02d8c"],["/tags/CTF/index.html","a14586fd5ee15e82a8dd86e4aac6311f"],["/tags/Django/index.html","94af15b0a76cb88342e008af10b37060"],["/tags/Flask/index.html","7bc857342dc1f863f0327d4e78d91ce0"],["/tags/MISC/index.html","c6954b1ceeb8902ec3e6036467432ef8"],["/tags/Mysql/index.html","fb056cf899681765f92b79776a39e70b"],["/tags/PHP/index.html","52d6d1f94924243d31b53826204b8c3a"],["/tags/PWN/index.html","39f5115e91051038686a1845bdea9f4b"],["/tags/Python/index.html","6b9c0bd74b710bd40b04c7021199e126"],["/tags/SQL注入/index.html","84e054675e2f15ed52bb2e021790c2bb"],["/tags/STL/index.html","9e523bbd3eee655975d4f95354a8baf1"],["/tags/WriteUp/index.html","b6c3c1914d10647df8ee5adad5d82593"],["/tags/index.html","296daed043539fb5111e8764dda5470f"],["/tags/jsonp/index.html","a72bf7b39a4c9b703a8c554528b5b0fa"],["/tags/ssti/index.html","501cb647eb645ea440f9a04420bf5740"],["/tags/vue/index.html","bb06b5bebe092828c4dbd927e37ece4e"],["/tags/web/index.html","0617d793c52dbc4cdc05e474ffb57102"],["/tags/web安全/index.html","81d7d0937c099c3cca718637f69ce261"],["/tags/xss/index.html","6543cd6e8fb6f15c5f4f3b883241312f"],["/tags/代码审计/index.html","5d736ca36f9cb6ded650bc65dc03d83d"],["/tags/前端/index.html","1cbdb677b3c75e5af0dfaffa7bf136d7"],["/tags/反序列化/index.html","9410f898604a49e375338c1528654a61"],["/tags/同源策略/index.html","2f3cf15f5987e42ba88d1aa31697b374"],["/tags/命令执行/index.html","802f5e1ed72eae4610dcd7133420e189"],["/tags/开发/index.html","b127d32fa33b0db868a10092f7c7b7fa"],["/tags/数据结构/index.html","b436c5eb4bfe3afeec19dab2bf5ca62d"],["/tags/杂记/index.html","806f30ed7ef77e88aba5b526ddb2a021"],["/tags/算法/index.html","247c21de747bf382738da4d4c4004fc5"],["/tags/网络安全/index.html","256d9e7317946c62a24b5c4be387054d"],["/vulfocus-命令执行漏洞WP/index.html","8415b79bbc0a644b3803d59b381008f1"],["/前端开发-CSS层叠样式表/index.html","a6f6983ba5bafd284df2130ae7d5d889"],["/前端开发-VUE/index.html","e8d3c223ec5a695413bf93411ba8aded"],["/同源策略/index.html","0503e4bf6000ba8fb2c82fee0acbe0a0"],["/命令执行WAF绕过/index.html","c97f0c88e6797513e7e324cba3567c4c"],["/杂记/index.html","affbda2f8270174d593b63dc2b684e4b"],["/跨站请求伪造-CSRF/index.html","d391320e4f9ff4dc2daca0724fa34328"]];
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
