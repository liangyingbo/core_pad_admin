<template>
  <div class="article bg">
    <AnimiationList tag="ul">
      <li
        v-for="(article, index) of articles"
        :key="article.id"
        :data-index="index"
      >
        {{ article.title }}
      </li>
    </AnimiationList>
  </div>
</template>

<script setup >
import { article } from "@/apis/articleApi";

const articles = ref();

article().then(data => {
  // console.log((data:{data:{result}})) =>
  const result =  data.data.result
  articles.value = result;
});
</script>
<style lang="scss" scoped>
.article {
  box-sizing: border-box;
  background-color: #2c3e50;
  // height: 100vh;
  width: 100%;
  padding:10px;
  ul {
    li {
      margin: 15px;
      padding:5px 15px;
      background: #e67e22;
      color: #333;
      border-radius: 5px;
      width: 90%;
    }
  }
}
</style>
