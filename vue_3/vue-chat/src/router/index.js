import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'EmptyChat',
        component: () => import(/* webpackChunkName: "dialog" */ '../views/AppEmptyChat.vue'),
    },
    {
        path: '/dialog/:userId',
        name: 'Dialog',
        component: () => import(/* webpackChunkName: "dialog" */ '../views/AppDialog.vue'),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log('from:' + from);
//     const requireAuth = to.meta.auth;

//     if (requireAuth && store.getters['auth/isAuthenticated']) {
//         next();
//     } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
//         next('/auth?message=auth');
//     } else {
//         next();
//     }
// });

export default router;
