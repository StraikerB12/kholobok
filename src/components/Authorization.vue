<template>
  <div class="form-main">
    <div class="form-in">
      <h1><a href="/">kholobok.biz</a></h1>
      <input type="text" v-model="login" placeholder="Логин">
      <input type="password" v-model="password" placeholder="Пароль">
      <button v-on:click="onSignIn()">Войти</button>
      <a href="/regin">Регистрация</a>
      <a href="/logreset">Забыли пароль?</a>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  

  export default {
    name: 'Authorization',
    data: () => ({

      login: '',
      password: ''

    }),
    async created() {
      console.log(this.token);
    },
    computed:{
      token(){
        return this.$store.state.user.tokenRefresh
      }
    },
    methods: {
      onSignIn () {
        const {login, password} = this;
        this.userLogin({login, password}).then(() => {
          this.$router.go();
        });
      },

      ...mapActions([
        'userLogin'
      ])
    }
  }
</script>

<style lang='scss' scoped>
  @import "~/assets/scss/LoginForm";
</style>
