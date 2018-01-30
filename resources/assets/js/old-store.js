export default {
    state: {
        count: 0
    },

    getters: {
        sqrt(state) {
            return Math.sqrt(state.count)
        }
    },

    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },

    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 3000)
        }
    }
}