<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  modelValue
})

onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('input').forEach((input) => input.removeAttribute('readonly'))
  }, 500)
})
</script>

<template>
  <input
    type="text"
    class="hd-input"
    readonly
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target).value)"
  />
</template>

<style lang="scss" scoped>
.hd-input {
  @apply border w-full rounded-md py-2 align-middle px-2 outline-none border-gray-200 focus:ring-2 ring-offset-2 ring-violet-600 duration-500 shadow-sm focus:border-white focus:shadow-2xl;
}
</style>
