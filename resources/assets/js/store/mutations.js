export const state = {
    // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    todos: [
        { body: 'Going to the store', done: false },
        { body: 'Going to the five iron golf', done: true },
        { body: 'Going to the soccer', done: false },
    ]
}

export const getters = {
    allTodosCompleted({ todos }) {
        return todos.every(todo => todo.done)
    }
}

export const mutations = {

    addTodo({ todos }, body) {
        todos.push({
            body,
            done: false
        })
    },

    completeAll({ todos }) {
        todos.forEach(todo => todo.done = true)
    },

    toggleTodo(state, todo) {
        todo.done = !todo.done
    },

    deleteTodo({ todos }, todo) {
        todos.splice(todos.indexOf(todo), 1)
    }
}