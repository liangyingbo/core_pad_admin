<template>
    <div>
      <div class="bg-gradient-to-r from-purple-300 to-blue-200 bg-zinc-100">
        <div
          class="m-auto flex min-h-screen w-9/12 items-center justify-center py-16"
        >
          <div class="overflow-hidden bg-white pb-8 shadow sm:rounded-lg">
            <div class="border-t border-gray-200 pt-8 text-center">
              <h1 class="text-9xl font-bold text-purple-400">500</h1>
              <h1 class="py-8 text-6xl font-medium">oops! Page not found</h1>
              <p class="px-12 pb-8 text-2xl font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <router-link
                :to="{path:'/home'}"
                class="mr-6 rounded-md bg-gradient-to-r from-purple-400 to-blue-500 px-6 py-3 font-semibold text-white hover:from-pink-500 hover:to-orange-500"
              >首页</router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  .text-9xl {
    font-size: 14rem;
  }
  @media (max-width: 645px) {
    .text-9xl {
      font-size: 5.75rem;
    }
    .text-6xl {
      font-size: 1.75rem;
    }
    .text-2xl {
      font-size: 1rem;
      line-height: 1.2rem;
    }
    .py-8 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .px-6 {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
    .mr-6 {
      margin-right: 0.5rem;
    }
    .px-12 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  </style>
  