# 模板转换

## 定义
允许借助 Jinja2 的 Python 模板语言灵活地进行数据转换、文本处理等。

### 什么是 Jinja？
```
> Jinja is a fast, expressive, extensible templating engine.
> 
> Jinja 是一个快速、表达力强、可扩展的模板引擎。
> 
> —— [官方文档](https://jinja.palletsprojects.com/en/3.1.x/)
```

## 使用场景
```
模板转换节点允许你借助 Jinja2 这一强大的 Python 模板语言，在工作流内实现轻量、灵活的数据转换，适用于文本处理、JSON 转换等情景。例如灵活地格式化并合并来自前面步骤的变量，创建出单一的文本输出。这非常适合于将多个数据源的信息汇总成一个特定格式，满足后续步骤的需求。
```

## 高级功能
### 模板继承
```jinja
{# 基础模板 #}
{% block content %}{% endblock %}

{# 子模板 #}
{% extends "base_template.jinja" %}
{% block content %}...{% endblock %}
```

### 宏定义
```jinja
{% macro render_item(item) %}
<div class="item">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
</div>
{% endmacro %}
```

### 调试技巧
```jinja
{# 开启调试模式 #}
{% debug %}

{# 打印变量 #}
{{ variable|pprint }}
```

## 注意事项
1. 避免在模板中编写复杂业务逻辑
2. 注意变量作用域问题
3. 对用户输入内容务必使用安全过滤
4. 性能敏感场景建议预编译模板
5. 建议模板文件大小不超过100KB

## 参考文档
[Jinja2 官方文档](https://jinja.palletsprojects.com/en/3.1.x/templates/)

[模板安全最佳实践](https://jinja.palletsprojects.com/en/3.1.x/sandbox/)
