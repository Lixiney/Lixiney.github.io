/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","36f6de8684ba06881114b0ed5339b4a0"],["/Ajax技术-前后端交互/index.html","bed2e4af5b53be4842c193cc36504c5e"],["/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/CTF-MISC杂项/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/CTF-MISC杂项/image-20251128215529315.png","0cc02a6704d92066e94a5cdc7ae60b56"],["/CTF-MISC杂项/image-20251128215627441.png","03abc1b6bfd76a9a20f9db025418ad8c"],["/CTF-MISC杂项/image-20251128215714901.png","bc369487e010b2137be55fa61d2d48b2"],["/CTF-MISC杂项/index.html","a4a05dc4e59716f4b9825e5eee034b03"],["/CTF-PHP代码审计/index.html","9091b31b895e4d4145dd6a00ee0a8ead"],["/JSONP-漏洞/index.html","13f48ff03e5b408b7a3bf4e8c5275067"],["/Mysql增删改查基础/index.html","e8e3dd1c10b048e5385b201c2cdab1a4"],["/PHP代码审计-反序列化漏洞/index.html","9dae50124db0e900c25b76a36082a6e5"],["/PHP反序列化-WriteUp/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/PHP反序列化-WriteUp/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/PHP反序列化-WriteUp/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/PHP反序列化-WriteUp/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/PHP反序列化-WriteUp/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/PHP反序列化-WriteUp/index.html","bde88fb0f53cdb1f74d42ebfa2a94590"],["/PHP文件包含-伪协议/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/PHP文件包含-伪协议/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/PHP文件包含-伪协议/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/PHP文件包含-伪协议/index.html","24082a80027dcc98f7fb3f81c121e3b3"],["/PWN-入门基础笔记/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/PWN-入门基础笔记/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/PWN-入门基础笔记/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/PWN-入门基础笔记/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/PWN-入门基础笔记/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/PWN-入门基础笔记/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/PWN-入门基础笔记/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/PWN-入门基础笔记/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/PWN-入门基础笔记/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/PWN-入门基础笔记/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/PWN-入门基础笔记/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/PWN-入门基础笔记/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/PWN-入门基础笔记/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/PWN-入门基础笔记/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/PWN-入门基础笔记/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/PWN-入门基础笔记/index.html","0a460f37d14630683c3ae5162b303643"],["/Python-Django开发/index.html","15165a9cef652ceb4b65a1cf28d8565c"],["/Python-PyMySQL/index.html","14446ed8154956165879472c9d581906"],["/Python-列表、元组、字典、集合/index.html","10d85665bf9bae6c88e75cb0994edeb6"],["/Python创建env虚拟环境/index.html","d78289657c944394d2452928d94d5d2a"],["/Python开发-Flask框架/index.html","3144969fcde516b9ed76a6d31631df5c"],["/SSTI模板注入漏洞/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/SSTI模板注入漏洞/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/index.html","d9381fc82691011e8d3d627f4ea2523f"],["/STL库（一）-Vector/index.html","2efa9ff02dc4373ea02cccdd08e2e6d0"],["/STL库（二）-Pair-x-y/index.html","19a9ca2885fd38988dc28d46404634eb"],["/Sqli-Labs-通关文档/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/Sqli-Labs-通关文档/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/Sqli-Labs-通关文档/index.html","e621bcb1c19788f3365462a5bf3ce67d"],["/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/Web安全-信息收集/index.html","f1893a226ecebc6238db27bdab202d6e"],["/XSS-labs通关文档/index.html","6718828bcd3077ecd4d201425bed4151"],["/archives/2024/09/index.html","7df569944a51d21585f4b75e2642df4c"],["/archives/2024/index.html","439b41dee7d04b336ddb16f13e5b560e"],["/archives/2025/06/index.html","e76f3cc30b411e9fd1bc4b5b7f321d47"],["/archives/2025/07/index.html","4fcb70908434d515cf3d7d08e6237083"],["/archives/2025/08/index.html","0921372bd43be30e1213294280c2c941"],["/archives/2025/09/index.html","7c4db3439ca5d9efc3b53d4a1b776226"],["/archives/2025/10/index.html","e98fe39fb06052ce204eafa6f1913eac"],["/archives/2025/11/index.html","356ced6db6088406ffe6dae2abec84d5"],["/archives/2025/index.html","973528e187529c21f2168c41e15507fc"],["/archives/2025/page/2/index.html","9f306ab77cb3d1005dc123e86018f308"],["/archives/2025/page/3/index.html","4d06704769b86e0475004dddd1dc55f9"],["/archives/2026/01/index.html","d0ae83019f3b9e7849ae1adcc46e6319"],["/archives/2026/index.html","a5cb1cd75e908364ad654cef0409c0be"],["/archives/index.html","0b541ff63f0e4d17c7bafdf8c8b125eb"],["/archives/page/2/index.html","fe8f1d0d50ef420d3b18421bade581af"],["/archives/page/3/index.html","1b32baa41c921e0dbd2d3cc400c550fa"],["/categories/WriteUp/index.html","7ca182d52bad0e8c196be356e49a1e1f"],["/categories/index.html","0bd7f3d4350c946a9896d0bd7f21e899"],["/categories/web安全/index.html","2a2dee7497889d6d7ff9e998a0aa8c5f"],["/categories/开发/index.html","c05ab13b489b508a22417cab13cf4466"],["/categories/网络安全/index.html","c358fe26ffac10f69334155b1c602a20"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","0d6c8d30cfa8c169d5f85ae331c118cb"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/fluid.png","8423b3728cf6badec63fc07e807f577c"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","5cf2d56baf1f75cbf19bf93db7521bf4"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","2d65e4b013f5e381795867180a44ce0c"],["/page/2/index.html","d0914809551bfd8073b483c2ed0f701c"],["/page/3/index.html","26fb0c9fe6103f47a06b5a9190279123"],["/sw-register.js","bd1b8acbb9fe7e443d69f38ff54d1bf7"],["/tags/C/index.html","6195b07ff4898e44ed21c3296c8b6451"],["/tags/CTF/index.html","a0d303c268123d1aba6397b76fb5a768"],["/tags/Django/index.html","4f6e609446add3c94b025e6cefbdf524"],["/tags/Flask/index.html","8de4dfb66502a2b11d5cbe8b3151631e"],["/tags/MISC/index.html","8ea9b411813cf63d898b375c8b04ea7e"],["/tags/Mysql/index.html","7e3f534645b575351cabefd16e873301"],["/tags/PHP/index.html","4cbb4b773eca23aaa7a883e2cf513abb"],["/tags/PWN/index.html","f975f154764400a226b280f16459af2e"],["/tags/Python/index.html","27a040b0d96140121d3fad5f3b1dc7a9"],["/tags/SQL注入/index.html","d4b9b4042790a98d7ef17553782d8f5f"],["/tags/STL/index.html","8f1149587cf9f18b4bf9f2d9ce423c09"],["/tags/WriteUp/index.html","e8244f23bf6f709260530ab5a89e9282"],["/tags/index.html","25ffd785fb43c08341f1ecf647afb7c2"],["/tags/jsonp/index.html","29a56f4abaf6eeccf0f1eaf8b5265036"],["/tags/ssti/index.html","ce10317b68948bd5e212dd4f311e4c2a"],["/tags/vue/index.html","3fd7a3db68c3ff460412d2d8eb14854e"],["/tags/web/index.html","76b6afc7bc162867467120513e66e946"],["/tags/web安全/index.html","6c1ff1cfbce6891d1c1c858573ec3f8d"],["/tags/xss/index.html","d307d8de789bc0546eb7d1994608675d"],["/tags/代码审计/index.html","069fe81885e1e8c770d1e8de8be094c6"],["/tags/前端/index.html","0f79b2fe5d1b827dcf76d93d93c94bde"],["/tags/反序列化/index.html","698c1dd97fd988e8bcc87c381c1976b1"],["/tags/同源策略/index.html","52d344ad91f125ee9aa05b34730d5d5f"],["/tags/命令执行/index.html","d8c15cf0a4a0e03d9190b3fdaac0c952"],["/tags/开发/index.html","9401fccace1b04096b4bbe6cab316908"],["/tags/数据结构/index.html","d6abc9bbbdfc68e14e6faf873fa4daf9"],["/tags/杂记/index.html","9ca1428fc213e7eb1d76e8f4c05f530c"],["/tags/算法/index.html","c0f71d97930a89e8a20ceb1ce4cf63bc"],["/tags/网络安全/index.html","d9c4f4fa1beb380b44d3db15a3f018f8"],["/vulfocus-命令执行漏洞WP/index.html","ca331c3dc6f2be82d0695cf9322d9819"],["/前端开发-CSS层叠样式表/index.html","a9cb62ff67329bc9d8a279962457a5f5"],["/前端开发-VUE/index.html","05568e2fd06baf6082783c13d3dd2241"],["/同源策略/index.html","4e7dcaee9a3f3362c8c9c2de501f5051"],["/命令执行WAF绕过/index.html","690f115d2b92c00ec4fc08635e51fc89"],["/杂记/index.html","2f0a8944d625a37aa7f79d475c25a636"],["/跨站请求伪造-CSRF/index.html","935470f0bc0fd0546fe4d5ce828eaad2"]];
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
