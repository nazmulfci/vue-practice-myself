import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

// const counterStore = defineStore('counter', {
//     state: () => ({
//         count: 10
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

const counterStore = defineStore('counter',() => {
    const count = ref(10);
    const doubleCount = computed(() => count.value * 2);
    const increment = () => {
        count.value++
    }
    return {count,doubleCount,increment}
})

export {counterStore}