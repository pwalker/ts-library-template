import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  exports: true,
});
