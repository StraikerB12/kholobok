
const signIn = (login, password) => {
    return {login, password};
}

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        ['USER_LOGIN']: ({commit}, user) => {

            commit(CLEAR_ERROR);

            return new Promise((resolve, reject) => {
                commit('SET_LOADING', true);

                signIn(user.login, user.password).then(response => {

                    commit('SET_LOADING', false);
                    dispatch('USER_LOGIN');
                    resolve(response);

                }).catch(error => {
                    commit('SET_LOADING', false);
                    commit('SET_ERROR', error);
                    reject(error);
                });
            });

            
        },
    }
}