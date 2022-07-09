import{_ as s,o as n,c as a,a as e}from"./app.64e4e240.js";const b=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Alternative Frontmatter Formats","slug":"alternative-frontmatter-formats"}],"relativePath":"guide/frontmatter.md","lastUpdated":1657402125000}'),l={name:"guide/frontmatter.md"},p=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a></h1><p>Any Markdown file that contains a YAML frontmatter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noopener noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Between the triple-dashed lines, you can set <a href="./../config/frontmatter-configs.html">predefined variables</a>, or even create custom ones of your own. These variables can be used via the special <code>$frontmatter</code> variable.</p><p>Here\u2019s an example of how you could use it in your Markdown file:</p><div class="language-md line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="alternative-frontmatter-formats" tabindex="-1">Alternative Frontmatter Formats <a class="header-anchor" href="#alternative-frontmatter-formats" aria-hidden="true">#</a></h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Blogging Like a Hacker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,9),r=[p];function t(o,c,i,d,m,u){return n(),a("div",null,r)}var D=s(l,[["render",t]]);export{b as __pageData,D as default};
