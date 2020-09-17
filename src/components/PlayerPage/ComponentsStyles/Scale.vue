<template>
  <el-input-number
    class="form__input--small"
    controls-position="right"
    :min="0" :max="5" :step="0.1"
    v-model="scaleSet"
    clearable>
  </el-input-number>
</template>

<script>
export default {
  name: 'Scale',
  model: {
    prop: 'scale',
    event: 'change'
  },
  props: ['scale'],
  data: () => {return{
    stringOut: ''
  }},
  computed:{

    scaleSet:{
      get: function () {
        let transform = this.scale.split(' ');

        let start = transform[0].indexOf('(') + 1;
        let end = transform[0].indexOf(')');
        
        transform.splice(0, 1);
        this.stringOut = transform.join(' ');

        return  parseFloat( this.scale.split(' ')[0].slice(start, end) );
      },
      set: function (newValue) {
        if(newValue == ''){this.$emit('change', 'scale(0) translateX(-50%) translateY(-50%)'); return;}
        this.$emit('change', `scale(${newValue}) ${this.stringOut}`);
      }
    }

  }
}
</script>

<style>

</style>