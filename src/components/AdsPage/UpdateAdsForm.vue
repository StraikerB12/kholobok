<template>
  <div>

    <el-dialog
      title="Редактировать объявление"
      :visible.sync="visibleStep"
      width="1000px"
      :before-close="close">

      <div v-if="ad">
        <div class="">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="form__element-form">
                <label class="form__label" for="">Название</label>
                <el-input
                  class="form__input"
                  v-model="ad.name"
                  clearable>
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="">
                <label class="form__label" for="">Стоимость 1000 показов</label>
                <el-input
                  class="form__input"
                  v-model="ad.sale"
                  clearable>
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="">
                <label class="form__label" for="">Процент для клиентов</label>
                <el-input-number
                  class="form__input"
                  controls-position="right"
                  :min="1" :max="100"
                  v-model="ad.procent"
                  clearable>
                </el-input-number>
              </div>
            </el-col>
          </el-row>
        </div>

        <div>
          <label class="form__label" for="">Позиция рекламы</label>
          <el-radio-group size="small" v-model="ad.position">
            <el-radio-button label="start">Начало</el-radio-button>
            <el-radio-button label="center">Середина</el-radio-button>
            <el-radio-button label="end">Конец</el-radio-button>
          </el-radio-group>
        </div>


        <div class="body-content" v-if="ad.type == 'code'">

          <el-input
            class="form__input"
            type="textarea"
            :rows="2"
            v-model="ad.body">
          </el-input>

        </div>
        <div class="body-content" v-if="ad.type == 'baner'">

          <div class="form__upload-baner">
            <el-upload
              class=""
              action=""
              :auto-upload="false"
              multiple
              :on-change="handleUpload"
              :on-remove="handleRemove"
              :file-list="fileList"
              :limit="1">

              <el-button class="form__upload-baner-button">
                <i class="el-icon-picture"></i><br>
                Загрузить<br>изображение
              </el-button>
            </el-upload>

            <div class="form__upload-panel">
              <label class="form__label" for="">Тип</label>
              <el-radio-group size="small" v-model="bodyBaner.type">
                <el-radio label="HTML" border>HTML</el-radio>
                <el-radio label="SVG/JPG" border>SVG/JPG</el-radio>
              </el-radio-group>

              <label class="form__label" for="">Размер</label>
              <el-radio-group size="small" v-model="bodyBaner.size">
                <el-radio label="600х200" border>600х200</el-radio>
                <el-radio label="468х60" border>468х60</el-radio>
              </el-radio-group>
            </div>  

            <div class="form__upload-prevue">
              <label class="form__label" for="">Предпросмотр</label>
              <div class="form__upload-prevue-content">
                <div v-if="bodyBaner.body && bodyBaner.type == 'HTML'">
                  <iframe style="width:100%;height:100%;border:none;" :src="`https://api.kholobok.biz/img/ads/${bodyBaner.body}`"></iframe>
                </div>
                <div v-if="bodyBaner.body && bodyBaner.type == 'SVG/JPG'">
                  <div class="form__upload-prevue-img" :style="`width:100%;height:173px;background-image: url(https://api.kholobok.biz/img/ads/${bodyBaner.body});`"></div>
                </div>
              </div>
            </div>


          </div>
              

        </div>
        <div class="body-content" v-if="ad.type == 'link'">
          <el-input placeholder="Please input" v-model="ad.body">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>

        

        <div slot="footer" class="dialog-footer">
          <el-button @click="close">Отмена</el-button>
          <el-button type="primary" @click="handle();">Сохранить</el-button>
        </div>

      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'UpdateAdsForm',
    props: ['visible', 'data'],
    data: () => ({
      visibleStep: false,

      bodyBaner: null,

      ad: null,

      fileList: []
    }),
    async created() {

      
      
    },
    computed:{
      
    },
    watch: {
      visible: function (newValue, oldValue) {
        if(newValue){
          this.visibleStep = true;
        }
      },
      data: function (newValue) {
        if(newValue){
          console.log(this.data);
          this.ad = this.data;
          if(this.ad.type == 'baner'){
            this.bodyBaner = JSON.parse(this.ad.body);
          }
        }
      }
    },
    methods: {
      close(){
        this.visibleStep = false;
        this.$emit('close');
      },


      handle(){
        if(this.ad.type == 'baner'){
          this.ad.body = JSON.stringify(this.bodyBaner);
        }
        this.postMethod('ads.update', {
          ad: this.ad
        })
        .then((e) => {
          this.close();
        });
      },

      handleUpload(file, fileList){
        let data = new FormData();
        data.append( 'file', fileList[0].raw );
        this.postMethod('ads.upload', data)
        .then((e) => {
          this.bodyBaner.body = file.name;
        });
      },

      handleRemove(file, fileList){
        this.bodyBaner.body = null;
      },

    }
  }
</script>

<style lang='scss' scoped>
  .body-content{
    padding: 20px 0;
  }
  .button-type{
    display: block;
    margin: 0 0 10px 0;
    width: 100%;
    font-size: 15px;
    line-height: 20px;

    & .icon{
      position: relative;
      top: 2px;
      font-size: 20px;
      margin-right: 10px;
    }
  }
</style>