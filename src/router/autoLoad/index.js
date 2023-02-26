import user from "@/store/user";
 import autoLoadRoutesByModule from "./module";
import getRoutes from './view'


let routes = (import.meta.env.VITE_AUTOLOAD === true || import.meta.env.VITE_AUTOLOAD === 'true') ? getRoutes() : autoLoadRoutesByModule()
async function autoload(router) {
    const useStore = user()
    const permissions = useStore.info?.permissions
     routes = routes.map(r => {
        r.children = r.children?.filter(route => {
            return route.meta?.permissions ? permissions?.includes(route.meta?.permissions) : true;
          
        })
     return r
    })
   routes.forEach(route =>{
    router.addRoute(route)
   })
}
export default autoload