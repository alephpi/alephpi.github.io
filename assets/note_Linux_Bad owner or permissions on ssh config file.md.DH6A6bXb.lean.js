import{_ as s,c as e,ae as n,o as i}from"./chunks/framework.D5O521IJ.js";const g=JSON.parse('{"title":"Bad owner or permissions on ssh config file","description":"","frontmatter":{"title":"Bad owner or permissions on ssh config file","date":"2023-05-14T22:00:00.000Z","length":"235字","time":"1分钟","aside":true,"hash":-620453510},"headers":[],"relativePath":"note/Linux/Bad owner or permissions on ssh config file.md","filePath":"note/Linux/Bad owner or permissions on ssh config file.md"}'),a={name:"note/Linux/Bad owner or permissions on ssh config file.md"};function r(t,o,c,d,p,l){return i(),e("div",null,o[0]||(o[0]=[n(`<p>方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>chmod 700 ~/.ssh</span></span>
<span class="line"><span>chmod 600 &lt;对应文件名&gt;</span></span></code></pre></div><p>即可</p><p>今天突然发现 vscode 连接远程服务器不管用了。然后回到命令行，发现配置文件被<code>.ssh/gitpod/config</code>接管了（本来是<code>.ssh/config</code>）我于是把这个文件夹删了，再从命令行连接，成功。回到 vscode，还是不能连接。输出日志里面仍然是<code>Bad owner or permission on .ssh/gitpod/config</code>。回到命令行发现这个文件夹又产生了。我以为是 vscode 插件的问题，删了 remote 的插件，再试仍然没用。最后找到<a href="https://superuser.com/questions/1212402/bad-owner-or-permissions-on-ssh-config-file" target="_blank" rel="noreferrer">这个问题</a>。不知道是什么原因，之前没有出现过这个错误。有可能是因为 vscode 更新（1.78），然后把 config 文件重定向了？不知道。</p><p>5-22 更新： 破案了，原来是<code>.ssh/config</code>文件多了一行<code>Include &quot;gitpod/config&quot;</code>，怪哉之前怎么没发现。</p>`,5)]))}const h=s(a,[["render",r]]);export{g as __pageData,h as default};