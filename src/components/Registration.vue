<template>
    <div>
        <main class="form-main">

            <div class="form-in">
                <h1><a href="/">kholobok.biz</a></h1>
                <p>Регистрация</p>

                <input id="name" type="text" class="form-control" name="login" value="" placeholder="Логин">
                <input id="email" type="email" class="form-control" name="email" value="" placeholder="E-mail">
                <input id="password" type="password" class="form-control" name="password" placeholder="Пароль">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Повторите пароль">
                
                <!-- <strong>{{ $errors->first('password_confirmation') }}</strong> -->

                <button v-on:click="onRegistr()">Зарегистрироваться</button>

                <a href="/login">Войти</a>
            </div>

        </main>
    </div>
</template>

<script>
  export default {
    name: 'Registration',
    data: () => ({
      userName: '',
      password: '',
    }),
    methods: {
      onRegistr(){
        this.requestApi({url: 'oauth/exits'})
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "~/assets/scss/LoginForm";
</style>