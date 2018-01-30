<template>
    <li class="todo" :class="{ complete: todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
        <label>{{ todo.body }}</label>
        <button class="btn btn-danger btn-sm" style="margin-left: 1rem;" @click="deleteTodo(todo)">Delete</button>
    </li>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        props: ['todo'],

        methods: mapMutations(['deleteTodo', 'toggleTodo'])
    }
</script>

<style>
    .todo.complete {
        color: green;
    }
</style>
