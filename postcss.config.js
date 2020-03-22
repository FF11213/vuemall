module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度(也可不配置)
      unitPrecision: 5, // 指定`px`转换为视窗单位制的小数位数(很多时候无法整除)
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议用 vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类
      minPixelValue: 1, // 小于或等于`1px`的不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`
      exclude:[/TabBar/] // 正则表达式匹配
      // JS内正则表达式 /正则相关规则/
      // exclude中存放元素必须为正则表达式
      // 1> ^abc: 表示匹配的内容必须以 abc开头
      // 2> abc$: 表示匹配的内容必须以 abc结尾
    }
  }
}