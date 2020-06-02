import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        messages: [{ title: '345'}, { title: '783'}, { title: '263'}]
    },
    getters: {
        messages: state => {
            return state.messages;
        } 
    },
    mutations: {
        setMessages: (state, payload) => {
            state.messages.push(payload);
        },
        delMessages: (state, payload) => {
            state.messages.splice(state.messages.indexOf(payload), 1);
        }
    },
    actions: {
        setMessages: ({commit}, payload) => {
            commit('setMessages', payload);
            setTimeout(() => {
                commit('delMessages');
            }, 6000);
        },
    },

    modules: {
        user
    },
    strict: true
});