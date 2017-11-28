# Vue.Js日志
    ---Author:YangHui
## 1.MVVM框架
`M`:JavaScript对象 进行数据交换 <pre><code>model</code></pre>
`V`: 进行视图交换<pre><code>View</code></pre>
`MV`: <pre><code>View Model</code></pre>
## 2.Vue-cli
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
``` Node.js
node -v
```
2.执行安装命令
``` npm
npm install -g vue-cli
```
3.查看运行Vue命令
``` Vue
$vue list[vue模板列表查看]
```
4.安装Vue模板
``` npm
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
``` npm
$ls
```
7.进入项目目录
``` npm
$cd project name
```
8.进行相关依赖模块安装
``` npm 
npm install
```
执行后添加了node-modules
9.运行服务器
``` npm
$npm run dev
```
## 3.目录文件详解
### 1.build目录
此目录是webpack配置相关文件
### 2.config目录

### 3.node_modules目录
此目录是npm install安装的代码依赖库
### 4.src目录
此目录是开发目录，开发文件存放此目录下  
main.js为入口js文件
### 5.static目录
此目录存放第三方文件，为空时会存在.gitkeep文件，作用可以会提交到git仓库里，否则会忽略空文件的文件夹
### 6.当前目录
#### 1.babelrc文件
babelrc一些配置，ES6通过babelrc变为ES5语法   
 `presets[预设插件]` :代表babeilrc转换需要预先安装的插件,对应的插件可以在  
 `node_modules目录`找到   
 `plugins[配置插件]` :ES6方法做转换  
 `comments` :false(false代表转化后不生成注释)   
#### 2.editorconfig文件
 适用于编辑器相关配置   
 `charset` :字符编码    
 `indent_style` :缩进风格   
 `indent_size` :缩进大小   
 `end_of_line` :换行风格  
 `insert_final_newline` :文件末尾插入新行   
 `trim_trailing_whitespece` :自动清除末尾空格   
#### 3.eslintignore文件
 忽略语法检查的目录文件   
 忽略指定文件的检查
#### 4.eslintrc.js文件
 eslint配置文件   
 `extends`:继承标准的规则   
 `rules`:此处可以修改规则
#### 5.gitignore文件
 忽略git仓库的提交
#### 6.index.html文件
 在编译之后会自动插入其中,为入口文件
#### 7.package.json文件
 项目配置文件:描述项目   
  `script` :可以执行的一些命令   
  `dependencies` :一些依赖   
  `devDependencies` :编译过程的一些依赖
## 4.项目运行
### 实例化Vue
1. el: 'body'挂载点   
2. components:{App}:此处相当于调用了App.Vue组件   
`易错点`
1. 注释与\\直接没有空格报错
2. 代码缩进存在问题报错、，