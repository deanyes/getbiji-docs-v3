const n={frontmatter:{title:"开发者",description:"通过 API 把 Get笔记的知识库能力接入你的应用，支持直接调用、Dify、扣子等多种方式",hidden:!1,toc:!0,draft:!1},html:`<h1 id="开发者"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#开发者"><span class="icon icon-link"></span></a>开发者</h1>
<p>Get笔记提供开放 API，让你把知识库的 AI 搜索和召回能力接入自己的应用。不管你是做聊天机器人、内部知识助手，还是搭配 Dify、扣子等平台使用，都可以快速接入。</p>
<blockquote>
<p>目前 API 处于<strong>免审公测期</strong>，所有接口可能会调整或优化。公测期间免费使用，正式商业化后可能收费。不建议公测期间用于商业产品。</p>
</blockquote>
<h2 id="是什么"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#是什么"><span class="icon icon-link"></span></a>是什么</h2>
<p>Get笔记 OpenAPI 提供两个核心能力：</p>
<ul>
<li><strong>知识库搜索</strong>：向知识库提问，AI 会从你的笔记、文件、关注的博主内容中找到答案，支持深度思考模式和流式返回</li>
<li><strong>知识库召回</strong>：根据问题召回最相关的内容片段，返回相似度评分，适合做二次加工</li>
</ul>
<p>你可以通过以下方式使用：</p>
<table>
<thead>
<tr>
<th>接入方式</th>
<th>适合谁</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>直接调用 API</td>
<td>有开发能力的用户</td>
<td>最灵活，完全自定义</td>
</tr>
<tr>
<td>Dify 外部知识库</td>
<td>Dify 用户</td>
<td>作为 Dify 的外部知识源</td>
</tr>
<tr>
<td>扣子插件</td>
<td>扣子用户</td>
<td>在扣子工作流或 Agent 中调用</td>
</tr>
</tbody>
</table>
<h2 id="怎么用"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#怎么用"><span class="icon icon-link"></span></a>怎么用</h2>
<h3 id="第一步获取-api-配置信息"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#第一步获取-api-配置信息"><span class="icon icon-link"></span></a>第一步：获取 API 配置信息</h3>
<p>打开 <a href="https://www.biji.com/subject">Get笔记知识库网页版</a>，点击顶部的「API 设置」按钮，进入配置页面。</p>
<p><img src="/images/GYUKbFlMAo83gsxZk2nccbTnn0f.png" alt="知识库网页版顶部导航栏，右侧显示「API 设置」按钮，点击可打开 API 配置页面"></p>
<p>你会看到两个关键参数：</p>
<ul>
<li><strong>参数值 1（API Key）</strong>：用于身份验证</li>
<li><strong>参数值 2（知识库 ID）</strong>：指定要查询的知识库</li>
</ul>
<p><img src="/images/XpT8brRgeolr5txpLhZcXZjqneZ.png" alt="API 配置页面，显示两个参数值：参数值1为 API Key（用于认证），参数值2为知识库 ID（用于指定查询的知识库），每个参数旁有复制按钮"></p>
<blockquote>
<p>请妥善保管 API Key，不要提交到公开代码仓库。如怀疑泄露，立即重新生成。</p>
</blockquote>
<h3 id="第二步调用-api"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#第二步调用-api"><span class="icon icon-link"></span></a>第二步：调用 API</h3>
<p><strong>基础信息：</strong></p>
<ul>
<li>接口地址：<code>https://open-api.biji.com/getnote/openapi</code></li>
<li>认证方式：在请求头中添加 <code>Authorization: Bearer {你的API Key}</code></li>
<li>频率限制：每秒 2 次请求（QPS），每天 5000 次</li>
</ul>
<p><strong>知识库搜索（获取 AI 回答）：</strong></p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">curl</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> -X</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> POST</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> https://open-api.biji.com/getnote/openapi/knowledge/search</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -H</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "Authorization: Bearer {你的API Key}"</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -H</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "Content-Type: application/json"</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -d</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '{</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "question": "你的问题",</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "topic_ids": ["你的知识库ID"],</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "deep_seek": false,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "refs": true</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">  }'</span></span></code></pre>
<p>参数说明：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>question</td>
<td>string</td>
<td>是</td>
<td>要搜索的问题</td>
</tr>
<tr>
<td>topic_ids</td>
<td>string[]</td>
<td>是</td>
<td>知识库 ID 列表（目前支持 1 个）</td>
</tr>
<tr>
<td>deep_seek</td>
<td>bool</td>
<td>是</td>
<td>是否开启深度思考</td>
</tr>
<tr>
<td>refs</td>
<td>bool</td>
<td>否</td>
<td>是否返回引用来源，默认 false</td>
</tr>
<tr>
<td>history</td>
<td>array</td>
<td>否</td>
<td>对话历史，用于追问</td>
</tr>
</tbody>
</table>
<p>流式接口地址为 <code>/knowledge/search/stream</code>，返回的 <code>msg_type</code> 含义：</p>
<table>
<thead>
<tr>
<th>msg_type</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>AI 回答内容</td>
</tr>
<tr>
<td>3</td>
<td>结束标记 [END]</td>
</tr>
<tr>
<td>6</td>
<td>处理流程信息</td>
</tr>
<tr>
<td>21</td>
<td>深度思考过程（逐字返回）</td>
</tr>
<tr>
<td>22</td>
<td>思考耗时</td>
</tr>
<tr>
<td>105</td>
<td>引用来源数据</td>
</tr>
<tr>
<td>8</td>
<td>风控提醒</td>
</tr>
<tr>
<td>0</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<p><strong>知识库召回（获取相关片段）：</strong></p>
<pre class="shiki shiki-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#B392F0">curl</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> -X</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> POST</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> https://open-api.biji.com/getnote/openapi/knowledge/search/recall</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -H</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "Authorization: Bearer {你的API Key}"</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -H</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "Content-Type: application/json"</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">  -d</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '{</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "question": "你的问题",</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "topic_ids": ["你的知识库ID"],</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">    "top_k": 10</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">  }'</span></span></code></pre>
<p>返回结果中每条记录包含：<code>title</code>（标题）、<code>content</code>（内容）、<code>score</code>（相似度评分）、<code>type</code>（来源类型：FILE / NOTE / BLOGGER）。</p>
<h3 id="第三步选择接入方式"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#第三步选择接入方式"><span class="icon icon-link"></span></a>第三步：选择接入方式</h3>
<p>根据你的需求选择合适的接入方式：</p>
<h4 id="在-dify-中使用"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#在-dify-中使用"><span class="icon icon-link"></span></a>在 Dify 中使用</h4>
<p>适合已经在用 Dify 搭建 AI 应用的用户。把 Get笔记知识库作为 Dify 的外部知识源。</p>
<ol>
<li>进入 Dify「知识库」标签页，点击<strong>外部知识库 API</strong> → <strong>添加外部知识库 API</strong></li>
</ol>
<p><img src="/images/QzjpbvqchoLc6ixPA1Cc1tgjnmf.png" alt="Dify 知识库页面，左侧标签栏选中「外部知识库 API」，右上角显示蓝色「添加外部知识库 API」按钮"></p>
<ol>
<li>填写配置信息：
<ul>
<li><strong>名称</strong>：建议填「XXX 的 Get笔记知识库」</li>
<li><strong>API Endpoint</strong>：<code>https://open-api.biji.com/getnote/openapi/knowledge/dify</code></li>
<li><strong>API Key</strong>：粘贴你的参数值 1</li>
</ul>
</li>
</ol>
<p><img src="/images/V3eUbiVQqo3tZaxKvA5cDlFinHc.png" alt="Dify 添加外部知识库 API 表单，包含名称、API Endpoint 和 API Key 三个输入框，底部有取消和保存按钮"></p>
<ol>
<li>新建外部知识库，选择刚添加的 API，在<strong>外部知识库 ID</strong> 中粘贴参数值 2</li>
</ol>
<p><img src="/images/BvhLb0916o4UAAxH40JckpIOnQf.png" alt="Dify 创建外部知识库页面，下拉菜单选择已添加的外部知识库 API，下方输入框填写外部知识库 ID"></p>
<ol>
<li>测试通过后，就可以在 Dify 的 Agent 中使用这个知识库了</li>
</ol>
<p><img src="/images/REmbbLe01oajZixUmaicMyCqn3b.png" alt="Dify 知识库召回测试页面，左侧输入测试问题，右侧显示召回结果和相关内容片段"></p>
<h4 id="在扣子中使用"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#在扣子中使用"><span class="icon icon-link"></span></a>在扣子中使用</h4>
<p>Get笔记知识库已上架<a href="https://www.coze.cn/store/agent?cate_type=recommend">扣子插件商店</a>，搜索「Get笔记知识库」即可找到。目前提供召回能力，可配合模型做进一步处理。</p>
<p><img src="/images/Qg8Fb4uyCoHVa5xV7ZnchC5an4d.png" alt="扣子插件商店搜索结果页面，显示「Get笔记知识库」插件卡片，包含插件图标、名称和简介"></p>
<p><strong>方式一：在工作流中使用</strong></p>
<ol>
<li>进入<a href="https://www.coze.cn/work_flow">扣子工作流</a>，创建新工作流，添加「开始」节点并设置输入参数（如 Question）</li>
</ol>
<p><img src="/images/C5CTbGoPdotA2CxLIQgcTOXXnQg.png" alt="扣子工作流编辑器，左侧为「开始」节点配置面板，添加了一个名为 Question 的字符串输入参数"></p>
<ol>
<li>添加节点，搜索「Get笔记知识库」插件，选择 <strong>getnote_knowledge_recall</strong> 工具</li>
</ol>
<p><img src="/images/PNPkbYhypoRkpUx3sL6cf1bhnid.png" alt="扣子工作流添加节点面板，搜索框输入「Get笔记知识库」，搜索结果显示两个工具，第二个为 getnote_knowledge_recall"></p>
<ol>
<li>配置参数：<strong>question</strong> 关联开始节点的输入、<strong>Authorization</strong> 填参数值 1、<strong>topic_id</strong> 填参数值 2</li>
</ol>
<p><img src="/images/QgFBbngvSoXEYUx2Ff6cF8LynSb.png" alt="扣子工作流 getnote_knowledge_recall 节点配置面板，显示 question、Authorization、topic_id、top_k 等参数输入框"></p>
<ol>
<li>后续可接模型节点或输出节点，完成工作流搭建</li>
</ol>
<p><img src="/images/DM80b3b9SoXBi7x7TSqcB7EUnnc.png" alt="扣子完整工作流示例，从开始节点到 Get笔记知识库召回节点，再到大模型处理节点，最后到结束输出节点"></p>
<p><strong>方式二：在 Agent 中直接使用插件</strong></p>
<ol>
<li>新建 Agent，在「编排」标签页点击「添加插件」</li>
</ol>
<p><img src="/images/K5A8bmw0KowEPLxuiWUcwGI3nhc.png" alt="扣子 Agent 编排页面，左侧显示编排配置区域，技能区域有「添加插件」按钮"></p>
<ol>
<li>搜索「Get笔记知识库」，选择 <strong>getnote_knowledge_recall</strong> 工具</li>
</ol>
<p><img src="/images/TpxsbGxIGoG4GAx3p2SchcOvn6r.png" alt="扣子插件搜索弹窗，输入「Get笔记知识库」后显示搜索结果，列出可用的知识库工具"></p>
<ol>
<li>配置 <strong>Authorization</strong>（参数值 1）和 <strong>topic_id</strong>（参数值 2，需加 Bearer 前缀）</li>
</ol>
<p><img src="/images/IBvRbay9QoXsxXxXenmcKy6unEg.png" alt="扣子 Agent 插件参数配置面板，显示 Authorization 和 topic_id 两个输入框，需要填入对应的 API 参数值"></p>
<blockquote>
<p>填完两个参数后，<strong>必须把参数开关切到关闭状态</strong>（点击滑块按钮），否则每次调用时会要求用户手动输入。</p>
</blockquote>
<p><img src="/images/PQkCbP42XoROCuxRUJJc7EWTnhg.png" alt="扣子 Agent 插件参数配置完成状态，Authorization 和 topic_id 旁边的开关滑块已切换到关闭（灰色）状态"></p>
<h2 id="小技巧"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#小技巧"><span class="icon icon-link"></span></a>小技巧</h2>
<ul>
<li><strong>先用网页版测试</strong>：在知识库网页版直接提问，确认效果满意后再接入 API</li>
<li><strong>合理设置 top_k</strong>：召回接口默认返回 10 条结果，如果你的知识库内容少，可以调小这个值减少噪音</li>
<li><strong>善用对话历史</strong>：搜索接口支持 <code>history</code> 参数，传入之前的对话记录可以实现追问效果</li>
<li><strong>深度思考按需开启</strong>：<code>deep_seek</code> 开启后回答更深入但更慢，简单查询可以关闭提速</li>
</ul>
<h2 id="需要帮助"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#需要帮助"><span class="icon icon-link"></span></a>需要帮助？</h2>
<p>扫码加入官方交流群，与其他开发者交流：</p>
<p><img src="/images/NvqGbWNRxo44nxx9UbBclhsZnEb.png" alt="Get笔记官方交流群二维码，微信扫码即可加入"></p>`,headings:[{depth:2,text:"是什么",id:"是什么"},{depth:2,text:"怎么用",id:"怎么用"},{depth:3,text:"第一步：获取 API 配置信息",id:"第一步获取-api-配置信息"},{depth:3,text:"第二步：调用 API",id:"第二步调用-api"},{depth:3,text:"第三步：选择接入方式",id:"第三步选择接入方式"},{depth:4,text:"在 Dify 中使用",id:"在-dify-中使用"},{depth:4,text:"在扣子中使用",id:"在扣子中使用"},{depth:2,text:"小技巧",id:"小技巧"},{depth:2,text:"需要帮助？",id:"需要帮助"}],raw:`
# 开发者

Get笔记提供开放 API，让你把知识库的 AI 搜索和召回能力接入自己的应用。不管你是做聊天机器人、内部知识助手，还是搭配 Dify、扣子等平台使用，都可以快速接入。

> 目前 API 处于**免审公测期**，所有接口可能会调整或优化。公测期间免费使用，正式商业化后可能收费。不建议公测期间用于商业产品。

## 是什么

Get笔记 OpenAPI 提供两个核心能力：

- **知识库搜索**：向知识库提问，AI 会从你的笔记、文件、关注的博主内容中找到答案，支持深度思考模式和流式返回
- **知识库召回**：根据问题召回最相关的内容片段，返回相似度评分，适合做二次加工

你可以通过以下方式使用：

| 接入方式 | 适合谁 | 说明 |
|---------|-------|------|
| 直接调用 API | 有开发能力的用户 | 最灵活，完全自定义 |
| Dify 外部知识库 | Dify 用户 | 作为 Dify 的外部知识源 |
| 扣子插件 | 扣子用户 | 在扣子工作流或 Agent 中调用 |

## 怎么用

### 第一步：获取 API 配置信息

打开 [Get笔记知识库网页版](https://www.biji.com/subject)，点击顶部的「API 设置」按钮，进入配置页面。

![知识库网页版顶部导航栏，右侧显示「API 设置」按钮，点击可打开 API 配置页面](/images/GYUKbFlMAo83gsxZk2nccbTnn0f.png)

你会看到两个关键参数：

- **参数值 1（API Key）**：用于身份验证
- **参数值 2（知识库 ID）**：指定要查询的知识库

![API 配置页面，显示两个参数值：参数值1为 API Key（用于认证），参数值2为知识库 ID（用于指定查询的知识库），每个参数旁有复制按钮](/images/XpT8brRgeolr5txpLhZcXZjqneZ.png)

> 请妥善保管 API Key，不要提交到公开代码仓库。如怀疑泄露，立即重新生成。

### 第二步：调用 API

**基础信息：**

- 接口地址：\`https://open-api.biji.com/getnote/openapi\`
- 认证方式：在请求头中添加 \`Authorization: Bearer {你的API Key}\`
- 频率限制：每秒 2 次请求（QPS），每天 5000 次

**知识库搜索（获取 AI 回答）：**

\`\`\`bash
curl -X POST https://open-api.biji.com/getnote/openapi/knowledge/search \\
  -H "Authorization: Bearer {你的API Key}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "你的问题",
    "topic_ids": ["你的知识库ID"],
    "deep_seek": false,
    "refs": true
  }'
\`\`\`

参数说明：

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| question | string | 是 | 要搜索的问题 |
| topic_ids | string[] | 是 | 知识库 ID 列表（目前支持 1 个） |
| deep_seek | bool | 是 | 是否开启深度思考 |
| refs | bool | 否 | 是否返回引用来源，默认 false |
| history | array | 否 | 对话历史，用于追问 |

流式接口地址为 \`/knowledge/search/stream\`，返回的 \`msg_type\` 含义：

| msg_type | 含义 |
|----------|------|
| 1 | AI 回答内容 |
| 3 | 结束标记 [END] |
| 6 | 处理流程信息 |
| 21 | 深度思考过程（逐字返回） |
| 22 | 思考耗时 |
| 105 | 引用来源数据 |
| 8 | 风控提醒 |
| 0 | 错误信息 |

**知识库召回（获取相关片段）：**

\`\`\`bash
curl -X POST https://open-api.biji.com/getnote/openapi/knowledge/search/recall \\
  -H "Authorization: Bearer {你的API Key}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "你的问题",
    "topic_ids": ["你的知识库ID"],
    "top_k": 10
  }'
\`\`\`

返回结果中每条记录包含：\`title\`（标题）、\`content\`（内容）、\`score\`（相似度评分）、\`type\`（来源类型：FILE / NOTE / BLOGGER）。

### 第三步：选择接入方式

根据你的需求选择合适的接入方式：

#### 在 Dify 中使用

适合已经在用 Dify 搭建 AI 应用的用户。把 Get笔记知识库作为 Dify 的外部知识源。

1. 进入 Dify「知识库」标签页，点击**外部知识库 API** → **添加外部知识库 API**

![Dify 知识库页面，左侧标签栏选中「外部知识库 API」，右上角显示蓝色「添加外部知识库 API」按钮](/images/QzjpbvqchoLc6ixPA1Cc1tgjnmf.png)

2. 填写配置信息：
   - **名称**：建议填「XXX 的 Get笔记知识库」
   - **API Endpoint**：\`https://open-api.biji.com/getnote/openapi/knowledge/dify\`
   - **API Key**：粘贴你的参数值 1

![Dify 添加外部知识库 API 表单，包含名称、API Endpoint 和 API Key 三个输入框，底部有取消和保存按钮](/images/V3eUbiVQqo3tZaxKvA5cDlFinHc.png)

3. 新建外部知识库，选择刚添加的 API，在**外部知识库 ID** 中粘贴参数值 2

![Dify 创建外部知识库页面，下拉菜单选择已添加的外部知识库 API，下方输入框填写外部知识库 ID](/images/BvhLb0916o4UAAxH40JckpIOnQf.png)

4. 测试通过后，就可以在 Dify 的 Agent 中使用这个知识库了

![Dify 知识库召回测试页面，左侧输入测试问题，右侧显示召回结果和相关内容片段](/images/REmbbLe01oajZixUmaicMyCqn3b.png)

#### 在扣子中使用

Get笔记知识库已上架[扣子插件商店](https://www.coze.cn/store/agent?cate_type=recommend)，搜索「Get笔记知识库」即可找到。目前提供召回能力，可配合模型做进一步处理。

![扣子插件商店搜索结果页面，显示「Get笔记知识库」插件卡片，包含插件图标、名称和简介](/images/Qg8Fb4uyCoHVa5xV7ZnchC5an4d.png)

**方式一：在工作流中使用**

1. 进入[扣子工作流](https://www.coze.cn/work_flow)，创建新工作流，添加「开始」节点并设置输入参数（如 Question）

![扣子工作流编辑器，左侧为「开始」节点配置面板，添加了一个名为 Question 的字符串输入参数](/images/C5CTbGoPdotA2CxLIQgcTOXXnQg.png)

2. 添加节点，搜索「Get笔记知识库」插件，选择 **getnote_knowledge_recall** 工具

![扣子工作流添加节点面板，搜索框输入「Get笔记知识库」，搜索结果显示两个工具，第二个为 getnote_knowledge_recall](/images/PNPkbYhypoRkpUx3sL6cf1bhnid.png)

3. 配置参数：**question** 关联开始节点的输入、**Authorization** 填参数值 1、**topic_id** 填参数值 2

![扣子工作流 getnote_knowledge_recall 节点配置面板，显示 question、Authorization、topic_id、top_k 等参数输入框](/images/QgFBbngvSoXEYUx2Ff6cF8LynSb.png)

4. 后续可接模型节点或输出节点，完成工作流搭建

![扣子完整工作流示例，从开始节点到 Get笔记知识库召回节点，再到大模型处理节点，最后到结束输出节点](/images/DM80b3b9SoXBi7x7TSqcB7EUnnc.png)

**方式二：在 Agent 中直接使用插件**

1. 新建 Agent，在「编排」标签页点击「添加插件」

![扣子 Agent 编排页面，左侧显示编排配置区域，技能区域有「添加插件」按钮](/images/K5A8bmw0KowEPLxuiWUcwGI3nhc.png)

2. 搜索「Get笔记知识库」，选择 **getnote_knowledge_recall** 工具

![扣子插件搜索弹窗，输入「Get笔记知识库」后显示搜索结果，列出可用的知识库工具](/images/TpxsbGxIGoG4GAx3p2SchcOvn6r.png)

3. 配置 **Authorization**（参数值 1）和 **topic_id**（参数值 2，需加 Bearer 前缀）

![扣子 Agent 插件参数配置面板，显示 Authorization 和 topic_id 两个输入框，需要填入对应的 API 参数值](/images/IBvRbay9QoXsxXxXenmcKy6unEg.png)

> 填完两个参数后，**必须把参数开关切到关闭状态**（点击滑块按钮），否则每次调用时会要求用户手动输入。

![扣子 Agent 插件参数配置完成状态，Authorization 和 topic_id 旁边的开关滑块已切换到关闭（灰色）状态](/images/PQkCbP42XoROCuxRUJJc7EWTnhg.png)

## 小技巧

- **先用网页版测试**：在知识库网页版直接提问，确认效果满意后再接入 API
- **合理设置 top_k**：召回接口默认返回 10 条结果，如果你的知识库内容少，可以调小这个值减少噪音
- **善用对话历史**：搜索接口支持 \`history\` 参数，传入之前的对话记录可以实现追问效果
- **深度思考按需开启**：\`deep_seek\` 开启后回答更深入但更慢，简单查询可以关闭提速

## 需要帮助？

扫码加入官方交流群，与其他开发者交流：

![Get笔记官方交流群二维码，微信扫码即可加入](/images/NvqGbWNRxo44nxx9UbBclhsZnEb.png)
`};export{n as default};
