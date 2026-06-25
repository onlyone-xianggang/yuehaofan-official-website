import instance from './set_header';
import Alert from './prompt'

// 配置拦截器
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
	if(response.data.code && response.data.code >= 400) {
	  Alert.resPrompt(response.data)
	}
	return response.data
  },
  error => {
    if (error.response) {
	  Alert.errPrompt(error.response.msg)
      switch (error.response.status) {
        case 401:
          // 处理未授权
          break;
        case 404:
          // 处理未找到
          break;
        default:
          // 处理其他错误
      }
    }
    return Promise.reject(error)
  }
)

// 请求实例
const http = {
  get: (url, params) => instance.get(url, { params }),
  post: (url, data) => instance.post(url, data),
  put: (url, data) => instance.put(url, data),
  delete: (url, params) => instance.delete(url, { params })
}

export default http

