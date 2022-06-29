<template>
  <InteractiveElementComponent :class="classList" v-bind="$props">
    {{ text }}
  </InteractiveElementComponent>
</template>
<script setup lang="ts">
import { computed } from "vue";
import getContrastColor from "../../utils/getContrastColor";
import InteractiveElementComponent from "./InteractiveElementComponent.vue";

const props = defineProps({
  ...InteractiveElementComponent.$props,

  text: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
});

const textColor = computed(() =>
  getContrastColor({ hexadecimal: props.backgroundColor || "#ffffff" })
);

const classList = computed(() => {
  return `tag tag--${textColor.value}`;
});
</script>

<style lang="scss" scoped>
.tag {
  @apply inline-block rounded-sm py-1 px-2 text-xs font-semibold uppercase hover:shadow;
  color: v-bind("textColor");
  background-color: v-bind("backgroundColor");
}
</style>
