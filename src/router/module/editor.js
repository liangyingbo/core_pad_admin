
export default {
    name: 'editor',
    path: '/editor',
    component: () => import('@/layouts/admin.vue'),
    meta: { menu:{title: '编辑器', icon: 'FileEditing'} },
    children: [
        {
            name: 'editor/markdown',
            path: 'markdown',
            component: () => import("@/views/editor/markdown.vue"),
            meta: {menu:{title: 'markdown'} },
        },
        {
            name: 'editor/base',
            path: 'base',
            component: () => import("@/views/editor/base.vue"),
            meta: { menu:{title: '富文本编辑器'} }

        },
    ]
}

