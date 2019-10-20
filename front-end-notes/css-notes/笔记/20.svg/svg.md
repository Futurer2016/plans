# svg

[toc]

svg: scalable vector graphics, 可缩放的矢量图

## 特点: 
1. 该图片使用代码书写而成
2. 缩放不会失真
3. 内容轻量

## 使用方式:
1. 直接内嵌svg元素
2. 外部链接
> background url指定
> img元素的src链接
> embed元素的src链接，并指定type="image/svg+xml"
> object元素的src链接，并指定type="image/svg-xml"
> iframe元素的src链接

## 书写规则
所有尺寸都不书写单位，默认单位是px

1. 矩形 rect
> attr: 
> width="100": 宽度
> height="100": 高度
> fill="red": 填充色
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度
> x="50": x轴坐标
> y="50": y轴坐标

2. 圆形 circle
> attr: 
> cx="20": 圆心x坐标
> cy="20": 圆心y坐标
> r="10": 圆半径
> fill="transparent": 填充色
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度

3. 椭圆 ellipse

> attr:
> cx="500": 圆心x坐标
> cy="500": 圆心y坐标
> rx="300": x轴向半径
> ry="400": y轴向半径
> fill="transparent": 填充色
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度

4. 线条 line
> attr:
> x1="0": 点1的x坐标
> y1="0": 点1的y坐标
> x2="300": 点2的x坐标
> y2="200": 点2的y坐标
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度

5. 折线 polyline
> attr:
> points="300,100,350,100,350,150,400,150,400,200": 一系列点的集合，每2个构成一个点坐标(x,y)
> fill="none": 填充色,none表示不填充
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度

6. 路径 path
> attr:
> stroke="#008c8c": 描边
> stroke-width="5": 描边宽度
> fill="none": 填充色,none表示不填充
> 
> d="M150 600": 坐标移动到 (150, 600) 的位置
> d="M150 600 L300 600": 绘制线条 (150, 600) 到 (300, 600) 的位置
> d="M150 600 L300 600 L300 800 L150 800 Z": 连续使用线条绘制，绘制一个矩形，最后使用Z指令闭合路径

d属性中有很多指令:

> M = moveto
L = lineto 绘制直线到
H = horizontal lineto 水平线绘制到
V = vertical lineto 垂直线绘制到
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath

path中弧线的绘制方式,A指令的使用:
> 1.A半径1
> 2.A半径2
> 3.顺时针旋转角度
> 4.选择优弧(1)劣弧(0)
> 5.选择顺时针(1)逆时针(0)
> 6.终点坐标(x y) 两个值
> 比如: M300 300 A150 150 0 0 0 450 150
