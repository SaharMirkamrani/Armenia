import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import { amdToUsdStr, amdWithUsd } from './utils/currency'

const app = createApp(App)
app.use(router)

// Make the dram→dollar helpers available in every template:
//   {{ $toUsd(6000) }}      → "~$15"
//   {{ $amdWithUsd(6000) }} → "6,000 AMD (~$15)"
app.config.globalProperties.$toUsd = amdToUsdStr
app.config.globalProperties.$amdWithUsd = amdWithUsd

app.mount('#app')
