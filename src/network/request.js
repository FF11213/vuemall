import axios from "axios";

// 引入 axios
export function request(config) {
  // 1、创建 axios 实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/wh',
    baseURL:'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  });
  // 2、axios 的拦截
  // 2、1 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err)
  });
  // 2、2响应拦截器
  // instance.interceptors.response.use((res) => {
  //   return res.data
  // }, (err) => {
  //   console.log(err)
  // });
  
  instance.interceptors.response.use(res => {
    // console.log('来到了response拦截success中');
    return res.data
  }, err => {
    console.log('来到了response拦截failure中');
    console.log(err);
    if (err && err.res) {
      switch (err.res.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })
  //3、发送真正的网络请求
  return instance(config); //返回一个Promise
}