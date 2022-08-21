import { RouteRecordRaw } from 'vue-router';
import HomePage from '../view/Home/index.vue';
import NotFoundPage from '../view/NotFound/index.vue';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/404',
        name: 'NotFoundPage',
        component: NotFoundPage,
    },
    // {
    //     path: '/search',
    //     name: 'Search',
    //     component: SearchPage,
    // }
];
