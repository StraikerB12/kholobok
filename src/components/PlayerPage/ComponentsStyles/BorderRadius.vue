<template>
  <!-- <el-input
    class="form__input--small"
    controls-position="right"
    :min="0" :max="50"
    v-model.number="borderRadiusSet"
    clearable>
  </el-input> -->
  <el-input-number
    class="form__input--small"
    controls-position="right"
    :min="0" :step="1" :max="50"
    v-model="borderRadiusSet"
    clearable>
  </el-input-number>
</template>

<script>
export default {
  name: 'BorderRadius',
  model: {
    prop: 'radius',
    event: 'change'
  },
  props: ['radius'],
  computed:{
    borderRadiusSet:{
      get: function () {
        return parseInt(this.radius);
      },
      set: function (newValue) {
        if(newValue == ''){this.$emit('change', '0%'); return;}
        this.$emit('change', newValue + '%');
      }
    },
  }
}
</script>

<style>

</style>