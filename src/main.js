import Vue from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})

app.mount('#app')