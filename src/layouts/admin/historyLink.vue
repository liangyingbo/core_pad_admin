<template>
  <div>
     <div v-show="menuSerivce.historymenus.value.length" class="mt-3 ml-2 grid grid-flow-col justify-start gap-2 bg-slate-100 border-t-2 border-b-2 py-2 shadow-sm">
        <div  v-for="(menu, index) of menuSerivce.historymenus.value"
          :key="index"
           class="border-2 px-4 py-2 rounded-sm cursor-pointer text-sm hover:bg-violet-500 hover:text-white hover:shadow-md flex items-center justify-between"
           :class="{'bg-violet-500 text-white':menu.route === $route.name}"
          >
          <router-link :to="{name:menu.route}">{{ menu.title }}
       </router-link>
       <icon-close-one theme="outline" size="18" class="ml-2" @click="removeHistoryHandle(menu)"/>
        </div>


    </div>
  </div>
</template>

<script setup>
import menuSerivce  from '@/composables/menu'
 

const removeHistoryHandle = (menu) =>{
  console.log(menu.route)
  menuSerivce.removeHistoriyMenu(menu)
}
</script>

<style lang="scss" scoped></style>
