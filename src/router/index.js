import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';
import autoload from './autoLoad';
import guard from './guard';
import user from '@/store/user';
const router = createRouter({
    history: createWebHashHistory(),
    routes : [...routes]
})

export async function setupRouter(app){
    const u = user()
    await u.getUserInfo()
    autoload(router)
    guard(router)  
    app.use(router)
}
console.log(router.getRoutes())

export default router;
