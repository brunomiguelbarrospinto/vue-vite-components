import NavbarComponent from "../components/common/NavbarComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/NavbarComponent",
  component: NavbarComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isSticky: { control: "boolean", defaultValue: false },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NavbarComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<NavbarComponent v-bind="args">
                <template #left-section>
                  Left section 
                </template>
                <template #right-section>
                  Right section 
                </template>
            </NavbarComponent>`,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
