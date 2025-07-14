import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8001,
  },
  plugins: [
    federation({
      filename: "remoteEntry.js",
      name: "remote",
      exposes: {
        "./counter": "./src/external-main.js",
        "./reactHelloWorld": "./src/register.js",
        "./editor": "./src/editor-registry.js",
        "./grid": "./src/grid-registry.js",
      },
      remotes: {},
      shared: {
        vue: {
          singleton: true,
        },
        pinia: {
          singleton: true,
        },
        "vue-router": {
          singleton: true,
        },
        "@module-federation/bridge-vue3": {
          singleton: true,
        },
      },
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
