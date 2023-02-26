import http from '@/plugins/axios/index'

export default function uploadImg(data) {
    return http.request({
        url: "upload/image",
        method: 'post',
        data:data
    })
}
