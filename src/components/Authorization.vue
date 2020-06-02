<template>
  <main class="form-main">

    <div class="form-in">

      <h1><a href="/">kholobok.biz</a></h1>

      <input type="text" v-model="login" placeholder="Логин">
      <input type="password" v-model="password" placeholder="Пароль">

      <button v-on:click="onSignIn()">Войти</button>

      <!-- <div class="error-form-login"></div> -->

      <a href="/regin">Регистрация</a>
      <a href="/logreset">Забыли пароль?</a>

    </div>

  </main>
</template>

<script>
  import {routers} from '~/router/';

  export default {
    name: 'Authorization',
    data: () => ({

      login: '',
      password: ''

    }),
    async created() {
      // console.log(routers);
    },
    computed:{
      
    },
    methods: {
      onSignIn () {
        const {login, password} = this;

        this.$store.dispatch('USER_LOGIN', { login, password }).then((response) => {
          console.log(response);

          this.$store.dispatch('setMessages', { title: '277'});
          this.$store.dispatch('setMessages', { title: '278'});
          // this.$router.push('/');
        });

      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "~/assets/scss/LoginForm";
</style>
