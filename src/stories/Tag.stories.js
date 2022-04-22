import TagComponent from "../components/common/TagComponent.vue";
import cssColors from "../data/css-colors.json";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

let mappingColors = {};
cssColors.forEach((color) => {
  mappingColors[color.value] = color.text;
});

export default {
  title: "Components/TagComponent",
  component: TagComponent,
  argTypes: {
    backgroundColor: {
      options: cssColors.map((c) => c.value),
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: mappingColors,
      },
    },
    text: { control: "text", defaultValue: "Tag" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TagComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TagComponent v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
