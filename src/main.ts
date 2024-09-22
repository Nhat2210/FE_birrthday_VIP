import { createApp } from 'vue'
import { createPinia } from 'pinia'
import copy from 'v-copy';
import App from './App.vue'
import router from './router'
import { setupDirectives } from '@plugins';
import '@styles/index.scss'
const app = createApp(App)

setupDirectives(app)
app.use(createPinia())
app.use(router)
app.use(copy);


// su dung thư vien animation
import 'aos/dist/aos.css'
import AOS from 'aos'

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
AOS.init({
    duration: 1200,
    once:true
});

// su dung capcha

app.mount('#app')


