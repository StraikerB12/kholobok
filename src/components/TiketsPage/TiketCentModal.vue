<template>
  <el-dialog
    title="Вывод средств"
    :visible.sync="visibleStep"
    width="300px"
    :before-close="close">

    <label class="form__label">Сумма вывода</label>
    <el-input-number
      class="form__input"
      :rows="2"
      :controls="false"
      v-model="titleTiket"
      clearable>
    </el-input-number>
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

    <span style="text-align: center; color: #b1b1b1; padding-top: 10px">Вывод средств осуществляется в первую неделю месяца</span> 

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
        if( !(this.titleTiket != '' && this.centSelect != null) ){ this.$message.error('Заполните все поля'); return; }
        if( this.titleTiket > this.data.summ ){ this.$message.error('Сумма больше остатка по счету'); return; }


        this.postMethod('tikets.addCent', {
          title: this.titleTiket,
          cent: this.centSelect
        }).then(() => {
          this.close();
        });

        
          
        
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