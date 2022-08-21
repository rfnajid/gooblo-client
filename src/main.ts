import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes';
import './index.css'

console.log('env', import.meta.env.MODE );

if(import.meta.env.PROD){
    console.log = () => { };
}

createApp(App)
    .use(routes)
    .mount('#app');