# 1.2 从网页导入数据

GoModel 知识库支持借助第三方工具，如 [Jina Reader](https://jina.ai/reader) 和 [Firecrawl](https://www.firecrawl.dev/)，抓取公开网页内容，解析为 Markdown 格式后导入知识库。

> Jina Reader 和 Firecrawl 均为开源网页解析工具，能将网页内容转换为简洁且便于大语言模型（LLM）识别的 Markdown 文本，同时提供易用的 API 服务。

下面分别介绍 Firecrawl 和 Jina Reader 的使用方法。

## Firecrawl
### 配置 Firecrawl 凭据
1. 点击右上角头像，进入 **DataSource** 页面。
2. 点击 Firecrawl 右侧的 Configure 按钮。
![配置 Firecrawl](https://assets-docs.dify.ai/2024/12/d468cf996f591b4b2bd0ffb5de62bad4.png)
3. 登录 [Firecrawl 官网](https://www.firecrawl.dev/) 完成注册，获取 API Key 后按页面提示填入并保存。

### 使用 Firecrawl 抓取网页内容
1. 在知识库创建页选择 **Sync from website**，并在 provider 中选中 Firecrawl。
2. 填入需要抓取的目标 URL。
3. 配置相关选项，包括是否抓取子页面、抓取页面数量上限、页面抓取深度、排除页面、仅抓取页面、提取内容。
4. 完成配置后点击 **Run**，预览将要被抓取的目标页面链接。
![执行抓取](https://assets-docs.dify.ai/2024/12/3e63b4ced9770e21d5132c3aa8e5d2de.png)
5. 导入网页解析的文本到知识库文档中，查看导入结果。点击 **Add URL** 可继续导入新网页。抓取完成后，网页内容将被收录到知识库。

## Jina Reader
### 配置 Jina Reader 凭据
1. 点击右上角头像，前往 **DataSource** 页面。
2. 点击 Jina Reader 右侧的 Configure 按钮。
![配置 Jina Reader](https://assets-docs.dify.ai/2024/12/28b37f9b36fe808b2d3302c48fce5ea3.png)
3. 登录 [Jina Reader 官网](https://jina.ai/reader) 完成注册，获取 API Key 后按页面提示填入并保存。

### 使用 Jina Reader 抓取网页内容
1. 在知识库创建页选择 **Sync from website**，provider 选中 Jina Reader。
2. 填写需要抓取的目标 URL。
![网页抓取配置](https://assets-docs.dify.ai/2024/12/f9170b2a2ab1be94bc85ff3ed3c3e723.png)
3. 配置相关选项，如是否抓取子页面、抓取页面数量上限、是否使用 sitemap 抓取。
4. 完成配置后点击 **Run** 按钮，预览将要被抓取的页面链接。
![执行抓取](https://assets-docs.dify.ai/2024/12/a875f21a751551c03109c76308c577ee.png)
5. 导入网页解析的文本到知识库文档中，查看导入结果。如需继续添加网页，点击右侧 **Add URL** 按钮。
![导入网页解析文本至知识库内](https://assets-docs.dify.ai/2024/12/03494dc3c882ac1c74b464ea931e2533.png)
6. 抓取完成后，网页内容将被收录到知识库。
