<template>
  <div class="main__content">

    <!-- Modals -->
    <div class="modal" v-show="modal">
      <!-- New tiket -->
      <div class="modal__form" v-show="modalPage.tiket">
        <div class="close">
          <div class="close__btn" v-on:click="closeModal()">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <input 
          type="text" 
          class="tikets-s__input" 
          placeholder="Тема обращения" 
          v-model="titleTiket">
        <textarea 
          class="tikets-s__input" 
          cols="30" 
          rows="10"
          placeholder="Текст обращения" 
          v-model="textTiket">
        </textarea>
        <button class="button tikets-s__button-l" v-on:click="sendTiket()">Отправить</button>
      </div>
      <!-- End new tiket -->

      <!-- New tiket video -->
      <div class="modal__form" v-show="modalPage.film">
        <div class="close">
          <div class="close__btn" v-on:click="closeModal()">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <input 
          type="text" 
          class="tikets-s__input" 
          placeholder="Название фильма" 
          v-model="titleTiket">
        <textarea 
          class="tikets-s__input" 
          cols="30" 
          rows="10"
          placeholder="Текст обращения" 
          v-model="textTiket">
        </textarea>
        <button class="button tikets-s__button-l" v-on:click="sendTiketVideo()">Отправить</button>
      </div>
      <!-- End new tiket video -->
    </div>

    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <section class="section">
              <div>
                <h2 class="section__title">{{ title }}</h2>
              </div>
              <div class="section__content">

                <div v-if="!tiketShow" class="tikets-s">
                  <div class="tikets-s__panel tikets-s__panel--center">
                    <div class="tikets-s__button-plat" :class="{ activ: !pageTikets }" v-on:click="openPageTikets(false)">Активные тикеты</div>
                    <div class="tikets-s__button-plat" :class="{ activ: pageTikets }" v-on:click="openPageTikets(true)">Закрытые тикеты</div>
                  </div>
                  <div class="tikets-s__panel">
                    <div class="tikets-s__button-l button" v-on:click="getTikets('tiket')">Обращения</div>
                    <div class="tikets-s__button-l button" v-on:click="getTikets('domain')">Домены</div>
                    <div class="tikets-s__button-l button" v-on:click="getTikets('film')">Фильмы</div>
                    <div class="tikets-s__button-r button" v-on:click="openModal('film')">Заказать фильм</div>
                    <div class="tikets-s__button-r button" v-on:click="openModal('tiket')">Создать тикет</div>
                  </div>
                  <div class="tikets-s__content">
                    <div 
                      class="tikets-s__item" 
                      v-for="(value, index) in tiketsList" 
                      v-on:click="openTiket(value.id, index)" 
                      :key="index">
                      <h3 class="tikets-s__item-title">
                        {{ value.title }} 
                        <status-tiket :status="value.status"></status-tiket>
                      </h3>
                      <type-tiket :type="value.tupe"></type-tiket>
                      <div class="tikets-s__item-prev-message">
                        {{ value.message.name }}: {{ value.message.message }}
                      </div>
                    </div>
                  </div>
                </div>

                <div v-else class="tikets-s__tiket">
                  <div class="tikets-s__panel">
                    <div class="tikets-s__button-l button" v-on:click="closeTiket()">Назад</div>
                    <div class="tikets-s__button-r button" v-on:click="statusCloseTiket()">Закрыть тикет</div>
                    <template v-if="isRight">
                      <div 
                        v-if="tiketsList[tiketIndex].status != 4" 
                        class="tikets-s__button-r button" 
                        v-on:click="statusRassmotrTiket()"
                      >Рассмотрение</div>
                      <div 
                        v-if="tiketsList[tiketIndex].status != 4 && tiketsList[tiketIndex].tupe == 'domain'" 
                        class="tikets-s__button-r button" 
                        v-on:click="statusNotDomain()"
                      >Отклонить</div>
                      <div 
                        v-if="tiketsList[tiketIndex].status != 4 && tiketsList[tiketIndex].tupe == 'domain'" 
                        class="tikets-s__button-r button" 
                        v-on:click="statusYesDomain()"
                      >Принять</div>
                    </template>
                  </div>

                  <div class="tikets-s__messages">
                    <h3 class="tikets-s__item-title">
                      {{ tiketsList[tiketIndex].title }} 
                      <status-tiket :status="tiketsList[tiketIndex].status"></status-tiket>
                    </h3>
                    <type-tiket :type="tiketsList[tiketIndex].tupe"></type-tiket>
                    <div class="tikets-s__mes-item" v-for="(value, index) in tiketMessages" :key="index">
                      <span class="tikets-s__mes-item-name">{{ value.name }}</span>
                      <span class="tikets-s__item-tupe">{{ value.created_at }}</span>
                      <div>{{ value.message }}</div>
                    </div>
                    <div v-if="tiketsList[tiketIndex].status != 4">
                      <textarea 
                        class="tikets-s__input" 
                        cols="30" 
                        rows="10"
                        placeholder="Сообщение" 
                        v-model="textMessage">
                      </textarea>
                      <button class="button tikets-s__button-l" v-on:click="sendMessage()">Отправить</button>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>
  import StatusTiket from '~/components/TiketsPage/StatusTiket';
  import TypeTiket from '~/components/TiketsPage/TypeTiket';


  export default {
    name: 'TiketsPage',

    components:{
      StatusTiket,
      TypeTiket
    },

    data: function(){return{

      modal: false,
      modalPage: {
          film: false,
          tiket: false
      },
      titleTiket: "",
      textTiket: "",

      tiketsList: null,
      tiketShow: false,
      tiketMessages: null,
      tiketIndex: null,

      textMessage: '',

      pageTikets: false

    }},

    created: function () {
      console.log(this.$store.state.user.status);
      this.init();
    },

    computed:{
      isRight(){
        return this.$store.state.user.status == 'client' || this.$store.state.user.status == 'redactor' ? false : true;
      },
      title(){ return this.$router.currentRoute.meta.title},
    },

    methods: {

      init: function(){
        this.postMethod('tikets.get', {
          close: this.pageTikets
        }).then( response => {
          this.tiketsList = response;
        });
      },

      getTikets: function(tupe){
        this.postMethod('tikets.get', {
          close: this.pageTikets,
          tupe: tupe
        }).then( response => {
          this.tiketsList = response;
        });
      },

      openModal: function(modal){
        this.modal = true;
        this.modalPage[modal] = true;
      },
      closeModal: function(){
        this.modal = false;
        for (const key in this.modalPage) {
          this.modalPage[key] = false;
        }
      },


      openTiket: function(id, index){
        this.tiketShow = true;
        this.tiketIndex = index;
        this.getMessageList(id);
      },

      getMessageList: function(id){
        this.tiketMessages = null;

        this.postMethod('tikets.getId', {
          id: id
        }).then( response => {
          this.tiketMessages = response;
          
          this.tiketMessages.map(el => { 
            el.created_at = this.getDataS(el.created_at);
            return el;
          });
        });
      },

      closeTiket: function(){
        this.tiketShow = false;
      },

      openPageTikets: function(open){
        this.pageTikets = open;
        this.init();
      },

      sendTiket: function(){
        this.postMethod('tikets.add', {
          tupe: 'tiket',
          title: this.titleTiket,
          message: this.textTiket
        }).then(() => {
          this.closeModal();
          this.init();
        })
      },

      sendTiketVideo: function(){
        this.postMethod('tikets.add', {
          tupe: 'film',
          title: 'Заказ фильма: ' + this.titleTiket,
          message: this.textTiket
        }).then( response => {
          this.closeModal();
          this.init();
        });
      },

      sendMessage: function(){
        const id = this.tiketsList[this.tiketIndex].id;
        this.postMethod('tikets.addMessage', {
          id: id,
            message: this.textMessage
        }).then( response => {
          console.log(response);
            this.getMessageList(id);
            this.textMessage = "";
        });
      },


      statusNotDomain: function(){
        this.statusPutTiket(3); 
      },
      statusYesDomain: function(){
        let id = JSON.parse( this.tiketsList[this.tiketIndex].data ).id;
        this.statusPutTiket(4); 

        this.postMethod('tikets.addMessage', {
          id: this.tiketsList[this.tiketIndex].id,
          message: "Ваш домен принят."
        }).then( response => {});

        this.postMethod('domains.complit', {
          id: id
        }).then( response => {});
      },
      

      statusCloseTiket: function(){
        this.statusPutTiket(4); 
      },
      statusRassmotrTiket: function(){
        this.statusPutTiket(2); 
      },

      statusPutTiket: function(nom){
        const id = this.tiketsList[this.tiketIndex].id;
        this.postMethod('tikets.statPut', {
          id: id,
            status: nom
        }).then( response => {
          this.init();
        });
      },

      getDataS: function(string){
        let data = new Date(Date.parse(string));
        let stringData = data.getFullYear();

        stringData += '.' + (data.getMonth() + 1);
        stringData += '.' + (data.getDate());
        stringData += ' ' + (data.getHours());
        stringData += ':' + (data.getMinutes());

        return stringData;
      }
        
    }
  }
</script>

<style lang='scss' scoped>
  .tikets-s{
      padding: 0 10px;
  }

  .tikets-s__panel{
      overflow: hidden;
      padding: 10px 0;
  }
  .tikets-s__panel--center{
      text-align: center;
  }
  .tikets-s__tiket{
      padding: 0 10px;
  }

  .tikets-s__button-r{
    width:auto;
    display: inline-block;
    float: right;
    margin-left: 10px;
  }
  .tikets-s__button-l{
    width:auto;
    display: inline-block;
    float: left;
    margin-right: 10px;
  }
  .tikets-s__button-plat{
    width:auto;
    display: inline-block;
    text-align: center;
    color: #000000;
    line-height: 34px;
    padding: 0 15px;
    font-size: 13px;
    font-family: 'Montserrat-Regular';
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
    outline: none;
  }
  .tikets-s__button-plat.activ{
    box-shadow: 0 2px 0 #40c173;
  }



  .tikets-s__input{
    display: inline-block;
    width: 100%;
    padding: 8px 15px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #cacaca;
    background: #fff;
    margin-bottom: 10px;
    font: 400 13.3333px Arial;
  }


  .tikets-s__item{
    border: 1px solid #d3d3d3;
    padding: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
  }
  .tikets-s__item:before{
    content:"";
    position: absolute;
    width:0;
    height: 100%;
    top: 0;
    left: 0;
    background: #40c173;
    transition: width 0.1s ease-in-out;
  }
  .tikets-s__item:hover:before{
      width: 5px;
  }
  .tikets-s__item-title{
      font-size: 20px;
      font-family: 'Montserrat-Bold';
  }
  

  
  .tikets-s__item-prev-message{}



  .tikets-s__mes-item{
      padding: 15px 0;
      margin: 5px 0;
  }
  .tikets-s__mes-item-name{
      font-size: 16px;
      font-family: 'Montserrat-Medium';
  }
</style>