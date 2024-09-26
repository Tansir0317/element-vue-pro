//core
import { createApp } from 'vue'
import 'virtual:svg-icons-register';
import {setupStore} from './store';
import App from './App.vue'

// css
import './style.css'
import 'virtual:uno.css'

const app = createApp(App);

//注册 store
setupStore(app);

app.mount('#app')
