<template>
    <div class="container">
        <h1>{{ count }}</h1>
        <h2>Sqaure root of the number is {{ sqrt }}</h2>
        <p>
            <button @click="increment" class="btn btn-primary btn-lg">Increment</button>
            <button @click="decrement" class="btn btn-primary btn-lg">Decrement</button>
        </p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

    export default {

        computed: {
            ...mapState(['count']),
            ...mapGetters(['sqrt'])
        },

        methods: {
            ...mapMutations([
                'decrement'
            ]),
            ...mapActions([
                'increment'
            ])
        }
    }
</script>
