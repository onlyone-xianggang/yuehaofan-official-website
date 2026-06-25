import axios from 'axios';
import evenURL from './even';

// 创建axios实例
const instance = axios.create({
  baseURL: evenURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
