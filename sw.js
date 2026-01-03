/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9a3fba82f26f16f0e77bae10e37444cd"],["/Ajax技术-前后端交互/index.html","1c20fe40d011a5cf66107e3388178af7"],["/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/CTF-MISC杂项/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/CTF-MISC杂项/image-20251128215529315.png","0cc02a6704d92066e94a5cdc7ae60b56"],["/CTF-MISC杂项/image-20251128215627441.png","03abc1b6bfd76a9a20f9db025418ad8c"],["/CTF-MISC杂项/image-20251128215714901.png","bc369487e010b2137be55fa61d2d48b2"],["/CTF-MISC杂项/index.html","707b0bb479672e538fdec20e63d11bb0"],["/CTF-PHP代码审计/index.html","9f5dcc0078324a64c2462377a0dedd91"],["/JSONP-漏洞/index.html","d8c976c3ceb5560c30f20db10789c1ee"],["/Mysql增删改查基础/index.html","8bd6431e8ba97e0d7a7386347a3dd88d"],["/PHP代码审计-反序列化漏洞/index.html","b8be906a8e68e5b96c328b134c1e8c55"],["/PHP反序列化-WriteUp/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/PHP反序列化-WriteUp/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/PHP反序列化-WriteUp/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/PHP反序列化-WriteUp/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/PHP反序列化-WriteUp/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/PHP反序列化-WriteUp/index.html","f6a1661c7b22962fc5648c4292096e69"],["/PHP常用一句话木马整理/index.html","c7408f68ae49c9aeadd09fd62ea29e2f"],["/PHP文件包含-伪协议/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/PHP文件包含-伪协议/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/PHP文件包含-伪协议/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/PHP文件包含-伪协议/index.html","3a65c71b74632be1739db220c0c5bcc8"],["/PWN-入门基础笔记/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/PWN-入门基础笔记/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/PWN-入门基础笔记/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/PWN-入门基础笔记/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/PWN-入门基础笔记/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/PWN-入门基础笔记/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/PWN-入门基础笔记/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/PWN-入门基础笔记/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/PWN-入门基础笔记/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/PWN-入门基础笔记/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-入门基础笔记/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/PWN-入门基础笔记/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/PWN-入门基础笔记/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/PWN-入门基础笔记/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/PWN-入门基础笔记/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/PWN-入门基础笔记/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/PWN-入门基础笔记/index.html","abf23688d4ff3d17537f345ceea4a421"],["/Python-Django开发/index.html","a581e78fe85c911b1331fe6e0e19d3e2"],["/Python-PyMySQL/index.html","86c9ca9799ec94a55505fd8e5776d184"],["/Python-列表、元组、字典、集合/index.html","1208c813b05afc5dfcca87efc6f63069"],["/Python创建env虚拟环境/index.html","6729a8f7672bf201635a39968471fb89"],["/Python开发-Flask框架/index.html","f2aa4d6b49fbabe88bf5e38b387a8acc"],["/SSTI模板注入漏洞/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/SSTI模板注入漏洞/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/index.html","9bbfa7a5b7f63cd23f84fb3d806e9dda"],["/STL库（一）-Vector/index.html","720b252aca091fc28bb86ab8b3d75add"],["/STL库（二）-Pair-x-y/index.html","605edea160b693b9618a5efb946a36f7"],["/Sqli-Labs-通关文档/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/Sqli-Labs-通关文档/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/Sqli-Labs-通关文档/index.html","c6add17a3c43887a3a4551f3317bbf25"],["/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/Web安全-信息收集/index.html","e0a9ffd5739a738ce8d472c298b26dae"],["/XSS-labs通关文档/index.html","4ff6c654d79469b3bf8739a4a9593029"],["/archives/2024/07/index.html","16d5c48fb7440e446190d09c235dfe41"],["/archives/2024/09/index.html","88d210b41e4a4c28c315a55756c343d2"],["/archives/2024/11/index.html","09bf93fd5668f2dfff7c0213889ba2f4"],["/archives/2024/index.html","db55c30f0fcbd492e5b557bb5a6551a6"],["/archives/2025/06/index.html","bb01cdb15e42ad34975fbae9e215a860"],["/archives/2025/07/index.html","2d243b16b02e0f7308e6708013310d7c"],["/archives/2025/08/index.html","f84c92fb8ced337c065e2e3caa759417"],["/archives/2025/09/index.html","0345ffd5e5e8d35b03211f9360ad928e"],["/archives/2025/10/index.html","11964937fb9a91fb1e8a1d196f99eb2e"],["/archives/2025/11/index.html","dd17b27e298fcefb9b1293164142683a"],["/archives/2025/index.html","04745b9d6ad2c3b395548c429953b1f2"],["/archives/2025/page/2/index.html","aa10c38b42102ce3fdb412f9ce8d3b30"],["/archives/2025/page/3/index.html","3793f316f7235e2f40990b772f6e5b12"],["/archives/2026/01/index.html","27574deee082f186f9dab6941e51f5b3"],["/archives/2026/index.html","2075051617ed455ad6991d168db3b400"],["/archives/index.html","7018165fd41f2b8542ee9ce5f2ea3659"],["/archives/page/2/index.html","d22367bce342ecae9ff0f94619b2ed47"],["/archives/page/3/index.html","9e426dffd7b5503492553a88c22a53f3"],["/categories/WriteUp/index.html","3fdc70ece21e693af6c2e6a1af2a2d8c"],["/categories/index.html","74e53ea692ad47633d07ef141822e8bc"],["/categories/web安全/index.html","350e236683f03221022871fcf996e6ea"],["/categories/开发/index.html","d2cc05a531b0b7946a00dc1e613f961b"],["/categories/网络安全/index.html","d99733bd27ede77f94b3300045bd8ff2"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","aa0e81ec861cfa14ff2befd4c6197857"],["/img/fluid.png","8423b3728cf6badec63fc07e807f577c"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/index.html","12bdbfe6f375a3a4f5fa3d80e533426b"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","0f95ff1638f4a6b9bbb9cc6445641056"],["/page/2/index.html","e967bc9023a6376d8f24e3dce283d9fb"],["/page/3/index.html","78798c9cdc6f7c8f9774f0305465cb0e"],["/sw-register.js","5cfc091968eb5f4447a5556aa0f8abad"],["/tags/C/index.html","4a6c1b18abf93647f99a79b202e3c16a"],["/tags/CTF/index.html","d5cc303a10518c3e306d3edf45862d32"],["/tags/Django/index.html","32ff51fff43ba99f5edc90c33dcbd3cf"],["/tags/Flask/index.html","7e74c18ea64ebe611390363db85c430d"],["/tags/MISC/index.html","d7021d8668944e1f300c5830d91869e9"],["/tags/Mysql/index.html","2f82bc36ab6299eb79897a3b15e0626e"],["/tags/PHP/index.html","4653347b467ba056bbccf56d266237ad"],["/tags/PWN/index.html","6c8ff8fe5171daa21fa4787790c9797f"],["/tags/Python/index.html","7dbc6a75a4674efa3cb3992ce42d47b9"],["/tags/SQL注入/index.html","46007ca168930743d26bae7873bd3112"],["/tags/STL/index.html","2285e7496cb28e19ac66ebf66f590f02"],["/tags/Web安全/index.html","a570aef6a34a196d6fb456dfa277d854"],["/tags/WriteUp/index.html","f5bf74ac49f4d4954f90fe00f01a844c"],["/tags/index.html","7ad8adb921f170d29b3c074b36531566"],["/tags/jsonp/index.html","822830fe0fec0b80d5ddf3a0e76642bd"],["/tags/php/index.html","12d8ebee4c32d6ca6921767be1502e92"],["/tags/python/index.html","27c73606b032658e7357e462cf99481e"],["/tags/ssti/index.html","cc1905b5cbb11a0d25334f3d5611d38e"],["/tags/vue/index.html","5ea2027203c7aab84e086325ea37863d"],["/tags/web/index.html","e922a6ff122017faacec7eea712c74b4"],["/tags/webshell/index.html","bfe07e4e25156b2c0220d48e61dae091"],["/tags/web安全/index.html","9100e980eee944a9c4fa3f9160656fe8"],["/tags/xss/index.html","1e959e1d348d3188dada8d2a9fe222a4"],["/tags/代码审计/index.html","e1efa5d5325ede540ebeb401a55a26b6"],["/tags/前端/index.html","b6e25f2a8cbd8f027f8dc354e111198a"],["/tags/前端开发/index.html","ff432c28e38acf56eb62a832d84e2186"],["/tags/反序列化/index.html","f1cb43e58d38406d162da8d8855df404"],["/tags/同源策略/index.html","8c4e6a12eb95f3f0f0d6fb9ef0c8fb31"],["/tags/命令执行/index.html","5c6ed58a373d7796f32048bc64931fe7"],["/tags/开发/index.html","c774dfe24054a4f1b96290a244712da3"],["/tags/数据结构/index.html","09e3182549abf483f6b5c9e0e90c1ac2"],["/tags/杂记/index.html","7e93c960576b4cc7696631edd3c304bd"],["/tags/算法/index.html","e47cd6501524df58e077fb3f13e04e42"],["/tags/网络安全/index.html","7115b16452671c27148c17ca8ece308c"],["/vulfocus-命令执行漏洞WP/index.html","de02aa7a17193fc6d2a9c72cc82c7f2a"],["/企业进行有效性（BAS）的一般方法/index.html","dd661dbe9335599d491a4e1134590710"],["/前端开发-Vue/index.html","21f9b9a974d27410297e9eced41a97ba"],["/同源策略/index.html","cde7692fb8243483d998880064bfacd7"],["/命令执行WAF绕过/index.html","202eed6f03e6bf901880f8b94f9c9181"],["/托管式安全服务建设方案/image-1.png","90089af422e9e3a49832685add58ae05"],["/托管式安全服务建设方案/image-2.png","65e95c6a37e01e6d752e1c7976c2f03a"],["/托管式安全服务建设方案/image-3.png","734049a9ea31f8cc6a1df86d0e7a57a1"],["/托管式安全服务建设方案/index.html","c722fc11ada163cd4467c240fc6668ae"],["/杂记/index.html","4a0b683c85ce06cb4674397389bc2314"],["/跨站请求伪造-CSRF/index.html","07424da880a68b25af2c2309e0a819b4"]];
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
