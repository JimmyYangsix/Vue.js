# Vue.Js日志
    ---Author:YangHui
## 1.MVVM框架
`M`:JavaScript对象 进行数据交换 <pre><code>model</code></pre>
`V`: 进行视图交换<pre><code>View</code></pre>
`MV`: <pre><code>View Model</code></pre>
## Vue-cli
`Vue脚手架`:帮助我们写好Vue.js基础代码的工具

`Vue-cli`功能：
1.目录结构
2.本地调试
3.代码部署
4.热加载
5.单元测试
install command:
<pre><code>npm install -g vue-cli</code></pre>
Using command:
<pre><code>$vue init <template-name><project-name> </code></pre> 
Example: 
<pre><code>$vue init webpack//模板 my-project//项目 </code></pre> 
### Vue-cli安装
1.先查看node版本在4版本上
```Node.js
node -v
```
2.执行安装命令
```npm
npm install -g vue-cli
```
3.查看运行Vue命令
```Vue
$vue list[vue模板列表查看]
```
4.安装Vue模板
```npm
$vue init  webpack[模板] sell[项目名]
```
5.相关配置
project name:项目名称
project description :项目描述
author:作者
Use ESLint to....:ES6代码风格检查器
Pick an ESLint preset :此处选择ESLInt模板,Standrand(默认)
Setup unit tests with:单元测试
Setup e2e test with:e2e测试
6.进行相关目录查看
```npm
$ls
```
7.进入项目目录
```npm
$cd project name
```
8.进行相关依赖模块安装
```npm 
npm install
```
执行后添加了node-modules
9.运行服务器
```npm
$npm run dev
```
