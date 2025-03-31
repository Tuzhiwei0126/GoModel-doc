## 1. 前端相关文档 在web/目录下

## 2. 后端相关文档 在server/目录下

## 3. 新建层级结构 

### 3.1 在对应的模块文件下 新建一个文件夹  例如在web/目录下新建一个文件夹 命名为workFlow 为test.md

### 3.2 去config.mjs文件中 对应的模块下 添加对应的层级结构 ，保持同样的结构新增 （注意md 文件的 名字路径必须一一对应 例如配置了web/workFlow/workFlow-type-1/index.md 那么对应的文件夹必须存在 否则会报错）

### 4. 新增图片  统一放在pubilc 下面 例如在web/目录下 新建一个image 文件夹 然后新增图片 例如在image 文件夹下 新增一个Group.png 图片 那么就可以在md 文件中 使用 ![An image](/Group.png) 来引用图片


## 5. 检查 更改 进行 git 提交 推送就好了


## 6. 等待几分钟可以在 https://go-model-doc.vercel.app/ 看到效果


