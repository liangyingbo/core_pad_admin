import { login } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router';
import user from '@/store/user';
import utils from '@/utils'

export default {
    async login(value) {
        const 
          { data :{data : {token}}}
           = await login(value);
          utils.store.set(CacheEnum.TOKEN_NAME,{token},10000)
          user().getUserInfo()
          const name = utils.store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
           router.push({name:name})
    },
    logout() {
        utils.store.remove(CacheEnum.TOKEN_NAME)
        router.push('/')
        user().info = null
    }
}  