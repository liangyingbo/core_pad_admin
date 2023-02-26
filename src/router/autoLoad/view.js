
const layout = import.meta.glob('../../layouts/*vue')
const children = import.meta.glob('../../views/**/*.vue')

function getRoutes() {
    const layoutRoutes = []
    Object.entries(layout).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}


// 根据布局路由匹配子路由
function getChildrenRoutes(layoutRoute) {
    const routes = []
    Object.entries(children).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file, module) {
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        name: name.replace('/', '.'),
        path: `/${name}`,
        component: module
    }
    return route
}
export default getRoutes