<template>
  <div>
   
    <el-row :gutter="20">

      <el-col :span="6">
        <label class="form__label--small">Отступы</label>
        <indents v-model="value.style.padding"></indents>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <el-color-picker v-model="value.style.background" size="small" show-alpha></el-color-picker>
      </el-col>

      <el-col :span="6">
				<border v-model="value.style.border"></border>
			</el-col>

      <el-col :span="6">
				<label class="form__label--small">Скругление</label>
				<value-px v-model="value.style.borderRadius"></value-px>
			</el-col>

      <el-col :span="3">
        <label class="form__label--small">Отступ</label>
        <indents v-model="value.style.marginBottom" :count="1"></indents>
      </el-col>

      <!-- <el-col :span="3">
        <label class="form__label--small">Прозрачность</label>
        <el-input-number class="form__input--small" controls-position="right" :min="0" :step="0.1" :max="1" v-model="value.styleHover.opacity" clearable></el-input-number>
      </el-col> -->

      <el-col :span="6">
				<label class="form__label--small">Высота</label>
				<value-px v-model="value.styleHover.height"></value-px>
			</el-col>

      <el-col :span="6">
				<label class="form__label--small">Ширина полосы</label>
				<value-px v-model="value.styleLine.width"></value-px>
			</el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет полосы</label>
        <el-color-picker v-model="value.styleLine.background" size="small" show-alpha></el-color-picker>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет заполнения</label>
        <el-color-picker v-model="value.stylePlay.background" size="small" show-alpha></el-color-picker>
      </el-col>


      <el-col :span="3">
        <label class="form__label--small">Цвет курсора</label>
        <el-color-picker v-model="value.stylePoint.background" size="small" show-alpha></el-color-picker>
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

  export default {
    name: 'LevelPanel',
    components: {
			'value-px': ValuePx,
			'indents': Indents,
      'border': Border,
      'scale': Scale
		},
    props: ['value'],
    data: () => {return{
        
    }},
  }

</script>

<style>

</style>