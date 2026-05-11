/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b59f9ed0411ba463c206dc6c4019f1b1"],["/Ajax技术-前后端交互/index.html","0faa45f6d88fc363812d452b106b5646"],["/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/CTF-MISC杂项/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/CTF-MISC杂项/image-20251128215529315.png","0cc02a6704d92066e94a5cdc7ae60b56"],["/CTF-MISC杂项/image-20251128215627441.png","03abc1b6bfd76a9a20f9db025418ad8c"],["/CTF-MISC杂项/image-20251128215714901.png","bc369487e010b2137be55fa61d2d48b2"],["/CTF-MISC杂项/index.html","98466c5ca154b4e8a2c5117043284595"],["/CTF-PHP代码审计/index.html","4e3c02be4ea3368f6099a1ff6a038c3a"],["/JSONP-漏洞/index.html","9a78c86c90a4cfc05b3a261862982386"],["/Mysql增删改查基础/index.html","db031704a65643f0e7927fd53b930e81"],["/PHP代码审计-反序列化漏洞/index.html","9831b2c0c2cc1039dee8e6632207c296"],["/PHP反序列化-WriteUp/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/PHP反序列化-WriteUp/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/PHP反序列化-WriteUp/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/PHP反序列化-WriteUp/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/PHP反序列化-WriteUp/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/PHP反序列化-WriteUp/index.html","ba21d8cfab2681c9e01f5f2c8fee13d1"],["/PHP文件包含-伪协议/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/PHP文件包含-伪协议/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/PHP文件包含-伪协议/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/PHP文件包含-伪协议/index.html","eddd610761f1b2b3dc1e1d232627a2ce"],["/PWN-入门基础笔记/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/PWN-入门基础笔记/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/PWN-入门基础笔记/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/PWN-入门基础笔记/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/PWN-入门基础笔记/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/PWN-入门基础笔记/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/PWN-入门基础笔记/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/PWN-入门基础笔记/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/PWN-入门基础笔记/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/PWN-入门基础笔记/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/PWN-入门基础笔记/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/PWN-入门基础笔记/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/PWN-入门基础笔记/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/PWN-入门基础笔记/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/PWN-入门基础笔记/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/PWN-入门基础笔记/index.html","1e0618bdc2671553d94f621bf45ba750"],["/Python-Django开发/index.html","f2eb9eab2b809f2d2edac03b970bbcb6"],["/Python-PyMySQL/index.html","52b95f7714fb66d3a68b515fb046e18a"],["/Python-列表、元组、字典、集合/index.html","a0f9dda7c13a46e4e32e2ccaaec241fb"],["/Python创建env虚拟环境/index.html","61cf21ee9a828a221c19315f24e6226c"],["/Python开发-Flask框架/index.html","770911685eb1e66cdff164e86df95a51"],["/SSTI模板注入漏洞/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/SSTI模板注入漏洞/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/index.html","32325e5fd964cb673809f440dfa50c4a"],["/STL库（一）-Vector/index.html","f52db64f5982e7cbbf671bde2becb017"],["/STL库（二）-Pair-x-y/index.html","52299e2aef4e661ff5ae3d003b3f3e2d"],["/Sqli-Labs-通关文档/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/Sqli-Labs-通关文档/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/Sqli-Labs-通关文档/index.html","6fb409fbd1ac46fd267c895a741b80dd"],["/Vulfocus-靶场记录（一）/index.html","6bf697e2359d72b5e783c0fe9499143a"],["/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/Web安全-信息收集/index.html","0244226dd4f5d42ae7596ce1d25800d6"],["/XSS-labs通关文档/index.html","22f89c730029f54aeaeb39f31962480d"],["/archives/2024/09/index.html","f01e3eb29496b69bfad8e37a057f59af"],["/archives/2024/index.html","97f11aba09db14f64f474caaa0283388"],["/archives/2025/06/index.html","a8c7bef520d4ac1d980e6b7df26a9452"],["/archives/2025/07/index.html","11319f61f27cf55ed49bcc36f7854a55"],["/archives/2025/08/index.html","c09ff5ffe95134eded9f9f758a1a4893"],["/archives/2025/09/index.html","597a1759e00f60ee04cb44d5109c6405"],["/archives/2025/10/index.html","4df5f79e8a77990c40183d73eb35744c"],["/archives/2025/11/index.html","a3708bf6ee7c5519d3950b25a0c0386c"],["/archives/2025/index.html","a3976d4d65347b6b79aead4e4a2bcbdc"],["/archives/2025/page/2/index.html","71a8da2a299d99328fcb6ad9689f587b"],["/archives/2025/page/3/index.html","59f641021a597ca04327659e7125e43b"],["/archives/2026/01/index.html","099aaf9702727676451f2b510b275d31"],["/archives/2026/03/index.html","6df219ef3a1079c88d993eef3354e8fc"],["/archives/2026/index.html","142608506cd839f517af873c2bb4a331"],["/archives/index.html","20e21ac24dc2915c36374c93f671acdc"],["/archives/page/2/index.html","2668ba3dca90fc52cde1b9b0102ec7cd"],["/archives/page/3/index.html","4488838afa7211d1a99b64c34bdb8855"],["/categories/WriteUp/index.html","6bc7c7441f26aab3b41cbf2dcff4c931"],["/categories/index.html","58dda3080ccdda905baa90fab8b5e819"],["/categories/web安全/index.html","a191e2512300b4bb0162dde0253bc392"],["/categories/开发/index.html","45dd1360c947daac3b5f180ff5bb0df2"],["/categories/网络安全/index.html","fe57f7688854d1451f5b7b54c444ebf5"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/fluid.png","8423b3728cf6badec63fc07e807f577c"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","2dce42975c295fedd525e9d8fc6b3927"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","5e6b16914557b899cc98deda5c705e4c"],["/page/2/index.html","7fd14edcff53adc9f3e57f978e7e43d4"],["/page/3/index.html","0684998213e68e0209606ef300044d2b"],["/sw-register.js","69efb121c317e51602c69b5042d0c1b4"],["/tags/C/index.html","983d1fa3ceac954707c6cc41132e62f6"],["/tags/CTF/index.html","130f0050b6477e59209e0d7462ca8d99"],["/tags/Django/index.html","540a749e78cc2d6b5f24ca1b964c679e"],["/tags/Flask/index.html","4e38e723454bbcaa4a19ae9568ad953b"],["/tags/MISC/index.html","fd1690929b1047f11cf0189d4e55daaa"],["/tags/Mysql/index.html","153563ceb727f15571901d66fbb13375"],["/tags/PHP/index.html","79b51b1e3199f51e84e0bed1bca0547e"],["/tags/PWN/index.html","f676cc4953cb9dd8f4df11960856deef"],["/tags/Python/index.html","dd9daa187211009151d44e53e9152cf7"],["/tags/SQL注入/index.html","5b6e475c62bc48a5842bc7953cac641e"],["/tags/STL/index.html","8055d536f9dd15fba45f7ea9593f05a6"],["/tags/WriteUp/index.html","303d22c172014ea9ff7d0acda95147e8"],["/tags/index.html","78293bf06c293df6c496c0fc0ea5f67e"],["/tags/jsonp/index.html","780088ff005cd65928258fa9ca58ef08"],["/tags/ssti/index.html","4b8817a2a39ac938fec55993627a6226"],["/tags/vue/index.html","cb9baaae9a8479f9a0c6546f50e60a1d"],["/tags/web/index.html","00acb7b01d7b6b2deae8c48578cecaa9"],["/tags/web安全/index.html","8a0812c1679b969909023736b7d5c510"],["/tags/xss/index.html","85937419425cd8ba4040b93e592b9c32"],["/tags/代码审计/index.html","c94c73558bccedd3a396c8ab65b82598"],["/tags/前端/index.html","3081b1a395b258866ef4234203e326f3"],["/tags/反序列化/index.html","e5516b8de1cc7f48c30c83f88d683f90"],["/tags/同源策略/index.html","000d653b5f8f60add92168aa930a4551"],["/tags/命令执行/index.html","858bc1fb9e0596ab3e944beac6cb55a7"],["/tags/开发/index.html","5008a6ee375101f9a390f34f7a1e8419"],["/tags/数据结构/index.html","032f6ab366f55a90e0cc225688173adb"],["/tags/算法/index.html","767826ba94f1fdf1dc873c6b3bf35908"],["/tags/网络安全/index.html","dc78ef51179aea70318f667f482b7585"],["/tags/靶场/index.html","450a03ffe53bb851029585b691065fba"],["/vulfocus-命令执行漏洞WP/index.html","2895578f58b7653a25777c7a42c1d81d"],["/前端开发-CSS层叠样式表/index.html","57345fbab7fa5b390bd10804fbed9b8d"],["/前端开发-VUE/index.html","1aaee41735a541ce0daa85ddc169d727"],["/同源策略/index.html","f528baaef94c8adac5a94744a9398c23"],["/命令执行WAF绕过/index.html","4f30fea39274bc830b79e289167d06e4"],["/跨站请求伪造-CSRF/index.html","476e719cc92b9fc31d0eb94ebbf49fd7"]];
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
