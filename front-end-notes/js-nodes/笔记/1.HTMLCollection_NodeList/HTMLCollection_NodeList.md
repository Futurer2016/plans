# HTMLCollection 和 NodeList 的异同

[toc]

## HTMLCollection 接口
表示一个包含了元素(元素顺序为文档流中的顺序)的通用集合。

HTML DOM 中的 HTMLCollection 是动态的，当其所包含的文档结构发生改变时，它会自动更新。
可自动更新的内容包含但不限于以下情况：
> 1. HTMLCollection中保存的是 ul > li 的列表时，如果为ul新增一个li子元素，HTMLCollection中的列表数量 +1；
> 2. HTMLCollection中保存的是元素对象的直接引用，页面中元素内容发生变化，HTMLCollection中的元素也变化；

## NodeList 接口

获取NodeList的方式：
1. Node.childNodes
2. document.querySelectorAll

> 1. Node.childNodes 返回的 NodeList 是动态的，表现形式与 HTMLCollection 基本相同
> 2. document.querySelectorAll 返回的 NodeList 是静态的，它的元素数量不随DOM结构的变化而变化；
> 3. NodeList 中保存的是元素对象的直接引用，页面中元素内容发生变化， HTMLCollection 中的元素也变化；