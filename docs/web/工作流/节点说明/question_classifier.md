# 问题分类功能指南

## 功能概述

问题分类器利用大语言模型(LLM)的智能推理能力，通过预定义的分类描述，自动将用户输入内容匹配到最合适的分类，为后续处理节点提供精准的分类依据。

## 典型应用场景

本功能适用于以下业务场景：
- 客服对话意图识别
- 用户评价自动归类 
- 邮件智能分拣

### 场景示例：智能客服系统

在产品客服场景中，问题分类器可作为知识库检索的前置处理器，通过识别问题类型引导系统查询不同的知识库内容。

**工作流示意图：**
<!-- 这里有图片 -->
<figure><img src="../../../.gitbook/assets/image (80).png" alt="工作流程图"><figcaption>问题分类工作流程示意图</figcaption></figure>

**预设分类示例：**
1. **售后相关问题**：处理保修、退换货等咨询
2. **产品使用问题**：解答功能操作类疑问  
3. **其他问题**：非产品相关的其他询问

**运行示例：**
- 输入："iPhone14怎么导入联系人？" → 分类："产品使用问题"
- 输入："手机保修期多长？" → 分类："售后相关问题" 
- 输入："明天会下雨吗？" → 分类："其他问题"

## 配置说明

<!-- 这里有图片 -->
<figure><img src="../../../.gitbook/assets/image (81).png" alt="配置界面"><figcaption>问题分类配置界面</figcaption></figure>

### 基础配置步骤

1. **选择输入变量**
   - 指定需要分类的内容来源，支持文本变量或文件变量
   - 客服场景建议使用 `sys.query` 获取用户问题

2. **选择推理模型**
   - 根据业务需求选择合适的大语言模型
   - 模型性能直接影响分类准确度

3. **定义分类标准**
   - 添加多个分类标签及详细描述
   - 清晰的描述可提升模型识别精度

4. **设置下游节点**
   - 配置分类结果与后续处理节点的对应关系
   - 建立完整的工作流程链

### 高级配置选项

- **自定义指令**  
  补充分类规则和特殊要求，增强分类器的场景适应能力

- **记忆功能**  
  启用后可利用对话历史辅助分类决策，提升连续对话体验

- **图片分析**  
  （仅限支持图像识别的模型）允许处理包含图片的输入

- **记忆窗口控制**  
  - 自动模式：根据模型上下文智能调整历史记录长度
  - 手动模式：精确设置记忆条数（对数刻度）

## 输出变量说明

分类结果将存储在 `class_name` 变量中，包含预测的类别标签。后续节点可通过引用该变量实现分类导向的差异化处理。