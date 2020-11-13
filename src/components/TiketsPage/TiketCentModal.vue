<template>
  <el-dialog
    title="Вывод средств"
    :visible.sync="visibleStep"
    width="300px"
    :before-close="close">

    <label class="form__label">Сумма вывода</label>
    <el-input
      class="form__input"
      :rows="2"
      v-model="titleTiket"
      clearable>
    </el-input>
    <p class="error" v-if="titleTiket > data.summ">Сумма превышает остаток на счету</p>

    <label class="form__label">кошелек вывода</label>
    <el-select v-model="centSelect" class="form__input">
      <el-option
        v-for="item in cent"
        :key="item.key"
        :label="item.name"
        :value="item.key">
      </el-option>
    </el-select>

    <div slot="footer" class="dialog-footer">
      <el-button @click="close()">Отмена</el-button>
      <el-button type="primary" @click="sendTiket()">Вывести</el-button>
    </div>


  </el-dialog>
</template>

<script>

  export default {
    name: 'TiketCentModal',
    props: ['visible', 'data'],
    data: () => ({
      visibleStep: false,
      textTiket: '',
      titleTiket: '',

      centSelect: null,
      cent: [
        {
          name: 'Янедкс кошелек',
          key: 'yandex'
        },
        {
          name: 'WebMoney',
          key: 'webMoney'
        },
        {
          name: 'QiWi',
          key: 'qiwi'
        },
        {
          name: 'Банковская карта',
          key: 'card'
        }
      ],

    }),

    watch: {
      visible: function (newValue) {
        if(newValue) this.visibleStep = true;

        this.cent = this.cent.filter(item => this.data.cent[item.key] != null );
      },
    },

    methods: {

      close(){
        this.visibleStep = false;
        this.$emit('close');
      },

      sendTiket(){
        if(this.titleTiket != '' && this.centSelect != null){
          this.postMethod('tikets.addCent', {
            title: this.titleTiket,
            cent: this.centSelect
          }).then(() => {
            this.close();
          });
        }else{
          this.$message.error('Заполните все поля');
        }
      },

    }
  }
</script>

<style lang='scss' scoped>
    .error{
      font-size: 12px;
      color: #a75454;
    }
</style>