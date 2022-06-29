<template>
  <component
    :class="href || to ? 'interactive-element' : undefined"
    :is="computedTagName"
    :href="href"
    :to="to"
    v-bind="$props"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  to: {
    type: [String, Object],
  },
  href: {
    type: String,
  },
});
const computedTagName = computed(() =>
  props.to ? `router-link` : props.href ? `a` : `button`
);
</script>
<style lang="scss" scoped>
.interactive-element {
  @apply cursor-pointer;
}
</style>
