<template>
  <img v-if="srcLoaded" class="img" :src="srcLoaded" :alt="alt" />
  <div class="img__loading" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
});

const srcLoaded: Ref<null | string> = ref(null);

const reader = new FileReader();
reader.onloadend = () => {
  const base64data = reader.result as string;
  srcLoaded.value = base64data;
};

fetch(props.src).then((r) => {
  fetch(r.url)
    .then((r) => r.blob())
    .then((r) => reader.readAsDataURL(r));
});
</script>

<style lang="scss" scoped>
.img {
  @apply w-full h-full absolute z-10;
  animation: fadeIn 1.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.img__loading {
  @apply absolute w-full h-full animate-pulse bg-gray-500 z-0;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
