import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});

// I did 'npm install --savedev jsdom' instead of 'npm install -D jsdom @vitest/browser' because the latter took very long with opening browser windows and gave errors. Not sure if this is a good workaround, but it seems to work the same (ish)! Any feedback is welcome.
