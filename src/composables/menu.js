 import { ref } from "vue";
import router from '@/router'
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
  class Menu {  
    menus = ref([])
    historymenus = ref([])
    close = ref(utils.store.get(CacheEnum.MENU_IS_CLOSE)?? false)
    route = ref(null)
    constructor() {
        this.menus.value = this.getMenusByRoute()
        this.historymenus.value = this.getHistoryMenu()
    }
    getHistoryMenu(){
        const routes = [] 
        router.getRoutes().forEach(route => { routes.push(route) })
        const historyStore = utils.store.get(CacheEnum.HISTORY_MENU) ?? []

        return historyStore.filter((h) =>{ return routes.some(r => r.name === h.route) })
    }
    getMenusByRoute() {
        return router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
            let menu = { ...route.meta.menu } 
            menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                return { ...route.meta?.menu, route: route.name }
            }) 
            return menu
        }).filter(menu => menu.children?.length) 
    }

     toggleMenu(menu) {
        this.menus.value.forEach(m => {
            // console.log(m)
            m.isClick = false;
        })
        menu.isClick = true;
    }

    setCurrentMenu(route) {
        this.menus.value.forEach(p => {
            p.isClick = false;
            p.children?.forEach(c => {
                c.isClick = false
                if (c.route === route.name) {
                    c.isClick = true;
                    p.isClick = true;
                }
            })
        })
    }

    toggleStateClose() {
        this.close.value = !this.close.value
        utils.store.set(CacheEnum.MENU_IS_CLOSE,this.close.value)
    }

    addHistoryMenu(route) {
        // console.log(route)
        if (!route.meta.menu) return;
        this.route.value = route
        const menu = { ...route.meta.menu, route: route.name }
        const isHas = this.historymenus.value.some(menu => menu.route === route.name)
        if (!isHas) this.historymenus.value.unshift(menu)
        if (this.historymenus.value.length > 10) this.historymenus.value.pop()
        utils.store.set(CacheEnum.HISTORY_MENU, this.historymenus.value)

    }  

    removeHistoriyMenu(m){
        this.historymenus.value = this.historymenus.value.filter(menu =>menu.route !== m.route)
        utils.store.set(CacheEnum.HISTORY_MENU, this.historymenus.value)

    }

}
export default new Menu()