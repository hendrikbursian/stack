import './assets/tailwind.css' // Must be on top

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

createApp(App)
  .use(store)
  .mount('#app')
