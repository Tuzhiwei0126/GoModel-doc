# 节点说明

**节点是工作流中的关键构成**，通过连接不同功能的节点，执行工作流的一系列操作。

### 核心节点

| 节点名称                                                 | 描述                                               |
|------------------------------------------------------|--------------------------------------------------|
| [开始（Start）](start.md)                                | 定义一个 workflow 流程启动的初始参数。                         |
| [结束（End）](end.md)                                    | 定义一个 workflow 流程结束的最终输出内容。                       |
| [文档提取(docx extractor)](docx_extractor.md)            | 帮助将文档转换为LLM可以处理的格式                               |
| [大语言模型（LLM）](LLM.md)                                 | 调用大语言模型回答问题或者对自然语言进行处理。                          |
| [列表操作（list operator)](list_operator.md)              | 使用列表操作处理多文件输入，可以分离文件，为下游提供标准化输入格式                |
| [知识检索（Knowledge Retrieval）](knowledge_retrieval.md)  | 从知识库中检索与用户问题相关的文本内容，可作为下游 LLM 节点的上下文。            |
| [问题分类（Question Classifier）](question_classifier.md)  | 通过定义分类描述，LLM 能够根据用户输入选择与之相匹配的分类。                 |
| [条件分支（IF/ELSE）](ifelse.md)                           | 允许你根据 if/else 条件将 workflow 拆分成两个分支。              |
| [代码执行（Code）](code.md)                                | 运行 Python / NodeJS 代码以在工作流程中执行数据转换等自定义逻辑。        |
| [模板转换（Template）](template.md)                        | 允许借助 Jinja2 的 Python 模板语言灵活地进行数据转换、文本处理等。        |
| [变量聚合（Variable Aggregator）](variable_aggregator.md)  | 将多路分支的变量聚合为一个变量，以实现下游节点统一配置。                     |
| [参数提取器（Parameter Extractor）](parameter_extractor.md) | 利用 LLM 从自然语言推理并提取结构化参数，用于后置的工具调用或 HTTP 请求。       |
| [迭代（Iteration）](iteration.md)                        | 对列表对象执行多次步骤直至输出所有结果。                             |
| [HTTP 请求（HTTP Request）](Http_request.md)             | 允许通过 HTTP 协议发送服务器请求，适用于获取外部检索结果、webhook、生成图片等情景。 |
