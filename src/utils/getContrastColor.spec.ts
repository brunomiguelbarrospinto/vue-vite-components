import { describe, it, expect } from "vitest";
import getContrastColor from "../utils/getContrastColor";

describe("Get contrast color", () => {
  it("getContrastColor passing hexadecimal | color", () => {
    expect(getContrastColor({ hexadecimal: "#000000" })).toBe("white");
    expect(getContrastColor({ color: "black" })).toBe("white");
    expect(getContrastColor({ color: "xxxxxx" })).toBe("black");
  });
});
