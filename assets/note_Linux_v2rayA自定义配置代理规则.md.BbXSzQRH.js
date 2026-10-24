import{_ as s,c as n,ap as p,o}from"./chunks/framework.CCxIPCIe.js";const u=JSON.parse('{"title":"v2rayA 自定义配置代理规则","description":"","frontmatter":{"title":"v2rayA 自定义配置代理规则","date":"2025-05-14T01:29:31.351Z","length":"465字","time":"2分钟","aside":true,"hash":567703519},"headers":[],"relativePath":"note/Linux/v2rayA自定义配置代理规则.md","filePath":"note/Linux/v2rayA自定义配置代理规则.md"}'),t={name:"note/Linux/v2rayA自定义配置代理规则.md"};function e(l,a,i,c,r,d){return o(),n("div",null,a[0]||(a[0]=[p(`<p>近日回国远程办公，需要使用 vpn 来访问学术资源。之前我一直使用老铁配置的 vpn 服务器，在本地运行 v2rayA 客户端管理流量代理。</p><p>v2rayA 有两种基本模式：</p><ol><li>大陆白名单模式。即默认全局流量走 vpn 中介，只有在白名单内的大陆网站直接连接。</li><li>GFW list 模式。即默认全局流量直接连接，只有被防火长城阻挡的域名走 vpn 中介。</li></ol><p>然而当我直接使用这两种基本模式时，会相应的产生以下问题：</p><ol><li>使用大陆白名单模式时，访问 github 很慢，访问 notion 很快。</li><li>使用 GFW list 模式时，访问 github 很快，访问 notion 很慢。</li></ol><p>在 v2rayA 的官网上找到二者分别的配置如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span># 大陆白名单模式</span></span>
<span class="line"><span>default: proxy</span></span>
<span class="line"><span># 国外域名即使有中国 IP 也要优先代理</span></span>
<span class="line"><span># 注意，LoyalsoldierSite.dat 文件需要预先通过 v2rayA 下载</span></span>
<span class="line"><span># 或者手动去它的仓库下载，然后保存为 LoyalsoldierSite.dat</span></span>
<span class="line"><span># 仓库地址：https://github.com/Loyalsoldier/v2ray-rules-dat</span></span>
<span class="line"><span># domain(ext:&quot;LoyalsoldierSite.dat:geolocation-!cn&quot;)-&gt;proxy</span></span>
<span class="line"><span>domain(geosite:geolocation-!cn)-&gt;proxy</span></span>
<span class="line"><span># scholar sites</span></span>
<span class="line"><span>domain(geosite:google-scholar)-&gt;proxy</span></span>
<span class="line"><span>domain(geosite:category-scholar-!cn, geosite:category-scholar-cn)-&gt;direct</span></span>
<span class="line"><span>domain(geosite:cn)-&gt;direct</span></span>
<span class="line"><span>ip(geoip:hk,geoip:mo)-&gt;proxy</span></span>
<span class="line"><span>ip(geoip:private, geoip:cn)-&gt;direct</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span># GFWList 模式</span></span>
<span class="line"><span>default: direct</span></span>
<span class="line"><span># 学术网站</span></span>
<span class="line"><span>domain(geosite:google-scholar)-&gt;proxy</span></span>
<span class="line"><span>domain(geosite:category-scholar-!cn, geosite:category-scholar-cn)-&gt;direct</span></span>
<span class="line"><span># domain(ext:&quot;LoyalsoldierSite.dat:gfw&quot;, ext:&quot;LoyalsoldierSite.dat:greatfire&quot;)-&gt;proxy</span></span>
<span class="line"><span>domain(geosite:geolocation-!cn)-&gt;proxy</span></span>
<span class="line"><span># Telegram</span></span>
<span class="line"><span># 下面这条注释掉的规则需要来自 Loyalsoldiser 的 IP 文件</span></span>
<span class="line"><span># 仓库地址 https://github.com/Loyalsoldier/geoip/</span></span>
<span class="line"><span># 下载后可将其保存为 LoyalsoldierIP.dat</span></span>
<span class="line"><span># ip(ext:&quot;LoyalsoldierIP.dat:telegram&quot;)-&gt;proxy</span></span>
<span class="line"><span>ip(&quot;91.105.192.0/23&quot;,&quot;91.108.4.0/22&quot;,&quot;91.108.8.0/21&quot;,&quot;91.108.16.0/21&quot;,&quot;91.108.56.0/22&quot;,&quot;95.161.64.0/20&quot;,&quot;149.154.160.0/20&quot;,&quot;185.76.151.0/24&quot;,&quot;2001:67c:4e8::/48&quot;,&quot;2001:b28:f23c::/47&quot;,&quot;2001:b28:f23f::/48&quot;,&quot;2a0a:f280:203::/48&quot;)-&gt;proxy</span></span></code></pre></div>`,8)]))}const y=s(t,[["render",e]]);export{u as __pageData,y as default};
