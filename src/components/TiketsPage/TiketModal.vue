<template>
  <el-dialog
    title="Создание тикета"
    :visible.sync="visibleStep"
    width="800px"
    :before-close="close">

    <label class="form__label">{{ type == 'film' ? 'Название фильма' : 'Тема обращения' }}</label>
    <el-input
      class="form__input"
      :rows="2"
      v-model="titleTiket"
      clearable>
    </el-input>

    <label class="form__label">Текст обращения</label>
    <el-input
      class="form__input" 
      type="textarea" 
      :rows="8" 
      v-model="textTiket" 
      clearable>
    </el-input>

    <div slot="footer" class="dialog-footer">
      <el-button @click="close()">Отмена</el-button>
      <el-button type="primary" @click="sendTiket()">Отправить</el-button>
    </div>


  </el-dialog>
</template>

<script>

  export default {
    name: 'TiketModal',
    props: ['visible', 'type'],
    data: () => ({
      visibleStep: false,
      textTiket: '',
      titleTiket: ''
    }),

    watch: {
      visible: function (newValue) {
        if(newValue) this.visibleStep = true;
      },
    },

    methods: {

      close(){
        this.visibleStep = false;
        this.$emit('close');
      },

      sendTiket(){
        this.postMethod('tikets.add', {
          tupe: this.type,
          title: this.type == 'film' ? 'Заказ фильма: ' + this.titleTiket : this.titleTiket,
          message: this.textTiket
        }).then(() => {
          this.close();
        })
      },

    }
  }
</script>

<style lang='scss' scoped>
    
</style>