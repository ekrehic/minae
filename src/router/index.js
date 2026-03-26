import { createRouter, createWebHistory } from 'vue-router'
import ComingSoon from '@/views/ComingSoon.vue'

const routes = [
    { path: '/', component: ComingSoon }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
