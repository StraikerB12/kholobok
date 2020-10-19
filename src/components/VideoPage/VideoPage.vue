<template>
  <div class="main__content">

    
    <!-- Modals -->

    <video-info :visible.sync="videoInfoFlag" :data="updateFilmData" @close="closeForm()"></video-info>
    <show-video :visible.sync="videoShowFlag" :data="filmId" @close="closeForm()"></show-video>

    <div class="modal" v-show="modal">

      <!-- Show video -->
      <div class="modal__form" v-show="modalPage.film">
        <div class="close">
            <div class="close__btn" v-on:click="closeModal()">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>

        <!-- <iframe :src=" 'https://api.kholobok.biz/show/' + filmId " frameborder="0" width="610" height="370"></iframe> -->
        
        <player-fin 
          v-if="dataFilm != null"
          :stylePanel="dataFilm.style" 
          :playList="dataFilm.list"
          :styles="{width:'610px',height:'370px'}">
        </player-fin>

      </div>
      <!-- End show video -->



        <!-- Add video -->
        <div class="modal__form" v-show="modalPage.add">
            <div class="close">
                <div class="close__btn" v-on:click="closeModal()">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div> 

            <!-- <form action="http://mng.zerocdn.com/api/v2/users/files.json?username=johnlegon&api_key=mB19SrYdROqY" enctype="multipart/form-data" method="post">
                <input type="hidden" name="folder" value="10720268">
                <input type="file" name="file">
                <input type="submit" value="загрузить">
            </form> -->
        </div>
        <!-- End add video -->


        <!-- Show info -->
        <!-- <div class="modal__form" v-show="modalPage.info">
            <div class="close">
                <div class="close__btn" v-on:click="closeModal()">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>


            
            
        </div> -->
        <!-- End show info -->

        <!-- Tiket video -->
        <div class="modal__form" v-show="modalPage.tiket">
            <div class="close">
                <div class="close__btn" v-on:click="closeModal()">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>

            <input 
                type="text" 
                class="tikets-s__input" 
                placeholder="Тема обращения" 
                v-model="tiket.title"
            >

            <textarea 
                class="tikets-s__input" 
                cols="30" 
                rows="10"
                placeholder="Текст обращения" 
                v-model="tiket.text"
            ></textarea>

            <button class="button tikets-s__button-l" v-on:click="sendTiket()">Отправить</button>

        </div>
        <!-- End tiket video -->

    </div>
    <!-- End modals -->



    <!-- Panels -->
    <section class="panels" v-if="false">
        <!-- Update video bd -->
        <div class="panels__panel" v-if="isRight">
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
            <button class="button" v-on:click="clickBtnVDB()">Загрузить</button>
            <button class="button" v-on:click="clickBtnUpdateVDB()">Обновить</button>
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

        </div><!-- End update video bd -->
        <div class="panels__panel">
            <button class="button" v-on:click="addFilm()">Добавить</button>
        </div><!-- Search -->
        <div class="panels__panel">
            <span class="panels__title">Поиск</span>
            <input class="panels__input" type="text" v-model="search" placeholder="Что искать ?">
        </div><!-- End search -->
        <div class="panels__panel"><!-- Year -->
            <span class="panels__title">Год</span>
            <div class="panels__list " :class="{ 'panels__list--more': panelYears }">
                <div class="panels__list-item" v-for="(rang, index) in range">
                    <div class="cheked">
                        <input 
                            class="cheked__input" 
                            type="radio" 
                            name="rang" 
                            :value="index"
                            v-model="rangeId"
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
        </div> <!-- End year -->
        <div class="panels__panel"><!-- Genres -->
            <span class="panels__title">Жанры</span>
            <div class="panels__list " :class="{ 'panels__list--more': panelGenres }">
                <div class="panels__list-item" v-for="(genre, index) in genres">
                    <div class="cheked">
                        <input 
                            class="cheked__input" 
                            type="checkbox" 
                            v-model="genre.show"
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
        </div> <!-- End genres -->
        <div class="panels__panel"><!-- Countries -->
            <span class="panels__title">Страны</span>
            <div class="panels__list" :class="{ 'panels__list--more': panelCountries }">
                <div class="panels__list-item" v-for="(country, index) in countries" :key="index">
                    <div class="cheked">
                        <input 
                            class="cheked__input" 
                            type="checkbox" 
                            v-model="country.show"
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
        <div class="panels__grup-button">
            <button class="button button--coll1" v-on:click="filterClear()"><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button class="button button--coll3" v-on:click="videosGet()">Искать</button>
        </div>
    </section><!-- End panels -->
    



    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

      
            <section class="section">
              <div>
                <h2 class="section__title">{{ title }}</h2>
                <div class="section__title-button" v-if="isRight" @click="addAdsVisible = true">
                  <i class="icon el-icon-setting"></i>
                  Управление
                </div>
              </div>
              <div class="section__content">


                <div class="search-block">
                  <el-input
                    class="form__input"
                    v-model="search"
                    placeholder="Поиск"
                    clearable>
                  </el-input>
                  <div class="form__button-slise-input">
                    <i class="icon el-icon-search"></i> Искать
                  </div>
                  <div class="form__button-slise-input">
                    <i class="icon el-icon-set-up"></i> Фильтр
                  </div>
                </div>
                

                <el-table
                  :data="videos"
                  stripe
                  style="width: 100%">

                  <el-table-column
                    v-if="isRight"
                    type="selection"
                    width="45">
                  </el-table-column>

                  <el-table-column
                    width="36">
                    <template slot-scope="scope">
                      <a href="#" v-on:click.prevent="showInfo(scope.$index)"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
                    </template>
                  </el-table-column>


                  <el-table-column
                    label="Тип"
                    width="105">
                    <template slot-scope="scope">
                      <div class="tag" v-if="scope.row.tupe == 'movie'">фильм</div>
                      <div class="tag" v-else>сериал</div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="ru_name"
                    label="Название">
                  </el-table-column>
                  <el-table-column
                    label="Качество"
                    width="120">
                    <template slot-scope="scope">
                      <div class="tag">{{ scope.row.quality }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="translation"
                    label="Озвучка">
                  </el-table-column>
                  <el-table-column
                    label="КиноПоиск"
                    width="105">
                    <template slot-scope="scope">
                      <div class="tag">{{ scope.row.kinopoisk }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="Код"
                    width="140">
                    <template slot-scope="scope">
                      <a href="#" v-on:click.prevent="showFilm(scope.row.id)" title="Просмотр"><i class="fa fa-film" aria-hidden="true"></i></a>
                      <a href="#" v-on:click.prevent="copyAdress(scope.row.id)" title="Скопировать"><i class="fa fa-code" aria-hidden="true"></i></a>
                      <a href="#" v-on:click.prevent="openTiket(scope.row.id, scope.row.ru_name)" title="Обновление/Ошибка"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></a>
                    </template>
                  </el-table-column>
                </el-table>

                <div class="articles__pagination">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="count"
                    :page-size="paginCount"
                    :current-page="page"
                    @current-change="videosGet">
                  </el-pagination>
                </div>

              </div>
            </section> 



          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>
  import player from '~/assets/js/vendor/player/src/App';

  import videoInfo from '~/components/VideoPage/VideoInfo';
  import showVideo from '~/components/VideoPage/ShowVideo';

  export default {
    name: 'VideoPage',
    components: {
      'player-fin': player,
      'video-info': videoInfo,
      'show-video': showVideo
    },
    data(){return{

      videoInfoFlag: false,
      videoShowFlag: false,

      videos: null,
      count: null,
      countries: null,
      genres: null,

      search: '',
      panelGenres: false,
      panelCountries: false,
      panelYears: false,
      range: [
          { name:'Old', to:0, do:1950},
          { name:'50+', to:1950, do:1960},
          { name:'60+', to:1960, do:1970},
          { name:'70+', to:1970, do:1980},
          { name:'80+', to:1980, do:1990},
          { name:'90+', to:1990, do:2000},
          { name: '2000', to:2000, do:2001}
      ],
      rangeId: 0,

      count_vdb: 0,

      updateOffset: 0,//this.data.videodb.count_vdb,
      steps: 2,
      next: null,
      preolaoded: false,

      updateUpOffset: 0,
      preolaodedUp: false,
      stepsUp: 0,

      paginations: [],
      paginCount: 20,
      page: 1,

      modal: false,
      modalPage: {
          film: false,
          add: false,
          info: false,
          tiket: false,
          newfilm: false
      },
      filmId: 0,
      filmIndex: null,

      updateFilmData: null,

      tiket: {
          text: '',
          title: '',
          data: {}
      },

    }},

    created: function () {

      if(this.isRight){
        this.postMethod('videos.info').then(({count}) => {
          this.count_vdb = count;
          this.updateOffset = count;
        });
      }
      

      // хеш для страницы
      if( /page.*?(\d+)/.exec( window.location.hash ) != null){
          this.page = Number(/page.*?(\d+)/.exec( window.location.hash )[1]);
      }
      // массив для фильтра года
      for (let i = 2001; i <= new Date().getFullYear(); i++) {
          this.range.push({name:i, to:i, do:i, check: false});
      }
      this.range.push({name:'Все', to:0, do:new Date().getFullYear(), check: true});
      this.range = this.range.reverse();

      // стартовая выборка списка фильмов
      this.videosGet(this.page);

      
    },

    watch: {
      updateOffset: function () {
        if(this.progress == 100){
          this.preolaoded = false;
          this.count_vdb = this.updateOffset;
          this.videosGet(this.page);
        }
      },
      updateUpOffset: function () {
        if(this.progressUp == 100){
          // this.preolaodedUp = false;
          this.videosGet(this.page);
        }
      }
    },

    computed: {
      title(){ return this.$router.currentRoute.meta.title},


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
      }
    },

    mounted: function () {
        this.$nextTick(function () {})
    },

    methods: {


      paginationEvents(e){
        this.videosGet(e);
      },

      // Пердпросмотр фильма
      showFilm(id){
        this.filmId = id;
        this.videoShowFlag = true;
      },

      // Информация о фильме
      showInfo: function(index){
        this.updateFilmData = this.videos[index];
        this.videoInfoFlag = true;
        this.filmIndex = index;
      },

      // Добавление фильма
      addFilm: function(){
        this.modal = true;
        this.modalPage.add = true;
      },

      closeForm(){
        this.videoInfoFlag = false;
        this.videoShowFlag = false;
      },

      

        
      // Закрыть все модалки
      closeModal: function(){
        this.filmId = 0;
        this.modal = false;
        this.filmIndex = null;
        for (const key in this.modalPage) {
          this.modalPage[key] = false;
        }
        this.updateFilmFlag = false;
        this.updateFilmData = null;

        this.dataFilm = null;
      },

      
      // Скопировать адрес
      copyAdress: function(id){
        this.$copyText('<iframe src="https://api.kholobok.biz/show/' + id + '" frameborder="0" width="610" height="370" allowfullscreen></iframe>').then((e) => {
          this.$notify.success({ title: 'Успех', message: 'Элемент скопирован', customClass: 'messages-ui' });
        }, (e) => {
          this.$notify.error({ title: 'Ошибка', message: 'Ошибка копирования', customClass: 'messages-ui' });
          console.log(e)
        })
      },

      // Очистить фильтр
      filterClear: function(){
        this.search = '';
        if( this.countries != null){
          this.countries = this.modificationResponse(this.countries);
        }
        if( this.genres != null){
          this.genres = this.modificationResponse(this.genres);
        }
        this.videosGet();
      },



      

      clickBtnUpdateVDB: function(){
        this.preolaodedUp = true;
        this.updateAddVideoDB();
      },


      updateAddVideoDB: function(){
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


      clickBtnVDB: function(){
        this.preolaoded = true;
        this.addVideoDB(this.steps);
      },

      // Рекурсивная загрузка данных
      addVideoDB: function(steps){
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

      // Загрузка списка видео
      videosGet: function(page = 1){
        this.page = page;
        window.location.hash = 'page'+ page;

        // Параметры запроса
        let params = {
          // account_key: this.data.api_key,
          limit: this.paginCount,
          offset: this.offsetPage,
          search: this.search
        };
        
        // Добавить строку стран
        if( this.countries != null && this.countries.filter(function(e){return e.show}).length != 0){
          params['countries'] = this.countries.reduce(function(acc,e){ if(e.show){acc.push(e.name)} return acc;}, []).join(',');
        }
        // Добавить строку жанров
        if( this.genres != null && this.genres.filter(function(e){return e.show}).length != 0){
          params['genres'] = this.genres.reduce(function(acc,e){ if(e.show){acc.push(e.name)} return acc;}, []).join(',');
        }
        // Добавить года
        if(this.range.length > 7){
          params['years'] = this.range[this.rangeId].to + ',' + this.range[this.rangeId].do;
        }
        
        this.postMethod('getVideo', params).then((response) => {
          this.count = response.count;
          this.videos = response.items;
          
          this.$refs.articles__scrol.scrollTop = 0;

          if(
            this.countries == null && 
            this.genres == null && 
            typeof response.countries != "undefined" && 
            typeof response.genres != "undefined"
          ){
            this.countries = this.modificationResponse(response.countries);
            this.genres = this.modificationResponse(response.genres);
          }
        });
      },


      modificationResponse: function(object){
        return object.map(function(element){ 
          return { id: element.id, name: element.name, show: false };
        });
      },



      openTiket: function(id, name){
        this.modal = true;
        this.modalPage.tiket = true;
        this.tiket.title = `Обновление видеофаила "${name}"`;
        this.tiket.data.idFilm = id;
      },
      sendTiket: function(){
        this.postMethod('tikets.add',{
          tupe: 'film',
          title: this.tiket.title,
          message: this.tiket.text,
          data: JSON.stringify( this.tiket.data )
        }).then(() => {
          this.closeModal();
        })
      },
        
        
    }
  }
</script>


<style lang="scss">
  // 38cf99
  // 2fb887

  // #34db93
  // #40c173

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #2fb887;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #38cf99;
    color: #fff;
  }
  
</style>


<style lang='scss' scoped>

  .fa{
    font-size: 20px;
    color: #cecece;
    padding: 0 5px 0 8px;
    position: relative;
    top: 0px;
  }

  .search-block{
    display: flex;
    padding-bottom: 30px;
  }







  .tikets-s__input{
    display: inline-block;
    width: 100%;
    padding: 8px 15px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #cacaca;
    background: #fff;
    margin-bottom: 10px;
    font: 400 13.3333px Arial;
  }

  .tikets-s__button-l{
    width:auto;
    display: inline-block;
    float: left;
    margin-right: 10px;
  }
  

  .articles__pagination{
    width: 100%;
    background: #fff;
    padding: 15px 0;
    box-shadow: 0px -1px 0px #dddddd;
    text-align: center;
    // position: fixed;
    bottom: 0;
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




.panels{
    flex-shrink: 0;
    width: 220px;
    background: #ffffff;
    box-shadow: 1px 0 0 #eff1f2;
    padding: 30px 15px;
}
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


@media all and (min-width: 1440px) {
    
    .panels{
        width: 260px;
        padding: 30px 20px;
    }

}
</style>