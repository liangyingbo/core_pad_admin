
export default class {
    editor=null
    constructor(el, config, callback) {
        this.editor = new wangEditor(el)
        this.editor.config.height = config.height
        this.editor.config.uploadImgServer = 'api/upload/image'

        this.editor.config.onchange = callback
        this.editor.config.uploadImgHooks = this.ImgUpload()
        this.editor.create()
        this.editor.txt.html(config.modelValue) // 重新设置编辑器内容

    }

    ImgUpload() {
        return {
            // 图片上传并返回了结果，想要自己把图片插入到编辑器中
            // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
            customInsert: function (insertImgFn, result) {
                // result 即服务端返回的接口
                // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
                insertImgFn(result.data.url)
            }
        }
    }

}