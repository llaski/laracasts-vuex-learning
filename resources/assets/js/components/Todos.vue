<template>
    <div>
        <h1>Todos</h1>

        <div class="level">
            <button class="btn btn-primary mb-1" @click="completeAll" v-show="!allTodosCompleted">Complete All</button>
        </div>

        <todo v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>

        <p>
            <input type="text" placeholder="Do this..." @keyup.enter="addTodo">
        </p>
    </div>
</template>

<script>
    import Todo from './Todo'
    import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        components: { Todo },

        computed: {
            ...mapState(['todos']),
            ...mapGetters(['allTodosCompleted'])
        },

        methods: {
            ...mapMutations(['completeAll']),

            addTodo(evt) {
                const body = evt.target.value

                this.$store.commit('addTodo', body)

                evt.target.value = ''
            }
        }
    }
</script>
