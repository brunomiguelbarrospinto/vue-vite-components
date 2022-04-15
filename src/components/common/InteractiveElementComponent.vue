<template>
  <component
    class="interactive-element"
    :is="computedTagName"
    :href="href"
    :to="to"
    v-bind="$props"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "InteractiveElementComponent",
  props: {
    to: {
      type: [String, Object],
    },
    href: {
      type: String,
    },
  },
  setup(props) {
    const computedTagName = computed(() =>
      props.to ? `router-link` : props.href ? `a` : `button`
    );
    return {
      computedTagName,
    };
  },
});
</script>
<style lang="scss">
.interactive-element {
  @apply cursor-pointer;
}
</style>
