import Button, { sizes, colors } from "../components/common/Button.vue";
import { solidIconNames } from "../components/common/Icon.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isDisabled: { control: "boolean", defaultValue: false },
    isLoading: { control: "boolean", defaultValue: false },
    isOutline: { control: "boolean", defaultValue: false },
    isText: { control: "boolean", defaultValue: false },
    isCircle: { control: "boolean", defaultValue: false },
    size: {
      options: sizes,
      control: "select",
      defaultValue: "md",
    },
    color: {
      options: colors,
      control: "select",
      defaultValue: "default",
    },
    text: { control: "text", defaultValue: "Button" },
    leftIcon: {
      options: [undefined, ...solidIconNames],
      control: "select",
    },
    rightIcon: {
      options: [undefined, ...solidIconNames],
      control: "select",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
