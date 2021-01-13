<template>
  <div id="app">
  
    <router-view>
      <template v-slot:menu>
        <Menu></Menu>
      </template>
      <template v-slot:header>
        <Header></Header>
      </template>
      <template v-slot:messages>
        <SystemMessages></SystemMessages>
      </template>
    </router-view>

  </div>
</template>

<script>
  import SystemMessages from '~/components/CompositeBlocks/SystemMessages';
  import Header from '~/components/CompositeBlocks/Header';
  import Menu from '~/components/CompositeBlocks/Menu';

  export default {
    name: 'App',
    components: {
      SystemMessages,
      Header,
      Menu
    },
    created(){
      console.log(this.$router.currentRoute);
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss">
  @import '~font-awesome/css/font-awesome.min.css';
</style>






