import { RouteRecordRaw } from 'vue-router';
import HomePage from '../view/Home/index.vue';
import NotFoundPage from '../view/NotFound/index.vue';
import SearchPage from '../view/Search/index.vue'

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/404',
        name: 'NotFoundPage',
        component: NotFoundPage,
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: SearchPage,
    }
];
