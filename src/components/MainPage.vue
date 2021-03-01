<template>
  <div class="mainpage">

    <header class="landing-heder">
        <div class="logo">kholobok.biz</div>
        <div class="panel">
            <a href="/login">Вход</a>
        </div>
    </header>

    <div class="landing-main">
        <div class="block1 block">
            <div class="contener">
                <h1>Online<br>Видео-плеер</h1>
                <p>База из более 200 тысяч<br>фильмов и сериалов</p>
                <a href="/regin">Зарегистрироваться</a>
            </div>
            <div class="images">
                <div class="image1"></div>
                <div class="image2"></div>
                <div class="image3"></div>
            </div>
        </div>
    </div>

    <footer class="landing-footer">
        <div>Все права защищены</div>
        <div>v 1.02.0 kholobok.biz 2019 ©</div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'Main',
    data: () => ({}),
    created(){},
    computed:{},
    methods: {}
  }
</script>

<style lang='scss' scoped>



  .mainpage{
    background: #202125;
    height: 100vh;
    overflow: auto;
  }

  .block{
    width: 100%;
    overflow: hidden;
  }

  .contener{
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 9;
  }

  h1{
    color: #fff;
    font-family: 'ProximaNova-Black';
    font-weight: normal;
    font-size: 75px;
    padding-top: 300px;
    text-transform: uppercase;
    line-height: 65px;
  }


  .landing-heder{
    width: 100%;
    padding: 20px 35px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }
  .landing-heder .logo{
    color:#fff;
    float: left;
    font-family: 'ProximaNova-Black';
    font-size: 22px;
    padding: 0 20px;
  }

  .landing-heder .panel{
    float: right;
  }
  .landing-heder .panel a{
    font-family: 'ProximaNova-Light';
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    line-height: 30px;
  }




    .block1{
      height: calc(100vh - 167px);
      min-height: 1000px;
      position: relative;
    }

  .block1 .images{
    width: 1200px;
    height: 600px;
    position: absolute;
    top: 150px;
    left: 35%;
    z-index: 8;
  }
  .block1 .images div{
    display: inline-block;
    width: 300px;
    height: 100%;
    margin-left: 50px;
    border-radius: 3px;
  }

  .block1 .images .image1{
      background: url('../assets/images/filmz.ru_f_118569.jpg') no-repeat 55% 50%/cover;
  }
  .block1 .images .image2{
      background: url('../assets/images/s1200.webp') no-repeat 55% 50%/cover;
  }
  .block1 .images .image3{
      background: url('../assets/images/007.jpg') no-repeat 55% 50%/cover;
  }

  .block1 p{
    color: #fff;
    font-family: 'ProximaNova-Light';
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 50px;
  }

  .block1 a{
      display: inline-block;
      font-size: 18px;
      font-family: 'ProximaNova-Black';
      color:#fff;
      padding: 10px 25px;
      border-radius: 4px;
      background: #27d98d;
      text-transform: uppercase;
      text-decoration: none;
  }


  footer{
      background: #202020;
      overflow: hidden;
      color:#fff;
      font-family: 'ProximaNova-Light';
      padding: 40px 35px;
      font-size: 14px;
  }

  .landing-footer div:first-child{
      float: left;
  }
  .landing-footer div:last-child{
      float: right;
  }

</style>