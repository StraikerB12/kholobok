<template>
  <div class="main__content">

    <!-- Modals -->
    <video-info :visible.sync="videoInfoFlag" :data="updateFilmData" @close="closeForm()"></video-info>
    <show-video :visible.sync="videoShowFlag" :data="filmId" @close="closeForm()"></show-video>
    <tiket-modal :visible.sync="videoTiketFlag" type="film" @close="closeForm()"></tiket-modal>
    <filter-form :visible.sync="filterFormFlag" :data="videoData" type="film" @close="closeForm()" @start="fiterSet"></filter-form>

    <setings-bd-form :visible.sync="setingsFormFlag" @close="closeForm()" @start="videosGet()"></setings-bd-form>
    <!-- End modals -->


    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <section class="section">
              <div>
                <h2 class="section__title">{{ title }}</h2>
                <div class="section__title-button" v-if="isRight" @click="setingsFormFlag = true">
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
                  <div class="form__button-slise-input" @click="videosGet()">
                    <i class="icon el-icon-search"></i> Искать
                  </div>
                  <div class="form__button-slise-input" @click="filterFormFlag = true">
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
                      <a href="#" v-on:click.prevent="videoTiketFlag = true" title="Обновление/Ошибка"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></a>
                      <!-- scope.row.id, scope.row.ru_name -->
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

  import VideoInfo from '~/components/VideoPage/VideoInfo';
  import ShowVideo from '~/components/VideoPage/ShowVideo';
  import FilterForm from '~/components/VideoPage/FilterForm';
  import SetingsBDForm from '~/components/VideoPage/SetingsBDForm';

  import TiketModal from '~/components/TiketsPage/TiketModal';

  export default {
    name: 'VideoPage',
    components: {
      'player-fin': player,
      'setings-bd-form': SetingsBDForm,

      VideoInfo,
      ShowVideo,
      TiketModal,
      FilterForm
    },
    data(){return{

      videoInfoFlag: false, // Модалка с информацией о фильме
      updateFilmData: null, // данные для модалки, режим редактирования
      videoShowFlag: false, // Модалка предпросмотра фильма
      videoTiketFlag: false, // Модалка тикета
      filterFormFlag: false, // Модалка фильтра
      setingsFormFlag: false,
      videoData: null, // Данные от запроса видео для модалки фильтра
      filter: {}, // Объект фильра, заполняется событием из модалки
      videos: null, // Массив видеоматериалов
      count: null,
      search: '', // Строка поиска

      paginations: [],
      paginCount: 20,
      page: 1,

      filmId: 0,
      filmIndex: null,
    }},

    created: function () {
      // хеш для страницы
      if( /page.*?(\d+)/.exec( window.location.hash ) != null) this.page = Number(/page.*?(\d+)/.exec( window.location.hash )[1]);
      
      this.videosGet(this.page); // стартовая выборка списка фильмов
    },

    computed: {
      title(){ return this.$router.currentRoute.meta.title},

      isRight(){
        return this.$store.state.user.status == 'client' || this.$store.state.user.status == 'managing' ? false : true;
      },

      offsetPage: function () {
        return this.paginCount * (this.page - 1);
      },
    },

    mounted: function () {
      this.$nextTick(function () {})
    },

    methods: {

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

      // Закрыть все модалки
      closeForm(){
        this.videoInfoFlag = false;
        this.videoShowFlag = false;
        this.videoTiketFlag = false;
        this.filterFormFlag = false;
        this.setingsFormFlag = false;
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

      // Установить фильтр
      fiterSet(filter){
        this.filter = filter;
        this.videosGet();
      },

      // Загрузка списка видео
      videosGet: function(page = 1){

        this.page = page;
        console.log(page);
        window.location.hash = 'page'+ page;

        // Параметры запроса
        let params = {
          limit: this.paginCount,
          offset: this.offsetPage,
          search: this.search,
          ...this.filter
        };
        
        this.postMethod('getVideo', params).then((response) => {
          this.count = response.count;
          this.videos = response.items;
          this.videoData = response;

          // this.$refs.articles__scrol.scrollTop = 0;
        });
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

  .articles__pagination{
    width: 100%;
    background: #fff;
    padding: 15px 0;
    box-shadow: 0px -1px 0px #dddddd;
    text-align: center;
    // position: fixed;
    bottom: 0;
  }

</style>