
const signIn = (login, password) => {
    return {login, password};
}




export default {
    // namespaced: true,

    state: {
        token: '',
        tokenRefresh: '',
        status: 'user'
    },
    getters: {
        status: state => {
            return state.status;
        } 
    },
    mutations: {},

    actions: {
        USER_LOGIN: ({commit}, {login, password}) => {

            return {login, password};

            // return new Promise((resolve, reject) => {

            //     signIn(user.login, user.password).then(response => {
            //         resolve(response);
            //     }).catch(error => {
            //         reject(error);
            //     });
            // });
            
        },
    }
}