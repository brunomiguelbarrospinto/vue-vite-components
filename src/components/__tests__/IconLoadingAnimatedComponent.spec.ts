import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IconLoadingAnimatedComponent from "../common/IconLoadingAnimatedComponent.vue";

describe("Icon loading animated component", () => {
  it("renders icon", () => {
    const wrapper = mount(IconLoadingAnimatedComponent);
    expect(wrapper.find("svg").exists()).toBe(true);
    expect(wrapper.find("circle").exists()).toBe(true);
    expect(wrapper.find("path").exists()).toBe(true);
    expect(wrapper.classes("loading-svg")).toBe(true);
  });
});
