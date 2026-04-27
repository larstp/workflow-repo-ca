import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Lars" };
    saveUser(user);

    const result = getUsername();

    expect(result).toBe("Lars");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBeNull();
  });
});
