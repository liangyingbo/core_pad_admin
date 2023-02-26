<template>
  <div>
    <WangEditorWangEditor :height='500' v-model="content"/>
    {{content}}
  </div>
</template>

<script setup>
 import { ref } from "vue";

const content = ref('<p>hello</p>')
</script>
