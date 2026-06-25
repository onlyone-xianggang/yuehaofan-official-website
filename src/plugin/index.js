export default {
  install(app, options) {
    app.config.globalProperties.testMethod = (options) => {
	  console.log('我是插件方法？', options)
    }
  }
}

