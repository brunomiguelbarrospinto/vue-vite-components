<template>
  <InteractiveElementComponent :class="classList" v-bind="$props" as="span">
    {{ text }}
  </InteractiveElementComponent>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import getContrastColor from "../../utils/getContrastColor";
import InteractiveElementComponent from "./InteractiveElementComponent.vue";

export default defineComponent({
  components: {
    InteractiveElementComponent,
  },
  props: {
    text: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
  },
  setup(props) {
    const textColor = computed(() =>
      getContrastColor({ hexadecimal: props.backgroundColor || "#ffffff" })
    );

    const classList = computed(() => {
      return `tag tag--${textColor.value}`;
    });

    return {
      textColor,
      classList,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag {
  @apply inline-block rounded-sm py-1 px-2 text-xs font-semibold uppercase hover:shadow;
  color: v-bind("textColor");
  background-color: v-bind("backgroundColor");
}
</style>
