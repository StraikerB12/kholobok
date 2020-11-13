<template>
  <div class="main__content">

    <el-dialog
      title="Удаление кошелька"
      :visible.sync="centDeletForm"
      width="30%">
      <span>Вы уверены что хотите удалить данные о кошельке ?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centDeletForm = false">Отмена</el-button>
        <el-button type="primary" @click="deleteCent()">Удалить</el-button>
      </span>
    </el-dialog>


    <el-dialog
      title="Операции кошелька"
      :visible.sync="centOperationForm" 
      width="500px">
      <div>
        <el-table
          :data="userInfo.operation"
          style="width: 100%">

          <el-table-column
            prop="created_at"
            label="Дата"
            width="180">

          </el-table-column>

          <el-table-column
            prop="status"
            label="Статус"
            width="180">
            <template slot-scope="scope">
              <div v-if="scope.row.status == 0" class="tag tag-color--red">Отклонена</div>
              <div v-if="scope.row.status == 1" class="tag tag-color--yellow">Рассмотрение</div>
              <div v-if="scope.row.status == 2" class="tag">Выполнена</div>
            </template>
          </el-table-column>

          <el-table-column
            prop="summ"
            label="Сумма">

          </el-table-column>

        </el-table>
      </div>
    </el-dialog>


    <tiket-cent-modal :visible.sync="centOutForm" :data="{ summ: score, cent: centData }" @close="centOutForm = false; getUserInfo()"></tiket-cent-modal>

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

              <el-row :gutter="20">

                <el-col :lg="6" :md="12">
                  <div class="section__content">

                    <h2 class="login">{{ userInfo.login }}</h2>
                    <div class="login__post">{{ userAuth.name }}</div>

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
                </el-col>

                <el-col :lg="6" :md="12">
                  <div class="section__content">

                    <h3 class="cabinet__title-rang">Ключ API</h3>
                    <input class="cabinet__input" type="text" disabled :value="userInfo.api_key">

                  </div>
                </el-col>

                <el-col :lg="6" :md="12">
                  <div class="section__content">

                    <el-row :gutter="20">
                      <el-col :span="8">
                        <h3 class="cabinet__title-rang">Счет</h3>
                        <p>{{ score }} ₽</p>
                      </el-col>
                      <el-col :span="8">
                        <button class="form__button" @click="centOutForm = true">Вывести</button>
                      </el-col>
                      <el-col :span="8">
                        <button class="form__button" @click="centOperationForm = true">Операции</button>
                      </el-col>
                    </el-row>

                    <h3 class="cabinet__title-rang" style="padding-top:40px">Кошельки</h3>
                    <div class="cent-block">
                      <p class="cabinet__text-rang">Банковская карта</p>
                      <div class="cent-block__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" class="pull-left"><defs id="defs10308"><linearGradient id="linearGradient10277" spreadMethod="pad" gradientTransform="scale(89.728 -89.728) rotate(-20.218 .966 -.457)" gradientUnits="userSpaceOnUse" y2="0" x2="1" y1="0" x1="0"><stop id="stop10279" offset="0" stop-opacity="1" stop-color="#222357"></stop><stop id="stop10281" offset="1" stop-opacity="1" stop-color="#254aa5"></stop></linearGradient><clipPath id="clipPath10271" clipPathUnits="userSpaceOnUse"><path id="path10273" d="M413.742 90.435c-.057-4.494 4.005-7.002 7.065-8.493 3.144-1.53 4.2-2.511 4.188-3.879-.024-2.094-2.508-3.018-4.833-3.054-4.056-.063-6.414 1.095-8.289 1.971l-1.461-6.837c1.881-.867 5.364-1.623 8.976-1.656 8.478 0 14.025 4.185 14.055 10.674.033 8.235-11.391 8.691-11.313 12.372.027 1.116 1.092 2.307 3.426 2.61 1.155.153 4.344.27 7.959-1.395l1.419 6.615c-1.944.708-4.443 1.386-7.554 1.386-7.98 0-13.593-4.242-13.638-10.314m34.827 9.744c-1.548 0-2.853-.903-3.435-2.289l-12.111-28.917h8.472l1.686 4.659h10.353l.978-4.659h7.467l-6.516 31.206h-6.894m1.185-8.43l2.445-11.718h-6.696l4.251 11.718m-46.284 8.43l-6.678-31.206h8.073l6.675 31.206h-8.07m-11.943 0l-8.403-21.24-3.399 18.06c-.399 2.016-1.974 3.18-3.723 3.18h-13.737l-.192-.906c2.82-.612 6.024-1.599 7.965-2.655 1.188-.645 1.527-1.209 1.917-2.742l6.438-24.903h8.532l13.08 31.206h-8.478"></path></clipPath></defs><g transform="matrix(.09246 0 0 .09246 -30.47 -49.692)" id="layer1"><g id="g10267" transform="matrix(4.98469 0 0 -4.98469 -1470.119 1039.626)"><g clip-path="url(#clipPath10271)" id="g10269"><g transform="translate(351.611 96.896)" id="g10275"><path id="path10283" d="M0 0l98.437 36.252 22.394-60.809-98.436-36.252" fill="url(#linearGradient10277)" fill-opacity="1" fill-rule="nonzero" stroke="none"></path></g></g></g></g><path id="rect5655" fill="none" d="M10.135 101.588h146.8v120.41h-146.8z"></path><g id="g5753" transform="translate(0 .073)"><g transform="translate(-3.077 10.497) scale(.36207)" id="_Group_" data-name="<Group>"><path id="rect5659" fill="#ff5f00" d="M57.65 22.85h31.5v56.61h-31.5z"></path><path id="_Path_" data-name="<Path>" d="M59.65 51.16A35.94 35.94 0 0173.4 22.85a36 36 0 100 56.61 35.94 35.94 0 01-13.75-28.3z" fill="#eb001b"></path><path d="M131.65 51.16a36 36 0 01-58.25 28.3 36 36 0 000-56.61 36 36 0 0158.25 28.3z" id="path5662" fill="#f79e1b"></path></g><path d="M11.123 46.834V44.84a1.183 1.183 0 00-1.249-1.262 1.23 1.23 0 00-1.116.565 1.166 1.166 0 00-1.05-.565 1.05 1.05 0 00-.931.472v-.393h-.691v3.177h.698v-1.748a.744.744 0 01.777-.844c.459 0 .691.3.691.838v1.768h.698v-1.762a.748.748 0 01.778-.844c.472 0 .698.3.698.838v1.768zm10.325-3.177h-1.136v-.963h-.698v.963h-.632v.632h.645v1.462c0 .738.286 1.176 1.103 1.176.306.001.605-.084.864-.246l-.2-.591c-.184.11-.395.172-.61.18-.333 0-.46-.213-.46-.532v-1.45h1.13zm5.895-.08a.937.937 0 00-.837.466v-.386h-.685v3.177h.691v-1.78c0-.526.226-.818.665-.818.148-.002.295.025.432.08l.213-.665a1.479 1.479 0 00-.492-.087zm-8.912.333a2.376 2.376 0 00-1.296-.332c-.804 0-1.33.385-1.33 1.017 0 .518.386.837 1.097.937l.332.046c.38.053.559.153.559.332 0 .246-.253.386-.725.386a1.691 1.691 0 01-1.056-.332l-.333.538c.403.281.885.425 1.376.412.917 0 1.449-.432 1.449-1.037s-.419-.85-1.11-.95l-.332-.047c-.3-.04-.539-.1-.539-.312 0-.213.226-.372.605-.372.35.004.694.098.997.272zm18.512-.332a.937.937 0 00-.837.465v-.386h-.685v3.177h.691v-1.78c0-.526.226-.818.665-.818.148-.002.295.025.432.08l.213-.665a1.479 1.479 0 00-.492-.087zm-8.905 1.661a1.605 1.605 0 001.694 1.662c.415.02.823-.114 1.143-.38l-.332-.557c-.239.182-.53.282-.83.285-1.251-.1-1.251-1.932 0-2.033.3.003.591.103.83.285l.332-.558c-.32-.265-.728-.4-1.143-.379a1.605 1.605 0 00-1.694 1.662zm6.473 0v-1.582h-.691v.386a1.206 1.206 0 00-.997-.465c-2.216 0-2.216 3.323 0 3.323.387.014.758-.16.997-.466v.386h.69zm-2.572 0c.05-.84 1.077-1.214 1.655-.604.579.61.15 1.617-.692 1.621a.954.954 0 01-.963-1.017zm-8.341-1.661c-2.215.03-2.169 3.354.047 3.323a1.93 1.93 0 001.319-.432l-.333-.512c-.262.21-.587.327-.923.332a.88.88 0 01-.95-.777h2.359v-.266c0-.997-.618-1.662-1.509-1.662zm0 .618a.788.788 0 01.804.77h-1.661a.817.817 0 01.844-.77zm17.316 1.05V42.38h-.664v1.662a1.206 1.206 0 00-.997-.465c-2.216 0-2.216 3.323 0 3.323.387.014.758-.16.997-.466v.386h.664zm-2.555 0c.05-.84 1.077-1.214 1.655-.604.579.61.15 1.616-.692 1.62a.954.954 0 01-.963-1.016zm-23.338 0v-1.589h-.69v.386a1.206 1.206 0 00-.998-.465c-2.215 0-2.215 3.323 0 3.323.388.014.76-.16.997-.466v.386h.691zm-2.572 0c.05-.84 1.078-1.214 1.656-.604.578.61.149 1.616-.692 1.62a.954.954 0 01-.97-1.016z" id="path5657" fill="#231f20" stroke-width=".332"></path></g></svg>
                      </div>
                      <div class="cent-block__content">

                        <input v-if="centDataFlag.card || centData.card == null" class="cabinet__input" type="text" v-model="centData.card" @focus="upDateCent('card')">

                        <div v-else>
                          <p class="cent-data">{{ centData.card }}</p>
                          <span class="cent__button" @click="upDateCent('card')">Изменить</span>
                          <span class="cent__button" @click="deleteCentForm('card')">Удалить</span>
                        </div>

                      </div>
                    </div>

                    <div class="cent-block">
                      <p class="cabinet__text-rang">Кошелек WebMoney</p>
                        <div class="cent-block__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" class="pull-left"><path d="M23.388.428c3.657 0 7.135.837 10.256 2.334.49.22.982.486 1.47.75L32.975 5.41l-3.209-3.308-5.528 4.849-3.256-3.482-10.167 9.037 6.51 7.097-2.541 2.201 6.421 7.097-2.541 2.204 9.187 10.094 5.437-4.938 4.729 5.292c-.937.705-1.963 1.412-3.076 2.027a23.49 23.49 0 01-11.507 2.995C10.548 46.575.07 36.22.07 23.481.026 10.831 10.504.425 23.39.425zm-4.281 21.641l5.576-4.938 4.993 5.512-5.576 4.935-4.993-5.51zm3.968 9.522l5.532-4.982 5.037 5.511-5.575 4.939-4.993-5.468zm-7.934-18.91l5.572-4.937 4.996 5.51-5.575 4.938zm10.21-2.644l4.146-3.703 3.746 4.098-4.149 3.747-3.745-4.142zm7.401 16.97l4.145-3.703 3.747 4.143-4.148 3.704-3.745-4.145zm3.656 8.331l4.147-3.703 3.744 4.098-4.146 3.747zm1.694-19.045l2.766-2.466 2.496 2.733-2.764 2.468-2.5-2.735zM34.535 8.14l2.766-2.512L39.8 8.406l-2.766 2.47-2.496-2.735zm7.092 16.312l2.763-2.47 2.54 2.733-2.809 2.468-2.495-2.731zm-12.44-6.13l4.146-3.701 3.745 4.098-4.145 3.703-3.746-4.098z" fill="#006cb4"></path></svg>
                        </div>
                        <div class="cent-block__content">

                          <input v-if="centDataFlag.webMoney || centData.webMoney == null" class="cabinet__input" type="text" v-model="centData.webMoney" @focus="upDateCent('webMoney')">

                          <div v-else>
                            <p class="cent-data">{{ centData.webMoney }}</p>
                            <span class="cent__button" @click="upDateCent('webMoney')">Изменить</span>
                            <span class="cent__button" @click="deleteCentForm('webMoney')">Удалить</span>
                          </div>

                        </div>
                    </div>

                    <div class="cent-block">
                      <p class="cabinet__text-rang">Кошелек Qiwi</p>
                      <div class="cent-block__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" class="pull-left"><path d="M36.87 29.57c.788.302 1.091 1.482 1.151 1.997.122.939-.15 1.302-.453 1.302-.303 0-.727-.363-1.18-1.09-.455-.727-.637-1.544-.394-1.968.15-.273.483-.393.878-.242zm-4.6 3.42c.484 0 1.03.212 1.514.635.938.788 1.21 1.696.726 2.362-.273.333-.726.545-1.241.545-.515 0-1.06-.182-1.423-.515-.847-.726-1.09-1.938-.545-2.603.212-.273.545-.424.969-.424zM21.675 41.74C10.171 41.739.848 32.414.848 20.91S10.172.085 21.674.085c11.504 0 20.828 9.324 20.828 20.826 0 3.905-1.09 7.569-2.936 10.687-.06.09-.212.06-.242-.061-.727-5.116-3.845-7.932-8.386-8.779-.394-.061-.454-.303.06-.363 1.393-.122 3.36-.091 4.39.09.06-.514.091-1.06.091-1.604 0-7.599-6.176-13.775-13.774-13.775-7.598 0-13.774 6.176-13.774 13.775s6.176 13.775 13.774 13.775h.636a18.582 18.582 0 01-.273-3.724c.03-.848.212-.97.576-.303 1.907 3.3 4.631 6.266 9.959 7.447 4.359.969 8.718 2.088 13.41 8.052.424.514-.211 1.06-.696.636-4.783-4.239-9.142-5.631-13.107-5.631-4.45.03-7.478.606-10.536.606z" fill="#ff8c00"></path></svg>
                      </div>
                      <div class="cent-block__content">

                        <input v-if="centDataFlag.qiwi || centData.qiwi == null" class="cabinet__input" type="text" v-model="centData.qiwi" @focus="upDateCent('qiwi')">

                        <div v-else>
                          <p class="cent-data">{{ centData.qiwi }}</p>
                          <span class="cent__button" @click="upDateCent('qiwi')">Изменить</span>
                          <span class="cent__button" @click="deleteCentForm('qiwi')">Удалить</span>
                        </div>

                      </div>
                    </div>

                    <div class="cent-block">
                      <p class="cabinet__text-rang">Кошелек Яндекс.Деньги</p>
                      <div class="cent-block__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" class="pull-left"><path d="M10.696 14.93C15.45 11.554 30.69.024 31.326.024v18.78H42.28v28.17H8.34c-1.992 0-3.62-1.55-3.62-3.443V23.315c0-2.637.233-4.31 5.975-8.386z" fill="#f9c637" fill-rule="evenodd" stroke-width="1.174"></path><path d="M31.325 18.805v10.496L10.98 42.28l25.04-7.839V18.805h-5.235" fill="#c8a332" fill-rule="evenodd" stroke-width="1.174"></path><path d="M21.57 17.737c1.35-1.504 3.319-2.035 4.4-1.185 1.082.85.866 2.759-.483 4.264C24.14 22.32 22.17 22.85 21.088 22c-1.082-.85-.865-2.758.482-4.263" fill="#000106" fill-rule="evenodd" stroke-width="1.174"></path></svg>
                      </div>
                      <div class="cent-block__content">

                        <input v-if="centDataFlag.yandex || centData.yandex == null" class="cabinet__input" type="text" v-model="centData.yandex" @focus="upDateCent('yandex')">

                        <div v-else>
                          <p class="cent-data">{{ centData.yandex }}</p>
                          <span class="cent__button" @click="upDateCent('yandex')">Изменить</span>
                          <span class="cent__button" @click="deleteCentForm('yandex')">Удалить</span>
                        </div>

                      </div>
                    </div>

                    <button class="form__button" :disabled="!upDateCentFlag" @click="saveCent()">Сохранить</button>

                  </div>
                </el-col>

                <el-col :lg="6" :md="12">
                  <div class="section__content">

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
                </el-col>

              </el-row>


            </section>


          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>

  import TiketCentModal from '~/components/TiketsPage/TiketCentModal';

  export default {
    name: 'CabinetPanel',
    components: {
      TiketCentModal
    },
    data: () => ({
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: '',
      errorForm: '',

      domain: '',

      userInfo: {},
      listDomains: [],

      centData: {
        yandex: null,
        qiwi: null,
        card: null,
        webMoney: null
      },

      centDataFlag: {
        yandex: false,
        qiwi: false,
        card: false,
        webMoney: false
      },

      upDateCentFlag: false,
      centDeletForm: false,
      centDeleteType: null,

      centOutForm: false,
      centOperationForm: false
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
      title(){ return this.$router.currentRoute.meta.title},

      score(){ 
        return Number(this.userInfo.score).toFixed(2); 
      }
    },

    methods: {

      async getUserInfo(){
        await this.postMethod('users.info').then(response => {
          this.userInfo = response;
          this.centData = JSON.parse(response.cent);
          console.log(response);
        });
      },

      async getListDomains(){
        await this.postMethod('domains.get').then(response => {
          this.listDomains = response;
          // console.log(response);
        });
      },


      saveCent(){

        for (let key in this.centData) {
          if(this.centData[key] == '') this.centData[key] = null;
        }

        this.postMethod('users.putCent', {
          cent: JSON.stringify(this.centData)
        }).then((response) => {
          console.log(response);
        });

        console.log(JSON.stringify(this.centData));

        this.centDataFlag = {
          yandex: false,
          qiwi: false,
          card: false,
          webMoney: false
        };
        this.upDateCentFlag = false;
      },
      upDateCent(type = ''){
        if(type != '') this.centDataFlag[type] = true;
        this.upDateCentFlag = true;
      },
      deleteCent(){
        if(this.centDeleteType != null) this.centData[this.centDeleteType] = null;
        this.centDeletForm = false;
        this.saveCent();
      },
      deleteCentForm(type){
        this.centDeleteType = type;
        this.centDeletForm = true;
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
  .login{
    font-family: 'Montserrat-Bold';
    color: #181f39;
    font-size: 24px;
  }
  .login__post{
    font-size: 13px;
    color: #b1b1b1;
    font-family: 'Montserrat-Regular';
    padding-bottom: 30px;
  }

  .section__content{
    min-height: 30vh;
  }

  .cent-block{
    overflow: hidden;
    padding: 10px 0;
  }
  .cent-block__icon{
    width: 70px;
    float: left;
  }
  .cent-block__content{
    width: calc(100% - 70px);
    float: left;
  }

  .cent__button{
    max-width: 100px;
    font-size: 13px;
    color: #2fb887;
    font-family: 'Montserrat-Regular';
    // padding: 0 0 0 12px;
    cursor: pointer;
  }
</style>