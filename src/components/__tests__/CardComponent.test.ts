import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CardComponent from "../common/CardComponent.vue";

describe("Card", () => {
  it("render card with default slot", () => {
    const wrapper = mount(CardComponent, {
      slots: {
        default: "Card",
      },
    });
    expect(wrapper.html()).toContain("Card");
    expect(wrapper.find("div").classes("card")).toBe(true);
  });
  it("render card with title, subtitle and extra-info slot", () => {
    const wrapper = mount(CardComponent, {
      slots: {
        title: "Title",
        subtitle: "Subtitle",
        "extra-info": "Extra Info",
        content: "Content",
      },
    });
    expect(wrapper.html()).toContain("Title");
    expect(wrapper.html()).toContain("Subtitle");
    expect(wrapper.html()).toContain("Extra Info");
    expect(wrapper.html()).toContain("Content");
  });
});
