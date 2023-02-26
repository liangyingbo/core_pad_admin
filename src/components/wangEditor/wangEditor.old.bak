<template>
  <div id="editor" class="editor"></div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import wangEditor from "./wangEditor";

interface IProps {
  height?: number;
  modelValue?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  height: 300,
  modelValue: "",
});
const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const callback = (newHtml: any) => {
    emit("update:modelValue",newHtml)
  };
  new wangEditor("#editor", props, callback);
});
</script>
<style lang="scss" scoped>
.editor {
  @apply px-2;
}
</style>
