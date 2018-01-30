
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

import Vue from 'vue'
import store from './store/index'
import Vuex from 'vuex'

// Vue.component('counter', require('./components/Counter.vue'));
// Vue.component('other', require('./components/Other.vue'));
//
Vue.component('todos', require('./components/Todos.vue'));

const app = new Vue({
    el: '#app',

    store
});
