
import Vue from 'vue';
import App from '~/App';

import router from '~/router';






Array.prototype.getFirst = function() {
  return this[0];
};

Array.prototype.getSecond = function() {
  return this[1];
};



(async () => {

  new Vue({
    el: '#app',
    router,
    render: h => h(App),
    async created() {
      
    },
    mounted() {
      
    },
  });

})();