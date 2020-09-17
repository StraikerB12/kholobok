<template>
  <el-input-number
    class="form__input--small"
    controls-position="right"
    :min="0" :step="1"
    v-model="pxSet"
    clearable>
  </el-input-number>
</template>

<script>
	export default {
		name: 'ValuePx',
		model: {
			prop: 'px',
			event: 'change'
		},
		props: ['px'],
		computed:{

			pxSet:{
				get: function () {
					return parseInt(this.px);
				},
				set: function (newValue) {
					this.$emit('change', `${newValue}px`);
				}
			}

  	}
	}
</script>

<style>

</style>