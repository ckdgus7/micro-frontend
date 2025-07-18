import 'ckeditor5/ckeditor5.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './assets/main.css';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
