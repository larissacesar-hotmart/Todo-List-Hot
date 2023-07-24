import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 200,
        todoList: [],
        completedList: [],

    },
    getters: {
        listaConcluidos(state) {
            return state.completedList;
        },
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, payload) {
            state.count += payload.amount
        },
        addTodo(state, valor) {
            state.todoList.push(valor);
        },
        removeTodo(state, { index, context }) {
            state[context].splice(index, 1);
        },
        completeTask(state, index) {
            const completedTask = state.todoList.splice(index, 1)[0];
            state.completedList.push(completedTask);
        },
        desmarcarTask(state, index) {
            const desmarcatedTask = state.completedList.splice(index, 1)[0];
            state.todoList.push(desmarcatedTask);
        },

    },
    

    actions: {
    completeTask({ commit }, index) {
        commit('completeTask', index)
    },
    desmarcarTask({ commit }, index) {
        commit('desmarcarTask', index)
    }
    /* getList({ commit }) {
        return new Promise((resolve) => setTimeout(() => {
            resolve(commit("addTodo", {}))
        }, 5000))
    },*/
}
});

export default store;
