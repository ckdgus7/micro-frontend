import "./assets/main.css";

import { createBridgeComponent } from "@module-federation/bridge-vue3";
import App from "./App.vue";
import './register';
import router from "./router";
export default createBridgeComponent({
  rootComponent: App,
  appOptions: () => {
    // Optional: adding a plugin to the new Vue instance on the host application side

    return { router };
  },
});
