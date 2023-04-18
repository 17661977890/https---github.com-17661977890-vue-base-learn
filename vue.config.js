const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  // 方式一：配置代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 方式二：配置多个代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ['^/api']: ''
        }
      },
      '/foo': {
        target: '<other_url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ['^/foo']: ''
        }
      }
    }
  }
})
