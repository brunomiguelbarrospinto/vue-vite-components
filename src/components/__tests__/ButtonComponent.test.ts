import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonComponent, { sizes, colors } from "../common/ButtonComponent.vue";

describe("Button", () => {
  it("renders text", () => {
    const wrapper = mount(ButtonComponent, { props: { text: "Button" } });
    expect(wrapper.text()).toContain("Button");
  });

  it("check sizes", () => {
    expect(sizes).toEqual(["xs", "sm", "md", "lg", "xl"]);
  });

  it("check colors", () => {
    expect(colors).toEqual(["default", "primary"]);
  });

  it("renders disabled button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { isDisabled: true },
    });
    expect(wrapper.find("button").element.disabled).toBe(true);
  });

  it("renders loading button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { isLoading: true },
    });
    expect(wrapper.find("button").classes("button--loading")).toBe(true);
    expect(wrapper.find("button svg").exists()).toBe(true);
    expect(wrapper.find("button svg").classes("loading-svg")).toBe(true);
  });

  it("renders outline button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { isOutline: true },
    });
    expect(wrapper.find("button").classes("button--outline")).toBe(true);
  });
  it("renders text button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { isText: true },
    });
    expect(wrapper.find("button").classes("button--text")).toBe(true);
  });
  it("renders circle button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { isCircle: true },
    });
    expect(wrapper.find("button").classes("button--circle")).toBe(true);
  });
  it("renders xs button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { size: "xs" },
    });
    expect(wrapper.find("button").classes("button--xs")).toBe(true);
  });
  it("renders sm button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { size: "sm" },
    });
    expect(wrapper.find("button").classes("button--sm")).toBe(true);
  });
  it("renders md button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { size: "md" },
    });
    expect(wrapper.find("button").classes("button--md")).toBe(true);
  });
  it("renders lg button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { size: "lg" },
    });
    expect(wrapper.find("button").classes("button--lg")).toBe(true);
  });
  it("renders xl button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { size: "xl" },
    });
    expect(wrapper.find("button").classes("button--xl")).toBe(true);
  });
  it("renders default color button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { color: "default" },
    });
    expect(wrapper.find("button").classes("button--default")).toBe(true);
  });
  it("renders primary color button", () => {
    const wrapper = mount(ButtonComponent, {
      props: { color: "primary" },
    });
    expect(wrapper.find("button").classes("button--primary")).toBe(true);
  });

  it("renders button with left icon", () => {
    const wrapper = mount(ButtonComponent, {
      props: { leftIcon: "AcademicCapIcon" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("svg").classes("button__icon")).toBe(true);
    });
  });
  it("renders button with right icon", () => {
    const wrapper = mount(ButtonComponent, {
      props: { rightIcon: "AcademicCapIcon" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("svg").classes("button__icon")).toBe(true);
    });
  });
});
