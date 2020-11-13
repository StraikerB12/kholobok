<template>
  <el-dialog
    title="Фильтр"
    :visible.sync="visibleStep"
    width="800px"
    :before-close="close">

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="panels__panel"><!-- Genres -->
          <span class="panels__title">Жанры</span>
          <div class="panels__list " :class="{ 'panels__list--more': panelGenres }">
            <div class="panels__list-item" v-for="(genre, index) in genres" :key="index">
              <div class="cheked">
                <input 
                  class="cheked__input" 
                  type="checkbox" 
                  v-model="genre.show"
                  @change="change"
                  :id=" 'chekGenres'+ index">
                <label 
                  class="cheked__label" 
                  :for=" 'chekGenres'+ index">
                <div></div></label>
              </div>
              <span class="panels__list-item-text">{{ genre.name }}</span>
            </div>
          </div>
          <a class="panels__button-link" v-on:click.prevent="panelGenres = !panelGenres" href="#">
            <span v-if="panelGenres">Скрыть</span>
            <span v-else>Показать</span>
          </a>
        </div><!-- End genres -->
      </el-col>

      <el-col :span="8">
        <div class="panels__panel"><!-- Countries -->
          <span class="panels__title">Страны</span>
          <div class="panels__list" :class="{ 'panels__list--more': panelCountries }">
            <div class="panels__list-item" v-for="(country, index) in countries" :key="index">
              <div class="cheked">
                <input 
                  class="cheked__input" 
                  type="checkbox" 
                  v-model="country.show" 
                  @change="change"
                  :id=" 'chekCountries'+ index">
                <label 
                  class="cheked__label" 
                  :for=" 'chekCountries'+ index">
                <div></div></label>
              </div>
              <span class="panels__list-item-text">{{ country.name }}</span>
            </div>
          </div>
          <a class="panels__button-link" v-on:click.prevent="panelCountries = !panelCountries" href="#">
            <span v-if="panelCountries">Скрыть</span>
            <span v-else>Показать</span>
          </a>
        </div><!-- End countries -->
      </el-col>

      <el-col :span="8">
        <div class="panels__panel"><!-- Year -->
          <span class="panels__title">Год</span>
          <div class="panels__list " :class="{ 'panels__list--more': panelYears }">
            <div class="panels__list-item" v-for="(rang, index) in range" :key="index">
              <div class="cheked">
                <input 
                  class="cheked__input" 
                  type="radio" 
                  name="rang" 
                  :value="index"
                  v-model="rangeId"
                  @change="change"
                  :id=" 'chekRange'+ index">
                <label 
                  class="cheked__label" 
                  :for=" 'chekRange'+ index">
                <div></div></label>
              </div>
              <span class="panels__list-item-text">{{ rang.name }}</span>
            </div>
          </div>
          <a class="panels__button-link" v-on:click.prevent="panelYears = !panelYears" href="#">
            <span v-if="panelYears">Скрыть</span>
            <span v-else>Показать</span>
          </a>
        </div><!-- End year --> 
      </el-col>
    </el-row>

    <div slot="footer" class="dialog-footer">
      <el-button @click="close()">Отмена</el-button>
      <el-button @click="clear()">Очистить</el-button>
      <el-button type="primary" @click="start()">Применить</el-button>
    </div>

  </el-dialog>
</template>

<script>
  export default {

    name: 'FilterForm',
    props: ['visible', 'data'],
    data: () => ({
      visibleStep: false,
      modFilter: {},


      countries: null,
      genres: null,

      rangeId: 0,
      range: [
        { name:'Old', to:0, do:1950},
        { name:'50+', to:1950, do:1960},
        { name:'60+', to:1960, do:1970},
        { name:'70+', to:1970, do:1980},
        { name:'80+', to:1980, do:1990},
        { name:'90+', to:1990, do:2000},
        { name: '2000', to:2000, do:2001}
      ],


      panelGenres: false,
      panelCountries: false,
      panelYears: false,
    }),

    created(){
      // массив для фильтра года
      for (let i = 2001; i <= new Date().getFullYear(); i++) {
        this.range.push({name:i, to:i, do:i, check: false});
      }
      this.range.push({name:'Все', to:0, do:new Date().getFullYear(), check: true});
      this.range = this.range.reverse();

      console.log(this.range);
    },

    watch: {
      visible: function (newValue) {
        if(newValue) this.visibleStep = true;
      },

      data: function (newValue) {
        if(
          this.countries == null && 
          this.genres == null && 
          typeof newValue.countries != "undefined" && 
          typeof newValue.genres != "undefined"
        ){
          this.countries = this.modificationResponse(newValue.countries);
          this.genres = this.modificationResponse(newValue.genres);
        }
      }
    },

    methods: {

      close(){
        this.visibleStep = false;
        this.$emit('close');
      },

      start(){
        this.$emit('start', this.modFilter);
        this.close();
      },

      clear(){
        this.$emit('start', {});
        this.close();
      },

      change(){
        // Добавить строку стран
        if( this.countries != null && this.countries.filter(function(e){return e.show}).length != 0){
          this.modFilter['countries'] = this.countries.reduce(function(acc,e){ if(e.show){acc.push(e.name)} return acc;}, []).join(',');
        }

        // Добавить строку жанров
        if( this.genres != null && this.genres.filter(function(e){return e.show}).length != 0){
          this.modFilter['genres'] = this.genres.reduce(function(acc,e){ if(e.show){acc.push(e.name)} return acc;}, []).join(',');
        }
        // Добавить года
        if(this.range.length > 7){
          this.modFilter['years'] = this.range[this.rangeId].to + ',' + this.range[this.rangeId].do;
        }
      },

      modificationResponse: function(object){
        return object.map(function(element){ 
          return { id: element.id, name: element.name, show: false };
        });
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

</style>