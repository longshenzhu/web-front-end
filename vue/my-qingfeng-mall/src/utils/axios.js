import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1';
axios.defaults.withCredentials = true;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.headers['token'] = localStorage.getItem('token') || '';
//post请求时,发送json形式的数据包
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        Toast.fail('服务器异常')
        return Promise.reject(res);
    }
    if (res.data.resultCode != 200) {
        res.data?.message && Toast.fail(res.data.message);
        if(res.data.resultCode == 416) {
            //416表示未登录状态,路由跳转到/login页面
            router.push({ path: '/login' });
        }
        return Promise.reject(res.data)
    }
    return res.data;
})

export default axios;