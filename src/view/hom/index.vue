<template>

  <div
    class="updata"
  	@click="testMethod('是的，我被调用了')"
  	>
  	插件测试
  </div>
  
  <div
    class="updata"
  	@click="fetchData()"
  	>
  	请求测试
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import http from '../../request/http'

const fetchData = async () => {
  console.log('hhh')
  try {
	await http.post('/app-api/system/area/tree', {
	  id: 1,
	  name: '我就是POST请求的参数'
	})
	.then(res => {
	  console.log(res, '-----')
	})
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}


defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
.updata{
  width: 120px;
  border: 1px solid red;
  display: inline-block;
  padding: 3px 8px;
  cursor: pointer;
}
</style>
