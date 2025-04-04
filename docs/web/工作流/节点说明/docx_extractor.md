# 文档提取器

## 核心功能
文档提取器是GoModel工作流中处理文件内容的核心组件，负责将各类文档转换为LLM可处理的文本格式。

### 工作原理
1. **文件解析**：自动识别上传文档的格式类型
2. **内容提取**：准确提取文档中的文字内容
3. **格式转换**：输出标准化的文本数据

注意：LLM引擎无法直接处理原始文件，必须通过文档提取器进行格式转换

## 适用场景
- 文档问答系统（如PDF/Word文件咨询）
- 多文件内容分析比对
- 自动化文档内容检查

## 节点结构

**图片位置：节点结构示意图**
<figure><img src="../../../.gitbook/assets/image (12).png" alt=""><figcaption><p>文档提取器节点架构</p></figcaption></figure>

### 输入配置
| 输入类型       | 说明                  | 典型应用场景      |
|----------------|-----------------------|-------------------|
| 单个文件(File) | 处理单个文档          | 单文件问答系统    |
| 文件数组       | 批量处理多个文档      | 多文档对比分析    |

支持格式：TXT、Markdown、PDF、DOCX、HTML  
不支持格式：图片、音频、视频等二进制文件

### 输出结果
- 单文件输入：输出字符串(text)
- 多文件输入：输出字符串数组(text[])

提示：数组输出建议配合[列表操作节点](list-operator.md)使用

## 实战案例：构建ChatPDF应用

**图片位置：完整工作流图示**
<figure><img src="../../../.gitbook/assets/image (373).png" alt=""><figcaption><p>ChatPDF应用流程图</p></figcaption></figure>

### 配置步骤
1. **启用文件上传功能**  
   在起始节点添加`pdf`文件变量

2. **连接文档提取器**  
   将pdf变量接入文档提取器节点

3. **配置LLM节点**  
   在系统提示词中引用提取的文本内容

   **图片位置：变量引用示例**
   <figure><img src="../../../.gitbook/assets/image (14).png" alt=""><figcaption><p>变量连接示意图</p></figcaption></figure>

4. **设置输出节点**  
   将LLM的回复内容设为最终输出

**图片位置：运行效果展示**
<figure><img src="../../../.gitbook/assets/image (4) (2).png" alt=""><figcaption><p>实际交互效果</p></figcaption></figure>

提示：更多文件交互功能请参考[附加功能](../additional-features.md)
