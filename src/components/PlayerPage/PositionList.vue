<template>
  <div class="position-list">
  <select class="position-list__select" :value="selected" @input="send($event.target.value)">
    <option class="position-list__option" value="controls">на панели</option>
    <option class="position-list__option" value="controls-right">на панели справа</option>
    <option class="position-list__option" value="center">центр</option>
    <option class="position-list__option" value="top">вверху</option>
    <option class="position-list__option" value="top-left">вверху слева</option>
    <option class="position-list__option" value="top-right">вверху справа</option>
    <option class="position-list__option" value="left">слева</option>
    <option class="position-list__option" value="right">справа</option>
    <option class="position-list__option" value="bottom">снизу</option>
    <option class="position-list__option" value="bottom-left">снизу слева</option>
    <option class="position-list__option" value="bottom-right">снизу справа</option>
    <option class="position-list__option" value="timeline">на таймлайне</option>
  </select>
  </div>
</template>

<script>
  export default {
    name: 'PositionList',
    model: {
      prop: 'selected',
      event: 'change'
    },
    props: ['selected'],
    methods: {
      send: function(value){
          this.$emit('change', value);
      }
    }
  }
</script>

<style lang='scss' scoped>
  
.position-list{}
.position-list__select{
    width: 100%;
    max-width: 150px;
    display: block;
    color: #595e65;
    padding: 8px 15px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #cacaca;
    background: #fff;
    margin-bottom: 10px;
}
.position-list__option{}

</style>