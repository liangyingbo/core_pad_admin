// axios 二次封装
import axios from "axios";

export default class Axios{
    constructor(config){
        this.instance = axios.create(config)
        this.interceptors()
    }
    interceptors(){
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    request(config){
        return new Promise(async (resolve,reject) =>{
            try{
                const response = await this.instance.request(config)
                resolve(response)
            }
            catch(error){
                reject(error)
            }
        })
    }

    interceptorsRequest(){
        this.instance.interceptors.request.use(
            config =>{
                return config;
            },
            error =>{
                return Promise.reject(error)
            }
        )
    }

    interceptorsResponse(){
        this.instance.interceptors.response.use(
            response =>{
                // 2xx 范围内的状态码都会触发该函数
                return response
            },
            error =>{
                // 超出 2xx 范围的状态码都会出触发该函数
                return Promise.reject(error)
            }
        )
    }
     
}