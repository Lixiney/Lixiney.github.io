/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cbe9f89f1e1a3c80a4f9a3f9624f1909"],["/Ajax技术-前后端交互/index.html","5d5877fcbdb9136fbaa3a91dbc1e398e"],["/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/CTF-MISC杂项/image-20251024234718310.png","0fdf1d449829730d927b131684297948"],["/CTF-MISC杂项/image-20251128215529315.png","0cc02a6704d92066e94a5cdc7ae60b56"],["/CTF-MISC杂项/image-20251128215627441.png","03abc1b6bfd76a9a20f9db025418ad8c"],["/CTF-MISC杂项/image-20251128215714901.png","bc369487e010b2137be55fa61d2d48b2"],["/CTF-MISC杂项/index.html","6020cf8cb84f2bd7947f4d716ea78090"],["/CTF-PHP代码审计/index.html","bb8289a4214aa1faaf90b4b281b60511"],["/JSONP-漏洞/index.html","2a9b021d68e6a323a76cd8757eb20fcd"],["/Mysql增删改查基础/index.html","6636b9faef7b1518cbc140ed3962bfea"],["/PHP代码审计-反序列化漏洞/index.html","00307a947174949e6803df06c7b93f58"],["/PHP反序列化-WriteUp/image-20250913223337798.png","1cdbd2d37cea82516833330c012d6c24"],["/PHP反序列化-WriteUp/image-20250913223801807.png","5c3a0ebb7aae4052ab0a09e6018615c3"],["/PHP反序列化-WriteUp/image-20250913224910091.png","5d6a6137590253013c93816a6db04c2a"],["/PHP反序列化-WriteUp/image-20250913225143367.png","3eadb6bd8797c41b1c7ba072d4451f46"],["/PHP反序列化-WriteUp/image-20250913230645311.png","f34792f0dab9d442c29d9511d13a6d7e"],["/PHP反序列化-WriteUp/index.html","ba2cfaa831b5b63fc221b0a1d6fda125"],["/PHP文件包含-伪协议/image-20251113224557980.png","a22b8f031066c5584eb7fe168bc0cd70"],["/PHP文件包含-伪协议/image-20251113225021349.png","8ba9c55b3a539ca090622243d4cb33f2"],["/PHP文件包含-伪协议/image-20251113225132654.png","3e31e75689f94dd217bdda7c2df6c0ae"],["/PHP文件包含-伪协议/index.html","6e207c0c29d418efdd800be448877fc1"],["/PWN-基础（保护机制）/image-20260525134338543.png","45476b2bac507003a32ec7941f030a27"],["/PWN-基础（保护机制）/index.html","f17809cc676cf5a8a08ccdd61318f37f"],["/PWN-基础（汇编基础）/image-20260524213314763.png","411abb39593e7ca311c82c60e95a137c"],["/PWN-基础（汇编基础）/image-20260524213616895.png","ffe1dc40c52f8d47b178009ec9d22609"],["/PWN-基础（汇编基础）/image-20260524213920721.png","4844bf1c1c998f2b964edf7d3a9684af"],["/PWN-基础（汇编基础）/image-20260524214202966.png","55dab69243eba7161088a8f47d53517f"],["/PWN-基础（汇编基础）/index.html","d339cf9c192bac2b1c70ad3191d0acd6"],["/PWN-栈溢出/image-20251005163822224.png","9b8662a70853871c6ffef55924fb3066"],["/PWN-栈溢出/image-20251008093049662.png","f1fc8f201c0cb64dd00e9e266b7efb0c"],["/PWN-栈溢出/image-20251008100208940.png","e776a154d10f5b4dd799283375db7cc8"],["/PWN-栈溢出/image-20251008100722937.png","e5fa386dcdd0d3c90f18f3e8bd23f5c7"],["/PWN-栈溢出/image-20251008101019692.png","72ed0bf1cc7926204acac6bd2530f7dc"],["/PWN-栈溢出/image-20251008101202454.png","49a6f1a4b138e76fd1112b93ece2598d"],["/PWN-栈溢出/image-20251008101221201.png","f71d75cf87f41427f2f8181b5ff6b5e8"],["/PWN-栈溢出/image-20251013182957343.png","684880d9280a94a08ec1fc29122b1e17"],["/PWN-栈溢出/image-20251013183541427.png","f982fa48567f01aa7e3c07a7b0e1a31d"],["/PWN-栈溢出/image-20251013194932319.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-栈溢出/image-20251013194950560.png","f45b1111cc006b8dcb8755b34f334901"],["/PWN-栈溢出/image-20251013195047001.png","83bb7639aacfbf1affb9d157177e959c"],["/PWN-栈溢出/image-20251013195802033.png","24234b9d15e7cc38f5cee95fd8b4261b"],["/PWN-栈溢出/image-20251013200151394.png","8e73a7340e69e7beceacafe33f3b1e6f"],["/PWN-栈溢出/image-20251013200743468.png","28a15d4d08e6f3a84adfea5e7f97652d"],["/PWN-栈溢出/image-20251013201019052.png","c20b37eabae0c7091de842217d2b2c21"],["/PWN-栈溢出/image-20251013201509913.png","7653bb422f3af47ffc63508729e23f26"],["/PWN-栈溢出/index.html","8a46761e67be3af7422e5114c2f14b1c"],["/Python-Django开发/index.html","87230c390fd4aad7dbd61f7565ef51b6"],["/Python-PyMySQL/index.html","ce9f77121bd837a908e0ceb4d92d5de6"],["/Python-列表、元组、字典、集合/index.html","ccd4d709cbbfd592b9b6d2dacde9f1e8"],["/Python创建env虚拟环境/index.html","80b2fd50e0b70a5fdd59b20a66c4f3bf"],["/Python开发-Flask框架/index.html","dcc6b64837c4f1f640f81596e1716f8e"],["/SSTI模板注入漏洞/image-20250813160700465.png","a6e6155ac3773761d798b853d3d1318f"],["/SSTI模板注入漏洞/image-20250813163526166.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/image-20250813163534878.png","a632625ec80f5f8dd09f4491d8e66f62"],["/SSTI模板注入漏洞/index.html","401f425507860a0c0c0c6b1c444997e3"],["/STL库（一）-Vector/index.html","8739e67cd8dbe80fcaeb63fad19d97fb"],["/STL库（二）-Pair-x-y/index.html","8a7ccd77d5b4795612a3bd18f1cea770"],["/Sqli-Labs-通关文档/image-20251110210410763.png","13f57f13622646b539bdae96ee56f580"],["/Sqli-Labs-通关文档/image-20251110210422709.png","8450f039c68987ff6636ae0032fca8a6"],["/Sqli-Labs-通关文档/index.html","3540a3775bb548f2193bf7cf7f48925f"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520170501142.png","2f854832384ef3de67df83f0b615c8ba"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520172214221.png","0134310ccccb31acc355357bcb4d3cbf"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520172437597.png","bb8acaeef44d80d29c025e0edaa3e228"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520173024232.png","50b9d92dcaee02d1bf6e605bceb924b1"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520173041428.png","e5eaab23acb858f0757e03fa8de06191"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520173300052.png","d656d4c3baf2aaa3a85c6ff000dceb6c"],["/ThinkPhP-5-RCE-漏洞复现/image-20260520175936641.png","94ce09fdc10685fb672b3434ce88f22a"],["/ThinkPhP-5-RCE-漏洞复现/index.html","d813395b3e4d188410d75f60bbf5aceb"],["/Vulfocus-靶场记录（一）/index.html","09622fc709eadb228ea013297c01c6c0"],["/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/Web安全-信息收集/index.html","e75c2a2d16d59e3f04c18b3e79ecb2c5"],["/XSS-labs通关文档/index.html","ca907bbc7b95fc539f552e45e2b820ff"],["/archives/2024/09/index.html","276cf9f6dfecc60e0a812a2e90f5c309"],["/archives/2024/index.html","bdfa45a62fe5f28121b944e70a82a162"],["/archives/2025/06/index.html","81e18599eea6aa8ef214205d9390debd"],["/archives/2025/07/index.html","bd19c7babd7bf0e021f75e9befb20eb1"],["/archives/2025/08/index.html","72c980ae7833547de7aa3a421469f723"],["/archives/2025/09/index.html","19e8103e41e14ed82fd46e01941f3fa1"],["/archives/2025/11/index.html","5f08f6a2a0cc8a06d2630c8b70bc21ac"],["/archives/2025/index.html","9d6f33828d11f0e6ffa8ce14b9059ad0"],["/archives/2025/page/2/index.html","e1fec0318308f2de1315130ce75ba7cc"],["/archives/2026/01/index.html","c3d94021689b929c424cac91a65bb629"],["/archives/2026/03/index.html","e76625755cf36531f4e0c6713106f2c9"],["/archives/2026/05/index.html","54a6b6cd1d0020a6e82cc0c37ca4b35f"],["/archives/2026/index.html","61205c79c88ff326670fc46e5b5477b1"],["/archives/index.html","263cf21df35bcd8f4685e991181d56dc"],["/archives/page/2/index.html","894c43fd7f9f9825df8e97a70d508ed0"],["/archives/page/3/index.html","117c89b33d79d6c84b7f981d7d314d5c"],["/categories/WriteUp/index.html","a8e049e137768f1bde58a1d075620ad4"],["/categories/index.html","286e3400a5043fc2e5669876bd0ece95"],["/categories/web安全/index.html","db062bcfdd10bdb29fddc57b0633a1ad"],["/categories/二进制安全/index.html","3f5ea57c4d36a17fc85d689e7f55ed72"],["/categories/开发/index.html","d7059817437a6f4497c7c44072a577ae"],["/categories/网络安全/index.html","9cb30778b2840ab27b0bc0be281f3100"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","56f398c2c184b7900749a55e8c3cab80"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","f962b38098972bf97beb8c9f5269a982"],["/img/fluid.png","8423b3728cf6badec63fc07e807f577c"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","33586025213021c63a0fe691adb7c74e"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","9b78e2ab30b6cfd240be81f133be198b"],["/page/2/index.html","89f80c97c548a6a75aea8f74606cb63e"],["/page/3/index.html","bc84ccbf6b0f261e7c9b93cf6c5fdc06"],["/sw-register.js","706e37c01782f56af79a14dd04d0c2b3"],["/tags/C/index.html","eb742a6139ea81e1d51a30fd1a16d39f"],["/tags/CTF/index.html","1d3cb9c74283273ca2640aba94cc1be9"],["/tags/Django/index.html","40e1062e590ac0d00f0595f2c85a5f5d"],["/tags/Flask/index.html","076b8c491cf0018e1a952b8551553e24"],["/tags/MISC/index.html","bfeaf434d56a95caf27923b887a2ceec"],["/tags/Mysql/index.html","97fa06689586d7b8959d71d3a270e295"],["/tags/PHP/index.html","92a56797d6fd3bcc4a01aa16c720bfab"],["/tags/Python/index.html","963907e7b08cba434b3aefe997fdad05"],["/tags/SQL注入/index.html","fef29d9411d7d7b6e08a96a45102f55e"],["/tags/STL/index.html","27116bc06b792cc7f63d7d4c82239e4d"],["/tags/WriteUp/index.html","fe9515593460241e15f6560ba9468bdc"],["/tags/index.html","546356c4c9c8c100407b6529da8a80b5"],["/tags/jsonp/index.html","c229b2dcad3fe6b318aa0c9bdbf81514"],["/tags/pwn/index.html","77da32951f03440bf07f5d3603dbbd00"],["/tags/ssti/index.html","ba23348dd62161b7be283a4bef7eedad"],["/tags/vue/index.html","faf3f14b23acabe1f4fd4aa934f8da35"],["/tags/web/index.html","940cc691f526e03fcbc4c903c5c9e071"],["/tags/web安全/index.html","3a584691003c4dfb0c8035ee08f676fc"],["/tags/xss/index.html","4210c6c0afae0cf5f80262e1f8aba7db"],["/tags/代码审计/index.html","816509fd3fd4448b673187e5d041bd5c"],["/tags/前端/index.html","5db857d3ab1cf5f247221ee66852d522"],["/tags/反序列化/index.html","d5bb0f6aa73e0664798585f5c45bdd82"],["/tags/同源策略/index.html","8af3d0f7087c898d9a9c50c1c6fa2c43"],["/tags/命令执行/index.html","fcc3cf4a1656a7d10773c7819b38e851"],["/tags/开发/index.html","217bf1d916419099d321012ef7e21bea"],["/tags/数据结构/index.html","96f9b9d104992747e923b5962392808d"],["/tags/漏洞复现/index.html","c8287744f9178bc387632805a456fe49"],["/tags/算法/index.html","7c16a1d5b076e98806402ec97d4ba019"],["/tags/网络安全/index.html","38504ab46dd475dbe81c3165bde22818"],["/tags/靶场/index.html","d8c8943d606d8c35806c577dccf0f4e3"],["/vulfocus-命令执行漏洞WP/index.html","9d12711b89bbd294c2314e889fbe5cfa"],["/前端开发-CSS层叠样式表/index.html","5baf8d96cf0e57812c48998f19755993"],["/前端开发-VUE/index.html","a0d6cfe9528146db43788067af6c4d57"],["/同源策略/index.html","c6674cdf9c32d739f944e2223237e1a5"],["/命令执行WAF绕过/index.html","1e8de59615af140451bdd7294c41fcc8"],["/跨站请求伪造-CSRF/index.html","427b18566c5db76fd06fb845e17ff0bf"]];
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
