<template>
  <div id="app">
    <messages></messages>
    
    <router-view>

      <template v-slot:header>
        <Header></Header>
      </template>

      <template v-slot:menu>
        <Menu></Menu>
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
    computed: {},
    methods: {}
  }
</script>

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
  }
  body *{
    box-sizing: border-box;
  }
  @import '~font-awesome/css/font-awesome.min.css';
</style>
