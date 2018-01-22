## 基于web应用创建桌面应用

### 安装
`npm i -g nativefier`


### 快速创建
`nativefier --name "SegmentFault" "https://segmentfault.com/"`

[更多设置参数](https://github.com/jiahaog/nativefier/blob/master/docs/api.md#command-line)


### 制作安装包

这里不同平台制作方式不同，需要根据平台采用不同的处理方法。

#### mac

制作完软件之后，我们得到是一个名为SegmentFault.app的应用程序，虽然已经可以执行了，但看上去不够专业，专业的安装包都是.dmg为后缀的文件，接下来我们就来制作一个.dmg。[图文参考][steps]

1. 打开Mac自带的磁盘工具，新建一个空白映像。
2. 刚才上面做好的SegmentFault.app拷贝进去，然后再在里面建立一个指向Applications文件夹的快捷方式，右键菜单点击显示选项，勾选『始终以图标显示方式打开』，调整图标大小，在最下面挑选一张带箭头的图片作为背景。
3. 最后，再次打开磁盘工具，先推出刚才的这个文件，然后点击菜单『映像』-『转换』，把它压缩一下，一个完美的dmg安装包就制作好了。


#### windows



[steps]: https://segmentfault.com/a/1190000012924855