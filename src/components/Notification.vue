<template>
  <div class="relative">
    <i class="fab fa-ioxhost" @click.stop="(show =!show)"></i>
    <el-tabs v-model="active" class="notification" :class="{hidden:show}" @click.stop>
      <el-tab-pane label="系统消息" name="site">
        <a href="">
          2023年房价会涨，利率会涨？如果几年前有人跟你说，2022年的房价会出现下跌，相信绝大部分人第1句话就是“傻x”，房价怎么可能会出现下跌呢？1998年房改以来，房地产一直都处于上涨的状态，当时全国平均房价不足2000元每平米，反正最高峰的时候已经突破万元每平米，平均房价涨幅560%。虽然说内地市场是学习香港的房地产发展模式的，但是内地市场遇到了一些特殊情况都用政策抹平了。
        </a>
        <a href="">
          2023年房价会涨，利率会涨？如果几年前有人跟你说，2022年的房价会出现下跌，相信绝大部分人第1句话就是“傻x”，房价怎么可能会出现下跌呢？1998年房改以来，房地产一直都处于上涨的状态，当时全国平均房价不足2000元每平米，反正最高峰的时候已经突破万元每平米，平均房价涨幅560%。虽然说内地市场是学习香港的房地产发展模式的，但是内地市场遇到了一些特殊情况都用政策抹平了。
        </a>
        <a href="">
          2023年房价会涨，利率会涨？如果几年前有人跟你说，2022年的房价会出现下跌，相信绝大部分人第1句话就是“傻x”，房价怎么可能会出现下跌呢？1998年房改以来，房地产一直都处于上涨的状态，当时全国平均房价不足2000元每平米，反正最高峰的时候已经突破万元每平米，平均房价涨幅560%。虽然说内地市场是学习香港的房地产发展模式的，但是内地市场遇到了一些特殊情况都用政策抹平了。
        </a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { nextTick, ref } from "vue";
const active = ref("site");
let show = ref(true)

nextTick(()=>{
  document.documentElement.addEventListener('click',()=>{
    show.value = true;
  })
})
</script>

<style lang="scss" scoped>
.notification {
  @apply absolute border-2 px-3 py-2 rounded-md shadow-sm w-[270px] z-50 right-[-50px] bg-white;
  a{
    @apply truncate block border-gray-400 border-b-[1px] px-2 py-1 text-sm hover:text-red-300;
  }
}
</style>
