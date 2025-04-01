# 变量赋值  

## 定义  

变量赋值节点用于向可写入变量进行变量赋值，已支持以下可写入变量：  

* [会话变量](../key-concept.md#hui-hua-bian-liang)  

用法：通过变量赋值节点，你可以将工作流内的变量赋值到会话变量中用于临时存储，并可以在后续对话中持续引用。  

<!-- 这里需要一张展示变量赋值节点在流程中位置的示意图，建议尺寸375px宽 -->  
![变量赋值节点示意图](path/to/variable-assignment-node.png)  

***  

## 场景示例  

### 场景 1：自动判断提取并存储对话中的信息  

**功能描述**：  
在会话内通过会话变量数组记录用户输入的重要信息，并在后续对话中让 LLM 基于会话变量中存储的历史信息进行个性化回复。  

**具体实现**：  
1. **设置会话变量**：  
   - 创建会话变量数组 `memories`，类型为 array[object]  
2. **判断和提取记忆**：  
   - 添加条件判断节点，使用 LLM 判断用户输入是否包含新信息  
   - 是：走上分支提取信息  
   - 否：走下分支直接使用现有记忆  
3. **变量赋值**：  
   - 在上分支中，使用变量赋值节点将新信息追加到 `memories` 数组  
   - 使用转义功能处理数据格式  
4. **变量使用**：  
   - 在后续LLM节点中将记忆内容插入提示词  
   - LLM基于历史信息生成回复  

**代码示例**：  
```python  
# 字符串转object  
import json  
def main(arg1: str) -> object:  
    try:  
        input_data = json.loads(arg1)  
        memory = input_data.get("memory", {})  
        return {  
            "mem": {  
                "facts": memory.get("facts", []),  
                "preferences": memory.get("preferences", []),  
                "memories": memory.get("memories", [])  
            }  
        }  
    except Exception as e:  
        return {"result": f"Error: {str(e)}"}  

# object转字符串  
def main(arg1: list) -> str:  
    try:  
        context = arg1[0] if arg1 else {}  
        return {  
            "result": f"<answer>{json.dumps({'memory':context})}</answer>"  
        }  
    except Exception as e:  
        return {  
            "result": f"<answer>Error: {str(e)}</answer>"  
        }  
```  

<-- 这里需要一张展示场景1完整工作流的示意图，包含条件判断、变量赋值等节点 -->  
![场景1工作流程图](path/to/scenario1-image.png)  

### 场景 2：记录用户语言偏好  

**功能描述**：  
记住用户指定的语言偏好，在后续对话中持续使用该语言类型进行回复。  

**具体实现**：  
1. 设置会话变量 `language`  
2. 首轮对话判断变量是否为空  
   - 为空时提取用户语言偏好  
   - 通过变量赋值节点存储  
3. 后续对话引用该变量保持语言一致  

<-- 这里需要一张展示语言偏好设置流程的示意图，包含初始设置和后续引用场景 -->  
![语言偏好设置流程图](path/to/scenario2-image.png)  

### 场景 3：Checklist辅助功能  

**功能描述**：  
通过会话变量记录用户输入项，动态更新检查清单内容。  

**具体实现**：  
1. 设置会话变量 `ai_checklist`  
2. 每轮对话：  
   - 比对用户输入与清单  
   - 更新缺失项并存储  
3. 持续提醒直至完成  

<-- 这里需要一张展示Checklist交互过程的示意图，包含多轮对话示例 -->  
![Checklist交互示意图](path/to/scenario3-image.png)  

***  

## 使用指南  

### 添加节点  
1. 点击节点区右侧`＋`按钮  
2. 选择"变量赋值"节点  

### 配置参数  
- **变量**：选择需要赋值的会话变量  
- **设置变量**：选择提供值的源变量  
- **写入模式**：根据变量类型选择操作方式  

<-- 这里需要一张清晰的变量赋值节点配置界面截图，标注各配置项位置 -->  
![变量赋值配置界面](path/to/configuration-ui.png)  

### 写入模式说明  
| 变量类型 | 支持操作 |  
|----------|----------|  
| String | 覆盖/清空/设置固定值 |  
| Number | 覆盖/清空/设置/数字运算 |  
| Object | 覆盖/清空/设置 |  
| Array | 覆盖/清空/追加/扩展 |  
```
```