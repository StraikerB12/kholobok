<template>
  <div>
    
    <el-dialog
      title="Информация о видео"
      :visible.sync="visibleStep"
      width="800px"
      :before-close="close">

        
      <div class="modal__info-film" v-if="data != null">

        <div class="modal__info-film-image">
          <img :src="data.img" alt="" class="modal__info-film-img">

          <!-- <button class="button" v-on:click="updateFilmSave()" v-if="updateFilmFlag">Сохранить</button> -->
          <button class="button" v-on:click="updateFilm()" v-if="isRight && !updateFilmFlag">Редактировать</button>

          <div v-if="updateFilmFlag">
            <div class="modal__info-film-text">
              <p class="modal__info-film-title-tupe">Блокировка</p>
            </div>
            <div class="modal__info-film-text">
              <div>
                <div class="cheked">
                  <input class="cheked__input" type="checkbox" v-model="updateFilmData.lock.RU" name="" id="chekedContryRu">
                  <label class="cheked__label" for="chekedContryRu"><div></div></label>
                </div>
                Россия
              </div>
            </div>
            <div class="modal__info-film-text">
              <div>
                <div class="cheked">
                  <input class="cheked__input" type="checkbox" v-model="updateFilmData.lock.UA" name="" id="chekedContryUa">
                  <label class="cheked__label" for="chekedContryUa"><div></div></label>
                </div>
                Украина
              </div>
            </div>

            <div class="modal__info-film-text">
              <div>
                <div class="cheked">
                  <input class="cheked__input" type="checkbox" v-model="updateFilmData.lock.SNG" name="" id="chekedContrySng">
                  <label class="cheked__label" for="chekedContrySng"><div></div></label>
                </div>
                СНГ
              </div>
            </div>
            <div class="modal__info-film-text">
              <div>
                <div class="cheked">
                  <input class="cheked__input" type="checkbox" v-model="updateFilmData.lock.FULL" name="" id="chekedContryFull">
                  <label class="cheked__label" for="chekedContryFull"><div></div></label>
                </div>
                Полная
              </div>
            </div>
          </div>
            
        </div>

        <div class="modal__info-film-contener">

          <div class="modal__info-film-text" v-if="updateFilmFlag">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Изображение</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                v-model="updateFilmData.img"
                clearable>
              </el-input>
            </div>
          </div>

          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Название</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                v-model="updateFilmData.ru_name"
                clearable>
              </el-input>
              <p class="modal__info-film-tupe" v-else>{{ data.ru_name }}</p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Оригинальное название</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                v-model="updateFilmData.name"
                clearable>
              </el-input>
              <p class="modal__info-film-tupe" v-else>{{ data.name }}</p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Страна</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                v-model="updateFilmData.country"
                clearable>
              </el-input>
              <p class="modal__info-film-tupe" v-else>{{ data.country }}</p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Год</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                v-model="updateFilmData.year"
                clearable>
              </el-input>
              <p class="modal__info-film-tupe" v-else>{{ data.year }}</p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">
              <p class="modal__info-film-title-tupe">Жанры</p>
              <el-input
                v-if="updateFilmFlag"
                class="form__input"
                type="textarea"
                :rows="2"
                v-model="updateFilmData.genre"
                clearable>
              </el-input>
              <p class="modal__info-film-tupe" v-else>{{ data.genre }}</p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-2">
              <p class="modal__info-film-title-tupe">Кинопоиск</p>
              <p class="modal__info-film-tupe">
                <a :href=" 'https://www.kinopoisk.ru/film/' + data.kinopoisk " target="_blank" class="modal__info-film-tupe-link">
                  {{ data.kinopoisk }}
                </a>
              </p>
            </div>
            <div class="modal_info-coll-2">
              <p class="modal__info-film-title-tupe">IMDb</p>
              <p class="modal__info-film-tupe">
                <a :href=" 'https://www.imdb.com/title/' + data.imdb " target="_blank" class="modal__info-film-tupe-link">
                  {{ data.imdb }}
                </a>
              </p>
            </div>
          </div>
          <div class="modal__info-film-text">
            <div class="modal_info-coll-4">

              <p class="modal__info-film-title-tupe">Описание</p>
              <el-input
                v-if="updateFilmFlag" 
                class="form__input" 
                type="textarea" 
                :rows="8" 
                v-model="updateFilmData.description" 
                clearable>
              </el-input>

              <p class="modal__info-film-tupe modal__info-film-diskript" v-else>{{ data.description }}</p>
            </div>
          </div>

        </div>
      </div>

      <div v-if="updateFilmFlag" slot="footer" class="dialog-footer">
        <el-button @click="updateFilmFlag = false">Отмена</el-button>
        <el-button type="primary" @click="updateFilmSave();">Сохранить</el-button>
      </div>

    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'VideoInfo',
    props: ['visible', 'data'],
    data: () => ({
      visibleStep: false,
      updateFilmFlag: false,

      updateFilmData: null
    }),
    async created() {},
    computed:{
      isRight(){
        return this.$store.state.user.status == 'client' || this.$store.state.user.status == 'managing' ? false : true;
      }
    },
    watch: {
      visible: function (newValue, oldValue) {
        if(newValue) this.visibleStep = true;
      },
    },
    methods: {
      close(){
        this.visibleStep = false;
        this.updateFilmFlag = false;
        this.updateFilmData = null;
        this.$emit('close');
      },

      // Редактирование фильма
      updateFilm: function(){
          this.updateFilmFlag = true; // Показать интерфейс
          this.updateFilmData = { ...this.data }; // Получить данные
          let lock = { // Новый объект для блокировки
            'RU':false,
            'UA':false,
            'SNG':false,
            'FULL':false
          };
          if(this.updateFilmData.lock != null){ // Обновление объекта на основе данных
            this.updateFilmData.lock.split(',').map(function(el){ lock[el] = true; });
          }
          this.updateFilmData.lock = lock; // Замена строки на объект
      },

      // Сохранить изменения
      updateFilmSave: function(){
        this.updateFilmFlag = false;

        let lock = [];
        for(let key in this.updateFilmData.lock){
          if(this.updateFilmData.lock[key]){
            lock.push(key); 
          }
        }
        this.updateFilmData.lock = lock.join(',');

        this.postMethod('updateVideo', { 
          element: JSON.stringify(this.updateFilmData)
        }).then((response) => {})
      },


    }
  }
</script>

<style lang='scss' scoped>
  // .body-content{
  //   padding: 20px 0;
  // }
  // .button-type{
  //   display: block;
  //   margin: 0 0 10px 0;
  //   width: 100%;
  //   font-size: 15px;
  //   line-height: 20px;

  //   & .icon{
  //     position: relative;
  //     top: 2px;
  //     font-size: 20px;
  //     margin-right: 10px;
  //   }
  // }
</style>