
export default function autoLoadRoutesByModule() {
    const moduleRoute = import.meta.glob('../module/*.js',{eager:true})
    const route = [] 
    Object.keys(moduleRoute).forEach(key =>{
        route.push(moduleRoute[key]?.default)
    })
    return route
}