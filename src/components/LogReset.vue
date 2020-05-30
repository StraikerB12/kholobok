<template>
    <main class="form-main">

        <form class="form-in" role="form" method="POST" action="">
            <h1><a href="/">kholobok.biz</a></h1>
            <p>Восстановление пароля</p>
            
            <input id="email" type="email" class="form-control" name="email" value="" placeholder="E-mail">
            <input id="password" type="password" class="form-control" name="password" placeholder="Пароль">
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Повторите пароль">
            
            <strong></strong>

            <button>Восстановить</button>
        </form>

    </main>
</template>

<script>
  export default {
    name: 'Registration',
    data: () => ({
      userName: '',
      password: '',
    }),
    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
  @import "~/assets/scss/LoginForm";
</style>