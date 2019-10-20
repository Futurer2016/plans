# a元素 (超链接) {ignore}

[toc]

## 嵌套规则
可以嵌套几乎任何元素，a元素不能嵌套a元素本身

```
<a href="#">
    不合法的嵌套方式：外层-前
    <a href="#">不合法的嵌套方式：内层</a>
    不合法的嵌套方式：外层-后
</a>
```
上面的嵌套方式是不合法的，实测Chrome浏览器会将这两个元素解析为两个并列的兄弟元素

> 具体的解析过程大致为：
1. 内层a元素将外层a元素截断
2. 外层a元素开始标记被浏览器自动补充一个结束标记并将”外层-前”位置的文本包含进去
3. 外层a元素原本的结束标记被忽略
4. 内层a元素正常显示
5. ”外层-后“位置的文本被暴露在外边

明显看出，这样的解析过程破坏了给定的嵌套结构，不是我们希望看到的，这种情况的出现并不是偶然的，比如p元素嵌套div元素时，p元素会被div截断，原理与此大致相同

## 属性 attributes
### href 属性

hyper reference: 通常表示跳转地址

1. 普通链接，跳转地址
2. 锚链接，跳转到某个锚点,(如果锚点在自己页面，页面不刷新）  (hash值) 跳转后页面地址发生变化，变化的是location中的hash值

a[href="#chapter$"]*6>{章节$}
((h1[id="chapter$"]>{章节$})+p>lorem1000)*6 生成文本快捷方式

3. 功能性链接，点击后触发某个功能

- 执行js代码: javascript:
- 发送邮件: mailto:     -> 要求用户机(计算机、手机等)上安装有邮件发送软件
- 拨号，tel:            -> 要求用户机上安装有拨号软件，或者使用的是手机

### target 属性
表示跳转窗口位置

target取值
1. _self: (默认值)在当前页面窗口打开
2. _blank: 在新窗口中打开
3. _parent: 在当前窗口的父级窗口打开 (iframe 极少用到)
4. _top: 在当前窗口的顶层窗口打开 (iframe 极少用到)
5. iframe标签的name属性

### download 属性 html5
表示下载链接
点击会弹出文件保存窗口

注意点
1. 仅支持同源文件下载,不符合同源策略的文件路径将被浏览器拦截
2. blobs: 和 data: 文件是允许的
3. download="value" 中的value为下载文件的默认保存名称，用户保存前仍然可以再次修改文件名
4. http的header中的 Content-Disposition: 中如果指定了不同的文件名，以这个文件名为准

> a元素的download属性可以实现canvas导出图片
canvas 导出图片的base64格式方法为  
```
var link = document.createElement('a');
link.textContent = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "canvas图片.png";
}, false);

document.body.appendChild(link);
```