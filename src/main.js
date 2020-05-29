
import '~/assets/scss/Fonts.scss';

import Vue from 'vue';
import App from '~/App';

import router from '~/router';
import store from '~/store';

(async () => {

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