import Icon, { sizes, solidIconNames } from "../components/common/Icon.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      options: sizes,
      control: "select",
      defaultValue: "md",
    },
    type: {
      options: ["solid", "outline"],
      control: "select",
      defaultValue: "solid",
    },
    name: {
      options: [undefined, ...solidIconNames],
      control: "select",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Icon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Icon v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
