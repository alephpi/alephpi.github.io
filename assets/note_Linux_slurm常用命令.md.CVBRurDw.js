import{_ as n,c as a,ap as p,o as l}from"./chunks/framework.CCxIPCIe.js";const A=JSON.parse('{"title":"slurm 常用命令","description":"","frontmatter":{"title":"slurm 常用命令","date":"2025-08-23T05:08:41.795Z","length":"167字","time":"1分钟","aside":true,"hash":-968796220},"headers":[],"relativePath":"note/Linux/slurm常用命令.md","filePath":"note/Linux/slurm常用命令.md"}'),o={name:"note/Linux/slurm常用命令.md"};function e(c,s,t,r,y,i){return l(),a("div",null,s[0]||(s[0]=[p(`<p>经常使用 slurm 命令，今天索性总结并缩写一下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#268BD2;">ask</span><span style="color:#839496;">(){</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">    local</span><span style="color:#268BD2;"> partition</span><span style="color:#859900;">=$</span><span style="color:#839496;">1</span></span>
<span class="line"><span style="color:#859900;">    case</span><span style="color:#2AA198;"> &quot;</span><span style="color:#268BD2;">$partition</span><span style="color:#2AA198;">&quot;</span><span style="color:#859900;"> in</span></span>
<span class="line"><span style="color:#DC322F;">        a</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> A40</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        A</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> A100</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        v</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> V100-16GB</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        V</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> V100-32GB</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        p</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> P100</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        c</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> CPU</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#DC322F;">        H</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#2AA198;"> H100</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#859900;">        *)</span></span>
<span class="line"><span style="color:#268BD2;">        srun</span><span style="color:#CB4B16;"> -p</span><span style="color:#268BD2;"> $partition</span><span style="color:#CB4B16;"> --gres=gpu:1</span><span style="color:#CB4B16;"> -c</span><span style="color:#D33682;"> 20</span><span style="color:#CB4B16;"> --pty</span><span style="color:#2AA198;"> bash</span></span>
<span class="line"><span style="color:#839496;">        ;;</span></span>
<span class="line"><span style="color:#859900;">    esac</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#268BD2;">job</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#859900;">    if</span><span style="color:#839496;"> [ </span><span style="color:#268BD2;">$#</span><span style="color:#859900;"> -eq</span><span style="color:#D33682;"> 0</span><span style="color:#839496;"> ]; </span><span style="color:#859900;">then</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">        # 无参数，查看节点信息</span></span>
<span class="line"><span style="color:#268BD2;">        sinfo</span></span>
<span class="line"><span style="color:#859900;">    else</span></span>
<span class="line"><span style="color:#859900;">        case</span><span style="color:#2AA198;"> &quot;</span><span style="color:#859900;">$</span><span style="color:#2AA198;">1&quot;</span><span style="color:#859900;"> in</span></span>
<span class="line"><span style="color:#DC322F;">            me</span><span style="color:#859900;">|</span><span style="color:#DC322F;">m</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">                squeue</span><span style="color:#CB4B16;"> -u</span><span style="color:#2AA198;"> &quot;</span><span style="color:#268BD2;">$USER</span><span style="color:#2AA198;">&quot;</span></span>
<span class="line"><span style="color:#839496;">                ;;</span></span>
<span class="line"><span style="color:#DC322F;">            all</span><span style="color:#859900;">|</span><span style="color:#DC322F;">a</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">                squeue</span></span>
<span class="line"><span style="color:#839496;">                ;;</span></span>
<span class="line"><span style="color:#2AA198;">            &#39;&#39;</span><span style="color:#859900;">|*</span><span style="color:#DC322F;">[!0-9]</span><span style="color:#859900;">*</span><span style="color:#859900;">)</span></span>
<span class="line"><span style="color:#268BD2;">                echo</span><span style="color:#2AA198;"> &quot;用法：job [me|all|&lt;jobid&gt;]&quot;</span></span>
<span class="line"><span style="color:#839496;">                ;;</span></span>
<span class="line"><span style="color:#859900;">            *)</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">                # 如果参数全是数字，就当作 jobid</span></span>
<span class="line"><span style="color:#268BD2;">                scontrol</span><span style="color:#2AA198;"> show</span><span style="color:#2AA198;"> job</span><span style="color:#2AA198;"> &quot;</span><span style="color:#859900;">$</span><span style="color:#2AA198;">1&quot;</span></span>
<span class="line"><span style="color:#839496;">                ;;</span></span>
<span class="line"><span style="color:#859900;">        esac</span></span>
<span class="line"><span style="color:#859900;">    fi</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre></div>`,2)]))}const u=n(o,[["render",e]]);export{A as __pageData,u as default};
