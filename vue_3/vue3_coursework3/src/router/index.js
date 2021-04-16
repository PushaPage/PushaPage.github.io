import { createRouter, createWebHistory } from 'vue-router';
import Tasks from '../views/Tasks.vue';
import Task from '../views/Task.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks,
    },
    {
        path: '/new',
        name: 'New',
        component: () => import(/* webpackChunkName: "about" */ '../views/New.vue'),
    },

    {
        path: '/task/:idStamp?',
        name: 'Task',
        component: Task,
        props: true,
    },

    { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

export default router;
