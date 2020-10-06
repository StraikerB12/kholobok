<template>
  <div>
   
    <el-row :gutter="20">

      <el-col :span="6">
        <label class="form__label--small">Отступ</label>
        <indents v-model="value.style.padding" :count="1" config="left-right"></indents>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Цвет фона</label>
        <color v-model="color" show-alpha></color>
      </el-col>

      <el-col :span="3">
        <label class="form__label--small">Градиент</label>
        <el-switch v-model="gradient" @change="color = color"></el-switch>
      </el-col>

      <el-col :span="6">
        <label class="form__label--small">Высота</label>
        <value-px v-model="value.style.height"></value-px>
      </el-col>

    </el-row>

  </div>
</template>

<script>

  import Indents from '~/components/PlayerPage/ComponentsStyles/Indents';
  import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';
  import Color from '~/components/PlayerPage/ComponentsStyles/Color';

  export default {
    name: 'Panel',

    components: {
      'indents': Indents,
      'value-px': ValuePx,
			'color': Color
    },
    props: ['value'],
    data: () => {return{
      gradient: false,

      padding: '0 5px',
      background: 'rgba(255, 255, 255, 0)',
      height: '50px',

    }},

    computed:{
      color:{
        get: function () {
          if(this.value.style.background.indexOf('linear-gradient') != -1){
            this.gradient = true;
            let start = this.value.style.background.indexOf('),') + 3;
            let end = this.value.style.background.indexOf('))') + 1;
            return this.value.style.background.slice(start, end);
          }
          return this.value.style.background;
        },
        set: function (newValue) { 
          if(this.gradient) {this.value.style.background = `linear-gradient(rgba(255, 255, 255, 0), ${newValue})`; return;}
          this.value.style.background = newValue;
        }
      },
    },

  }
</script>

<style>

</style>