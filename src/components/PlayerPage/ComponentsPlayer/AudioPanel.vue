<template>
  <div>
   
    <el-row :gutter="20">

      <el-col :span="3">
        <label class="form__label--small">Отступ</label>
        <indents v-model="value.style.padding" :count="1"></indents>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <el-color-picker v-model="value.style.background" size="small" show-alpha></el-color-picker>
      </el-col>

      <el-col :span="6">
				<label class="form__label--small">Скругление</label>
				<border-radius v-model="value.style.borderRadius"></border-radius>
			</el-col>

			<el-col :span="6">
				<border v-model="value.style.border"></border>
			</el-col>
			
    </el-row>

		<el-row :gutter="20">
			<el-col :span="6">
				<el-divider content-position="left">Под курсором</el-divider>
			</el-col>
		</el-row>

		<el-row :gutter="20">

			<el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <el-color-picker v-model="value.styleHover.background" size="small" show-alpha></el-color-picker>
      </el-col>

		</el-row>

  </div>
</template>

<script>

  import BorderRadius from '~/components/PlayerPage/ComponentsStyles/BorderRadius';
	import Border from '~/components/PlayerPage/ComponentsStyles/Border';
	import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';

	export default {
		name: 'AudioPanel',
		components: {
			'border-radius': BorderRadius,
			'indents': Indents,
			'border': Border
		},
		props: ['value'],
		data: () => {return{

		}},
	}

</script>

<style>

</style>