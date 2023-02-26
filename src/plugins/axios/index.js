
import Axios from './Axios'

const http = new Axios({
    baseURL:"http://localhost:8989/api",
    timeout:1000,
    headers:{}
})

export default http;

