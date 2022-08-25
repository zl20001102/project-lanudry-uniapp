import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'

// create an axios instance
const service = axios.create({
	baseURL: 'http://127.0.0.1:8090', // url = base url + request url
	timeout: 6000, // request timeout
	crossDomain: true
})

// 首先对拦截器的请求进行设置，并在方法中return config，此处为固定格式
service.interceptors.request.use(config => {
  // 表示在配置中的设置头消息的字段Authorization为从本地获取的token值
  let token=''
  if(window.sessionStorage.getItem('token')!=null){
	  token= window.sessionStorage.getItem('token')
  }else{
	  token=window.localStorage.getItem('token')
  }
  config.headers.token =token
  return config
});


service.interceptors.response.use(res => {
		if(res.data.code=='500'){
			ElementUI.Message.error(res.data.msg)
		}else if(res.data=='登录过期,请重新登录'){
			ElementUI.Message.error(res.data)
		}
    return res
}, err => {
	ElementUI.Message.warning("网络繁忙")
    return Promise.reject(err)
})

export default service