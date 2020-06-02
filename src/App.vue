<template>
  <div id="app">
    <messages></messages>
    <router-view></router-view>
  </div>
</template>

<script>
  import Messages from '~/components/info/Messages';

  export default {
    name: 'App',
    components: {
      Messages
    },
    computed: {
      
    },
    async updated() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
    
  }
  *{
    box-sizing: border-box;
  }
  @import '~font-awesome/css/font-awesome.min.css';
</style>
