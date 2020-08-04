<template>
  <header class="header">
    <div class="header__content">

      <h2 class="header__title">Kholobok.biz</h2>
      <ul class="header__menu">
        <li class="header__item"></li>
        <li class="header__item">
          <a class="header__item-name" href="/cabinet" title="Кабинет"><i class="lni-cog"></i></a> 
        </li>
        <li class="header__item"> 
          <a class="header__item-name" v-on:click.prevent="onSignOut()" href="#" title="Выход" style="transform: rotate(180deg)"><i class="lni-exit"></i></a> 
        </li>
      </ul>

    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Header',
    data: () => ({}),
    async created() {},
    computed:{
      // title(){ return this.$router.currentRoute.meta.title}
    },
    methods: {
      onSignOut () {
        this.userLogout().then(() => {
          this.$router.push({name: 'MainPage'});
        });
      },
      ...mapActions([
        'userLogout'
      ])
    }
  }
</script>

<style lang="scss" scoped>
    // 38cf99
    // 2fb887

    .header{
        padding: 25px 20px 25px 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        background: #181f39;
    }
    .header__content{
        // padding-bottom: 20px;
        display: flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
    }
    .header__title{
        flex-grow: 10;
        font-family: 'Montserrat-Bold';
        color: #fff;
        line-height: 30px;
        font-size: 28px;
    }
    .header__menu{
        list-style: none;
        display: flex;

        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch; 
    }
    .header__item{
        padding: 0 0 0 30px;
    }
    .header__item-name{
        color: #bcbcbc;
        width: 20px;
        height: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 22px;
        line-height: 34px;
        display: inline-block;
        transform-origin: 10px 15px;
    }
    .header__item-name:hover{
        color: #38cf99;
    }
</style>