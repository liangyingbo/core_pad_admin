import http from '@/plugins/axios/index'

 
export function article() {
    return http.request({
        url: "/article"
    })
}