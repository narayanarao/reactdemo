import axios from 'axios';
const instance = axios.create({
    baseURL:'http://192.168.0.154:8082/api'
});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

export default instance;