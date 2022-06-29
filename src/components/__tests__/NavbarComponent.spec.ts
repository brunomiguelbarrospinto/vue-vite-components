import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavbarComponent from "../common/NavbarComponent.vue";

describe("Navbar component", () => {
  it("renders navbar", () => {
    const wrapper = mount(NavbarComponent, {
      slots: {
        "left-section": "Left section",
        "right-section": "Right section",
      },
    });
    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.classes("navbar")).toBe(true);
    expect(wrapper.find("div.navbar__content").exists()).toBe(true);
  });
  it("renders navbar sticky", () => {
    const wrapper = mount(NavbarComponent, {
      slots: {
        "left-section": "Left section",
        "right-section": "Right section",
      },
      props: { isSticky: true },
    });
    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.classes("navbar--sticky")).toBe(true);
  });
});
