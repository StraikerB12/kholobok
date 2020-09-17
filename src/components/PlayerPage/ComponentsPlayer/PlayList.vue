<template>
  <div>

    <el-row :gutter="20">

			<el-col :span="6">
        <label class="form__label--small">Отступ</label>
        <indents v-model="value.styleSelect.margin" :count="1"></indents>
      </el-col>

			<el-col :span="6">
				<border v-model="value.styleInput.border"></border>
			</el-col>
			
			<el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <el-color-picker v-model="value.styleInput.background" size="small" show-alpha></el-color-picker>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет текста</label>
        <el-color-picker v-model="value.styleInput.color" size="small"></el-color-picker>
      </el-col>

			<el-col :span="6">
        <el-divider content-position="left">Внутренние отступы</el-divider>
        <indents v-model="value.styleInput.padding" :count="2"></indents>
      </el-col>

			<el-col :span="3">
				<label class="form__label--small">Скругление</label>
				<value-px v-model="value.styleInput.borderRadius"></value-px>
			</el-col>

			<el-col :span="3">
				<label class="form__label--small">Размер текста</label>
				<value-px v-model="value.styleInput.fontSize"></value-px>
			</el-col>

		</el-row>

		<el-row :gutter="20">


			<el-col :span="24">
        <el-divider content-position="left">Элементы</el-divider>
			</el-col>

			<el-col :span="6">
        <el-divider content-position="left">Внутренние отступы</el-divider>
        <indents v-model="value.styleItem.padding" :count="2"></indents>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет фона под курсором</label>
        <el-color-picker v-model="value.styleItemHover.background" size="small" show-alpha></el-color-picker>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет фона выбранного</label>
        <el-color-picker v-model="value.styleItemSelect.background" size="small" show-alpha></el-color-picker>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет текста выбранного</label>
        <el-color-picker v-model="value.styleItemSelect.color" size="small"></el-color-picker>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет текста</label>
        <el-color-picker v-model="value.styleItem.color" size="small"></el-color-picker>
      </el-col>
			
			<el-col :span="6">
				<label class="form__label--small">Скругление</label>
				<value-px v-model="value.styleList.borderRadius"></value-px>
			</el-col>

			

			

			

    </el-row>

  </div>
</template>

<script>

	import Border from '~/components/PlayerPage/ComponentsStyles/Border';
	import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
	import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';

	export default {
		name: 'PlayList',
		components: {
			'value-px': ValuePx,
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