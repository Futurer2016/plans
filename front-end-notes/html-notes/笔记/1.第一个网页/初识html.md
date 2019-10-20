# 初识html

[toc]

## element 元素(又叫：标签、标记)

### 元素的构成: 
元素 = 起始标记 + 终止标记 + 元素内容 + 元素属性

元素属性 = 属性名 + 属性值

如: ```<a href="www.baidu.com"></a>```

有些元素没有结束标记，这样的元素叫做**空元素**，空元素的两种写法：
```
<meta charset="UTF-8">
<meta charset="UTF-8" />
```
### 元素的嵌套
元素不能互相嵌套，如下的代码是不合法的：
```
<div><a></div></a>
```
####元素的嵌套关系
父元素、子元素、祖先元素、后代元素、兄弟元素

## 标准文档结构
```html
<!DOCTYPE html>
````

告诉浏览器，当前文档使用的HTML标准是HTML5

不写文档声明，将导致浏览器进入怪异渲染模式

> 1. 严格模式的排版和JS 运作模式是以该浏览器支持的最高标准运行。
> 2. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

```html
<html lang="en"></html>
<html lang="zh-CN"></html><!-- 过时的 -->
<html lang="cmn-hans"></html><!-- 建议的 -->
```
cmn-hans: 
cmn表示中国大陆官方用语，han表示汉语，s表示simple简体
简体中文官方用语

```html
<head></head>
```
文档头，文档头内部的内容，不会显示到页面上。

```html
<meta>
```
文档的元数据：附加信息
如：charset指定网页内容编码格式

字符编码表：
GB2312 中文汉字
GBK 台湾使用文字（繁体
UTF-8 Unicode 编码的一个版本，（号称万国码，融合全世界的文字），存在一些问题

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
用于适配移动端
name=viewport 表示网页的视口
width=device-width 表示把视口的宽度设置为设备的宽度
initial-scale=1.0 表示初始化缩放为1倍

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```
告诉浏览器如果你是ie浏览器，优先使用edge内核

```html
<title></title>
```
网页标题

```html
<body></body>
```
文档体，文档中所有要参与显示的元素，都应该放置到文档体中。