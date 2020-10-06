<template>
   <div>
   
    <el-row :gutter="20">

      <el-col :span="6">
        <label class="form__label--small">Отступы</label>
        <indents v-model="value.style.padding"></indents>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <color v-model="value.style.background" show-alpha></color>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Отступ</label>
        <indents v-model="value.style.bottom" :count="1"></indents>
      </el-col>


      <el-col :span="6">
				<label class="form__label--small">Высота полосы</label>
				<value-px v-model="value.styleLine.height"></value-px>
			</el-col>
			<el-col :span="3">
        <label class="form__label--small">Цвет полосы</label>
        <color v-model="value.styleLine.background" show-alpha></color>
      </el-col>
			
			<el-col :span="3">
        <label class="form__label--small">Цвет заполнения</label>
        <color v-model="value.stylePlay.background" show-alpha></color>
      </el-col>

			<el-col :span="3">
        <label class="form__label--small">Цвет буфера</label>
        <color v-model="value.styleLoad.background" show-alpha></color>
      </el-col>


      <el-col :span="3">
        <label class="form__label--small">Цвет курсора</label>
        <color v-model="value.stylePoint.background" show-alpha></color>
      </el-col>

      <el-col :span="6">
        <label class="form__label--small">Маштаб курсора</label>
        <scale v-model="value.stylePoint.transform"></scale>
      </el-col>

      <el-col :span="6">
				<label class="form__label--small">Скругление курсора</label>
				<value-px v-model="value.stylePoint.borderRadius"></value-px>
			</el-col>

      <el-col :span="6">
        <el-divider content-position="left">Курсор</el-divider>
				<border v-model="value.stylePoint.border"></border>
			</el-col>

    </el-row>

  </div>
</template>

<script>

	import Border from '~/components/PlayerPage/ComponentsStyles/Border';
  import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
  import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';
  import Scale from '~/components/PlayerPage/ComponentsStyles/Scale';
  import Color from '~/components/PlayerPage/ComponentsStyles/Color';

  export default {
    name: 'LinePanel',
    components: {
			'value-px': ValuePx,
			'indents': Indents,
      'border': Border,
      'scale': Scale,
			'color': Color
		},
    props: ['value'],
    data: () => {return{
        
    }},
  }

</script>

<style>

</style>