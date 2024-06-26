<template>
  <component v-if="isMounted && heroicon" :class="classList" :is="heroicon" />
</template>

<script lang="ts">
import * as SolidIcons from "@heroicons/vue/solid";
import * as OutlineIcons from "@heroicons/vue/outline";
export const types = ["solid", "outline"];
export const solidIconNames = Object.keys(SolidIcons);
export const sizes = ["xs", "sm", "md", "lg", "xl"];
</script>
<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import type { PropType } from "vue";

type IconTypes = "solid" | "outline";
const props = defineProps({
  // https://heroicons.com
  // https://github.com/tailwindlabs/heroicons
  name: {
    type: String,
    validator: (value: string) => solidIconNames.includes(value),
  }, // Prop "name" must be in PascalCase like "ArrowSmLeftIcon"
  type: {
    type: String as PropType<IconTypes>,
    default: "solid",
    validator: (value: string) => types.includes(value),
  }, // solid || outline
  size: {
    type: String,
    default: "md",
    validator: (value: string) => {
      return sizes.includes(value);
    },
  },
});

const isMounted = ref(false);
let heroicon: any;
if (props.name) {
  // eslint-disable-next-line
  heroicon =
    props.type === "solid"
      ? SolidIcons[props.name]()
      : OutlineIcons[props.name]();
}
const classList = computed(() => {
  const { size } = props;

  return `svg svg--${size} `;
});
onMounted(() => (isMounted.value = true));
</script>

<style lang="scss">
.svg {
  @apply inline;
  &--xs {
    @apply h-4 w-4;
  }
  &--sm {
    @apply h-5 w-5;
  }
  &--md {
    @apply h-6 w-6;
  }
  &--lg {
    @apply h-7 w-7;
  }
  &--xl {
    @apply h-8 w-8;
  }
}
</style>
