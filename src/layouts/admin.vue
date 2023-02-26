<template>
  <div class="admin w-screen h-screen grid md:grid-cols-[auto_1fr]">
    <menu-component />
    <div class="bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <navbar />
        <HistoryLink class="hidden md:block" />
      </div>
      <div class="mt-3 relative overflow-y-auto flex justify-center">
        <router-view #default="{ Component }">
          <Transition
            appear
            :enter-active-class="
              route.meta.enterClass ?? 'animate__animated animate__fadeInRight'
            "
            :leave-active-class="
              route.meta.leaveClass ?? 'animate__animated animate__fadeOutLeft'
            "
          >
            <component :is="Component" class="absolute w-full"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import HistoryLink from "./admin/historyLink.vue";
import menuComponent from "./admin/menu.vue";
import navbar from "./admin/navbar.vue";
import menuService from "@/composables/menu";
import { watch } from "vue";

const route = useRoute();

watch(route, () => {
  menuService.addHistoryMenu(route);
},{immediate:true});

</script>

<style lang="scss" scoped>

</style>
