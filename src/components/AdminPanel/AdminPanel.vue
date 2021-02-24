<template>
  <div class="main__content">

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
                <el-col :span="12">
                  <div class="section__content">

                    <el-row :gutter="10">
                      <el-col :span="6">

                        <el-select class="form__input" v-model="typeMessages" placeholder="Тип">
                          <el-option label="Выполнено" value="success"></el-option>
                          <el-option label="Информация" value="info"></el-option>
                          <el-option label="Предупреждение" value="warning"></el-option>
                          <el-option label="Ошибка" value="error"></el-option>
                        </el-select>

                      </el-col>
                      <el-col :span="12">

                        <el-input class="form__input" v-model="textMessages" placeholder="Текст" clearable></el-input>

                      </el-col>
                      <el-col :span="6">

                        <button class="form__button" v-on:click="addMessage()">Добавить</button>

                      </el-col>
                    </el-row>


                    <el-table
                      :data="messages"
                      style="width: 100%">

                      <el-table-column
                        label="Тип"
                        width="200">
                        <template slot-scope="scope">
                          <div v-if="scope.row.type == 'success'" class="tag tag-color--grin">Выполнено</div>
                          <div v-if="scope.row.type == 'info'" class="tag tag-color--gray">Информация</div>
                          <div v-if="scope.row.type == 'warning'" class="tag tag-color--yellow">Предупреждение</div>
                          <div v-if="scope.row.type == 'error'" class="tag tag-color--red">Ошибка</div>
                        </template>
                      </el-table-column>

                      <el-table-column
                        prop="text"
                        label="Текст">
                      </el-table-column>

                      <el-table-column
                        width="40">
                        <template slot-scope="scope">
                          <a href="#" v-on:click.prevent="deleteMessege(scope.row.id)" title="Удалить"><i class="icon el-icon-close" aria-hidden="true"></i></a>
                        </template>
                      </el-table-column>

                    </el-table>


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
  export default {
    name: 'AdminPanel',
    data: () => ({

      typeMessages: '',
      textMessages: '',

      messages: null
      
    }),
    async created() {
      this.getMessages();
    },
    computed:{
      title(){ return this.$router.currentRoute.meta.title},
    },
    methods: {

      getMessages(){
        this.postMethod('system.getMessage')
        .then((response) => {
          this.messages = response;
          console.log(response);
        });
      },

      addMessage(){
        this.postMethod('system.addMessage', {
          type: this.typeMessages,
          text: this.textMessages
        }).then((response) => {
          this.getMessages();
        });
      },

      deleteMessege(id){
        this.postMethod('system.deleteMessage', {
          id
        }).then((response) => {
          this.getMessages();
        });
      }
      
    }
  }
</script>

<style lang='scss' scoped>
  .icon{
    font-size: 18px;
    color: #949393;
  }
</style>