<template>
  <main class="form-main">

    <form action="" method="post" class="form-in">

      <h1><a href="/">kholobok.biz</a></h1>

      <input type="text" name="login" id="login" value="" placeholder="Логин">
      <input type="password" name="password" id="password" placeholder="Пароль">

      <button>Войти</button>

      <!-- <div class="error-form-login"></div> -->

      <a href="/regin">Регистрация</a>
      <a href="/logreset">Забыли пароль?</a>

    </form>

  </main>
</template>

<script>
  import {routers} from '~/router/';

  export default {
    name: 'Authorization',
    data: () => ({

      username: '',
      password: '',
      dictionary: {
        custom: {
          username: {
            required: () => 'Поле не должно быть пустым',
            email: () => 'Неверный email'
          },
          password: {
            required: () => 'Поле не должно быть пустым',
            min: () => 'Поле должно содержать минимум 6 символов'
          }
        }
      }

    }),
    async created() {
      console.log(routers);
    },
    computed:{
      
    },
    methods: {
      onSignIn () {
        const {username, password} = this;

        this.$store.dispatch('AUTH_LOGIN', { username, password }).then(() => {
          this.$router.push('/');
        });

      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "~/assets/scss/LoginForm";
</style>
