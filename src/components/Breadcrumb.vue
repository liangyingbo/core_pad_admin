<template>
  <div>
    <el-breadcrumb separator="/" class="flex items-center">
      <el-breadcrumb-item>
        <router-link :to="{ path: '/' }">首页</router-link>
      </el-breadcrumb-item>
      <template v-if="route">
        <el-breadcrumb-item
          v-if="route.matched.length"
          v-for="(r, index) of route.matched"
          :key="index"
        >
          <router-link :to={path:r.path}>
            {{ r.meta.menu?.title }}
          </router-link>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import menu from "@/composables/menu";

const route = menu.route.value;
// console.log(route)
</script>

<style lang="scss" scoped></style>
