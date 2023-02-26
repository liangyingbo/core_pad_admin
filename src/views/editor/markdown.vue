<template>
  <div>
    <MarkdownToastEditor
      v-model="content"
      :heigth="300"
      placeholder="请输入markdown内容"
    ></MarkdownToastEditor>
    {{ content }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const content = ref("");
</script>
