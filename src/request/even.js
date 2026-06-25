// 当前环境
const even = process.env.NODE_ENV

 // 环境变量
let URL = 'https://api.lengjiaotec.cn'

switch(even) {
  case 'production': // 生产环境
    URL = 'https://api.lengjiaotec.cn'
	break
  case 'development': // 开发环境
    URL = 'https://api.lengjiaotec.cn'
	break
  case 'test': // 测试环境
    URL = ''
	break
  case 'User Acceptance Test': // UAT环境
    URL = ''
}

export default URL
