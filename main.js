const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            productLimit: false
        }
    },
    methods: {
        updateCart(payload) {
            
            // console.log(this.cart.length < payload.quantity)
            // console.log(this.cart.filter(id => id === payload.id).length < payload.quantity)
            
            if(this.cart.filter(id => id === payload.id).length >= payload.quantity) {
                this.productLimit = true
                return
            }
            this.productLimit = false
            this.cart.push(payload.id)
            console.log(this.cart.filter(id => id === payload.id).length, payload.id, payload.quantity)
        }
    }
})
