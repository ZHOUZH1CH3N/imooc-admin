// 导入所有svg图标
// 完成SvgIcon的全局注册
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('./svg', false, /\.svg$/)
// 返回了一个 Require 函数，接收request参数，用于require导入
// 该函数提供了三个属性，通过keys函数获得所有svg图标
// 遍历图标，把图标作为request参数导入到svgRequire函数中，完成本地svg图标导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
