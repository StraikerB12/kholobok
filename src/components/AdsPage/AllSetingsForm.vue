<template>
  <div>

    <el-dialog
      title="Общие настройки"
      :visible.sync="visibleP"
      width="1000px"
      :before-close="close">

    

      <div class="">
        <el-row :gutter="20">
          <el-col :span="12">
          
            <div class="form__grup">
              <label class="form__grup-label">Время без рекламы</label>
              <el-row :gutter="20">

                <el-col :span="12">
                  <div class="form__element-form">
                    <label class="form__label" for="">Минимально</label>
                    <el-input
                      class="form__input"
                      v-model="setings.timeMin"
                      clearable>
                    </el-input>
                  </div>
                </el-col>

                <el-col :span="12">
                  <div class="">
                    <label class="form__label" for="">Максимально</label>
                    <el-input
                      class="form__input"
                      v-model="setings.timeMax"
                      clearable>
                    </el-input>
                  </div>
                </el-col>

              </el-row>

            </div>
          

          </el-col>
        </el-row>

        <!-- <el-row :gutter="20">
          <el-col :span="6">
          </el-col>
          <el-col :span="6">  
          </el-col>
        </el-row> -->

      </div>

        

        <div slot="footer" class="dialog-footer">
          <el-button @click="close">Отмена</el-button>
          <el-button type="primary" @click="handle();">Сохранить</el-button>
        </div>

    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'AllSetingsForm',
    props: ['visible'],
    data: () => ({
      visibleP: false,

      setings: {
        maxTime: 0,
        minTime: 0
      }
    }),
    async created() {

      
      
    },
    computed:{
      
    },
    watch: {
      visible: function (newValue, oldValue) {
        if(newValue){
          this.init();
          this.visibleP = true;
        }
      },
    },
    methods: {

      init(){
        this.postMethod('ads.getSetings', {})
        .then((data) => {
          console.log(data);

          this.setings = data;
        });
      },

      close(){
        this.visibleP = false;
        this.$emit('close');
      },

      handle(){
        this.postMethod('ads.saveSetings', {
          setings: this.setings
        })
        .then((e) => {
          this.close();
        });
      },

    }
  }
</script>

<style lang='scss' scoped>
  
</style>