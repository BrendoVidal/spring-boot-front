//Criação do App com o Vue, adicionando as dependências para serem usadas na nossa aplicação
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./helpers";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// setup fake backend
import { fakeBackend } from "./helpers";
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(Antd);
app.use(router);

app.mount("#app");
