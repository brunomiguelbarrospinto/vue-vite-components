import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InteractiveElementComponent from "../common/InteractiveElementComponent.vue";

describe("InteractiveElementComponent", () => {
  it("renders router-link", () => {
    const wrapper = mount(InteractiveElementComponent, {
      props: { to: "home" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("router-link").exists()).toBe(true);
    });
  });
  it("renders a", () => {
    const wrapper = mount(InteractiveElementComponent, {
      props: { href: "https://vitest.dev" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("a").exists()).toBe(true);
    });
  });
  it("renders a with title", () => {
    const wrapper = mount(InteractiveElementComponent, {
      props: { href: "https://vitest.dev", title: "https://vitest.dev" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("a").exists()).toBe(true);
      expect(wrapper.find("a").attributes("title")).toBe("https://vitest.dev");
    });
  });
  it("renders button with slot", () => {
    const wrapper = mount(InteractiveElementComponent, {
      slots: {
        default: "https://vitest.dev",
      },
      props: { title: "https://vitest.dev" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("button").exists()).toBe(true);
      expect(wrapper.find("button").attributes("title")).toBe(
        "https://vitest.dev"
      );
      expect(wrapper.text()).toBe("https://vitest.dev");
    });
  });
});
