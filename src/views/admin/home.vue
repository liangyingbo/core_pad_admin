<template>
  <div>
    <div class="px-3 py-4 grid md:grid-flow-col gap-3 w-full">
      <el-card
        shadow="hover"
        v-for="(card, index) in cards"
        :key="index"
        class="cursor-pointer"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <span>{{ card.title }}</span>
            <el-tag type="danger" size="" effect="dark">月</el-tag>
          </div>
        </template>
        <!-- card body -->
        <div class="flex justify-between items-center">
          <span class="text-base">${{ card.price }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-4xl"></i>
        </div>
        <div class="flex justify-between items-center mt-5">
          <span>{{ card.desc }}</span>
          <span>{{ card.descNum }}</span>
        </div>
      </el-card>
    </div>
    <div class="grid md:grid-flow-col bg-white p-3">
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="echart1" style="height: 400px"></div>
      <div id="echart2" style="height: 400px"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { echart1, echart2, echart3 } from "./options";
import * as echarts from 'echarts'
// interface ICard {
//   title: string;
//   price: number;
//   icon: string;
//   iconColor?: string;
//   desc: string;
//   descNum: number;
// }

const cards = ref([
  {
    title: "总人数",
    price: 424424,
    iconColor: "text-purple-400",
    icon: "fab fa-facebook-messenger",
    desc: "总金额",
    descNum: 1353647,
  },
  {
    title: "订单数",
    price: 242424,
    iconColor: "text-green-400",
    icon: "fab fa-freebsd",
    desc: "订单量",
    descNum: 896968,
  },
  {
    title: "下载量",
    price: 89642,
    iconColor: "text-blue-400",
    icon: "fab fa-guilded",
    desc: "下载人数",
    descNum: 645646,
  },
  {
    title: "转发数",
    price: 65756,
    iconColor: "text-red-400",
    icon: "fab fa-mendeley",
    desc: "转发人数",
    descNum: 646535,
  },
]);

nextTick(() => {
  echarts.init(document.getElementById("echart1")).setOption(echart1);
  echarts.init(document.getElementById('echart2')).setOption(echart2)
});
</script>

<style lang="scss" scoped></style>
