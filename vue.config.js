const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 代理
  devServer: {
    proxy: {
      '/api': {
        // 要代理的服务器地址
        target: 'http://192.168.120.194:7300/mock/61e8fcac2c7cf895bc0c49ee',
        changeOrigin: true // 是否跨域
      }
    }
  }
}
