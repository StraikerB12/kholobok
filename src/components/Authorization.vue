<template>
  
  <div>
    <main class="form-main">

        <form action="" method="post" class="form-in">

            <h1><a href="/">kholobok.biz</a></h1>

            <input type="text" name="login" id="login" value="" placeholder="Логин">
            <input type="password" name="password" id="password" placeholder="Пароль">


            <button>Войти</button>

            
            <!-- <div class="error-form-login">{{ $errors->first('login') }}</div> -->

            
                    
            <a href="/regin">Регистрация</a>
            <a href="#">Забыли пароль?</a>

        </form>

    </main>
  </div>

</template>

<script>
  export default {
    name: 'Authorization',
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
