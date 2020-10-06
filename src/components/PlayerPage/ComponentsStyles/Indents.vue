<template>
  <div>
    <el-row :gutter="5">

      <el-col :span="cols" v-if="count > 0">

        <label v-if="count > 2" class="form__label--small" for="">Верх</label>
        <label v-if="count == 2" class="form__label--small" for="">Верх Низ</label>

        <el-input
          class="form__input--small"
          controls-position="right"
          @input="send"
          v-model.number="top">
        </el-input>
      </el-col>

      <el-col :span="cols" v-if="count > 1">
        <div class="">

          <label v-if="count > 2" class="form__label--small" for="">Право</label>
          <label v-if="count == 2" class="form__label--small" for="">Право Лево</label>

          <el-input
            class="form__input--small"
            controls-position="right"
            @input="send"
            v-model.number="right">
          </el-input>
        </div>
      </el-col>
      
      <el-col :span="cols" v-if="count > 2">
        <div class="">
          <label class="form__label--small" for="">Низ</label>
          <el-input
            class="form__input--small"
            controls-position="right"
            @input="send"
            v-model.number="bottom">
          </el-input>
        </div>
      </el-col>

      <el-col :span="cols" v-if="count > 3">
        <div class="">
          <label class="form__label--small" for="">Лево</label>
          <el-input
            class="form__input--small"
            controls-position="right"
            @input="send"
            v-model.number="left">
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Indents',
    data: () => {return{
      cols: 6,
      nums: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }},
    model: {
      prop: 'indents',
      event: 'change'
    },
    props: {
      indents: {
        type: String
      },
      count: {
        type: Number,
        default: 4
      },
      config: {
        type: String,
        default: 'standart'
      }
    },
    created() {
      this.apdatePadding();
      if(this.count > 0) this.cols = 24;
      if(this.count > 1) this.cols = 12;
      if(this.count > 2) this.cols = 8;
      if(this.count > 3) this.cols = 6;
    },
    computed:{
      top:{
        get: function () {  return  this.nums.top; },
        set: function (newValue) { if(newValue == ''){this.nums.top = 0; return;} this.nums.top = newValue }
      },
      right:{
        get: function () { return  this.nums.right; },
        set: function (newValue) { if(newValue == ''){this.nums.right = 0; return;} this.nums.right = newValue }
      },
      bottom:{
        get: function () { return  this.nums.bottom; },
        set: function (newValue) { if(newValue == ''){this.nums.bottom = 0; return;} this.nums.bottom = newValue }
      },
      left:{
        get: function () { return  this.nums.left; },
        set: function (newValue) { if(newValue == ''){this.nums.left = 0; return;} this.nums.left = newValue }
      }
    },
    watch: {
      paddings: function(){ this.apdatePadding() }
    },
    methods: {
      send(){
        const {top, left, bottom, right} = this.nums;
        if(this.count > 0) { 
          if(this.config == 'left-right') this.$emit('change', `0 ${top}px`);
           if(this.config == 'standart') this.$emit('change', `${top}px`);
        };
        if(this.count > 1) this.$emit('change', `${top}px ${right}px`);
        if(this.count > 2) this.$emit('change', `${top}px ${right}px ${bottom}px`);
        if(this.count > 3) this.$emit('change', `${top}px ${right}px ${bottom}px ${left}px`);
      },
      apdatePadding: function(){
        const arr = this.indents.split(' ');
        this.nums.top = parseInt(arr[0]);
        this.nums.right = parseInt(arr[1]);
        this.nums.bottom = parseInt(arr[2]);
        this.nums.left = parseInt(arr[3]);
      }
    }
}
</script>

<style>

</style>