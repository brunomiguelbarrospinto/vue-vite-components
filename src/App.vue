<script setup lang="ts">
import ImgComponentVue from "./components/common/ImgComponent.vue";
</script>

<template>
  <div class="flex flex-wrap">
    <div class="w-52 h-28 relative m-1 border-2" v-for="n in 5" :key="n">
      <ImgComponentVue src="https://picsum.photos/2000/1000" class="wqweqwe" />
    </div>
  </div>
</template>
