<template>
  <div :class="classList">
    <header
      v-if="$slots.title || $slots.subtitle || $slots['extra-info']"
      class="card__header"
    >
      <div v-if="$slots.title" class="card__header__title">
        <slot name="title" />
      </div>
      <div v-if="$slots.subtitle" class="card__header__subtitle">
        <slot name="subtitle" />
      </div>
      <div v-if="$slots['extra-info']" class="card__header__extra-info">
        <slot name="extra-info" />
      </div>
    </header>
    <div v-if="$slots.content" class="card__content">
      <slot name="content" />
    </div>
    <slot />
  </div>
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
  &__header {
    @apply relative flex w-full text-sm;
    &__title {
      @apply font-medium;
    }
    &__subtitle {
      @apply mb-1;
    }
    &__extra-info {
      @apply text-xs;
    }
  }
}
</style>
