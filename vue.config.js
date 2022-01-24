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
      '/': {
        // 要代理的服务器地址
        target: 'https://mock.feup.cn/mock/61ee32fd8e6c64ea0018b8de',
        changeOrigin: true // 是否跨域
      }
    }
  }
}
