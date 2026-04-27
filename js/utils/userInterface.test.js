import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/login";
    const currentPath = "/login";

    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";

    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns true when current path includes href", () => {
    const href = "/venue";
    const currentPath = "/venue/details";

    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns false when current path does not match", () => {
    const href = "/login";
    const currentPath = "/register";

    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
