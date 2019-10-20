# 插件和loader

[toc]

## 插件

1. webpack-deep-scope-plugin : js tree shaking 深度分析插件，去掉页面中没有使用到的方法
```js
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  plugins: [
    new WebpackDeepScopeAnalysisPlugin()
  ]
}
```
2. mini-css-extract-plugin : css 压缩插件
3. purify-css-plugin : css tree shaking，去掉页面中没有使用到的选择器样式

```js
const path = require('path');
const glob = require('glob-all');
// css 压缩插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// css tree shaking 插件
const PurifyCssPlugin = require('purify-css-plugin').default;

module.exports = {
  module: {
    rules: [
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new PurifyCssPlugin({
      paths: glob.sync([
        path.resolve(__dirname, 'dist/*.html'),
        // 使tree shaking 插件能根据js动态插入html的结果进行css筛选
        path.resolve(__dirname, 'src/main.js')
      ])
    }),
    new WebpackDeepScopeAnalysisPlugin()
  ]
}
```

4. postcss : css预处理

command: 
```npm install postcss postcss-loader autoprefixer cssnano postcss-cssnext -D```

```js
const path = require('path');
const glob = require('glob-all');
// css 压缩插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// css tree shaking 插件
const PurifyCssPlugin = require('purify-css-plugin').default;

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 
          {
            loader: 'postcss-loader', 
            options: {
              ident: 'postcss',
              plugins: [
                // postcss 功能完全包含 autoprefixer
                require('postcss-cssnext')(),
                // 前缀自动填充
                // require('autoprefixer')(),
                // css 压缩
                require('cssnano')()
              ]
            }
          }, 
          'less-loader'
        ]
      }
    ]
  }
}
```

5. 单独抽离html html-webpack-plugin

command: 
```npm install html-webpack-plugin -D```

6. webpack 目标文件夹清理插件，clean-webpack-plugin
command: 
```npm install clean-webpack-plugin -D```

```js
// 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: '修改HTML文件head里面的title元素内容',
      // dist 目录 下生成的文件名称
      filename: 'index.html',
      // 对哪个文件处理
      template: './index.html',
      minify: {
        // 清理注释
        removeComments: true,
        // 清理空格
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin()
  ]
}
```

7. 提取js公共代码

```js
module.exports = {
  entry: {
    pageA: './pageA.js',
    pageB: './pageB.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash:5].bundle.js',
    chunkfilename: '[name][hash: 5].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          // 仅扫描 指定的文件夹
          test: /[\\/]node_modules[\\/]/,
          // 先抽离公共的第三方库
          priority: 10,
          chunks: 'all'
        },
        common: {
          // 打包文件名称
          name: 'common',
          // 扫描所有
          chunks: 'all',
          // 打包最小文件大小 1kb
          miniSize: 1,
          // 最小复用次数开始打包
          minChunks: 2,
          // 抽离优先级
          priority: 1
        }
      }
    }
  }
}
```

8. 图片处理

command: 
```npm install url-loader file-loader -D```

```npm install img-loader imagemin imagemin-pngquant -D```

```npm install html-loader -D```

```js
module.exports = {
  module: {
    rules: [
      {
        // 可以处理css中的图片
        // 如： background: url(./1.png);
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name][hash:5].[ext]',
              // 图片小于 100kb 进行base64转换
              limit: 100,
              // 不转换base64格式时，图片保存路径
              outputPath: 'img'
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                {
                  // 图片压缩插件
                  require('imagemin-pngquant')({
                    // 图片压缩质量范围
                    quality: [0.3, 0.5]
                  })
                }
              ]
            }
          }
        ]
      },
      {
        // 处理HTML文件中的图片
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // 匹配HTML文件中的img元素的src属性
              attrs: ['img:src']
            }
          }
        ]
      }
    ]
  }
}
```