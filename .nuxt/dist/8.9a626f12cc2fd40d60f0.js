webpackJsonp([8],{wZz0:function(x,s){x.exports='\x3c!--TAG javascript,service worker /TAG--\x3e\n\x3c!--DESC service worker 简介 /DESC--\x3e\n<h1 id="-service-worker">&#x9875;&#x9762;&#x5B88;&#x62A4;&#x8005;&#xFF1A;Service Worker</h1>\n<h3 id="1-service-worker-">1. Service Worker&#x7684;&#x8EAB;&#x4EFD;</h3>\n<p>Service&#x7684;&#x610F;&#x601D;&#x662F;&#x670D;&#x52A1;&#xFF0C;Worker&#x7684;&#x610F;&#x601D;&#x662F;&#x5DE5;&#x4EBA;&#xFF0C;&#x90A3;&#x4E48;Service Worker&#x7684;&#x610F;&#x601D;&#x5C31;&#x662F;&#x670D;&#x52A1;&#x5458;&#x3002;&#x8FD9;&#x4E2A;&#x5458;&#x5DE5;&#x662F;2014&#x5E74;6&#x6708;HTML5&#x65B0;&#x62DB;&#x7684;&#x5B9E;&#x4E60;&#x751F;&#xFF0C;&#x76EE;&#x524D;&#x5728;&#x8BD5;&#x7528;&#x4E2D;&#x3002;&#x5728;&#x6B64;&#x4E4B;&#x524D;&#xFF0C;&#x5DF2;&#x7ECF;&#x6709;&#x4E00;&#x4F4D;&#x8001;&#x5458;&#x5DE5;&#xFF0C;&#x5B83;&#x53EB;Web Worker&#x3002;&#x90A3;&#x4E48;&#x95EE;&#x9898;&#x6765;&#x4E86;&#xFF0C;Boss&#x662F;&#x8C01;&#xFF1F;Boss&#x5C31;&#x662F;&#x6D4F;&#x89C8;&#x5668;&#x3002;&#x51C6;&#x786E;&#x6765;&#x8BF4;&#xFF0C;&#x6BCF;&#x4E2A;&#x9875;&#x9762;&#x7684;javascript&#x8FD0;&#x884C;&#x4E3B;&#x7EBF;&#x7A0B;&#x90FD;&#x662F;&#x4E00;&#x4E2A;Boss&#x3002;</p>\n<p>&#x8FD9;&#x91CC;&#x5148;&#x8C08;&#x4E00;&#x4E0B;&#x5927;&#x7684;&#x80CC;&#x666F;&#x3002;Boss&#x5F88;&#x5389;&#x5BB3;&#xFF0C;&#x5728;&#x9875;&#x9762;&#x4E0A;&#x6307;&#x70B9;&#x6C5F;&#x5C71;&#xFF0C;&#x547C;&#x98CE;&#x5524;&#x96E8;&#x3002;&#x4F46;&#x4ED6;&#x6709;&#x4E2A;&#x5C40;&#x9650;&#xFF1A;&#x540C;&#x4E00;&#x65F6;&#x523B;&#x53EA;&#x505A;&#x4E00;&#x4EF6;&#x4E8B;&#xFF08;<strong>&#x5355;&#x7EBF;&#x7A0B;</strong>&#xFF09;&#x3002;&#x5F53;&#x4E00;&#x4E9B;&#x5F88;&#x8017;&#x65F6;&#x7684;&#x6742;&#x4E8B;&#x8BA9;Boss&#x53BB;&#x5904;&#x7406;&#x65F6;&#xFF0C;&#x5728;&#x5904;&#x7406;&#x7684;&#x8FC7;&#x7A0B;&#x4E2D;&#x4ED6;&#x5C31;&#x65E0;&#x6687;&#x987E;&#x53CA;&#x5176;&#x5B83;&#x91CD;&#x8981;&#x7684;&#x4E8B;&#x4E86;&#x3002;&#x5728;&#x7528;&#x6237;&#x770B;&#x6765;&#xFF0C;&#x9875;&#x9762;&#x6CA1;&#x4EBA;&#x7BA1;&#x4E86;&#xFF0C;Boss&#x4E0D;&#x5E72;&#x4E8B;&#x4E86;&#xFF01;&#x8FD9;&#x65F6;Boss&#x5C31;&#x5F88;&#x90C1;&#x95F7;&#x3002;&#x4E3A;&#x4E86;&#x4FDD;&#x8BC1;Boss&#x80FD;&#x5904;&#x7406;&#x66F4;&#x91CD;&#x8981;&#x7684;&#x4E8B;&#x60C5;&#xFF0C;&#x8463;&#x4E8B;&#x4F1A;&#xFF08;<strong>W3C</strong>&#xFF09;&#x7EC8;&#x4E8E;&#x62DB;&#x8058;&#x4E86;&#x4E00;&#x4E2A;&#x65B0;&#x5458;&#x5DE5;&#xFF1A;Web worker&#x3002;&#x8FD9;&#x4E0B;&#xFF0C;Boss&#x7EC8;&#x4E8E;&#x53EF;&#x4EE5;&#x4ECE;&#x8017;&#x65F6;&#x7684;&#x6742;&#x4E8B;&#x4E2D;&#x89E3;&#x653E;&#x51FA;&#x6765;&#x4E86;&#xFF0C;&#x4ED6;&#x53EA;&#x9700;&#x8981;&#x628A;Web worker&#x53EB;&#x8FC7;&#x6765;&#x8BF4;&#xFF1A;&#x201C;&#x8FD9;&#x4E9B;&#x4E8B;&#x60C5;&#x62FF;&#x53BB;&#x505A;&#xFF0C;&#x6CA1;&#x505A;&#x5B8C;&#x4E0D;&#x8981;&#x6765;&#x627E;&#x6211;&#x201D;&#x3002;Web worker&#x9886;&#x5230;&#x4EFB;&#x52A1;&#x540E;&#x9ED8;&#x9ED8;&#x5730;&#x5230;&#x81EA;&#x5DF1;&#x7684;&#x5DE5;&#x4F4D;&#xFF08;<strong>&#x7EBF;&#x7A0B;</strong>&#xFF09;&#x53BB;&#x5E72;&#x6D3B;&#xFF0C;&#x5B8C;&#x6210;&#x4E4B;&#x540E;&#x7ED9;Boss&#x53D1;&#x4E86;&#x4E2A;&#x90AE;&#x4EF6;&#xFF08;<strong>postMessage</strong>&#xFF09;&#x3002;Boss&#x6536;&#x5230;&#x90AE;&#x4EF6;&#xFF08;<strong>onmessage</strong>&#xFF09;&#x540E;&#x6B23;&#x6170;&#x5730;&#x70B9;&#x4E86;&#x70B9;&#x5934;&#x3002;</p>\n<p>&#x626F;&#x4E86;&#x534A;&#x5929;&#x597D;&#x50CF;&#x8FD8;&#x6CA1;&#x8C08;&#x5230;&#x65B0;&#x5458;&#x5DE5;&#x554A;&#x3002;&#x3002;&#x3002;&#x4E0D;&#x6025;&#xFF0C;&#x4E0B;&#x9762;&#x5C31;&#x8BB2;&#x5230;&#x4E86;&#x3002;</p>\n<p>  Boss&#x4E0B;&#x73ED;&#x4E86;&#xFF08;<strong>&#x9875;&#x9762;&#x5173;&#x95ED;</strong>&#xFF09;,Web worker&#x4E5F;&#x6536;&#x62FE;&#x4E1C;&#x897F;&#x56DE;&#x5BB6;&#x4E86;&#x3002;&#x8FD9;&#x6837;&#x6267;&#x884C;&#x4E86;&#x5F88;&#x4E45;&#xFF0C;&#x76F4;&#x81F3;2014&#x5E74;6&#x6708;&#xFF0C;&#x8463;&#x4E8B;&#x4F1A;&#x53D1;&#x73B0;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF1A;&#x201C;&#x5C45;&#x7136;&#x6CA1;&#x6709;&#x4EBA;&#x5728;&#x8001;&#x677F;&#x4E0B;&#x73ED;&#x540E;&#x52A0;&#x73ED;&#xFF1F;&#x201D;&#x3002;&#x4E8E;&#x662F;&#xFF0C;&#x53C8;&#x62DB;&#x4E86;&#x4E00;&#x4E2A;&#x4E13;&#x804C;&#x52A0;&#x73ED;&#x7684;&#xFF1A;Service Worker&#x3002;&#x5B83;&#x88AB;&#x8D4B;&#x4E88;&#x7684;&#x7EE9;&#x6548;&#x76EE;&#x6807;&#x5982;&#x4E0B;&#xFF1A;</p>\n<ol>\n<li>&#x5165;&#x804C;&#xFF08;install&#xFF09;&#x540E;&#x6C38;&#x4E0D;&#x4E0B;&#x73ED;&#xFF0C;&#x800C;&#x80FD;&#x66F4;&#x65B0;&#x3002;</li>\n<li>&#x80FD;&#x5904;&#x7406;Boss&#x9700;&#x8981;&#x7684;&#x8D44;&#x6E90;&#xFF08;HTTPS&#x8BF7;&#x6C42;&#xFF09;&#xFF0C;&#x4EE5;&#x4FBF;&#x79BB;&#x7EBF;&#x65F6;&#x4E5F;&#x80FD;&#x8BA9;BOSS&#x53D6;&#x5230;&#x6570;&#x636E;&#xFF08;&#x4ECE;cache&#x4E2D;&#xFF09;&#x3002;</li>\n<li>&#x80FD;&#x5411;&#x5BA2;&#x6237;&#x63A8;&#x9001;&#x6D88;&#x606F;(<a href="https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web">push notifications</a>)</li>\n<li>&#x4E0D;&#x5141;&#x8BB8;&#x8D8A;&#x6743;&#x7BA1;&#x7406;Boss&#x7684;&#x4E8B;&#xFF08;DOM ACCESS&#xFF09;</li>\n</ol>\n<p>&#x603B;&#x5730;&#x6765;&#x8BF4;&#xFF0C;Service worker&#x662F;&#x72EC;&#x7ACB;&#x4E8E;&#x9875;&#x9762;&#x7684;&#x4E00;&#x4E2A;&#x8FD0;&#x884C;&#x73AF;&#x5883;&#xFF0C;&#x5B83;&#x5728;&#x9875;&#x9762;&#x5173;&#x95ED;&#x540E;&#x4ECD;&#x53EF;&#x4EE5;&#x8FD0;&#x884C;&#x3002;&#x540C;&#x65F6;&#xFF0C;&#x4E5F;&#x80FD;&#x5BF9;&#x5B83;&#x8D1F;&#x8D23;&#x7684;&#x9875;&#x9762;&#x7684;&#x7F51;&#x7EDC;&#x8BF7;&#x6C42;&#x8FDB;&#x884C;&#x622A;&#x53D6;&#x548C;&#x8FD4;&#x56DE;&#x8BF7;&#x6C42;&#xFF08;&#x7C7B;&#x4F3C;&#x4E8E;Fiddler&#xFF09;&#x3002;</p>\n<h3 id="2-">2.  &#x4F7F;&#x7528;&#x6761;&#x4EF6;</h3>\n<ul>\n<li><strong>&#x8BF7;&#x6C42;&#x534F;&#x8BAE;&#x6761;&#x4EF6; HTTPS</strong>&#x3002;\n&#x6BD5;&#x7ADF;&#x7ED9;Service Worker&#x7684;&#x6743;&#x5229;&#x8F83;&#x5927;&#xFF0C;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x622A;&#x53D6;&#x548C;&#x8FD4;&#x56DE;&#x7528;&#x6237;&#x7684;&#x8BF7;&#x6C42;&#xFF0C;&#x6240;&#x4EE5;&#x4E86;&#x4E8E;&#x5B89;&#x5168;&#x8003;&#x8651;&#xFF0C;&#x76EE;&#x524D;&#x53EA;&#x80FD;&#x5728;HTTPS&#x73AF;&#x5883;&#x4E0B;&#x624D;&#x80FD;&#x4F7F;&#x7528;Service Worker&#x3002;</li>\n<li><strong>&#x6D4F;&#x89C8;&#x5668;&#x652F;&#x6301;</strong>\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FojkDD5GjXj0DFQVx_YWvHXrcTcs" alt="">\n&#x76EE;&#x524D;&#x652F;&#x6301;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E0D;&#x591A;&#xFF0C;&#x800C;&#x4E14;&#x652F;&#x6301;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4E5F;&#x662F;&#x5728;&#x8BD5;&#x9A8C;&#x9636;&#x6BB5;&#x3002;<h3 id="3-">3. &#x4E00;&#x4E2A;&#x6817;&#x5B50;</h3>\n&#x4E0B;&#x9762;&#x7684;&#x4F8B;&#x5B50;&#x5C06;&#x5C55;&#x793A;&#x901A;&#x8FC7;Service Worker&#x6765;&#x5B9E;&#x73B0;&#x4E00;&#x4E2A;&#x79BB;&#x7EBF;&#x9875;&#x9762;&#xFF0C;&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x8BBF;&#x95EE;&#x540E;&#xFF0C;&#x540E;&#x7EED;&#x5373;&#x4F7F;&#x6CA1;&#x6709;&#x7F51;&#x7EDC;&#x8FDE;&#x63A5;&#xFF0C;&#x4E5F;&#x80FD;&#x4ECE;&#x7F13;&#x5B58;&#x4E2D;&#x83B7;&#x53D6;&#x9875;&#x9762;&#x5FC5;&#x8981;&#x7684;&#x8D44;&#x6E90;&#x3002;&#x4F8B;&#x5B50;&#x6E90;&#x81EA;github&#x4E0A;&#x4E00;&#x4E2A;<a href="https://github.com/sitepoint-editors/serviceworker-offline-demo">demo</a>&#x3002;</li>\n<li>&#x9875;&#x9762;&#x6587;&#x4EF6;&#x4EE3;&#x7801;&#xFF1A;</li>\n</ul>\n<pre class="hljs"><span class="hljs-meta">&lt;!doctype html&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Service Worker offline demo<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n        <span class="hljs-selector-tag">body</span> {\n            <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;./images/background.jpeg&quot;</span>);<span class="hljs-comment">/*&#x80CC;&#x666F;&#x56FE;&#x7247;*/</span>\n        }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Learn Web Design &amp;amp; Development with SitePoint tutorials,\ncourses and books - HTML5, CSS3, JavaScript, PHP, mobile app development, Responsive Web Design<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n    <span class="hljs-keyword">if</span> (navigator.serviceWorker) {\n        <span class="hljs-comment">// &#x6CE8;&#x518C;Service Worker scope&#x8868;&#x793A;&#x4F5C;&#x7528;&#x7684;&#x9875;&#x9762;&#x7684;path</span>\n        <span class="hljs-comment">// register&#x51FD;&#x6570;&#x8FD4;&#x56DE;Promise</span>\n        navigator.serviceWorker.register(<span class="hljs-string">&apos;./service-worker.js&apos;</span>, {<span class="hljs-attr">scope</span>: <span class="hljs-string">&apos;./&apos;</span>})\n            .then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">registration</span>) </span>{\n                <span class="hljs-built_in">console</span>.log(registration);\n            })\n            .catch(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) </span>{\n                <span class="hljs-built_in">console</span>.error(e);\n            })\n    } <span class="hljs-keyword">else</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Service Worker is not supported in this browser.&apos;</span>)\n    }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n</pre>\n<ul>\n<li>Service Worker&#x6587;&#x4EF6;&#xFF1A;service-worker.js</li>\n</ul>\n<pre class="hljs">importScripts(<span class="hljs-string">&apos;js/cache-polyfill.js&apos;</span>); <span class="hljs-comment">// cache &#x6269;&#x5C55;</span>\n\n<span class="hljs-keyword">var</span> CACHE_VERSION = <span class="hljs-string">&apos;app-v1&apos;</span>; <span class="hljs-comment">// &#x7F13;&#x5B58;&#x6587;&#x4EF6;&#x7684;&#x7248;&#x672C;</span>\n<span class="hljs-keyword">var</span> CACHE_FILES = [ <span class="hljs-comment">// &#x9700;&#x8981;&#x7F13;&#x5B58;&#x7684;&#x9875;&#x9762;&#x6587;&#x4EF6;</span>\n    <span class="hljs-string">&apos;/&apos;</span>,\n    <span class="hljs-string">&apos;images/background.jpeg&apos;</span>,\n    <span class="hljs-string">&apos;js/app.js&apos;</span>,\n    <span class="hljs-string">&apos;css/styles.css&apos;</span>\n];\n\n\nself.addEventListener(<span class="hljs-string">&apos;install&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{ <span class="hljs-comment">// &#x76D1;&#x542C;worker&#x7684;install&#x4E8B;&#x4EF6;</span>\n    event.waitUntil( <span class="hljs-comment">// &#x5EF6;&#x8FDF;install&#x4E8B;&#x4EF6;&#x76F4;&#x5230;&#x7F13;&#x5B58;&#x521D;&#x59CB;&#x5316;&#x5B8C;&#x6210;</span>\n        caches.open(CACHE_VERSION)\n            .then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">cache</span>) </span>{\n                <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Opened cache&apos;</span>);\n                <span class="hljs-keyword">return</span> cache.addAll(CACHE_FILES);\n            })\n    );\n});\n\nself.addEventListener(<span class="hljs-string">&apos;activate&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{ <span class="hljs-comment">// &#x76D1;&#x542C;worker&#x7684;activate&#x4E8B;&#x4EF6;</span>\n    event.waitUntil( <span class="hljs-comment">// &#x5EF6;&#x8FDF;activate&#x4E8B;&#x4EF6;&#x76F4;&#x5230;</span>\n        caches.keys().then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">keys</span>)</span>{\n            <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.all(keys.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">key, i</span>)</span>{ <span class="hljs-comment">// &#x6E05;&#x9664;&#x65E7;&#x7248;&#x672C;&#x7F13;&#x5B58;</span>\n                <span class="hljs-keyword">if</span>(key !== CACHE_VERSION){\n                    <span class="hljs-keyword">return</span> caches.delete(keys[i]);\n                }\n            }))\n        })\n    )\n});\n\nself.addEventListener(<span class="hljs-string">&apos;fetch&apos;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{ <span class="hljs-comment">// &#x622A;&#x53D6;&#x9875;&#x9762;&#x7684;&#x8D44;&#x6E90;&#x8BF7;&#x6C42;</span>\n    event.respondWith( <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x9875;&#x9762;&#x7684;&#x8D44;&#x6E90;&#x8BF7;&#x6C42;</span>\n        caches.match(event.request).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">res</span>)</span>{ <span class="hljs-comment">// &#x5224;&#x65AD;&#x7F13;&#x5B58;&#x662F;&#x5426;&#x547D;&#x4E2D;</span>\n            <span class="hljs-keyword">if</span>(res){  <span class="hljs-comment">// &#x8FD4;&#x56DE;&#x7F13;&#x5B58;&#x4E2D;&#x7684;&#x8D44;&#x6E90;</span>\n                <span class="hljs-keyword">return</span> res;\n            }\n            requestBackend(event); <span class="hljs-comment">// &#x6267;&#x884C;&#x8BF7;&#x6C42;&#x5907;&#x4EFD;&#x64CD;&#x4F5C;</span>\n        })\n    )\n});\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">requestBackend</span>(<span class="hljs-params">event</span>)</span>{  <span class="hljs-comment">// &#x8BF7;&#x6C42;&#x5907;&#x4EFD;&#x64CD;&#x4F5C;</span>\n    <span class="hljs-keyword">var</span> url = event.request.clone();\n    <span class="hljs-keyword">return</span> fetch(url).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">res</span>)</span>{ <span class="hljs-comment">// &#x8BF7;&#x6C42;&#x7EBF;&#x4E0A;&#x8D44;&#x6E90;</span>\n        <span class="hljs-comment">//if not a valid response send the error</span>\n        <span class="hljs-keyword">if</span>(!res || res.status !== <span class="hljs-number">200</span> || res.type !== <span class="hljs-string">&apos;basic&apos;</span>){\n            <span class="hljs-keyword">return</span> res;\n        }\n\n        <span class="hljs-keyword">var</span> response = res.clone();\n\n        caches.open(CACHE_VERSION).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">cache</span>)</span>{ <span class="hljs-comment">// &#x7F13;&#x5B58;&#x4ECE;&#x7EBF;&#x4E0A;&#x83B7;&#x53D6;&#x7684;&#x8D44;&#x6E90;</span>\n            cache.put(event.request, response);\n        });\n\n        <span class="hljs-keyword">return</span> res;\n    })\n}\n</pre>\n<ul>\n<li><p>Service Worker&#x751F;&#x547D;&#x5468;&#x671F;\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FnDKaEExj8-US06Q9FqlBBLqx0jz" alt=""></p>\n<p>Service Worder&#x5728;&#x5B89;&#x88C5;&#xFF08;install&#xFF09;&#x548C;&#x6FC0;&#x6D3B;(activate)&#x540E;&#xFF0C;&#x4F1A;&#x8FDB;&#x5165;&#x6B63;&#x5E38;&#x5DE5;&#x4F5C;&#x72B6;&#x6001;&#x3002;&#x5F53;&#x5B83;&#x8D1F;&#x8D23;&#x7684;&#x9875;&#x9762;&#x5728;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x88AB;&#x6253;&#x5F00;&#xFF0C;&#x5B83;&#x5C31;&#x4F1A;&#x5BF9;&#x9875;&#x9762;&#x7684;&#x8BF7;&#x6C42;&#x8FDB;&#x884C;&#x5904;&#x7406;&#x3002;&#x5728;&#x5176;&#x5B83;&#x60C5;&#x51B5;&#x4E0B;&#xFF08;&#x9664;&#x4E86;&#x7279;&#x6B8A;&#x60C5;&#x51B5;:service worker&#x4F1A;&#x5B9A;&#x65F6;&#x66F4;&#x65B0;&#xFF09;&#xFF0C;Service worker&#x5904;&#x7406;&#x6682;&#x505C;&#x72B6;&#x6001;&#xFF0C;&#x4E0D;&#x4F1A;&#x5360;&#x7528;&#x5185;&#x5B58;&#x548C;CPU&#x8D44;&#x6E90;&#x3002;</p>\n</li>\n<li><p>&#x4F8B;&#x5B50;&#x8FD0;&#x884C;&#x6548;&#x679C;\n<img src="http://7tszky.com1.z0.glb.clouddn.com/Fm2n79RxYtAwYqkhLcyNoGBMffYe" alt="">\n<img src="http://7tszky.com1.z0.glb.clouddn.com/Fq1-gd-lUighGSDteJbJfmE_3mo_" alt="">\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FkF9Dym12_JUHQZmGnM35SDXboPi" alt="">\n&#x4E0A;&#x56FE;&#x4E3A;&#x5728;&#x7B2C;&#x4E00;&#x6B21;&#x6253;&#x5F00;&#x9875;&#x9762;&#x540E;&#xFF0C;&#x5173;&#x95ED;&#x7F51;&#x7EDC;&#xFF0C;&#x518D;&#x6B21;&#x6253;&#x5F00;&#x7684;&#x9875;&#x9762;&#x8BF7;&#x6C42;&#x3002;&#x9875;&#x9762;&#x5728;&#x79BB;&#x7EBF;&#x60C5;&#x51B5;&#x4E0B;&#x4ECD;&#x7136;&#x80FD;&#x6253;&#x5F00;&#xFF0C;&#x5E76;&#x4E14;&#x80FD;&#x83B7;&#x53D6;&#x5230;&#x76F8;&#x5E94;&#x7684;&#x6837;&#x5F0F;&#x548C;&#x811A;&#x672C;&#x8D44;&#x6E90;&#x3002;&#x4ECE;&#x56FE;&#x4E2D;&#x53EF;&#x4EE5;&#x770B;&#x51FA;&#xFF0C;&#x8D44;&#x6E90;&#x7684;&#x83B7;&#x53D6;&#x9014;&#x5F84;&#x662F;&#x201C;from ServiceWorker&#x201D;&#xFF0C;&#x8BF4;&#x660E;&#x786E;&#x5B9E;&#x662F;serviceWorker&#x5728;&#x8D77;&#x4F5C;&#x7528;&#x4E86;&#x3002;</p>\n</li>\n</ul>\n<h3 id="4-chrome-">4. &#x5F00;&#x542F;chrome&#x9690;&#x85CF;&#x6280;&#x80FD;</h3>\n<p>chrome&#x4E0A;&#x6709;&#x4E09;&#x4E2A;&#x4E0E;service Worker&#x76F8;&#x5173;&#x7684;&#x8C03;&#x8BD5;&#x548C;&#x67E5;&#x770B;&#x5DE5;&#x5177;</p>\n<ul>\n<li>1 &#x770B;&#x6B63;&#x5728;&#x8FD0;&#x884C;&#x7684; serivce worker&#xFF1A;chrome://inspect/#service-workers\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FjlWGBb8zetbGfbCK3WBniEcceDv" alt=""></li>\n<li>2 ervice Worker&#x8C03;&#x8BD5;&#xFF08;&#x67E5;&#x770B;console.log&#x8F93;&#x51FA;,&#x4E5F;&#x53EF;&#x6CE8;&#x9500;worker&#xFF09;\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FlLbyUJtqTE1hQ9_w-4IDTSZzPkd" alt=""></li>\n<li>3 &#x85CF;&#x7684;Resources&#x67E5;&#x770B;&#x9009;&#x9879;,&#x5F00;&#x542F;&#x6B65;&#x9AA4;&#x5982;&#x4E0B;&#xFF1A;<blockquote>\n<p>1 &#x8FDB;&#x5165; chrome://flags &#x5F00;&#x542F; &#x2018;Enable DevTools Experiments&#x2019;.\n2 &#x6253;&#x5F00;DevTools&#xFF0C; &#x8FDB;&#x5165; Setting &gt; Experiments , &#x8FDE;&#x7EED;&#x6309;shift&#x952E;6&#x4E0B;\n3 &#x5728;DevTools&#x7684;Resources&#x9875;&#x9762;&#x91CC;&#x5C31;&#x80FD;&#x770B;&#x5230;&#x521A;&#x88AB;&#x5F00;&#x542F;&#x7684;&#x9690;&#x85CF;&#x529F;&#x80FD;&#xFF1A;\n<img src="http://7tszky.com1.z0.glb.clouddn.com/FqO-kjCeKS5y--L46UP-47rNpm4F" alt=""></p>\n</blockquote>\n</li>\n</ul>\n<h3 id="5-">5. &#x603B;&#x7ED3;</h3>\n<p>Service Worker&#x662F;&#x7EE7;web Worker&#x540E;&#x53C8;&#x4E00;&#x4E2A;&#x65B0;&#x7684;&#x7EBF;&#x7A0B;&#xFF0C;&#x8FD9;&#x4E2A;&#x7EBF;&#x7A0B;&#x6BD4;web worker&#x72EC;&#x7ACB;&#x5F97;&#x66F4;&#x5F7B;&#x5E95;&#xFF0C;&#x53EF;&#x4EE5;&#x5728;&#x9875;&#x9762;&#x6CA1;&#x6709;&#x6253;&#x5F00;&#x7684;&#x65F6;&#x5019;&#x5C31;&#x8FD0;&#x884C;&#x3002;&#x4F5C;&#x4E3A;&#x4E00;&#x4E2A;&#x9875;&#x9762;&#x4E0E;&#x670D;&#x52A1;&#x5668;&#x4E4B;&#x95F4;&#x4E2D;&#x95F4;&#x5C42;&#xFF0C;Service Worker&#x53EF;&#x4EE5;&#x6355;&#x83B7;&#x5B83;&#x6240;&#x8D1F;&#x8D23;&#x7684;&#x9875;&#x9762;&#x7684;&#x8BF7;&#x6C42;&#xFF0C;&#x5E76;&#x8FD4;&#x56DE;&#x76F8;&#x5E94;&#x8D44;&#x6E90;&#xFF0C;&#x8FD9;&#x4F7F;&#x79BB;&#x7EBF;web&#x5E94;&#x7528;&#x6210;&#x4E3A;&#x4E86;&#x53EF;&#x80FD;&#x3002;&#x8FD9;&#x4E5F;&#x662F;Service Worker&#x88AB;&#x63D0;&#x51FA;&#x7684;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x76EE;&#x7684;&#x3002;&#x867D;&#x7136;&#x73B0;&#x5728;&#x652F;&#x6301;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x548C;&#x5E73;&#x53F0;&#x8FD8;&#x4E0D;&#x591A;&#xFF0C;&#x800C;&#x4E14;&#x8FD8;&#x5728;&#x8BD5;&#x9A8C;&#x9636;&#x6BB5;&#xFF0C;&#x4F46;&#x5DF2;&#x88AB;W3C&#x5236;&#x5B9A;<a href="http://www.w3.org/TR/service-workers/">&#x89C4;&#x8303;</a>&#x3002;&#x5728;&#x5C06;&#x6765;&#xFF0C;&#x5F53;Service Worker&#x66F4;&#x6210;&#x719F;&#x548C;&#x666E;&#x53CA;&#x65F6;&#xFF0C;&#x5C06;&#x4F1A;&#x4E3A;web app&#x6253;&#x5F00;&#x65B0;&#x7684;&#x5927;&#x95E8;&#x3002;</p>\n'}});
//# sourceMappingURL=8.9a626f12cc2fd40d60f0.js.map