<template>
  <div class="main__content">

    <!-- Modals userData = null-->
    <modal-add-user v-if="addUserShow" :visible="addUserShow" @close="closeModal()"></modal-add-user>
    <modal-update-user v-if="updateUserShow" :visible="updateUserShow" :user="usersList[index]" @close="closeModal()"></modal-update-user>

    <el-dialog
      title="Операции кошелька"
      :visible.sync="centOperationForm"
      :before-close="closeOperation"
      width="500px">
      <div v-if="userData != null">
        <el-table
          :data="userData.operation"
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




    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <section class="section">
              <div>
                <h2 class="section__title">{{ title }}</h2>

                <div class="section__title-buttons">
                  <div class="section__title-button" @click="addUserShow = true">
                    <i class="icon el-icon-plus"></i>
                    Создать пользователя
                  </div>
                  <div class="section__title-button-rever" @click="putStatusUser(0)">
                    <i class="icon el-icon-lock"></i>
                    Заблокировать
                  </div>
                  <div class="section__title-button-rever" @click="putStatusUser(2)">
                    <i class="icon el-icon-unlock"></i>
                    Разблокировать
                  </div>
                </div>
                
              </div>
              <div class="section__content">

                <div class="tikets-s">
                  <div class="tikets-s__panel tikets-s__panel--center">
                    <div class="tikets-s__button-plat" :class="{ activ: pageUsers == 'users' }" v-on:click="openPageUsers('users')">Клиенты</div>
                    <div class="tikets-s__button-plat" :class="{ activ: pageUsers == 'kontrol' }" v-on:click="openPageUsers('kontrol')">Управляющие</div>
                    <div class="tikets-s__button-plat" :class="{ activ: pageUsers == 'block' }" v-on:click="openPageUsers('block')">Заблокированные</div>
                  </div>
                </div>

                <section class="articles">
                  <!-- For users -->
                  <el-table
                    :data="usersList"
                    stripe
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="45">
                    </el-table-column>
                    <el-table-column
                      label="Тип"
                      width="180">
                      <template slot-scope="scope">
                        <span v-if="scope.row.tupe == 'administrator'" class="tag">Администратор</span>
                        <span v-if="scope.row.tupe == 'managing'" class="tag">Менджер</span>
                        <span v-if="scope.row.tupe == 'redactor'" class="tag">Редактор</span>
                        <span v-if="scope.row.tupe == 'client'" class="tag">Клиент</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="Статус"
                      width="180">
                      <template slot-scope="scope">
                        <span v-if="scope.row.status == 0" class="tag-border">Заблокированн</span>
                        <span v-if="scope.row.status == 1" class="tag-border">Активен</span>
                        <span v-if="scope.row.status == 2" class="tag-border">Подтвержден</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="login"
                      label="Логин">
                    </el-table-column>
                    <el-table-column
                      prop="api_key"
                      label="Ключ">
                    </el-table-column>
                    <el-table-column
                      label=""
                      width="200">
                      <template slot-scope="scope">
                        <div class="table__button" @click="updateUser(scope.$index)"><i class="el-icon-edit"></i></div>
                        <div class="table__button" @click="openOperationList(scope.row.id)"><i class="el-icon-s-order"></i></div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- End for users -->
                </section>

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>

  import addUser from '~/components/UsersPage/ModalFormAddUser';
  import updateUser from '~/components/UsersPage/ModalFormUpdateUser';

  export default {
    name: 'UsersPage',
    props: ['data'],
    components:{
      'modal-add-user': addUser,
      'modal-update-user': updateUser
    },
    data: function(){return{
      usersList: null,
      pageUsers: 'users',
      addUserShow: false,
      updateUserShow: false,
      selectedData: [],
      index: 0,
      validList: [
        { item: 'login', error: false, text: 'Незаполнен логин' },
        { item: 'password', error: false, text: 'Незаполнен пароль' },
        { item: 'email', error: false, text: 'Незаполнен email' }
      ],
      errorList: [],
      userData: null,
      centOperationForm: false
    }},
    created: function () {
      this.getUsers();
    },
    computed:{
      title(){ return this.$router.currentRoute.meta.title},
    },
    methods: {

      getUsers: function(type){
        this.postMethod('users.get', {
          page: this.pageUsers,
          tupe: type
        }).then(response => {
          this.usersList = response;
        })
      },

      updateUser(index){
        console.log(this.usersList[index], index);
        this.updateUserShow = true;
        this.index = index;
      },

      closeModal(){
        this.updateUserShow = false;
        this.addUserShow = false;
        this.getUsers();
      },

      putStatusUser: function(status){

        const ids = this.selectedData.map(item => item.id);
        // const ids = this.usersList
        // .filter(function(element){ return element.chek; })
        // .map(function(element){ return element.element.id; });

        this.postMethod('users.putStatus', {
          ids: ids,
          status: status
        }).then(() => {
          this.getUsers();
        })
      },

      handleSelectionChange(list){
        this.selectedData = list;
        if(list.length != 0){}
      },

      openPageUsers: function(open){
        this.pageUsers = open;
        this.getUsers();
      },

      openOperationList(id){
        this.centOperationForm = true;
        this.postMethod('users.infoId', {
          id: id
        }).then(response => {
          this.userData = response;
          console.log(response);
        })
      },
      closeOperation(){
        console.log('closeOperation');
        this.centOperationForm = false;
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

    }
  }
</script>

<style lang='scss' scoped>

  .table_button{
    height: 28px;
    border-radius: 3px;
    border: 1px solid #bbbbbb;
    padding: 5px 10px;
    font-size: 14px;
    background: #fff;
    color: #8f8f8f;
    cursor: pointer;
  }
  .table_button:hover{
    border: 1px solid #1bd361;
  }



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

  .articles{
    width: 100%;
    min-height: 0;
    overflow: hidden;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    flex-grow: 10;
    padding: 0 10px;
}

.articles__head{
    box-shadow: 0px 1px 0px #dddddd;
}

.articles__scrol{
    width: 100%;
    min-height: 0;
    overflow: hidden;
    flex-grow: 10;
}
.articles__pagination{
    padding: 15px 0;
    box-shadow: 0px -1px 0px #dddddd;
    text-align: center;
}
.articles__pagin-item{
    display: inline-block;
    background: #40c173;
    color: rgba(255, 255, 255, 0.9);
    
    width: 26px;
    line-height: 26px;
    text-align: center;
    margin: 0 2px;
    border-radius: 3px;
    font-size: 14px;
    font-family: 'Montserrat-Bold';
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
}
.articles__pagin-item:hover{
    background: #45d37d;
}
.articles__pagination span{
    padding: 0 8px;
}
.articles__pagin-item--look{
    background: #d8d8d8;
}
.articles__pagin-item--look:hover{
    background: #d8d8d8;
}


.articles__head{
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
}



.articles__head > p, .articles__head > div{
    float: left;
    font-size: 14px;
    font-family: 'Montserrat-Medium';
    padding: 15px 0 10px 0;
}

.articles__head-1{
    width: 60px;
}
.articles__head-2{
    width: 80px;
}
.articles__head-3{
    width: calc(55% - 240px);
}
.articles__head-4{
    width: 100px;
}
.articles__head-5{
    width: calc(45% - 200px);
}
.articles__head-6{
    width: 100px;
}
.articles__head-7{
    width: 100px;
}




.articles__head-7 symbol{
    width: 20px;
    height: 20px;
}




.articles__item{
    overflow: hidden;
    width: 100%;
    box-shadow: 0px 1px 0px #dddddd;
    font-size: 12px;

    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
}
.articles__item-part{
    height: 50px;
    padding: 10px 0;

    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;

    align-items: center;
}

.articles__item-part i{
    font-size: 20px;
    color: #cecece;
    padding: 0 5px 0 8px;
    position: relative;
    top: 0px;
}
.articles__item-part a:hover i{
    color: #323232;
}
.articles__head-7 a:nth-child(2) i{
    font-size: 16px;
    line-height: 20px;
}
.articles__head-7 a:nth-child(3) i{
    font-size: 16px;
    line-height: 20px;
}

.element-cont{
    display: inline;
    background: #40c173;
    color: rgba(255, 255, 255, 0.9);
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 11px;
    font-family: 'Montserrat-Bold';
    letter-spacing: 0.02em;
    text-transform: uppercase;
}



@media all and (min-width: 1440px) {
    .articles__item{
        font-size: 14px;
    }
    .element-cont{
        font-size: 12px;
    }
}
</style>