<template>
  <div id="markdown"></div>
</template>

<script setup >
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import { nextTick } from "vue";
import ToastEditor from "./toastEditor";
 
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  height:{
    type:Number,
    default:500
  },
  placeholder:{
    type:String,
    default:""
  }
})
console.log(props)
const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const toast = new ToastEditor(
    "#markdown",
    `${props.modelValue}`,
    `${props.height}px`
  );
  toast.editor.setPlaceholder(props.placeholder)
  toast.editor.on("change", (type) => {
      emit(
      "update:modelValue",
      toast.editor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>
<style lang="scss">
// @import url("https://uicdn.toast.com/editor/latest/toastui-editor.min.css");
// import url('@toast-ui/editor/dist/toastui-editor.css'); // Editor's Style

#markdown {
  @apply bg-white px-2;
  .toastui-editor-md-tab-container {
    display: none !important;
  }
  
}
.fullscreen{
    position: fixed;
    height: 100vh;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
  }
</style>
