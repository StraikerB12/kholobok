<template>
  <div class="icons-list">
    <div 
      class="icons-list__item" 
      v-for="(value, index) in icons" 
      v-on:click="inIcon(index)" 
      v-html="value.icon"
      :key="index">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconElements',
    props: ['data', 'icons'],
    methods: {
      updateObj: function(data, ini){
        for (key in ini) {
          data[key] = ini[key];
        }
      },
      inIcon: function(index){
        this.updateObj(this.data, this.icons[index]);
      }
    }
  }
</script>

<style lang='scss' scoped>
  
.icons-list{
    overflow: hidden;
    padding: 1px;
}
.icons-list__item{
    width: 24px;
    height: 24px;
    margin-right: 10px;
    float: left;
    
    cursor: pointer;
}
.icons-list__item:hover{
    box-shadow: inset 0 0 0 1px #d0d2d3;
}
.icons-list__item svg{
    transform: scale(1.2);
    position: relative;
    top:2px;
    left:2px;
}
</style>