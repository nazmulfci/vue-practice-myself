import {defineStore} from 'pinia'

const counterStore = defineStore('counter', {
    state: () => ({
        count: 10
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

export {counterStore}