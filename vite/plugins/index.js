import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { setupMockPlugin } from './mock'
import  autoImport  from './autoImport'

export default function setupPlugins(isBuild, env) {
    const plugins = [vue(),vueJsx()]

    
    autoImport(plugins)
    plugins.push(setupMockPlugin(isBuild))

    return plugins
}


