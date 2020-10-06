<template>
  <el-color-picker v-model="colorSet" size="small" :show-alpha="showAlpha"></el-color-picker>
</template>

<script>
    export default {
		name: 'Color',
		model: {
			prop: 'color',
			event: 'change'
		},
        // props: ['color', 'show-alpha'],
        props: {
            color: {
                type: String
            },
            showAlpha: {
                type: Boolean,
                default: false
            },
        },
		computed:{

			colorSet:{
				get: function () {
					return this.color;
				},
				set: function (newValue) {
                    if(newValue == null){ newValue = 'transparent'}
					this.$emit('change', newValue);
				}
			}

  		}
	}
</script>

<style>

</style>