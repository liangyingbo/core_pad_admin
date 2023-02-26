<template>
  <div class="flex justify-between px-4 py-3 bg-white">
    <div class="flex items-center">
      <div @click="menuService.toggleStateClose()" class="cursor-pointer mr-3">
        <icon-menu-fold-one
          theme="outline"
          size="20"
          fill="#333"
          v-if="menuService.close.value"
        />
        <icon-menu-unfold-one theme="outline" size="20" fill="#333" v-else />
      </div>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="flex items-center">
      <Notification class="mr-8" />
      <icon-full-screen
        theme="outline"
        size="20"
        fill="#333"
        @click="fullScreen"
        v-if="!isFullscreen"
        class="mr-8"
      />
      <icon-off-screen
        theme="outline"
        size="20"
        fill="#333"
        @click="fullScreen"
        v-else="isFullscreen"
        class="mr-8"
      />
      <div class="flex items-center justify-center relative group">
        <img :src="userRef?.avatar" class="w-10 h-10 rounded-full" />
         <span class="text-sm ml-2">{{ userRef?.name }}</span>
        <!-- <section
          class="group-hover:block absolute px-2 py-2 top-full whitespace-nowrap cursor-pointer border-2 rounded-md border-gray-500 hidden"
        >
          <div class="flex items-center border-2 b">
             <icon-doc-detail theme="outline" size="18" fill="#333" />
            <a class="text-sm text-gray-600">文档资料</a>
          </div>
          <div class="flex items-center">
             <icon-whole-site-accelerator
              theme="outline"
              size="18"
              fill="#333"
            />
            <a class="text-sm text-gray-600">网站首页</a>
          </div>
          <div class="flex items-center" @click="utils.user.logout()">
            
            <icon-logout theme="outline" size="24" fill="#333" />
            <a class="text-sm text-gray-600">退出</a>
          </div>
        </section> -->
       </div>
    </div>
  </div>
</template>
<script setup>
import userStore from "@/store/user";
import utils from "@/utils";
import { ref } from "vue";
import menuService from "@/composables/menu";
import Notification from "@/components/Notification.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
const user = userStore().info;
const userRef = ref(user.data);
console.log(userRef)
const isFullscreen = ref(false);
const fullScreen = () => {
  isFullscreen.value
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
  isFullscreen.value = !isFullscreen.value;
};
</script>

<style lang="scss" scoped></style>
