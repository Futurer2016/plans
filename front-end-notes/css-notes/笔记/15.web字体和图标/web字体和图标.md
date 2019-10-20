# web字体和图标 {ignore}

[toc]

## web字体

用户电脑上没有安装相应字体时，强制让用户下载该字体(浏览器自动下载)

```css
@font-face {
  font-family: "good night";
  src: url(./font/goodnight.ttf);
}
```
为了兼容性更好，可以写多个src属性，每个src属性也可以有多个url
good night 表示下载的字体的名称, 使用方式如下: 

```css
body {
  font-family: "good night";
}
```

## 字体图标

参考字体库工具网站: https://www.iconfont.cn/

字体图标可以设置文本的所有属性，比如：字体颜色