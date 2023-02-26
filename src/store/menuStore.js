import { CacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import { defineStore } from 'pinia' 

export default defineStore('menu', {
    state: () => {
        return {
            menus: [],
            historyMenus: []
        }
    },
    actions: {
        init() {
            this.getMenusByRoute()
            this.historyMenus = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
        },
        addHistoryMenu(route) {
            // console.log(route)
            if (!route.meta.menu) return;
            const menu = { ...route.meta.menu, route: route.name }
            const isHas = this.historyMenus.some(menu => menu.route === route.name)
            if (!isHas) this.historyMenus.unshift(menu)
            if (this.historyMenus.length > 10) this.historyMenus.pop()
            utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenus)

        },
        getMenusByRoute() {
            const router = useRouter()
            this.menus = router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
                let menu = { ...route.meta.menu } 
                menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                    return { ...route.meta?.menu, route: route.name }
                })
                return menu
            }).filter(menu => menu.children?.length)
        }
    }
})

