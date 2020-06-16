<template>
  <div>
    <el-dialog
      title="Создание пользователя"
      :visible.sync="formShow" 
      width="650px" 
      center>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="element-form" :class="{ 'element-form--error': validList[0].error }">
            <label for="" class="element-form__label">Логин <span class="element-form__label-req">*</span></label>
            <el-input v-model="newUser.login" clearable></el-input>
          </div>
          <div class="element-form" :class="{ 'element-form--error': validList[1].error }">
            <label for="" class="element-form__label">Пароль <span class="element-form__label-req">*</span></label>
            <el-input v-model="newUser.password" clearable show-password></el-input>
            <div class="element-form__button" v-on:click="newUser.password = generateKey()" title="Сгенерировать пароль">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
          </div>
          <div class="element-form">
            <label for="" class="element-form__label">Тип записи</label>
            <label for="" class="element-form__label">Тип записи</label>
            <div class="element-form__contener">
              <el-radio v-model="newUser.tupe" label="client">Клиент</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="newUser.tupe" label="redactor">Редактор</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="newUser.tupe" label="managing">Менеджер</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="newUser.tupe" label="administrator">Администратор</el-radio>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="element-form" :class="{ 'element-form--error': validList[2].error }">
            <label for="" class="element-form__label">Почта <span class="element-form__label-req">*</span></label>
            <el-input v-model="newUser.email" clearable></el-input>
          </div>
          <div class="element-form">
            <label for="" class="element-form__label">Имя</label>
            <el-input v-model="newUser.name" clearable></el-input>
          </div>
          <div class="element-form">
            <label for="" class="element-form__label">Фамилия</label>
            <el-input v-model="newUser.surname" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formShow = false">Отмена</el-button>
        <el-button type="primary" @click="addUserSend()">Создать</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    name: 'ModalFormAddUser',
    props: ['visible'],
    data: function(){return{

      newUser: {
        login: '',
        password: '',
        tupe: 'client',
        email: '',
        name: '',
        endname: ''
      },

      validList: [
        { item: 'login', error: false, text: 'Незаполнен логин' },
        { item: 'password', error: false, text: 'Незаполнен пароль' },
        { item: 'email', error: false, text: 'Незаполнен email' }
      ],
      errorList: []

    }},

    computed: {
      formShow:{
        get(){return this.visible;},
        set(value){ 
          if(!value){ this.$emit('close'); }
        }
      }
    },

    created: function () {},

    methods: {

      addUserSend: function(){
        this.errorList = [];
        for (let i = 0; i < this.validList.length; i++) {
          this.validList[i].error = false;
        }
        for (let i = 0; i < this.validList.length; i++) {
          if( this.newUser[ this.validList[i].item ] == '' ){
            this.validList[i].error = true;
            this.errorList.push(this.validList[i].text);
          }
        }
        if(this.errorList.length != 0){ return; }

         

        this.postMethod('users.add', 
          this.newUser
        ).then(() => {
          this.formShow = false;
          this.newUser.password = '';
        })
      },

      generateKey: function(){
        let pass = "";
        const strong = 12;
        const dic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        for (let i = 0; i < strong; i++){
            pass += dic.charAt(Math.floor(Math.random() * dic.length));
        }
        return pass;
      },

    }
  }
</script>

<style lang="scss">

</style>