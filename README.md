# mapbox-gl-node-demo

为了能在node.js 中使用mapbox-gl-native的功能，特意测试了v3.5 和 v4.1 两个版本，在ubuntu desktop 上都表现良好。

- 首先git clone 本项目，然后把libs 中的tar.gz 解压到 mbgl_v4 这个文件夹

- 进入mbgl_v4 文件夹后, 其中lib 文件夹中已经有mbgl.node 文件，这个就是C++ 扩展模块，直接可require 的

- 进入platform/node, 执行 node render.js 如果发现缺什么sharp 库，就npm install 一下。 发现缺什么系统包，就安装下，参考[博客](https://www.jianshu.com/p/a92ce8649368)

然后就可以顺利渲染了.  API 参考[官方项目](https://github.com/mapbox/mapbox-gl-native/tree/master/platform/node)

### 注意

最好是在desktop 上运行，ubuntu server平台，因为headless，可能会遇到 OpenGL 初始化的runtime_error.
