<template>
  <div
    class="w-screen h-screen bg-slate-600 flex flex-col justify-center items-center"
  >
    <img
      src="/images/avatar.jpg"
      class="w-36 h-36 rounded-full border-8 bg-white"
    />
    <div class="mt-4">
      <router-link :to="{ name: 'admin/home' }" class="hd-button mt-4"
        >后台管理</router-link
      >
      <router-link :to="{ name: 'login' }" class="hd-button hd-danger ml-3"
        >会员登录</router-link
      >
    </div>
    <span class="text-gray-200 text-sm mt-3 font-mono shadow-md"
      >欢迎大家共同交流技术</span
    >
  </div>
</template>
<script setup>
</script>
