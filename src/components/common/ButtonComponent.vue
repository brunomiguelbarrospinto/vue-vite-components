<template>
  <InteractiveElementComponent
    v-bind="$props"
    :class="classList"
    :disabled="isDisabled"
    type="button"
  >
    <IconLoadingAnimatedComponent v-if="isLoading" />
    <IconComponent
      v-if="leftIcon && !isLoading"
      class="button__icon"
      :name="leftIcon"
      :size="size"
    />
    <div class="button__text" v-if="text && !isLoading">{{ text }}</div>
    <IconComponent
      v-if="rightIcon && !isLoading"
      class="button__icon"
      :name="rightIcon"
      :size="size"
    />
  </InteractiveElementComponent>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import InteractiveElementComponent from "./InteractiveElementComponent.vue";
import IconComponent from "./IconComponent.vue";
import IconLoadingAnimatedComponent from "./IconLoadingAnimatedComponent.vue";

export const sizes = ["xs", "sm", "md", "lg", "xl"];
export const colors = ["default", "primary"];

export default defineComponent({
  name: "ButtonComponent",
  components: {
    InteractiveElementComponent,
    IconComponent,
    IconLoadingAnimatedComponent,
  },
  props: {
    ...InteractiveElementComponent.$props,
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isOutline: {
      type: Boolean,
      default: false,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    isCircle: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator: (value: string) => {
        return sizes.includes(value);
      },
    },
    color: {
      type: String,
      validator: (value: string) => {
        return colors.includes(value);
      },
    },
    text: {
      type: String,
    },
    leftIcon: {
      type: String,
    },
    rightIcon: {
      type: String,
    },
  },
  setup(props) {
    const classList = computed(() => {
      const { isOutline, color, isText, isCircle, isLoading } = props;
      const isLoadingClass = isLoading ? "button--loading" : "";
      const isOutlineClass = isOutline ? "button--outline" : "";
      const isTextClass = isText ? "button--text" : "";
      const isCircleClass = isCircle ? "button--circle" : "";
      const colorClass = color ? `button--${color}` : "";
      return `button button--${props.size} ${isOutlineClass} ${colorClass} ${isTextClass} ${isCircleClass} ${isLoadingClass}`;
    });
    return {
      classList,
    };
  },
});
</script>

<style lang="scss" scoped>
$default-color: "gray-500";
$default-hover-color: "gray-700";
$default-focus-color: "gray-800";

$selector: ".button";

#{$selector} {
  // Basic
  @apply box-border cursor-pointer;
  // Display
  @apply flex items-center justify-center;
  // Text
  @apply text-#{$default-color} font-medium;
  // Background
  @apply bg-gray-100;
  // Border
  @apply rounded border-0;
  // Transition
  @apply transition duration-300;

  // Disabled
  &[disabled="disabled"],
  &:disabled {
    @apply pointer-events-none opacity-50;
  }

  // Sizes
  &--xs {
    @apply text-xs;
    @apply h-6 px-2;

    svg.loading-svg {
      @apply h-2 h-2;
    }
    // Icon & Text
    #{$selector}__icon + #{$selector}__text {
      @apply ml-1;
    }
    #{$selector}__text + #{$selector}__icon {
      @apply ml-1;
    }
  }
  &--sm {
    @apply text-sm;
    @apply h-8 px-3;

    svg.loading-svg {
      @apply h-3 h-3;
    }
    // Icon & Text
    #{$selector}__icon + #{$selector}__text {
      @apply ml-2;
    }
    #{$selector}__text + #{$selector}__icon {
      @apply ml-2;
    }
  }
  &--md {
    @apply text-base;
    @apply h-10 px-4;

    svg.loading-svg {
      @apply h-4 h-4;
    }
    // Icon & Text
    #{$selector}__icon + #{$selector}__text {
      @apply ml-3;
    }
    #{$selector}__text + #{$selector}__icon {
      @apply ml-3;
    }
  }
  &--lg {
    @apply text-lg;
    @apply h-12 px-5;

    svg.loading-svg {
      @apply h-5 h-5;
    }
    // Icon & Text
    #{$selector}__icon + #{$selector}__text {
      @apply ml-4;
    }
    #{$selector}__text + #{$selector}__icon {
      @apply ml-4;
    }
  }
  &--xl {
    @apply text-xl;
    @apply h-14 px-6;

    svg.loading-svg {
      @apply h-6 h-6;
    }
    // Icon & Text
    #{$selector}__icon + #{$selector}__text {
      @apply ml-5;
    }
    #{$selector}__text + #{$selector}__icon {
      @apply ml-5;
    }
  }

  // Hover
  &:hover {
    @apply hover:text-#{$default-hover-color} hover:bg-gray-200;
  }

  // Focus

  &:focus {
    @apply focus:text-#{$default-focus-color}  focus:bg-gray-300;
  }

  // Variants

  &--outline {
    @apply border-#{$default-color} border-2;
    @apply bg-transparent;

    &:hover {
      @apply hover:border-#{$default-color};
    }
    &:focus {
      @apply focus:border-#{$default-focus-color};
    }
  }

  &--text {
    @apply bg-transparent;
    &:hover {
      @apply hover:bg-gray-100;
    }
    &:focus {
      @apply focus:bg-gray-200;
    }
  }

  &--circle {
    @apply rounded-full px-0;
    &#{$selector}--xs {
      @apply h-6 w-6;
    }
    &#{$selector}--sm {
      @apply h-8 w-8;
    }
    &#{$selector}--md {
      @apply h-10 w-10;
    }
    &#{$selector}--lg {
      @apply h-12 w-12;
    }
    &#{$selector}--xl {
      @apply h-14 w-14;
    }
  }

  // Colors

  &--primary {
    // Background
    @apply bg-blue-500;
    // Text
    @apply text-white;

    &:hover {
      @apply hover:bg-blue-600 hover:text-white;
    }
    &:focus {
      @apply focus:bg-blue-700 focus:text-white;
    }

    &#{$selector}--outline {
      @apply bg-transparent;
      @apply text-blue-500;
      @apply border-blue-500;
      &:hover {
        @apply hover:bg-blue-600;
        @apply hover:text-white;
        @apply hover:border-blue-600;
      }
      &:focus {
        @apply focus:bg-blue-700;
        @apply focus:text-white;
        @apply focus:border-blue-700;
      }
    }

    &#{$selector}--text {
      @apply bg-transparent;
      @apply text-blue-500;
      &:hover {
        @apply hover:bg-blue-100;
        @apply hover:text-blue-600;
      }
      &:focus {
        @apply focus:bg-blue-200;
        @apply focus:text-blue-700;
      }
    }
  }
}
</style>
