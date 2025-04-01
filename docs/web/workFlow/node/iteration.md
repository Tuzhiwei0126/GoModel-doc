# 迭代

## 功能概述

迭代节点是GoModel中的批处理组件，能够对数组元素依次执行相同操作流程。主要解决以下问题：
- 处理超长内容时突破单次对话限制
- 批量执行相同处理流程
- 自动化分步任务处理

> **典型应用场景**：长文本分片处理、批量数据转换、分步骤内容生成

## 核心概念

### 工作原理
（这里需要插入"迭代节点工作原理示意图"图片）
![迭代节点原理图](图片路径请替换.png "建议路径：/docs/images/iteration_principle.png")

包含三个核心单元：
1. **输入变量**：仅接受Array类型数据
2. **迭代工作流**：可编排多个处理节点
3. **输出变量**：始终输出Array类型结果

### 内置变量
- `items[object]`：当前迭代条目
- `index[number]`：当前迭代轮次

## 使用教程

### 示例：分章节故事生成器

（这里需要插入"长故事生成器完整流程图"图片）
![长故事生成器](图片路径请替换.png "建议路径：/docs/images/story_generator.png")

#### 配置步骤
1. **开始节点配置**
（这里需要插入"开始节点配置界面截图"图片）
![开始节点配置](图片路径请替换.png "建议路径：/docs/images/start_node_config.png")

2. **LLM节点生成初稿**
（这里需要插入"LLM节点配置界面截图"图片）
![模板节点](图片路径请替换.png "建议路径：/docs/images/llm_node_config.png")

3. **参数提取转换数组**
（这里需要插入"参数提取节点配置截图"图片）
![参数提取](图片路径请替换.png "建议路径：/docs/images/param_extract.png")

4. **迭代节点配置**
（这里需要插入"迭代节点配置界面截图"图片）
![配置迭代节点](图片路径请替换.png "建议路径：/docs/images/iteration_config.png")

5. **流式输出配置**
（这里需要插入"直接回复节点配置截图"图片）
![配置Answer节点](图片路径请替换.png "建议路径：/docs/images/answer_node.png")

6. **最终效果演示**
（这里需要插入"分章节生成效果演示图"图片）
![多轮迭代生成效果](图片路径请替换.png "建议路径：/docs/images/iteration_result.png")

## 高级功能

### 并行模式
（这里需要插入"并行模式配置界面截图"图片）
![并行模式设置](图片路径请替换.png "建议路径：/docs/images/parallel_mode.png")

（这里需要插入"顺序与并行执行对比图"图片）
![执行原理对比](图片路径请替换.png "建议路径：/docs/images/parallel_comparison.png")

### 错误处理策略
- 立即终止
- 忽略继续（保留null值）
- 移除错误（仅保留成功结果）

## 数据转换方法

### 数组生成方式
- 代码节点
- 参数提取
- 知识库检索
- HTTP请求等

### 数组转文本
**代码节点示例**：
```python
def main(articleSections: list):
    return {"result": "\n".join(articleSections)}
```

**使用模板节点转换**

（这里需要插入"模板节点转换配置界面截图"图片）
![模板节点转换](图片路径请替换.png "建议路径：/docs/images/template_conversion.png")

**配置示例：**
```django
{{ articleSections | join("\n") }}
