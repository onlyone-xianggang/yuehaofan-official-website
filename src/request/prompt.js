import router from '../router'
import {
  ElMessage,
  ElMessageBox
} from 'element-plus'

export default {
  resPrompt: (data) => {
	// console.log(data)
	if(data.code && data.code >= 400 && data.code != 401) {
	  ElMessage.error(data.msg)
	} else if(data.code == 401) {
	  ElMessageBox.confirm(
	    '帐号未登录或登录过期，是否前往登录',
	    {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }
	  )
	  .then(() => {
		router.push('/login')
	  })
	  .catch(() => {
	    ElMessage({
	      type: 'info',
	      message: '您取消了跳转登录操作'
	    })
	  })
	}
  },
  errPrompt: (promptText) => {
	ElMessage.error(promptText)
  }
}
