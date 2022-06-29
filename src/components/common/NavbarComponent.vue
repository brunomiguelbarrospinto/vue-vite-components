<template>
  <nav :class="classList">
    <div class="navbar__content">
      <div><slot name="left-section"></slot></div>
      <div><slot name="right-section"></slot></div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  isSticky: {
    type: Boolean,
  },
});

const classList = computed(() => {
  const { isSticky } = props;

  return `navbar ${isSticky ? "navbar--sticky" : ""}`;
});
</script>

<style lang="scss" scoped>
.navbar {
  @apply z-20 w-full border-b border-gray-200 bg-white;
  &--sticky {
    @apply sticky top-0;
  }
  &__content {
    @apply mx-auto flex max-w-4xl items-center justify-between p-3;
  }
}
</style>
