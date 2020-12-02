<template>
  <el-dialog
    title="Фильтр"
    :visible.sync="visibleStep"
    width="800px"
    :before-close="close">

    <el-row :gutter="20">
      <el-col :span="8">
        <!-- Update video bd -->
        <div class="panels__panel">
          
          <span class="panels__title">Загрузка с VideoDB</span>
          <p class="panels__info" v-if="next">Требуется загрузка</p>
          <div>
            <p class="panels__text">Загруженно: {{ count_vdb }} фаилов</p>
            <p class="panels__text">Шагов: <input class="panels__input-let" type="text" v-model="steps"> < 6 </p>
          </div>
          <div class="panels__progress-bar">
            <div v-if="preolaoded">
              <div class="panels__progress-text">
                {{ progress }}%
                <div class="preolaoded">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <!-- <div class="panels__progress-text">updateOffset {{ updateOffset }}</div> -->
              <div class="panels__progress">
                <div class="panels__progress-item" :style=" 'width:'+ progress +'%' "></div>
              </div>
            </div>
          </div>
          <button class="form__button" v-on:click="clickBtnVDB()">Загрузить</button>
          <button class="form__button" v-on:click="clickBtnUpdateVDB()">Обновить</button>
          <div>
            <p class="panels__text">Стартовая точка: <input class="panels__input-let" type="text" v-model.number="updateUpOffset"></p>
          </div>
          <div class="panels__progress-bar">
            <div v-if="preolaodedUp">
              <div class="panels__progress-text">
                {{ progressUp }}% / {{ stepsUp }}
                <div class="preolaoded">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="panels__progress">
                <div class="panels__progress-item" :style=" 'width:'+ progressUp +'%' "></div>
              </div>
            </div>
          </div>

        </div>
        <!-- End update video bd -->
      </el-col>

      <el-col :span="8">
        <span class="panels__title">Загрузка с KinoPoisk</span>
        <div>
          <p class="panels__text">Загруженно: {{ kinoPoisk.countDropVideo }} из {{ kinoPoisk.countVideo }}</p>
          <p class="panels__text">Шагов: <input class="panels__input-let" type="text" v-model="kinoPoisk.steps"> < 6 </p>
          <button class="form__button" v-on:click="clickBtnKinoPoisk()">Загрузить</button>

          <el-progress v-if="kinoPoisk.update" :percentage="progressKinoPoisk" color="#38cf99"></el-progress>
          <p v-else-if="kinoPoisk.startUpdate" class="panels__text">Завершено</p>

        </div>
      </el-col>
    </el-row>

  </el-dialog>
</template>

<script>
  export default {
    name: 'SetingsBDForm',
    props: ['visible'],
    data(){return{
      visibleStep: false,


      count_vdb: 0,

      updateOffset: 0,//this.data.videodb.count_vdb,
      steps: 2,
      next: null,
      preolaoded: false,

      updateUpOffset: 0,
      preolaodedUp: false,
      stepsUp: 0,

      kinoPoisk: {
        countVideo: 0,
        countDropVideo: 0,
        steps: 0,
        countInStep: 5,
        progressSteps: 0,
        update: false,
        startUpdate: false
      }
    }},

    created: function () {
      console.log(this.isRight);
      if(this.isRight)this.init();
    },

    watch: {
      visible: function (newValue) {
        if(newValue) this.visibleStep = true;
      },

      'kinoPoisk.progressSteps': function (newValue) {
        if(newValue == 0) this.kinoPoisk.update = false;
      },


      updateOffset: function () {
        if(this.progress == 100){
          this.preolaoded = false;
          this.count_vdb = this.updateOffset;
          this.$emit('start');
        }
      },
      updateUpOffset: function () {
        if(this.progressUp == 100){
          // this.preolaodedUp = false;
          this.$emit('start');
        }
      }
    },

    computed: {
      progressKinoPoisk: function () {
        let rezult = 100 / (this.kinoPoisk.steps / (this.kinoPoisk.steps - this.kinoPoisk.progressSteps));
        console.log(this.kinoPoisk.steps, this.kinoPoisk.progressSteps, rezult);
        return Math.round(rezult);
      },

      
      progress: function () {
        var rezult = (this.updateOffset - this.count_vdb) / (50 * this.steps) * 100;
        return Math.round(rezult);
      },
      progressUp: function () {
        var rezult = 100 / (this.count_vdb / this.updateUpOffset);
        return Math.floor(rezult);
      },
      offsetPage: function () {
        return this.paginCount * (this.page - 1);
      },

      

      isRight(){
        return this.$store.state.user.status == 'client' || this.$store.state.user.status == 'managing' ? false : true;
      },
    },

    methods: {
      close(){
        this.visibleStep = false;
        this.$emit('close');
      },


      init(){
        this.postMethod('videos.info').then(({count, countVideo, countDropVideo, kinoPoisk}) => {
          this.count_vdb = count;
          this.updateOffset = count;

          this.kinoPoisk.countVideo = countVideo;
          this.kinoPoisk.countDropVideo = countDropVideo;

          console.log(kinoPoisk);
        });
      },


      clickBtnKinoPoisk(){
        this.kinoPoisk.progressSteps = this.kinoPoisk.steps;
        this.addKinoPoisk(this.kinoPoisk.progressSteps);
      },





      clickBtnUpdateVDB(){
        this.preolaodedUp = true;
        this.updateAddVideoDB();
      },

      updateAddVideoDB(){
        // Проверка рекурсивного случая
        if(this.updateUpOffset < this.count_vdb){
          // Запрос к api
          this.postMethod('addVideoDB', {
            offset: this.updateUpOffset
          }).then((response) => {
            console.log(response);
            this.updateUpOffset = this.updateUpOffset + 50;
            this.stepsUp = this.stepsUp + response.steps;
            this.updateAddVideoDB(); // Рекурсивный вызов
          })
        }
      },

      clickBtnVDB(){
        this.preolaoded = true;
        this.addVideoDB(this.steps);
      },

      // Рекурсивная загрузка данных
      addVideoDB(steps){
        if(steps != 0){ // Проверка рекурсивного случая
          steps = steps - 1;
          
          // Запрос к api
          // console.log(this.updateOffset);
          this.postMethod('addVideoDB', {
            offset: this.updateOffset
          }).then((response) => {
            console.log(response);
            this.updateOffset = this.updateOffset + 50;
            this.addVideoDB(steps); // Рекурсивный вызов
          })
        }
      },


      // Рекурсивная загрузка данных kinoPoisk
      addKinoPoisk(steps){
        this.kinoPoisk.startUpdate = true;
        this.kinoPoisk.update = true;
        if(steps != 0){ // Проверка рекурсивного случая
          steps = steps - 1;
          
          
          // Запрос к api
          this.postMethod('videos.addKinoPoisk', {

            limit: this.kinoPoisk.countInStep

          }).then((response) => {
            console.log(response);
            
            this.kinoPoisk.progressSteps--;

            this.init();
            this.addKinoPoisk(steps); // Рекурсивный вызов
          })
        }
      },


    }

  }
</script>

<style lang='scss' scoped>
    
  .panels__panel{
      box-shadow: 0 1px 0 #e1e2e3;
      padding: 0 0 15px 0;
      margin-bottom: 20px;
      position: relative;
  }
  .panels__info{
      font-size: 12px;
      padding: 5px;
      border: 1px solid #aecbe7;
      background: #eef6ff;
      margin-bottom: 10px;
      border-radius: 3px;
      text-align: center;
  }
  .panels__title{
      display: block;
      font-family: 'Montserrat-Bold';
      font-size: 14px;
      padding: 0 0 15px 0;
      color: #595e65;
      text-transform: uppercase;
  }
  .panels__text{
      font-size: 14px;
      padding: 4px 0;
      color: #595e65;
  }
  .panels__input{
      width: 100%;
      display: block;
      color: #595e65;
      padding: 8px 15px;
      outline: none;
      border-radius: 4px;
      border: 1px solid #cacaca;
      background: #fff;
      margin-bottom: 10px;
  }
  .panels__input-let{
      display: inline-block;
      max-width: 80px;
      padding: 3px 8px;
      border-radius: 3px;
      border: 1px solid #aecbe7;
      margin: 0 5px;
      outline: none;
      color: #595e65;
  }

  .panels__progress-bar{
      height: 50px;
  }
  .panels__progress-text{
      font-size: 12px;
      color: #c0c1c2;
      padding-top: 10px;
  }
  .panels__progress{
      width: 100%;
      height: 3px;
      background: #cbd8ec;
  }
  .panels__progress-item{
      height: 3px;
      width: 0;
      background: #40c173;
  }

  .panels__range{
      width: 100%;
      height: 2px;
      background: #cbd8ec;
      position: relative;
  }
  .panels__range-bar{
      width: 50%;
      height: 2px;
      background: #40c173;
      position: absolute;
  }
  .panels__range-btn{
      position: absolute;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 20px;
      border: 1px solid #cbd8ec;
      top: -9px;
      cursor: pointer;
  }
  .panels__range-nom{
      padding: 10px 0;
      margin-bottom: 10px;
      overflow: hidden;
      font-size: 14px;
  }
  .panels__range-nom span:first-child{
      float: left;
  }
  .panels__range-nom span:last-child{
      float: right;
  }

  @keyframes sk-three-bounce {
      0%, 80%, 100% {
        transform: scale(0.5);
        background: #424242;
      }
      40% {
        transform: scale(1.0);
        background: #adadad;
      }
  }



  /* Preolaoded */
  .preolaoded{
      display: inline-block;
      padding: 5px;
  }
  .preolaoded span{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 5px;
      background: #424242;

      -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
      animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  }
  .preolaoded span:nth-child(1){
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
  }
  .preolaoded span:nth-child(2){
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
  }

</style>