import { createApp } from 'vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/index.css'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')