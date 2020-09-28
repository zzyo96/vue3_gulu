import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:HelloWorld}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')  
