import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

import user from './modules/user';
import {router} from '~/router';

const siteUrl = 'https://kholobok.biz/';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        messages: [{ title: '345'}, { title: '783'}, { title: '263'}],
        routerPosition: ''
    },
    getters: {},
    mutations: {
        setRouterPosition: (state, payload) =>{
            state.roterPosition = payload;
        },
        setMessages: (state, payload) => {
            state.messages.push(payload);
        },
        delMessages: (state, payload) => {
            state.messages.splice(state.messages.indexOf(payload), 1);
        }
    },
    actions: {
        setMessages: ({commit}, payload) => {
            payload.forEach( item => {
                commit('setMessages', item);
                setTimeout(() => {
                    commit('delMessages', item);
                }, 6000);
            });
        },


        requestApi: ({state, dispatch}, {url, data = null}) => {

            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;

                axios({url: siteUrl + url, data, method: 'POST' })
                .then( async ({data: {data, messages}}) => {

                    if( messages[0] && messages[0].code == 412){

                        if(await dispatch('resetToken')){
                            router.go();
                        }else{
                            router.push({name: 'Authorization'});
                        }
                    }
                    
                    dispatch('setMessages', messages);
                    if(data.operation !== false){
                        resolve(data);
                    }else{
                        reject(data);
                    }
                    
                })
                .catch((error) => {
                    dispatch('setMessages', [error]);
                })
            });

        }
    },

    modules: {
        user
    },
    strict: true,
    plugins: [createPersistedState()]
});