<template>
  <input type="number" min="0" :step="step" :class="classk" :value="namber" @input="send($event.target.value)">
</template>

<script>
  export default {
    name: 'InputNamber',
    model: {
      prop: 'namber',
      event: 'change'
    },
    props: ['namber', 'classk', 'step'],
    methods: {
      send: function(value){
        this.$emit('change', Number(value) );
      }
    }
  }
</script>

<style lang='scss' scoped>
  
</style>