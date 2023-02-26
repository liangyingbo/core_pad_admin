<template>
  <div class="animation-list">
    <transition-group
      :tag="props.tag"
      name="animate"
      appear
      @enter="enter"
      @before-enter="beforeEnter"
    >
      <slot></slot>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { RendererElement } from "vue-demi";

interface IProps{
    tag?:string
}

const props = withDefaults(defineProps<IProps>(),{
    tag:'div'
})

const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    delay: el.dataset.index * 0.4,
  });
};
const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  });
};
</script>
<style lang="scss" scoped>
.animation-list {
    position: relative;
  .animate-leave-active {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
  }

  .animate-leave-to {
    opacity: 0;
  }

  .animate-move {
    transition: all 0.5s;
  }
}
</style>
