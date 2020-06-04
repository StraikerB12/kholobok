import axios from "axios";



export default {
    // namespaced: true,

    state: {
        token: '123',
        tokenRefresh: '',
        status: ''
    },
    getters: {
        
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
        },
        setTokenRefresh(state, payload){
            state.tokenRefresh = payload;
        },
        setStatus(state, payload){
            state.status = payload;
        }
    },

    actions: {
        userLogin: ({commit, dispatch}, user) => {


            return new Promise((resolve) => {

                dispatch('requestApi', {url: 'oauth/login', data: user})
                .then(({bearer_token, refresh_token, right}) => {

                    commit('setToken', bearer_token);
                    commit('setTokenRefresh', refresh_token);
                    commit('setStatus', right);

                    resolve();
                }).catch((error) => {
                    console.log(error);
                })

            });
            
        },

        resetToken: async ({state, dispatch, commit}) => {

            if(state.tokenRefresh != ''){
                const response = await dispatch('requestApi', {url: 'oauth/token', data: {token: state.tokenRefresh}});
                if(response.operation === false){
                    return false; 
                }
                commit('setToken', response.bearer_token);
                return true;
            }else{
                return false;
            }

        },

        isAuth: async ({state, dispatch}) => {
            if(state.token != ''){
                return await dispatch('resetToken');
            }else{
                return false;
            }
        }
    }
}