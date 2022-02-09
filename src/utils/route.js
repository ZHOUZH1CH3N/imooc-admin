import path from 'path'
// 所有子集路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

// 处理脱离层级的路由
export const filterRoutes = (routes) => {
  // 所有子集路由
  const childrenRoutes = getChildrenRoutes(routes)
  // 根据子集路由查重
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

// 根据routes数据，返回对应的menu规则数据
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 不存在children也不存在meta 直接return
    if (isNull(item.children) && isNull(item.meta)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 不存在children 存在meta
    // 最终menu需要跳转，合并path
    const routePath = path.resolve(basePath, item.path)
    // 路由分离后 存在同名父路由
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // icon meta必须存在
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    // 存在children和meta
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
