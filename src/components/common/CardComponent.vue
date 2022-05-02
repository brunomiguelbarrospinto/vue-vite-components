<template>
  <div :class="classList"><slot /></div>
</template>

<script setup lang="ts">
const classList = "card";
</script>

<style lang="scss" scoped>
.card {
  @apply border p-3 rounded-sm;
  &:hover {
    @apply shadow;
  }
}
</style>
