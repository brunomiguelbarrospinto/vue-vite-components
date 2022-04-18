<template>
  <InteractiveElementComponent :class="classList" v-bind="$props" as="span">
    {{ text }}
  </InteractiveElementComponent>
</template>
<script setup lang="ts">
import { computed } from "vue";
import getContrastColor from "../../utils/getContrastColor";
import InteractiveElementComponent from "./InteractiveElementComponent.vue";
const props = defineProps({
  text: String,
  backgroundColor: String,
  ...InteractiveElementComponent.$props,
});
const textColor = computed(() =>
  getContrastColor(props.backgroundColor || "#ffffff")
);

const classList = computed(() => {
  return `tag tag--${textColor.value}`;
});
</script>

<style lang="scss" scoped>
.tag {
  @apply inline-block rounded py-1 px-2 text-xs font-semibold uppercase hover:shadow-md;
  color: v-bind("textColor");
  background-color: v-bind("backgroundColor");
}
</style>
