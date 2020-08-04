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
            <el-input v-model="updateUser.login" clearable></el-input>
          </div>

          <div class="element-form">
            <label for="" class="element-form__label">Пароль</label>
            <el-input v-model="updateUser.password" clearable show-password></el-input>
            <div class="element-form__button" v-on:click="updateUser.password = generateKey()" title="Сгенерировать пароль">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
          </div>

          <div class="element-form">
            <label for="" class="element-form__label">Тип записи</label>
            <label for="" class="element-form__label">Тип записи</label>
            <div class="element-form__contener">
              <el-radio v-model="updateUser.tupe" label="client">Клиент</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="updateUser.tupe" label="redactor">Редактор</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="updateUser.tupe" label="managing">Менеджер</el-radio>
            </div>
            <div class="element-form__contener">
              <el-radio v-model="updateUser.tupe" label="administrator">Администратор</el-radio>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="element-form" :class="{ 'element-form--error': validList[1].error }">
            <label for="" class="element-form__label">Почта <span class="element-form__label-req">*</span></label>
            <el-input v-model="updateUser.email" clearable></el-input>
          </div>
          <div class="element-form">
            <label for="" class="element-form__label">Имя</label>
            <el-input v-model="updateUser.name" clearable></el-input>
          </div>
          <div class="element-form">
            <label for="" class="element-form__label">Фамилия</label>
            <el-input v-model="updateUser.surname" clearable></el-input>
          </div>

          
          <p class="element-form__info">Не заполняйте поле пароля, если не хотите его изменять</p>
          
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formShow = false">Отмена</el-button>
        <el-button type="primary" @click="addUserSend()">Сохранить</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    name: 'ModalFormUpdateUser',
    props: ['visible', 'user'],
    data: function(){return{

      updateUser: null,

      validList: [
        { item: 'login', error: false, text: 'Незаполнен логин' },
        { item: 'email', error: false, text: 'Незаполнен email' }
      ],
      errorList: []
    }},

    computed: {
      formShow:{
        get(){ return this.visible; },
        set(value){ if(!value) this.$emit('close');}
      }
    },

    created: function () {
      this.updateUser = this.user;
    },

    methods: {

      addUserSend: function(){
        this.errorList = [];

        for (let i = 0; i < this.validList.length; i++) {
          this.validList[i].error = false;
        }

        for (let i = 0; i < this.validList.length; i++) {
          if( this.updateUser[ this.validList[i].item ] == '' ){
            this.validList[i].error = true;
            this.errorList.push(this.validList[i].text);
          }
        }

        if(this.errorList.length != 0){ return; }

        this.formShow = false; 

        this.postMethod('users.update', 
          this.updateUser
        ).then(() => {});
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