# Webpack热更新

[toc]

1. 开启服务需要使用 webpack-dev-server 插件
2. 热更新功能是 Webpack 内置的插件

command: 
```npm install webpack-dev-server -g```

```npm install webpack-dev-server -D```

```js
const Webpack = require('webpack');
module.exports = {
  mode: 'development',
  plugins: [
    // 热更新
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // webpack-dev-server 监听端口
    port: '8081',
    // 根目录位置
    contentBase: 'dist',
    // 让服务开启热更新
    hot: true
  }
}

```

```js
// 在js文件中需要使模块支持热更新

// 使模块接受热更新
if(module.hot) {
  module.hot.accept();
}

```