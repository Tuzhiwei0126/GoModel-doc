### 定义

定义工作流程终止时的最终输出内容。每个工作流执行完成后必须包含至少一个结束节点，作为流程终止点并输出最终执行结果。

结束节点是工作流的终止节点，后续不可再连接其他节点。GoModel工作流引擎只有在运行到结束节点时才会输出执行结果。当流程中存在条件分支时，需要为每个分支路径配置相应的结束节点。

结束节点需要声明一个或多个输出变量，这些变量可以引用所有上游节点的输出数据。

{% hint style="info" %}
注意：GoModel的即时对话流(Chatflow)模式不支持结束节点配置
{% endhint %}

***

### 使用场景

#### 长文本生成案例
在[长文本迭代生成工作流](iteration.md#示例2-长文本迭代生成器)中，结束节点配置的输出变量`Output`将引用上游代码节点(Code3)的执行结果。这意味着该工作流会在Code3节点运行完毕后终止，并返回Code3节点的处理结果。

**图片位置：长文本生成示例图**
<figure><img src="xx.png" alt=""><figcaption><p>结束节点-长故事生成示例</p></figcaption></figure>

#### 单路径执行示例：
**图片位置：单路径输出示例图**

<figure><img src="../../../.gitbook/assets/output (5).png" alt=""><figcaption></figcaption></figure>

#### 多分支执行示例：
**图片位置：多分支输出示例图**
<figure><img src="../../../.gitbook/assets/output (1) (3).png" alt=""><figcaption></figcaption></figure>
