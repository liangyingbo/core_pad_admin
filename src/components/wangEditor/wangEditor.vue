<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
     <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
    /> 
  </div>
</template>

<script setup >
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ApiEnum } from "@/enum/apiEnum";
const props =  defineProps({
   modelValue: ""
});
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref(props.modelValue);
const mode = ref("default");
const toolbarConfig = {};
const editorConfig = {  
    MENU_CONF:{
        uploadImage:{
            server: ApiEnum.UPDATE_IMAGE_URL,

        }
    }
  };


// editorConfig.MENU_CONF['uploadImage'] = {
//     server: '/api/upload-image',
//     fieldName: 'custom-field-name'
//     // 继续写其他配置...
    
//     //【注意】不需要修改的不用写，wangEditor 会去 merge 当前其他配置
// }


const emit = defineEmits(["update:modelValue"]);

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleChange  =(edtor) =>{
 emit('update:modelValue',valueHtml.value)
}
</script>
