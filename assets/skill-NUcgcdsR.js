const n={frontmatter:{title:"Get笔记 Skill",description:"OpenClaw/小龙虾 Get笔记技能安装使用指南",hidden:!1,toc:!0,draft:!1},html:`<h1 id="get笔记-skill"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#get笔记-skill"><span class="icon icon-link"></span></a>Get笔记 Skill</h1>
<p>Get笔记 Skill 让你通过 OpenClaw（小龙虾）AI 助手直接管理笔记和知识库。</p>
<h2 id="快速安装"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#快速安装"><span class="icon icon-link"></span></a>快速安装</h2>
<p>复制以下内容发给小龙虾，即可快速安装：</p>
<pre><code>请安装 Get笔记 技能，帮我记录和查找笔记。
技能地址：https://clawhub.ai/iswalle/getnote
API Key 获取：https://www.biji.com/openapi
</code></pre>
<hr>
<h2 id="常见问题"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#常见问题"><span class="icon icon-link"></span></a>常见问题</h2>
<h3 id="-bug-类问题"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#-bug-类问题"><span class="icon icon-link"></span></a>🐛 Bug 类问题</h3>
<h4 id="1-笔记删除后直接彻底删除未进回收站"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#1-笔记删除后直接彻底删除未进回收站"><span class="icon icon-link"></span></a>1. 笔记删除后直接彻底删除，未进回收站</h4>
<p>让小龙虾将某条笔记删除到回收站，笔记会被彻底删除，回收站为空，存在严重误删风险。</p>
<p><strong>解决方案</strong>：小龙虾删除的所有笔记都会进入回收站，可以在 Get笔记 App 打开侧边栏，点回收站查看，也可以在回收站选择恢复或者彻底删除。</p>
<h4 id="2-nas-上安装-skill-失败云服务器正常"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#2-nas-上安装-skill-失败云服务器正常"><span class="icon icon-link"></span></a>2. NAS 上安装 Skill 失败，云服务器正常</h4>
<p>在 NAS 上安装 Get笔记技能无法成功，换到云服务器则可以正常安装。</p>
<p><strong>解决方案</strong>：出于安全，建议使用 Mac 设备或者购买云服务版，Get笔记 Skill 本身不限制安装设备。</p>
<h4 id="3-技能装入-coze-后持续报-403"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#3-技能装入-coze-后持续报-403"><span class="icon icon-link"></span></a>3. 技能装入 Coze 后持续报 403</h4>
<p>将 Skill 部署到扣子（Coze）平台后，调用一直返回 403 错误。</p>
<p><strong>解决方案</strong>：Coze 等相关平台配置建议参考 <a href="https://www.biji.com/openapi">OpenAPI 开发文档</a> 调用相关 API，点击"使用文档"Tab。</p>
<h4 id="4-安装配置后-api-返回-pong-或者-503-错误"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#4-安装配置后-api-返回-pong-或者-503-错误"><span class="icon icon-link"></span></a>4. 安装/配置后 API 返回 pong 或者 503 错误</h4>
<p>已开通会员、新建 API Key 并填写 Client ID，仍报「API 权限不够」「返回都是 pong 或者返回 503 错误」。</p>
<p><strong>解决方案</strong>：</p>
<p>这种情况可能是小龙虾开启网络搜索用了错误的 API 配置，建议：</p>
<ol>
<li>告诉小龙虾：请严格按照 Skill.md 进行 API 调用，详情参考"快速决策"部分</li>
<li>告诉小龙虾卸载"Get笔记"Skill，然后重新安装：<code>帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md</code></li>
</ol>
<hr>
<h3 id="-日常使用问题"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#-日常使用问题"><span class="icon icon-link"></span></a>💡 日常使用问题</h3>
<h4 id="1-安装配置流程不会操作手机能用吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#1-安装配置流程不会操作手机能用吗"><span class="icon icon-link"></span></a>1. 安装/配置流程不会操作，手机能用吗？</h4>
<p>关于 OpenClaw 的基础安装配置，可以参考得到 AI 学习圈相关视频教程，安装成功后再配置 Get笔记 Skill。</p>
<h4 id="2-是否需要会员才能使用"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#2-是否需要会员才能使用"><span class="icon icon-link"></span></a>2. 是否需要会员才能使用</h4>
<p><strong>是的</strong>，Get笔记 Skill 安装后，调用相关能力仅限会员身份的账户使用。</p>
<h4 id="3-skill-能读取录音卡内容吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#3-skill-能读取录音卡内容吗"><span class="icon icon-link"></span></a>3. Skill 能读取录音卡内容吗？</h4>
<p><strong>可以</strong>读取包含录音卡录音笔记在内的所有笔记内容，也可以理解为您在 App 上看到的所有笔记，都可以读取。</p>
<h4 id="4-skill-能管理知识库吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#4-skill-能管理知识库吗"><span class="icon icon-link"></span></a>4. Skill 能管理知识库吗？</h4>
<p><strong>可以</strong>通过该 Skill 完成知识库创建、笔记加入或移除等知识库相关的操作，可以试试：</p>
<ul>
<li>把 XX 链接帮我保存到 XX 知识库</li>
</ul>
<h4 id="5-能安装到-easyclaw--kimi-claw-上吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#5-能安装到-easyclaw--kimi-claw-上吗"><span class="icon icon-link"></span></a>5. 能安装到 EasyClaw / Kimi Claw 上吗？</h4>
<p>理论上 OpenClaw 衍生的相关云服务都是支持的。</p>
<h4 id="6-能否一个-openclaw-对接两个账号"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#6-能否一个-openclaw-对接两个账号"><span class="icon icon-link"></span></a>6. 能否一个 OpenClaw 对接两个账号？</h4>
<p><strong>不建议</strong>这么做，因为两个账号之间的安全隔离比较难做。如果真的有需求，建议创建不同的 Agent，并在不同的 Agent 内配置不同的 Get笔记 Skill 对应 API Key。</p>
<h4 id="7-没有看到官方技能包入口"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#7-没有看到官方技能包入口"><span class="icon icon-link"></span></a>7. 没有看到官方技能包入口</h4>
<p>可以使用以下任意一个方式安装：</p>
<ul>
<li><code>请安装 Get笔记 技能，技能地址：https://clawhub.ai/iswalle/getnote</code></li>
<li><code>帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md</code></li>
</ul>
<h4 id="8-api-key-安全性"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#8-api-key-安全性"><span class="icon icon-link"></span></a>8. API Key 安全性</h4>
<p>API Key 只会在生成时显示一次，请妥善保管：</p>
<ul>
<li>建议写入小龙虾配置文件内</li>
<li>不要提交到公开的代码仓库</li>
<li>不要和朋友共享</li>
</ul>
<p>如果怀疑泄露，请立即登录 <a href="https://www.biji.com/openapi">管理后台</a>，点击"作废"。</p>
<h4 id="9-skill-能精准读取所有笔记数据吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#9-skill-能精准读取所有笔记数据吗"><span class="icon icon-link"></span></a>9. Skill 能精准读取所有笔记数据吗？</h4>
<p><strong>可以</strong>读取包含录音卡录音笔记在内的所有笔记内容，也可以读取录音笔记、链接笔记的原始内容，可以试试：</p>
<ul>
<li>帮我查看一下 XX 笔记的原始内容是什么</li>
</ul>
<h4 id="10-skill-可以看视频总结功能吗"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#10-skill-可以看视频总结功能吗"><span class="icon icon-link"></span></a>10. Skill 可以看视频总结功能吗？</h4>
<p><strong>可以</strong>，能够读取所有类型笔记的内容总结，包括上传的音视频生成的笔记。</p>
<hr>
<h2 id="官方资源"><a class="heading-anchor" aria-hidden="" tabindex="-1" href="#官方资源"><span class="icon icon-link"></span></a>官方资源</h2>
<table>
<thead>
<tr>
<th>类型</th>
<th>地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>Skill 安装地址</td>
<td><a href="https://clawhub.ai/iswalle/getnote">https://clawhub.ai/iswalle/getnote</a></td>
</tr>
<tr>
<td>GitHub（OpenClaw）</td>
<td><a href="https://github.com/iswalle/getnote-openclaw">https://github.com/iswalle/getnote-openclaw</a></td>
</tr>
<tr>
<td>GitHub（MCP）</td>
<td><a href="https://github.com/iswalle/getnote-mcp">https://github.com/iswalle/getnote-mcp</a></td>
</tr>
<tr>
<td>API Key 管理</td>
<td><a href="https://www.biji.com/openapi">https://www.biji.com/openapi</a></td>
</tr>
</tbody>
</table>`,headings:[{depth:2,text:"快速安装",id:"快速安装"},{depth:2,text:"常见问题",id:"常见问题"},{depth:3,text:"🐛 Bug 类问题",id:"-bug-类问题"},{depth:4,text:"1. 笔记删除后直接彻底删除，未进回收站",id:"1-笔记删除后直接彻底删除未进回收站"},{depth:4,text:"2. NAS 上安装 Skill 失败，云服务器正常",id:"2-nas-上安装-skill-失败云服务器正常"},{depth:4,text:"3. 技能装入 Coze 后持续报 403",id:"3-技能装入-coze-后持续报-403"},{depth:4,text:"4. 安装/配置后 API 返回 pong 或者 503 错误",id:"4-安装配置后-api-返回-pong-或者-503-错误"},{depth:3,text:"💡 日常使用问题",id:"-日常使用问题"},{depth:4,text:"1. 安装/配置流程不会操作，手机能用吗？",id:"1-安装配置流程不会操作手机能用吗"},{depth:4,text:"2. 是否需要会员才能使用",id:"2-是否需要会员才能使用"},{depth:4,text:"3. Skill 能读取录音卡内容吗？",id:"3-skill-能读取录音卡内容吗"},{depth:4,text:"4. Skill 能管理知识库吗？",id:"4-skill-能管理知识库吗"},{depth:4,text:"5. 能安装到 EasyClaw / Kimi Claw 上吗？",id:"5-能安装到-easyclaw--kimi-claw-上吗"},{depth:4,text:"6. 能否一个 OpenClaw 对接两个账号？",id:"6-能否一个-openclaw-对接两个账号"},{depth:4,text:"7. 没有看到官方技能包入口",id:"7-没有看到官方技能包入口"},{depth:4,text:"8. API Key 安全性",id:"8-api-key-安全性"},{depth:4,text:"9. Skill 能精准读取所有笔记数据吗？",id:"9-skill-能精准读取所有笔记数据吗"},{depth:4,text:"10. Skill 可以看视频总结功能吗？",id:"10-skill-可以看视频总结功能吗"},{depth:2,text:"官方资源",id:"官方资源"}],raw:`
# Get笔记 Skill

Get笔记 Skill 让你通过 OpenClaw（小龙虾）AI 助手直接管理笔记和知识库。

## 快速安装

复制以下内容发给小龙虾，即可快速安装：

\`\`\`
请安装 Get笔记 技能，帮我记录和查找笔记。
技能地址：https://clawhub.ai/iswalle/getnote
API Key 获取：https://www.biji.com/openapi
\`\`\`

---

## 常见问题

### 🐛 Bug 类问题

#### 1. 笔记删除后直接彻底删除，未进回收站

让小龙虾将某条笔记删除到回收站，笔记会被彻底删除，回收站为空，存在严重误删风险。

**解决方案**：小龙虾删除的所有笔记都会进入回收站，可以在 Get笔记 App 打开侧边栏，点回收站查看，也可以在回收站选择恢复或者彻底删除。

#### 2. NAS 上安装 Skill 失败，云服务器正常

在 NAS 上安装 Get笔记技能无法成功，换到云服务器则可以正常安装。

**解决方案**：出于安全，建议使用 Mac 设备或者购买云服务版，Get笔记 Skill 本身不限制安装设备。

#### 3. 技能装入 Coze 后持续报 403

将 Skill 部署到扣子（Coze）平台后，调用一直返回 403 错误。

**解决方案**：Coze 等相关平台配置建议参考 [OpenAPI 开发文档](https://www.biji.com/openapi) 调用相关 API，点击"使用文档"Tab。

#### 4. 安装/配置后 API 返回 pong 或者 503 错误

已开通会员、新建 API Key 并填写 Client ID，仍报「API 权限不够」「返回都是 pong 或者返回 503 错误」。

**解决方案**：

这种情况可能是小龙虾开启网络搜索用了错误的 API 配置，建议：

1. 告诉小龙虾：请严格按照 Skill.md 进行 API 调用，详情参考"快速决策"部分
2. 告诉小龙虾卸载"Get笔记"Skill，然后重新安装：\`帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md\`

---

### 💡 日常使用问题

#### 1. 安装/配置流程不会操作，手机能用吗？

关于 OpenClaw 的基础安装配置，可以参考得到 AI 学习圈相关视频教程，安装成功后再配置 Get笔记 Skill。

#### 2. 是否需要会员才能使用

**是的**，Get笔记 Skill 安装后，调用相关能力仅限会员身份的账户使用。

#### 3. Skill 能读取录音卡内容吗？

**可以**读取包含录音卡录音笔记在内的所有笔记内容，也可以理解为您在 App 上看到的所有笔记，都可以读取。

#### 4. Skill 能管理知识库吗？

**可以**通过该 Skill 完成知识库创建、笔记加入或移除等知识库相关的操作，可以试试：

- 把 XX 链接帮我保存到 XX 知识库

#### 5. 能安装到 EasyClaw / Kimi Claw 上吗？

理论上 OpenClaw 衍生的相关云服务都是支持的。

#### 6. 能否一个 OpenClaw 对接两个账号？

**不建议**这么做，因为两个账号之间的安全隔离比较难做。如果真的有需求，建议创建不同的 Agent，并在不同的 Agent 内配置不同的 Get笔记 Skill 对应 API Key。

#### 7. 没有看到官方技能包入口

可以使用以下任意一个方式安装：

- \`请安装 Get笔记 技能，技能地址：https://clawhub.ai/iswalle/getnote\`
- \`帮我安装 Get笔记 skill，地址是 https://raw.githubusercontent.com/iswalle/getnote-openclaw/main/SKILL.md\`

#### 8. API Key 安全性

API Key 只会在生成时显示一次，请妥善保管：

- 建议写入小龙虾配置文件内
- 不要提交到公开的代码仓库
- 不要和朋友共享

如果怀疑泄露，请立即登录 [管理后台](https://www.biji.com/openapi)，点击"作废"。

#### 9. Skill 能精准读取所有笔记数据吗？

**可以**读取包含录音卡录音笔记在内的所有笔记内容，也可以读取录音笔记、链接笔记的原始内容，可以试试：

- 帮我查看一下 XX 笔记的原始内容是什么

#### 10. Skill 可以看视频总结功能吗？

**可以**，能够读取所有类型笔记的内容总结，包括上传的音视频生成的笔记。

---

## 官方资源

| 类型 | 地址 |
|-----|------|
| Skill 安装地址 | https://clawhub.ai/iswalle/getnote |
| GitHub（OpenClaw） | https://github.com/iswalle/getnote-openclaw |
| GitHub（MCP） | https://github.com/iswalle/getnote-mcp |
| API Key 管理 | https://www.biji.com/openapi |
`};export{n as default};
