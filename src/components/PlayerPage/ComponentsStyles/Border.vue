<template>
  <div>
    <el-row :gutter="5">

      <el-col :span="16">
        <label class="form__label--small">Толщина рамки</label>
        <value-px v-model="height" @change="send"></value-px>
      </el-col>

      <el-col :span="8">
        <label class="form__label--small">Цвет рамки</label>
        <el-color-picker v-model="color" size="small" @change="send"></el-color-picker>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import ValuePx from '~/components/PlayerPage/ComponentsStyles/ValuePx';

  export default {
    name: 'Border',
    components: {
      'value-px': ValuePx
    },
    data: () => {return{
      color: null,
      height: null
		}},
    model: {
			prop: 'border',
			event: 'change'
		},
    props: ['border'],
    created(){
      this.getBorder();
    },
    methods: {
      getBorder(){
        this.color = this.border.split(' ')[2];
        this.height = parseInt(this.border.split(' ')[0]);
      },

      send(){
        console.log('change border');
        this.$emit('change', `${this.height} solid ${this.color}`);
      }
    }
  }
</script>

<style>

</style>