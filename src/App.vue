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
  @import '~font-awesome/css/font-awesome.min.css';

  body *, body{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .messages-ui{
    font-family: 'Montserrat-Medium';
  }

  .content-site{
        width: 100%;

        overflow-x: hidden;

        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;

        font-family: 'Montserrat-Regular';
    }

    main{
        width: calc(100vw - 200px);

        
        background: #fff;

        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;

        overflow: hidden;
    }

    .main{
        padding: 0 10px;


        flex-grow: 10;

        display: flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;

        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;

    }

    .main__content{
        min-height: 0;

        display: flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;

        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;

        flex-grow: 10;
    }

    @media all and (min-width: 1440px) {
        main{
            width: calc(100vw - 300px);
        }

        .main{
            padding: 0 40px;
        }
    }

  
  
</style>
