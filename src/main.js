

import '~/assets/scss/Fonts.scss';
import '~/assets/scss/Forms.scss';
import '~/assets/scss/Display.scss';
import '~/assets/scss/Grid.scss';
import '~/assets/scss/index.scss';

import ElementUI from 'element-ui';
import TrendChart from "vue-trend-chart";
import VueClipboard from 'vue-clipboard2'
 
import Vue from 'vue';
import { mapActions } from 'vuex'

import App from '~/App';
import {router} from '~/router';
import store from '~/store';




Vue.use(TrendChart);
Vue.use(ElementUI);

// VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);


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