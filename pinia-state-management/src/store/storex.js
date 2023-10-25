import {reactive,computed} from 'vue'

const state = reactive({
    count: 10,
    doubleCount: computed(() => state.count * 2),
    increment: () => {
        state.count++
    }
})

const counterStore = () => {
    return state
}

export {counterStore}