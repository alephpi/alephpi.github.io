import{_ as n,c as a,ap as p,o as l}from"./chunks/framework.CCxIPCIe.js";const u=JSON.parse('{"title":"公共博客私有源码","description":"","frontmatter":{"title":"公共博客私有源码","date":"2025-12-31T07:54:24.939Z","length":"370字","time":"2分钟","aside":true,"hash":454398876},"headers":[],"relativePath":"note/编程/公共博客私有源码.md","filePath":"note/编程/公共博客私有源码.md"}'),o={name:"note/编程/公共博客私有源码.md"};function e(t,s,c,r,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<p>为保护源码私密性，同时白嫖公共仓库的 github pages，本博客自 23 年底采用用私有源码构建后产物公开部署的方法。 由下述 github workflow 实现：</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Deploy</span></span>
<span class="line"><span style="color:#B58900;">on</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">  workflow_dispatch</span><span style="color:#839496;">: {}</span></span>
<span class="line"><span style="color:#268BD2;">  push</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">    branches</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#2AA198;">master</span></span>
<span class="line"><span style="color:#268BD2;">jobs</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">  deploy</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">    runs-on</span><span style="color:#839496;">: </span><span style="color:#2AA198;">ubuntu-latest</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    # permissions:</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    #   pages: write</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    #   id-token: write</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    # environment:</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    #   name: github-pages</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    #   url: \${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#268BD2;">    steps</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Checkout</span></span>
<span class="line"><span style="color:#268BD2;">        uses</span><span style="color:#839496;">: </span><span style="color:#2AA198;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#268BD2;">        with</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">          fetch-depth</span><span style="color:#839496;">: </span><span style="color:#D33682;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Install Node.js</span></span>
<span class="line"><span style="color:#268BD2;">        uses</span><span style="color:#839496;">: </span><span style="color:#2AA198;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#268BD2;">        with</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">          node-version</span><span style="color:#839496;">: </span><span style="color:#D33682;">18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Install pnpm</span></span>
<span class="line"><span style="color:#268BD2;">        uses</span><span style="color:#839496;">: </span><span style="color:#2AA198;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#268BD2;">        id</span><span style="color:#839496;">: </span><span style="color:#2AA198;">pnpm-install</span></span>
<span class="line"><span style="color:#268BD2;">        with</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">          version</span><span style="color:#839496;">: </span><span style="color:#2AA198;">latest</span></span>
<span class="line"><span style="color:#268BD2;">          run_install</span><span style="color:#839496;">: </span><span style="color:#B58900;">false</span></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Get pnpm store directory</span></span>
<span class="line"><span style="color:#268BD2;">        id</span><span style="color:#839496;">: </span><span style="color:#2AA198;">pnpm-cache</span></span>
<span class="line"><span style="color:#268BD2;">        shell</span><span style="color:#839496;">: </span><span style="color:#2AA198;">bash</span></span>
<span class="line"><span style="color:#268BD2;">        run</span><span style="color:#839496;">: </span><span style="color:#859900;">|</span></span>
<span class="line"><span style="color:#2AA198;">          echo &quot;STORE_PATH=$(pnpm store path)&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">uses</span><span style="color:#839496;">: </span><span style="color:#2AA198;">actions/cache@v3</span></span>
<span class="line"><span style="color:#268BD2;">        name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Setup pnpm cache</span></span>
<span class="line"><span style="color:#268BD2;">        with</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#268BD2;">          path</span><span style="color:#839496;">: </span><span style="color:#2AA198;">\${{ steps.pnpm-cache.outputs.STORE_PATH }}</span></span>
<span class="line"><span style="color:#268BD2;">          key</span><span style="color:#839496;">: </span><span style="color:#2AA198;">\${{ runner.os }}-pnpm-store-\${{ hashFiles(&#39;**/pnpm-lock.yaml&#39;) }}</span></span>
<span class="line"><span style="color:#268BD2;">          restore-keys</span><span style="color:#839496;">: </span><span style="color:#859900;">|</span></span>
<span class="line"><span style="color:#2AA198;">            \${{ runner.os }}-pnpm-store-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Install dependencies</span></span>
<span class="line"><span style="color:#268BD2;">        run</span><span style="color:#839496;">: </span><span style="color:#2AA198;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">Build</span></span>
<span class="line"><span style="color:#268BD2;">        run</span><span style="color:#839496;">: </span><span style="color:#2AA198;">pnpm build</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      # - uses: actions/configure-pages@v2</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      # - uses: actions/upload-pages-artifact@v1</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      #   with:</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      #     path: .vitepress/dist</span></span>
<span class="line"><span style="color:#839496;">      </span></span>
<span class="line"><span style="color:#839496;">          </span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      # - name: Deploy</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      #   id: deployment</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      #   uses: actions/deploy-pages@v1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">      # 关键步骤：利用这个 action 将生成的文档 push 到指定仓库</span></span>
<span class="line"><span style="color:#839496;">      - </span><span style="color:#268BD2;">name</span><span style="color:#839496;">: </span><span style="color:#2AA198;">push to public repo</span></span>
<span class="line"><span style="color:#268BD2;">        uses</span><span style="color:#839496;">: </span><span style="color:#2AA198;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#268BD2;">        with</span><span style="color:#839496;">:</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">          # Personal Access Token 下面讲 </span></span>
<span class="line"><span style="color:#268BD2;">          personal_token</span><span style="color:#839496;">: </span><span style="color:#2AA198;">\${{ secrets.PUBLISH_BLOG }}</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">          # 指定 push 的仓库  </span></span>
<span class="line"><span style="color:#268BD2;">          external_repository</span><span style="color:#839496;">: </span><span style="color:#2AA198;">alephpi/alephpi.github.io</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">          # 指定 push 的分支</span></span>
<span class="line"><span style="color:#268BD2;">          publish_branch</span><span style="color:#839496;">: </span><span style="color:#2AA198;">main</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">          # push 的目录</span></span>
<span class="line"><span style="color:#268BD2;">          publish_dir</span><span style="color:#839496;">: </span><span style="color:#2AA198;">.vitepress/dist</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">          # 是否只保留最新的提交记录</span></span>
<span class="line"><span style="color:#268BD2;">          force_orphan</span><span style="color:#839496;">: </span><span style="color:#B58900;">true</span></span></code></pre></div><p>其中，由于涉及到跨仓库访问，因而需要给私有仓库一个推送到公共仓库的权限，这里指定<code>personal_token</code>为 Develeper 中的 Personal access tokens 。这里可以生成一个 fine-grained token 只分配给 alephpi.github.io 的推送权限，然后将其保存在私有仓库的 Settings-&gt;Secrets and Variables-&gt;Actions-&gt;Repository Secrets-&gt;PUBLISH_BLOGS 中。</p><p>参考：<a href="https://www.wingoftime.cn/p/setup-blog-second/" target="_blank" rel="noreferrer">https://www.wingoftime.cn/p/setup-blog-second/</a> 。</p>`,4)]))}const B=n(o,[["render",e]]);export{u as __pageData,B as default};
