<template>
  <div class="color-picker">
    <div class="color-picker__title"> #{{ hex }} </div>
    <div class="color-picker__color" v-on:click="showForm()" :style="{ backgroundColor: '#'+ hex}">
      <div :class="{ 'color-picker__color-modal--show': showFlag }" class="color-picker__color-modal">
        <compact-picker :value="hex" @input="send($event)"></compact-picker>
      </div>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>
  import { Chrome } from 'vue-color'

  export default {
    name: 'ColorPicker',
    components:{
      'compact-picker': Chrome
    },
    data: function(){return {
      showFlag: false
    }},
    model: {
      prop: 'hex',
      event: 'change'
    },
    props: ['hex'],
    methods: {
      send: function(value){
        this.$emit('change', value.hex.split('#')[1]);
      },
      showForm: function(){
        this.showFlag = !this.showFlag;
      }
    }
  }
</script>

<style lang='scss' scoped>
  
.color-picker{
    padding: 1px;
}
.color-picker__title{
    width: 90px;
    font-size: 14px;
    padding: 8px 10px;
    line-height: 14px;
    float: left;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #d0d2d3;
    margin-right: 4px;
}
.color-picker__color{
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #d0d2d3;
    position: relative;
    cursor: pointer;
}
.color-picker__color-modal{
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 34px;
    padding: 1px;
    box-shadow: inset 0 0 0 1px #d0d2d3;
    border-radius: 5px;
}
.color-picker__color-modal--show{
    max-width: 1000px;
    max-height: 1000px;
}
</style>