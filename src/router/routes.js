
 const routes = [
    {
        path:'/',
        redirect:"/home",
        component:() => import("@/views/home.vue"),
        meta:{auth:true}
    },
    {
        path:'/home',
        name:'home',
        component:() => import("@/views/home.vue"),
        meta:{auth:true}
    },
    {
        path:'/login',
        name:'login',
        component:() => import("@/views/auth/login.vue"),
        meta:{guest:true}
    },
    {
        path:'/article',
        name:'article',
        component:() => import("@/views/article.vue"),
     },
    {
        path:'/:any(.*)',

        name:'NotFound',
        component:() => import("@/views/errors/404.vue")
    }
]

export default routes