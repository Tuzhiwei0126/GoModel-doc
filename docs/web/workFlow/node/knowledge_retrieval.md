# 知识检索

### 定义

从知识库中检索与用户问题相关的文本内容，可作为下游 LLM 节点的上下文使用。

***

### 应用场景

常见情景：构建基于外部数据/知识的 AI 问答系统（RAG）。了解更多关于 RAG 的[基本概念](../../../learn-more/extended-reading/retrieval-augment/)。

下图为一个最基础的知识库问答应用示例，该流程的执行逻辑为：
1. 知识库检索作为 LLM 节点的前置步骤
2. 匹配用户问题最相关的文本内容并召回
3. 将用户问题与检索到的上下文一同作为 LLM 输入

    <figure><img src="../../../public/Group.png" alt=""><figcaption><p>知识库问答应用流程</p></figcaption></figure>

***

### 配置指引

**配置流程：**

1. **选择查询变量**  
   - 通常使用 `sys.query` 作为查询变量
   - 最大支持 200 字符的查询内容

2. **选择知识库**  
   - 需预先在 GoModel 中[创建知识库](../../knowledge-base/create-knowledge-and-upload-documents/)

3. **元数据筛选（可选）**  
   - 通过元数据筛选知识库内容
   - 详见[知识库集成指南](https://docs.GoModel.ai/guides/knowledge-base/integrate-knowledge-within-application)

4. **设置召回模式**  
   - 默认采用多路召回机制
   - 支持自定义召回策略

5. **连接下游节点**  
   - 通常连接至 LLM 节点

<figure><img src="https://assets-docs.GoModel.ai/retrieval-config.png" alt=""><figcaption><p>知识检索配置界面</p></figcaption></figure>

**输出变量**

<figure><img src="../../../public/Group.png" alt="" width="300"><figcaption><p>输出变量结构</p></figcaption></figure>

输出变量 `result` 包含以下字段：
- `content`: 文本分段内容
- `title`: 来源文档标题  
- `url`: 原文链接
- `icon`: 文档图标
- `metadata`: 元数据信息

**下游节点配置**

典型配置方式：
```python
{
  "context": "{{result}}",
  "query": "{{sys.query}}"
}
