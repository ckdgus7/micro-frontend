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
        "./counter": "./src/main.js",
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
    vue({
      template: {
        compilerOptions: {
          // 대시(-)가 포함된 모든 태그를 커스텀 엘리먼트로 처리
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
