import { createApp } from 'vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import '@/styles/global.scss'
import 'animate.css'
import App from './App.vue'


console.log('7777777777777')
async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()




