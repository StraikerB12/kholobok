<template>
  <div>
   
    <el-row :gutter="20">

			<el-col :span="6">
        <label class="form__label--small">Отступы</label>
        <indents v-model="value.style.margin"></indents>
      </el-col>

			<el-col :span="6">
				<border v-model="value.style.border"></border>
			</el-col>

			<el-col :span="3">
				<label class="form__label--small">Скругление</label>
				<value-px v-model="value.style.borderRadius"></value-px>
			</el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет текста</label>
        <el-color-picker v-model="value.style.color" size="small"></el-color-picker>
      </el-col>

			<el-col :span="6">
        <label class="form__label--small">Цвет фона</label>
        <el-color-picker v-model="value.style.background" size="small" show-alpha></el-color-picker>
      </el-col>

			<el-col :span="6">
				<label class="form__label--small">Размер текста</label>
				<value-px v-model="value.style.fontSize"></value-px>
			</el-col>

		</el-row>

		<el-row :gutter="20">


			<el-col :span="24">
        <el-divider content-position="left">Элементы</el-divider>
			</el-col>

			<el-col :span="6">
        <label class="form__label--small">Отступы</label>
        <indents v-model="value.styleItem.padding"></indents>
      </el-col>

			<el-col :span="6">
        <label class="form__label--small">Цвет фона под курсором</label>
        <el-color-picker v-model="value.styleItemHov.background" size="small" show-alpha></el-color-picker>
      </el-col>

			<el-col :span="6">
        <label class="form__label--small">Цвет фона выбранного</label>
        <el-color-picker v-model="value.styleItemActiv.background" size="small" show-alpha></el-color-picker>
      </el-col>



    </el-row>

  </div>
</template>

<script>

	import Border from '~/components/PlayerPage/ComponentsStyles/Border';
	import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
	import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';

	export default {
			name: 'Menu',
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