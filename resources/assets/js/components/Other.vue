<template>
    <div class="container other">
        <h2 class="is-danger">{{ count }}</h2>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState(['count']),
    }
</script>
