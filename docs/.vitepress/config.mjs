import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GoModel-doc",
  description: "GoModel",
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "使用手册文档", link: "/web/index.md" },
    ],

    sidebar:{
      "/web/": [
        {
          text: "使用手册文档",
          items: [
            { text: "欢迎使用 GoModel", link: "/web/get_started/welcome.md" },
            { text: "聊天助手", link: "/web/chatbot/chatbot.md" },
            { text: "工作流",
              items: [
                { text: "代码执行", link: "/web/workflow/node/code.md" },
                { text: "文档提取器", link: "/web/workflow/node/docx_extractor.md" },
                { text: "结束", link: "/web/workflow/node/end.md" },
                { text: "条件分支", link: "/web/workflow/node/ifelse.md" },
                { text: "开始", link: "/web/workflow/node/start.md" },
                { text: "HTTP 请求", link: "/web/workflow/node/Http_request.md" },
                { text: "迭代", link: "/web/workflow/node/iteration.md" },
                { text: "知识检索", link: "/web/workflow/node/knowledge_retrieval.md" },
                { text: "列表操作", link: "/web/workflow/node/list_operator.md" },
                { text: "LLM", link: "/web/workflow/node/LLM.md" },
                { text: "参数提取", link: "/web/workflow/node/parameter_extractor.md" },
                { text: "问题分类器", link: "/web/workflow/node/question_classifier.md" },
                { text: "模板转换", link: "/web/workflow/node/template.md" },
                { text: "变量聚合", link: "/web/workflow/node/variable_aggregator.md" },
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
