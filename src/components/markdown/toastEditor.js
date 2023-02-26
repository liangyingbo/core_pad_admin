import uploadImg from "@/apis/uploadImageApi"
import ToastEditor from '@toast-ui/editor'

export default class {
     
    isFullscreen = false
    constructor(el, initialValue, height) {
        this.editor = new ToastEditor({
            el: document.querySelector(el),
            height: height,
            initialEditType: "markdown",
            initialValue: initialValue,
            previewStyle: 'vertical',
            toolbarItems: this.toolbarItems(),
        })
        this.ImageHook()
    }
     toolbarItems() {
        return ([
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            // Using Option: Customize the last button
            [{
                el: this.fullScreen(),
                command: 'fullScreen',
                tooltip: 'fullScreen'
            }]
        ])
    }
    ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob, callback) => {
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadImg(form)
            callback(response.data.url, blob.name)

        })
    }
    fullScreen() {
        const btn = document.createElement('button')
        btn.innerText = '全屏'
        btn.style.margin = '0'
        btn.addEventListener('click', () => {
            const editor = document.querySelector('.toastui-editor-defaultUI')
            editor?.classList.toggle('fullscreen')
            if (this.isFullscreen === false) {
                this.editor.setHeight('100vh')
               
            } else {
                this.editor.setHeight(this.height)
            }
            this.isFullscreen = !this.isFullscreen
        })
        return btn
    }
}