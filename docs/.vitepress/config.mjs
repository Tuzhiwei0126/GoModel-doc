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
            { text: "工作流二级", link: "/web/workFlow/index.md" ,
              items: [
                { text: "工作流三级", link: "/web/workFlow/workFlow-type-1/index.md" },
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
