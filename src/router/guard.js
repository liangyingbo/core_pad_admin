
import utils from '@/utils'
import { CacheEnum } from "@/enum/cacheEnum"
import menuStore from "@/store/menuStore"

class Guard {
    constructor(router) { 
        this.router = router
    }
    
     forEach(to, from) {
        if (this.isLogin(to) === false) return { name: 'login' }
        if (this.isGuest(to) === false) return from
     }

    run() { this.router.beforeEach(this.forEach.bind(this)) }

    isLogin(route) {
        const state = Boolean(!route.meta.auth || (route.meta.auth && this.token()))
        if(!state){
            utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME,route.name)
        }
        return state
    }
    isGuest(route) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }

   token(){
        const token = utils.store.get(CacheEnum.TOKEN_NAME)?.token
        return token
    }
}

export default (router) => {
    new Guard(router).run()
}