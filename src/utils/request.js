import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 统一注入token
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 请求成功处理
  (response) => {
    const { success, data, message } = response.data
    // 需要判断当前请求是否成功，
    if (success) {
      // 成功返回解析后的数据
      return data
    } else {
      // 失败 请求成功，业务失败，消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败处理
  (error) => {
    ElMessage.error(error)
    return Promise.reject(new Error(error))
  }
)

export default service
