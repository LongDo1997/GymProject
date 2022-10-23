import { createApp } from 'vue'
import { createStore } from 'vuex'

const store =  createStore({
    
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)