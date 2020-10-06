<template>
  <div>
   
    <el-row :gutter="20">

		<el-col :span="3">
			<label class="form__label--small">Отступ</label>
			<indents v-model="value.style.padding" :count="1"></indents>
		</el-col>

		<el-col :span="3">
			<label class="form__label--small">Цвет фона</label>
			<color v-model="value.style.background" show-alpha></color>
		</el-col>

		<el-col :span="6">
			<label class="form__label--small">Скругление</label>
			<value-px v-model="value.style.borderRadius"></value-px>
		</el-col>

		<el-col :span="6">
			<border v-model="value.style.border"></border>
		</el-col>

		<el-col :span="6">
			<label class="form__label--small">Разделитель</label>
			<el-input class="form__input--small" controls-position="right" v-model="value.duration"></el-input>
		</el-col>

    </el-row>

  </div>
</template>

<script>

	import Border from '~/components/PlayerPage/ComponentsStyles/Border';
	import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
	import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';
	import Color from '~/components/PlayerPage/ComponentsStyles/Color';

	export default {
		name: 'TimePanel',
		components: {
			'value-px': ValuePx,
			'indents': Indents,
			'border': Border,
			'color': Color
		},
		props: ['value'],
		data: () => {return{

		}},
	}

</script>

<style>

</style>