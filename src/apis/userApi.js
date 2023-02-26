import http from '@/plugins/axios/index'

function info() {
    return http.request({
        url: "user/info"
    })
}

function login(value) {
    return http.request({
        url: 'login',
        method:'post'
    })
}
export { info, login }