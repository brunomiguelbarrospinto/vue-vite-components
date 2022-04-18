import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TagComponent from "../common/TagComponent.vue";

describe("Tag component", () => {
  it("renders text", () => {
    const wrapper = mount(TagComponent, {
      props: { text: "Tag component" },
    });
    expect(wrapper.text()).toContain("Tag component");
  });
  it("renders white text", () => {
    const wrapper = mount(TagComponent, {
      props: { text: "Tag", backgroundColor: "#000000" },
    });
    expect(wrapper.text()).toContain("Tag");
    expect(wrapper.find("button").classes("tag--white")).toBe(true);
  });
  it("renders black text", () => {
    const wrapper = mount(TagComponent, {
      props: { text: "Tag", backgroundColor: "#ffffff" },
    });
    expect(wrapper.text()).toContain("Tag");
    expect(wrapper.find("button").classes("tag--black")).toBe(true);
  });
});
