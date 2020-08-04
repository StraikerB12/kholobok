<template>
    
    <div class="page">
        <div class="title">Error</div>
        <div class="nom">404</div>
        <div class="title">Страница не найдена</div>
    </div>
</template>

<script>
  export default {
    name: 'Error404Page',
    data: () => ({
      
    }),
    async created() {
      
    },
    computed:{

    },
    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
    .page {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    .nom{
        text-align: center;
        font-size: 150px;
        line-height: 140px;
        font-family: 'ProximaNova-Black';
        letter-spacing: 10px;
    }
    .title{
        text-align: center;
        font-size: 20px;
        font-family: 'ProximaNova-Light';
        letter-spacing: 10px;
    }
</style>