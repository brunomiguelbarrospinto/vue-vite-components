import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Icon, { types, sizes, solidIconNames } from "../common/Icon.vue";
import * as SolidIcons from "@heroicons/vue/solid";

describe("Icon", () => {
  it("renders icon", () => {
    const wrapper = mount(Icon, { props: { name: "AcademicCapIcon" } });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("svg").exists()).toBe(true);
    });
  });
  it("check types", () => {
    expect(types).toEqual(["solid", "outline"]);
  });
  it("check sizes", () => {
    expect(sizes).toEqual(["xs", "sm", "md", "lg", "xl"]);
  });
  it("check icon names", () => {
    expect(Object.keys(SolidIcons)).toEqual(solidIconNames);
  });
  it("renders solid icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", type: "solid" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("svg").exists()).toBe(true);
    });
  });
  it("renders outline icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", type: "outline" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("svg").exists()).toBe(true);
    });
  });
  it("renders xs icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", size: "xs" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes("svg--xs")).toBe(true);
    });
  });
  it("renders sm icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", size: "sm" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes("svg--sm")).toBe(true);
    });
  });
  it("renders md icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", size: "md" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes("svg--md")).toBe(true);
    });
  });
  it("renders lg icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", size: "lg" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes("svg--lg")).toBe(true);
    });
  });
  it("renders xl icon", () => {
    const wrapper = mount(Icon, {
      props: { name: "AcademicCapIcon", size: "xl" },
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes("svg--xl")).toBe(true);
    });
  });
});
