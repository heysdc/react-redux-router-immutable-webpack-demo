# react-webpack-demo

- 8.3更新，手动webpack打包运行es6+react
- 8.7更新，webpack-dev-server热加载
- 8.22更新，es7 decorator，immutable
- 9.12日更新，redux，react-router
- 9.14更新，redux-logger方便跟踪state变化, redux-thunk处理异步

##过程中学到的东西

###package.json配置
1. package.json文件，scripts对象，npm start ＋ 属性名，运行属性值的命令
2. dependencies, devDependencies分别为执行环境与开发环境，~1.2.3安装1.2.＊的最新版本，^安装1.＊.＊的最新版本
3. peerDependencies, 用于指定插件所需要的其他插件的版本
4. bin用于指定调用脚本的快捷方式
5. main加载该模块时的入门文件，默认为根目录的index.js
6. config命令向环境变量输出值process.env.npm_package_config_
7. engines指明该项目所需要node版本
8. standard需要安装standard模块，代码规范，可在sublime里加插件

###webpack配置
1. webpack核心思想：everything is a module;load only what and when you need
2. cli和webpack-dev-server, webpack提供两种模式，cli打包文件，一般用于生产环境，webpack-dev-server运行于本地的node服务器，便于调试
3. webpack-dev-server的inline与hot选项,前者为修改代码修改整个页面，后者只修改改变的component。’http://localhost:8080/webpack-dev-server/‘为入口
4. entry入口文件，可以接受三种形式及其组合：
  - string类型，一个入口文件，一个输出
  - array，多个入口文件，一个输出
  - object，多个入口文件，多个输出
5. output的path与publicPath，前者为生成文件存哪，后者为资源位置，与其它插件配合使用
6. webpack-dev-server --content-base选项，用于配置服务器载入的文件夹位置，乱七八糟的没必要都塞到服务器中，我们需要的只有html与其引用的文件,把这个改了之后改改publicPath
7. loaders把文件转化为浏览器可接受的类型
```javascript
module: {
    loaders: [{test: /\.js$/, ←Test for ".js" file, if it passes, use the loader
    exclude: /node_modules/, ←Exclude node_modules folder
    loader: ‘babel!jsx’ ←use babel (short for ‘babel-loader’)，
    query: {
      presets: ['react', 'es2015']
    }
 }]
 ```
 可以对同样的文件从右到左依次使用不同的类型的loader，用！分开
 8. 可以采用？或者query的方式传loader的控制参数，.babelrc文件可用来存query的内容，自动识别
 9. plugins通常对打包后的文件进行处理，通常在更高层面上对loader处理完之后的文件进行处理

###redux
因为比较麻烦，在[这里](https://github.com/heysdc/Articles/blob/master/posts/learnRedux.md)专门记了笔记


##坑们
1. webpack-dev-server --inline --hot：Cannot find module 'webpack' 因为我的webpack-dev-server安装在全局环境，所以需要全局环境下也得有webpack，装一个ok
2. 运行****webpack-dev-server --inline --hot****,webpack配置中output: { path: './dist/client/js/', filename: 'index.js' }，在node环境中死活找不到生成的文件，原因node中的文件路径:
  - \__dirname:被运行文件所在文件夹绝对路径
  - \__filename:被运行文件的绝对路径
  - \__process.cwd():启动脚本所在位置的绝对路径
  - ./或者../同__process.cwd()，并不是相对路径，当然也有例外，就是require, import等，所以其它尽量用绝对路径
3. 继续2的问题，结果还是找不到文件，果然看文档才是最靠谱的。This modified bundle is served from memory at the relative path specified in publicPath.妈的原来是publicPath
4. 继续3，又发现一个问题，将path与publicPath均设置为同样的值，****path.resolve(__dirname, 'dist/client/js')****，html文件中引用同样的位置运行webpack-dev-server就找不到，打包可以找到。但publicPath采用'/dist/client/js'就可以，说明publicPath采用的是相对于服务器根目录的地址
5. react-router通过link跳转，没跳转页面，只是修改url，所以如果后端没配置相关访问地址，直接输入url是找不到相关文件的
6. react-router-redux里把combineReducers移到了router那，所以要reducer也要改改写法

##可扩展点
[引入新的库要有原则](http://amasad.me/2016/01/03/overcoming-intuition-in-programming/)
1. redux-actions库：生成action creaters方便
2. immutable.js用于redux
3. normalizr库，用于将嵌套的state变得更有序可管理
