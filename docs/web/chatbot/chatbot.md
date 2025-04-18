# 聊天助手

聊天助手是一种典型的一问一答型应用，适用于客户服务、在线教育、医疗保健、金融服务等场景，能够提升工作效率、降低人工成本并改善用户体验。

## 一、创建应用

在首页点击“创建应用”，填写应用名称，类型选择「聊天助手」。

## 二、编排应用

创建后自动跳转到应用概览页，点击左侧「编排」开始配置对话逻辑。

### 1. 填写提示词（Prompt）

提示词用于指导模型生成专业、准确的回复。你可以：

- 使用内置提示词生成器
- 插入变量，如  `{‌‬{‌‌‌‌‍‍‍‍input‌‌‌‌‌}}`
- 添加开场白与开场问题，提升用户体验

示例开场白：

```
你好，{{name}}。我是你的面试官 Bob，你准备好了吗？
```

> 配置路径：点击“添加功能” → 选择「对话开场白」

### 2. 添加上下文（可选）

若希望聊天助手基于特定知识进行回复，可在「上下文」中引入已建立的知识库，例如企业规范或产品文档。

### 3. 开启文档上传（多模态模型支持）

部分模型如 Claude 3.5 Sonnet、Gemini 1.5 Pro 原生支持文档读取。只需选择支持该功能的模型并开启“文档”功能，即可实现文档识别，无需复杂配置。

## 三、调试与测试

右侧填写用户输入内容进行调试，观察模型回应。如果效果不佳，可调整提示词或切换模型，并对比不同模型的表现。

## 四、发布应用

调试完成后点击右上角「发布」，生成独立 AI 应用。

使用方式包括：

- 分享公开链接
- 基于 API 二次开发