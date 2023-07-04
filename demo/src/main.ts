import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
// 在main.ts中启用pinia
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPersist);
createApp(App).use(router).use(Antd).use(pinia).mount("#app");
