import './assets/main.css'
import { initializeApp } from 'firebase/app';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKuZ4u_Ul7rm3Y7zwTmJW1XFNNuLsuqew",
    authDomain: "projeto2frontend2024.firebaseapp.com",
    databaseURL: "https://projeto2frontend2024-default-rtdb.firebaseio.com",
    projectId: "projeto2frontend2024",
    storageBucket: "projeto2frontend2024.appspot.com",
    messagingSenderId: "885448883960",
    appId: "1:885448883960:web:f2d460b9e9777fdd3a450d"
  };


const appVue = createApp(App)

const app = initializeApp(firebaseConfig);

appVue.use(createPinia())

appVue.use(router)

appVue.mount('#app')




