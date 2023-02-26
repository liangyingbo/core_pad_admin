<template>
  <div
    class="menu w-[200px] py-2 bg-gray-800"
    :class="{ close: menuService.close.value }"
  >
    <div class="logo">
         
      <icon-home theme="outline"  class="text-2xl text-fuchsia-400 mr-2"/>
      <span class="text-base text-gray-300">后台管理系统</span>
    </div>
    <div class="container">
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menuService.toggleMenu(menu)">
          <div class="flex items-center">
            <component :is="icons[menu.icon]" size="18" class="text-[15px]" />
            <span class="ml-2 text-[14px]">{{ menu.title }}</span>
          </div>
          <icon-up theme="outline"  class="duration-500"
          :class="{ 'rotate-180': menu.isClick }"
          />
        </dt>
        <dd
          :class="(!menu.isClick || menuService.close.value) ? 'hidden' : 'block'"
        >
          <div
            :class="{ active: cmenu?.isClick }"
            v-for="(cmenu, key) in menu.children"
            :key="key"
            @click="$router.push({ name: cmenu.route })"
          >
            {{ cmenu?.title }}
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <div class="bg md:hidden" :class="menuService.close.value ? 'hidden':'block' " @click="menuService.toggleStateClose"></div>

</template>

<script setup>
import menuService from "@/composables/menu";
import { watch } from "vue";
import { useRoute } from "vue-router";
import * as icons from '@icon-park/vue-next' 
const route = useRoute();
watch(route, () => menuService.setCurrentMenu(route), { immediate: true });
</script>

<style lang="scss" scoped>
.menu {
  .logo {
    @apply text-white flex items-center py-2 px-4;
  }
  .container {
    dl {
      @apply text-white mt-6 mx-4;
      dt {
        @apply flex justify-between items-center cursor-pointer;
      }
      dd {
        div {
          @apply my-2 px-4 py-2 rounded-md text-gray-200 cursor-pointer  hover:bg-violet-600 duration-300 text-sm;
          &.active {
            @apply bg-violet-600;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu {
    &.close {
      width: auto;
      .logo {
        @apply justify-center;
        span:nth-of-type(1){
          margin: 0;
        }
        span:nth-of-type(2){
          @apply hidden;

        }
      }
      .container {
        dl {
          @apply relative;
          dt {
            @apply justify-center;
            & > div > span:nth-of-type(2) {
              @apply hidden;
            }
            & > div ~ span {
              @apply hidden;
            }
          }
          &:hover {
            dd {
                @apply block absolute left-full top-[-10px] bg-slate-600 z-30 w-[200px]   px-2;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    @apply absolute h-screen z-50;
    &.close {
      @apply hidden;
    }
  }
  .bg {
    @apply md:hidden absolute w-screen h-screen top-0 left-0 bg-slate-100 z-40 opacity-70;
  }
}
</style>
