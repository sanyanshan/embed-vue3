## 功能

通过 Vite 将单个 Vue 文件编译为独立的组件供 JSP FreeMaker 等 HTML 工程使用。

* Vue3.4.37
* ElementPlus
* JavaScript
* Vite

## 用法

1. 编写Vue组件，如 src/components/HelloWorld.vue
2. 修改 [vite.config.js](vite.config.js) 中的 `lib` 部分
```js
lib: {
  // 组件地址
  entry: path.resolve(__dirname, "src/components/HelloWorld.vue"),
  // 组件名称
  name: 'HelloWorld',
  fileName: (format, entryName) => `${entryName}.${format}.js`,
  formats: ['umd']
}
```
3. 运行 `npm run build`

**注意：**

组件地址：编写的vue文件路径

组件名称：导出后在 HTML 中时的模块名（用法见[example.html](example.html)）
