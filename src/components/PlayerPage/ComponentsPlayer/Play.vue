<template>
    <div>
   
      <el-row :gutter="20">

        <el-col :span="6">
          <label class="form__label--small">Отступ</label>
          <indents v-model="value.style.padding" :count="1"></indents>
        </el-col>

        <el-col :span="6">
          <label class="form__label--small">Скругление</label>
          <border-radius v-model="value.style.borderRadius"></border-radius>
        </el-col>

        <el-col :span="6">
          <label class="form__label--small">Маштаб</label>
          <scale v-model="value.style.transform"></scale>
        </el-col>

        <el-col :span="6">
          <label class="form__label--small">Цвет фона</label>
          <color v-model="value.style.background" show-alpha></color>
        </el-col>

      </el-row>

      <el-row :gutter="20">

        <el-col :span="12">
          <el-divider content-position="left">Внешние отступы</el-divider>
          <indents v-model="value.style.margin"></indents>
        </el-col>
        
        <el-col :span="12">
          <el-divider content-position="left">Под курсором</el-divider>
        </el-col>

        <el-col :span="6">
          <label class="form__label--small">Маштаб</label>
          <scale v-model="value.styleHover.transform"></scale>
        </el-col>

        <el-col :span="6">
          <label class="form__label--small">Цвет фона</label>
          <color v-model="value.styleHover.background" show-alpha></color>
        </el-col>


      </el-row>

    </div>
</template>

<script>


  import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
  import BorderRadius from '~/components/PlayerPage/ComponentsStyles/BorderRadius';
  import Scale from '~/components/PlayerPage/ComponentsStyles/Scale';
  import Color from '~/components/PlayerPage/ComponentsStyles/Color';

  export default {
    name: 'Play',
    components: {
      'indents': Indents,
      'border-radius': BorderRadius,
      'scale': Scale,
			'color': Color
    },
    props: ['value'],
    data: () => {return{

      margin: '10px 10px 5px 5px',
      padding: '10px',
      borderRadius: '50%',
      background: 'rgba(19, 206, 102, 0.8)',
      transform: 'scale(2.2) translateX(-50%) translateY(-50%)'

    }},
  }
</script>

<style lang='scss'>

</style>