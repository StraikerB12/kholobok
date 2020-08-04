<template>
  <div class="content-site">
    <slot name="menu"></slot>
    <main>
      <div class="main">
        <slot name="header"></slot>
        <div class="main__content">
           <div class="cabinet__head">
                <h2 class="cabinet__title">{{ userInfo.login }}</h2>
                <span class="cabinet__title-farm">{{ userAuth.name }}</span>
            </div>

            <div class="cabinet__contener">

              <div class="cabinet__box">
                <h3 class="cabinet__title-rang">Ключ API</h3>
                <input class="cabinet__input" type="text" disabled :value="userInfo.api_key">
              </div>

              <div class="cabinet__box">
                <h3 class="cabinet__title-rang">Смена пароля</h3>
                <form v-on:submit.prevent="checkForm" action="" method="post" class="">
                  <input 
                    id="oldPassword" 
                    type="password" 
                    class="cabinet__input" 
                    name="oldPassword" 
                    placeholder="Старый пароль" 
                    v-model="oldPassword">
                  <br>
                  <input 
                    id="newPassword" 
                    type="password" 
                    class="cabinet__input" 
                    name="newPassword" 
                    placeholder="Новый пароль"
                    v-model="newPassword">
                  <br>
                  <input 
                    id="password-confirm" 
                    type="password" 
                    class="cabinet__input" 
                    name="passwordConfirmation" 
                    placeholder="Повторите пароль" 
                    v-model="passwordConfirmation">
                  <br>
                  <button class="button cabinet__button">Отправить</button>
                </form>
              </div>

              <div class="cabinet__box">
                <h3 class="cabinet__title-rang">Добавить домен</h3>
                <p class="cabinet__text-rang">
                  Вставте в корень сайта фаил<br>
                  <b>{{ userInfo.api_key }}.txt</b>
                </p>
                <p class="cabinet__text-rang">
                  Домен следует вводить без 
                  <b>http://</b>, 
                  <b>https://</b>, 
                  <b>//</b>, 
                  <b>www</b> и без 
                  <b>/</b> на конце. <br>
                  Например: <b>site.ru</b>
                </p>
                <input 
                  id="domain" 
                  type="text" 
                  class="cabinet__input" 
                  placeholder="Домен" 
                  v-model="domain">
                <button class="button cabinet__button" v-on:click="addDomain()">Добавить</button>

                <div class="cabinet__list-domains">
                  <p v-for="(value, index) in listDomains" :key="index" class="cabinet__list-domains-item">
                    {{ value.name }} 
                    <i class="cabinet__icons-btn fa fa-times" v-on:click="deleteDomain(value.id, index)" aria-hidden="true"></i>
                  </p>
                </div>
              </div>

              <div class="cabinet__box"></div>

            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'CabinetPanel',
    data: () => ({
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: '',
      errorForm: '',

      domain: '',

      userInfo: {},
      listDomains: []
    }),

    async created() {
      console.log(this.userAuth);

      await this.getUserInfo();
      await this.getListDomains();
    },

    computed:{
      userAuth(){ 
        return this.$store.state.user;
      },
    },

    methods: {

      async getUserInfo(){
        await this.postMethod('users.info').then( response => {
          this.userInfo = response;
        });
      },

      async getListDomains(){
        await this.postMethod('domains.get').then( response => {
          this.listDomains = response;
          // console.log(response);
        });
      },

      addDomain: function () {
          
        this.postMethod('domains.add', {
          domain: this.domain
        }).then((response) => {
          if(response.status){
            this.listDomains.push(response.data);
            if(!this.userAuth){
              this.postMethod('tikets.add', {
                tupe: 'domain',
                title: 'Модерация домена '+ this.domain,
                message: 'Проверка домена - '+ this.domain +' на право размещения плеера.',
                data: JSON.stringify( {domain: this.domain, id: response.data.id} )
              }).then((response) => {
                // console.log(response);
              });
            }
            this.domain = '';
          }
        });
      },

      deleteDomain: function (id, index) {
        this.postMethod('domains.delete', {
            id: id
        }).then(() => {
          this.listDomains.splice(index, 1);
        });
      },


      checkForm: function () {

        if (this.oldPassword == '' && this.newPassword == '' && this.passwordConfirmation == '') { 
          this.$notify.error({ title: 'Ошибка', message: 'Заполните все поля', customClass: 'messages-ui' });
          return; 
        }
        if(this.newPassword.length < 8){ 
          this.$notify.error({ title: 'Ошибка', message: 'Длинна пароля не менее 8 символов', customClass: 'messages-ui' });
          return; 
        }
        if(this.newPassword == this.oldPassword){ 
          this.$notify.error({ title: 'Ошибка', message: 'Новый пароль должен отличаться', customClass: 'messages-ui' });
          return; 
        }
        if(this.passwordConfirmation != this.newPassword){ 
          this.$notify.error({ title: 'Ошибка', message: 'Новые пароли не совпадают', customClass: 'messages-ui' });
          return; 
        }
        

        this.postMethod('users.putPasword', {
          password: this.newPassword,
          oldpassword: this.oldPassword
        }).then(() => {
          this.oldPassword = '';
          this.newPassword = '';
          this.passwordConfirmation = '';

          this.$notify.success({ title: 'Успех', message: 'Пароль изменен', customClass: 'messages-ui' });
        });

        

      }
        
    }
  }
</script>

<style lang='scss' scoped>
  
</style>