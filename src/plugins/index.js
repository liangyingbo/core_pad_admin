 import setupElementPlus from "./elementPlusUI";
import setupPinia from "./pinia";
import { setupTailWindCssPlugin } from "./tailwindcss";
import setupIconPark from "./iconpark";

export function setupPlugins(app) {
    // autoRegisterComponent(app)
    setupTailWindCssPlugin()
    setupElementPlus(app)
    setupPinia(app)
    setupIconPark(app)
}



// function autoRegisterComponent(app: App) {
//     const components:any = import.meta.glob('../components/form/*.vue', { eager: true })
//     Object.keys(components).forEach(key => {
//         const name = key.split('/').pop()?.split('.')[0] as string
//         const module = components[key]?.default
//         app.component(name,module)
//     })
// }