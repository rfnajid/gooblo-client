import { createRouter, createWebHistory } from 'vue-router';
import { PublicRoutes } from './PublicRoutes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...PublicRoutes],
});

export default router;