<template>
  <div id="app">
    <messages></messages>
  
    <router-view>
      <template v-slot:menu>
        <Menu></Menu>
      </template>
      <template v-slot:header>
        <Header></Header>
      </template>
    </router-view>

  </div>
</template>

<script>
  import Messages from '~/components/CompositeBlocks/Messages';
  import Header from '~/components/CompositeBlocks/Header';
  import Menu from '~/components/CompositeBlocks/Menu';

  export default {
    name: 'App',
    components: {
      Messages,
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






