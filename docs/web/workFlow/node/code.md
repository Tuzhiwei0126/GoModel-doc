# 代码执行

## 功能介绍

代码节点支持运行Python/NodeJS代码以在工作流程中执行数据转换。它可以简化工作流程，适用于：
- 数学计算
- JSON转换
- 文本处理等场景
该节点使开发者能够嵌入自定义脚本，以预设节点无法达到的方式操作变量。


（需要展示代码节点完整配置界面的图片，包含代码编辑区域和变量配置部分）
![代码节点界面](path/to/code-node-image.png)


## 配置说明
配置步骤：
1. 在'输入变量'中定义变量名
2. 引用其他节点的变量
3. 编写处理代码
4. 声明输出变量

注意事项：
- 必须明确定义输入输出变量
- 输出变量需在代码中返回字典
- 可引用工作流中的任何上游变量

## 使用场景
### 结构化数据处理示例


```python
def process_http_response(http_response: str) -> dict:
    import json
    data = json.loads(http_response)
    return {'result': data['data']['name']}
```

（需要展示JSON数据处理流程的示意图，包含输入输出示例）
![JSON数据处理流程](path/to/json-processing-image.png)

### 数学计算示例
```
def calculate_variance(x: list) -> dict:
    mean = sum(x)/len(x)
    return {
        'result': sum([(i-mean)**2 for i in x])/len(x)
    }
```
（需要展示数学计算节点连接的流程图）
![数学计算流程](path/to/math-calculation-image.png)

### 数据拼接示例  
```
def merge_knowledge(knowledge1: list, knowledge2: list) -> dict:
    return {'result': knowledge1 + knowledge2}
```
（需要展示多源数据合并的界面截图）
![数据合并界面](path/to/data-merging-image.png)

## 本地部署
```bash
# 启动沙盒服务命令
docker-compose -f docker-compose.middleware.yaml up -d
```

注意：
1. 需要预先安装Docker环境
2. Docker Compose V2用户需使用'docker compose'命令
3. 可通过'docker compose version'检查版本

（需要展示Docker服务启动成功的终端截图）
![Docker启动成功](path/to/docker-success-image.png)

## 安全策略

执行环境限制：
1. 完全沙箱隔离
2. 禁止文件系统访问
3. 禁止网络请求
4. 禁止系统命令执行
5. 资源使用监控(CPU/内存)
6. 执行超时控制

危险代码示例：
````
def malicious_code():
    import os
    return os.system('rm -rf /')  # 会被自动拦截
````

（需要展示安全拦截的界面截图，包含错误提示）
![安全拦截界面](path/to/security-alert.png)


## 高级功能
### 错误重试配置
"""
- 最大重试次数: 10次
- 最大重试间隔: 5000ms
- 指数退避策略
"""

（需要展示错误重试配置界面的完整截图）
![错误重试配置](path/to/retry-config-image.png)

#### 异常处理流程
"""
1. 启用异常处理功能
2. 配置备用处理方案
3. 设置错误返回内容
4. 可选择继续或终止流程
"""

（需要展示异常处理配置界面的完整截图）
![异常处理界面](path/to/error-handling.png)

## 常见问题
# 代码无法保存问题
可能原因：
1. 包含危险操作(文件访问等)
2. 语法错误
3. 变量未定义
4. 超出资源限制

解决方法：
1. 检查代码安全性
2. 查看浏览器控制台错误
3. 使用try-catch处理异常
4. 简化复杂计算

（需要展示代码保存失败的错误提示截图）
![代码保存错误](path/to/code-save-error.png)

## 完整示例
```python
# 完整数据处理示例
def full_example(data1: dict, data2: list) -> dict:
    """
    功能：合并两个数据源并计算统计指标
    输入：
      - data1: 字典格式数据
      - data2: 列表格式数据
    输出：
      - merged_data: 合并后的数据
      - stats: 统计指标
    """
    try:
        # 数据合并
        merged = {**data1, 'items': data2}
        
        # 计算统计
        values = [x['value'] for x in data2 if 'value' in x]
        avg = sum(values)/len(values) if values else 0
        
        return {
            'merged_data': merged,
            'stats': {
                'count': len(values),
                'average': avg
            }
        }
    except Exception as e:
        return {'error': str(e)}
```
（需要展示完整示例在实际工作流中的应用截图）
![完整示例工作流](path/to/full-example-workflow.png)

## 参考文档

1. [Jinja2模板文档]
2. [Docker部署指南]
3. [沙箱安全白皮书]
4. [错误处理最佳实践]