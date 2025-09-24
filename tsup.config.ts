import { defineConfig } from "tsup";

export default defineConfig([
  // CommonJS build
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    dts: true,
    minify: true,
    clean: true,
    outDir: "dist/cjs"
  },
  // ESM build
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: false,      // already generated in CJS build
    minify: true,
    clean: false,
    outDir: "dist/esm"
  }
]);
