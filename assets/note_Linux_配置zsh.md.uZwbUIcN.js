import{_ as n,c as a,ap as l,o as t}from"./chunks/framework.CCxIPCIe.js";const u=JSON.parse('{"title":"配置zsh","description":"","frontmatter":{"title":"配置zsh","date":"2023-11-02T16:58:40.650Z","length":"925字","time":"4分钟","aside":true,"hash":-2066502104},"headers":[],"relativePath":"note/Linux/配置zsh.md","filePath":"note/Linux/配置zsh.md"}'),e={name:"note/Linux/配置zsh.md"};function o(p,s,i,c,r,y){return t(),a("div",null,s[0]||(s[0]=[l(`<p>系统：ubuntu 22.04</p><p>最近换上了学校配发的新电脑，早听闻zsh大名，趁机配置一番。</p><p>zsh是bash的替代品，因其高度定制化与美观的界面博得程序员欢心。MacOS的默认shell已经更换为zsh。</p><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">oh-my-zsh</a>是一个配置zsh的开源项目，上面已经有许多预置。我是第一次从bash迁移至zsh，因而直接通过它安装zsh。</p><p>首先运行，安装<code>zsh</code>与<code>oh-my-zsh</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>sh -c &quot;$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span></code></pre></div><p>然后运行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>chsh -s $(which zsh) $(whoami)</span></span></code></pre></div><p>将当前用户的shell程序默认设置为<code>zsh</code>，需要注销并重新登录账户来更新配置。</p><p>重新登录后，打开终端，弹出的便是<code>zsh</code>。</p><p>打开<code>~/.zshrc</code>（类似于<code>bash</code>的<code>.bashrc</code>），只不过zsh特别的还有插件和主题选项。</p><p>配置上借鉴了<a href="https://github.com/antfu/dotfiles/blob/main/.zshrc" target="_blank" rel="noreferrer">antfu</a>，zsh插件与主题生态很丰富，可以自行查询下载。</p><p>在使用spaceship主题的时候我遇到了这个<a href="https://github.com/spaceship-prompt/spaceship-prompt/issues/1193" target="_blank" rel="noreferrer">bug</a>，放在这儿以便诸位。</p><p>spaceship主题需要<a href="https://www.nerdfonts.com/#home" target="_blank" rel="noreferrer">NerdFonts</a>，这里我选择JetBrainsMono Nerd Fonts，这个字体家族字体很多，我选择了Regular那一款安装。然后把终端字体和vscode中的字体都改为&quot;JetBrainsMono Nerd Font&quot;即可。</p><p>最后是我的配置仅供参考。</p><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#586E75;font-style:italic;"># If you come from bash you might have to change your $PATH.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># export PATH=$HOME/bin:/usr/local/bin:$PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Path to your oh-my-zsh installation.</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">export</span><span style="color:#268BD2;"> ZSH</span><span style="color:#859900;">=</span><span style="color:#2AA198;">&quot;</span><span style="color:#268BD2;">$HOME</span><span style="color:#2AA198;">/.oh-my-zsh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Set name of the theme to load --- if set to &quot;random&quot;, it will</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># load a random theme each time oh-my-zsh is loaded, in which case,</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># to know which specific one was loaded, run: echo $RANDOM_THEME</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</span></span>
<span class="line"><span style="color:#268BD2;">ZSH_THEME</span><span style="color:#859900;">=</span><span style="color:#2AA198;">&quot;spaceship&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Set list of themes to pick from when loading at random</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Setting this variable when ZSH_THEME=random will cause zsh to load</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># a theme from this variable instead of looking in $ZSH/themes/</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># If set to an empty array, this variable will have no effect.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># ZSH_THEME_RANDOM_CANDIDATES=( &quot;robbyrussell&quot; &quot;agnoster&quot; )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to use case-sensitive completion.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># CASE_SENSITIVE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to use hyphen-insensitive completion.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Case-sensitive completion must be off. _ and - will be interchangeable.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># HYPHEN_INSENSITIVE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment one of the following lines to change the auto-update behavior</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># zstyle &#39;:omz:update&#39; mode disabled  # disable automatic updates</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># zstyle &#39;:omz:update&#39; mode auto      # update automatically without asking</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># zstyle &#39;:omz:update&#39; mode reminder  # just remind me to update when it&#39;s time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to change how often to auto-update (in days).</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># zstyle &#39;:omz:update&#39; frequency 13</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line if pasting URLs and other text is messed up.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># DISABLE_MAGIC_FUNCTIONS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to disable colors in ls.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># DISABLE_LS_COLORS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to disable auto-setting terminal title.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># DISABLE_AUTO_TITLE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to enable command auto-correction.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># ENABLE_CORRECTION=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line to display red dots whilst waiting for completion.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># You can also set it to another string to have that shown instead of the default red dots.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting...%f&quot;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Caution: this setting can cause issues with multiline prompts in zsh &lt; 5.7.1 (see #5765)</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># COMPLETION_WAITING_DOTS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line if you want to disable marking untracked files</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># under VCS as dirty. This makes repository status check for large repositories</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># much, much faster.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># DISABLE_UNTRACKED_FILES_DIRTY=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Uncomment the following line if you want to change the command execution time</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># stamp shown in the history command output.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># You can set one of the optional three formats:</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># &quot;mm/dd/yyyy&quot;|&quot;dd.mm.yyyy&quot;|&quot;yyyy-mm-dd&quot;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># or set a custom format using the strftime function format specifications,</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># see &#39;man strftime&#39; for details.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># HIST_STAMPS=&quot;mm/dd/yyyy&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Would you like to use another custom folder than $ZSH/custom?</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># ZSH_CUSTOM=/path/to/new-custom-folder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Which plugins would you like to load?</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Standard plugins can be found in $ZSH/plugins/</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Custom plugins may be added to $ZSH_CUSTOM/plugins/</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Example format: plugins=(rails git textmate ruby lighthouse)</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Add wisely, as too many plugins slow down shell startup.</span></span>
<span class="line"><span style="color:#268BD2;">plugins</span><span style="color:#859900;">=</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#2AA198;">        git</span></span>
<span class="line"><span style="color:#2AA198;">        z</span></span>
<span class="line"><span style="color:#2AA198;">        zsh-autosuggestions</span></span>
<span class="line"><span style="color:#2AA198;">        zsh-syntax-highlighting</span></span>
<span class="line"><span style="color:#839496;">        )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">source</span><span style="color:#268BD2;"> $ZSH</span><span style="color:#2AA198;">/oh-my-zsh.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># User configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># export MANPATH=&quot;/usr/local/man:$MANPATH&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># You may need to manually set your language environment</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">export</span><span style="color:#268BD2;"> LC_ALL</span><span style="color:#859900;">=</span><span style="color:#268BD2;">en_US</span><span style="color:#839496;">.</span><span style="color:#268BD2;">UTF-8</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">export</span><span style="color:#268BD2;"> LANG</span><span style="color:#859900;">=</span><span style="color:#268BD2;">en_US</span><span style="color:#839496;">.</span><span style="color:#268BD2;">UTF-8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Preferred editor for local and remote sessions</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># if [[ -n $SSH_CONNECTION ]]; then</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">#   export EDITOR=&#39;vim&#39;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># else</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">#   export EDITOR=&#39;mvim&#39;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Compilation flags</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># export ARCHFLAGS=&quot;-arch x86_64&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Set personal aliases, overriding those provided by oh-my-zsh libs,</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># plugins, and themes. Aliases can be placed here, though oh-my-zsh</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># users are encouraged to define aliases within the ZSH_CUSTOM folder.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># For a full list of active aliases, run \`alias\`.</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">#</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># Example aliases</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># alias zshconfig=&quot;mate ~/.zshrc&quot;</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># alias ohmyzsh=&quot;mate ~/.oh-my-zsh&quot;</span></span></code></pre></div>`,16)]))}const f=n(e,[["render",o]]);export{u as __pageData,f as default};
