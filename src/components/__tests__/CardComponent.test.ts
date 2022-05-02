import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CardComponent from "../common/CardComponent.vue";

describe("Card", () => {
  it("render card", () => {
    const wrapper = mount(CardComponent, {
      slots: {
        default: "Card",
      },
    });
    expect(wrapper.html()).toContain("Card");
    expect(wrapper.find("div").classes("card")).toBe(true);
  });
});
