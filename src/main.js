


import '~/assets/scss/Fonts.scss';
import '~/assets/scss/Forms.scss';
import '~/assets/scss/Display.scss';
import '~/assets/scss/index.scss';

import Vue from 'vue';
import App from '~/App';

import {router} from '~/router';
import store from '~/store';

import { mapActions } from 'vuex'


(async () => {

  Vue.mixin({
    methods: {
      getMethod(method, data){
        return this.requestApi({ url: 'front/' + method, data, method: 'GET'});
      },
      postMethod(method, data){
        return this.requestApi({ url: 'front/' + method, data});
      },

      ...mapActions([
        'requestApi',
        'setMessages'
      ])
    }
  });

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),

    async created() {
      
    },
    mounted() {
      
    },
  });

})();