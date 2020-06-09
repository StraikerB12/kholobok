<template>
  <div class="paddings-panel">
    <input class="paddings-panel__input" type="number" min="0" :value="padding.top" @input="send($event.target.value, `top`)">
    <input class="paddings-panel__input" type="number" min="0" :value="padding.left" @input="send($event.target.value, `left`)">
    <input class="paddings-panel__input" type="number" min="0" :value="padding.bottom" @input="send($event.target.value, `bottom`)">
    <input class="paddings-panel__input" type="number" min="0" :value="padding.right" @input="send($event.target.value, `right`)">
  </div>
</template>

<script>
  export default {
    name: 'PaddingInput',
     data: function(){return {
        padding: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
    }},
    created: function () {
      this.apdatePadding();
    },
    model: {
      prop: 'paddings',
      event: 'change'
    },
    props: ['paddings'],
    watch: {
      paddings: function(){ this.apdatePadding();}
    },
    methods: {
      send: function(value, type){
        this.padding[type] = value;
        const {top, left, bottom, right} = this.padding;
        this.$emit('change', `${top} ${left} ${bottom} ${right}`);
      },
      apdatePadding: function(){
        const arr = this.paddings.split(' ');
        this.padding.top = arr[0];
        this.padding.left = arr[1];
        this.padding.bottom = arr[2];
        this.padding.right = arr[3];
      }
    }
  }
</script>

<style lang='scss' scoped>
  
.paddings-panel{
    overflow: hidden;
}
.paddings-panel__input{
    width: 100%;
    float: left;
    margin-right: 5px;
    max-width: 60px;
    display: block;
    color: #595e65;
    padding: 8px 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #cacaca;
    background: #fff;
    margin-bottom: 10px;
}
</style>