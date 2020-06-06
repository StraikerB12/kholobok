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
    messages: [],
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
      if( !Array.isArray(payload) ){payload = [payload]}
      payload.forEach( item => {
        commit('setMessages', item);
        setTimeout(() => {
          commit('delMessages', item);
        }, 6000);
      });
    },


    requestApi: ({state, dispatch, commit}, {url, data = null, method = 'POST'}) => {
      console.log('Использование requestApi');

      return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;

        axios({url: siteUrl + url, data, method})
        .then( async ({data: {data, messages}}) => {

          // console.log(data, messages);
          dispatch('setMessages', messages);
          if( messages[0] && messages[0].code == 412){
            
            if(await dispatch('resetToken')){
              router.go();
            }else{
              commit('setToken', '');
              commit('setTokenRefresh', '');
              commit('setStatus', '');
              router.push({name: 'Authorization'});
              return;
            }
          }
          
          if(data && data.operation === false){
            reject(data); 
          }else{
            resolve(data);
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