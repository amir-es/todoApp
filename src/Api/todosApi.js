import axios from 'axios';

let instance = axios.create({
    baseURL : 'https://react-todo-b5afc-default-rtdb.firebaseio.com' ,
    timeout : 5000
})

instance.interceptors.request.use(function(config) {
    console.log(config)
    return config ;
    
} , function (err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response) {
    return response ;
    
} , function (err) {
    return Promise.reject(err)
})

export default instance ;