
export default {
    name: 'error',
    path: '/error',
    component: () => import('@/layouts/admin.vue'),
    meta: { menu: { title: '错误页面', icon: 'Caution' }},
    children: [
        {
            name: 'error.404',
            path: '404',
            component: () => import("@/views/errors/404.vue"),
            meta: { menu: { title: '404页面' }, auth: true },
        },
        {
            name: 'error.403',
            path: '403',
            component: () => import("@/views/errors/403.vue"),
            meta: { menu: { title: '403页面' }, auth: true },

        },
        {
            name: 'error.500',
            path: '500',
            component: () => import("@/views/errors/500.vue"),
            meta: { menu: { title: '500页面' }, auth: true },

        }
    ]
}  

