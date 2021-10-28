module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '3d-AE-动画'
        return args // [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
      })
  },
  productionSourceMap: false,
}
