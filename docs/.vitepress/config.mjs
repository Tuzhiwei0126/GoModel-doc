import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "GoAgent-doc",
    description: "GoAgent",
    themeConfig: {
        logo: '/logo.svg',
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "使用手册文档", link: "/web/get_started/welcome.md"},
        ],

        sidebar: {
            "/web/": [
                {
                    text: "使用手册文档",
                    items: [
                        {text: "欢迎使用 GoModel", link: "/web/get_started/welcome.md"},
                        {text: "聊天助手", link: "/web/chatbot/chatbot.md"},
                        {
                            text: "知识库", link: "/web/knowledge-base/README.md", items: [
                                {
                                    text: "创建知识库",
                                    link: "/web/knowledge-base/create-knowledge-and-upload-documents/README.md"
                                },
                                {
                                    text: "分块和清理",
                                    link: "/web/knowledge-base/create-knowledge-and-upload-documents/chunking-and-cleaning-text.md"
                                },
                                {
                                    text: "设置索引",
                                    link: "/web/knowledge-base/create-knowledge-and-upload-documents/setting-indexing-methods.md"
                                },
                                {
                                    text: "导入数据", items: [
                                        {
                                            text: "从文本导入",
                                            link: "web/knowledge-base/create-knowledge-and-upload-documents/import-content-data/sync-from-text.md"
                                        },
                                        {
                                            text: "从网站导入",
                                            link: "web/knowledge-base/create-knowledge-and-upload-documents/import-content-data/sync-from-website.md"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            text: "工作流",
                            items: [
                                {text: "代码执行", link: "/web/workFlow/node/code.md"},
                                {text: "文档提取器", link: "/web/workFlow/node/docx_extractor.md"},
                                {text: "结束", link: "/web/workFlow/node/end.md"},
                                {text: "条件分支", link: "/web/workFlow/node/ifelse.md"},
                                {text: "开始", link: "/web/workFlow/node/start.md"},
                                {text: "HTTP 请求", link: "/web/workFlow/node/Http_request.md"},
                                {text: "迭代", link: "/web/workFlow/node/iteration.md"},
                                {text: "知识检索", link: "/web/workFlow/node/knowledge_retrieval.md"},
                                {text: "列表操作", link: "/web/workFlow/node/list_operator.md"},
                                {text: "LLM", link: "/web/workFlow/node/LLM.md"},
                                {text: "参数提取", link: "/web/workFlow/node/parameter_extractor.md"},
                                {text: "问题分类器", link: "/web/workFlow/node/question_classifier.md"},
                                {text: "模板转换", link: "/web/workFlow/node/template.md"},
                                {text: "变量聚合", link: "/web/workFlow/node/variable_aggregator.md"},
                            ],
                        },
                    ],
                },
            ],
        },
    },

    lastUpdated: true,
    markdown: {
        math: true,
    },
});