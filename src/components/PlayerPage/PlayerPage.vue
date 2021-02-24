<template>
  <div class="main__content">

    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <slot name="messages"></slot>

            <div class="player-list" v-if="!updatePlayer">

              <section class="section">
                <div>
                  <h2 class="section__title">{{ title }}</h2> 
                </div>

                <div class="section__content">

                  <el-row :gutter="10">
                    <div v-for="(value, index) in list" :key="index" class="player-list__item">
                      <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="3">

                        <div class="player-list__item-content" v-on:click="playerUp(value)">
                          <p class="player-list__title">{{ value.name }}</p>
                          <div class="player-list__player">
                            <div class="" style="width:100%; height: 130px; overflow: hidden;position: relative;">

                              <div style="width:200%; height:240px; transform: scale(0.5) translate(-50%,-50%);position: relative;">
                                <player-fin 
                                  :stylePanel="value.new_player" 
                                  :styles="{width:'100%',height:'240px', marginTop:'10px'}" 
                                  :playList="listTest">
                                </player-fin>
                              </div>
                            

                            </div>
                          </div>
                        </div>

                        
                      </el-col>
                    </div>
                  </el-row>

                </div>
              </section>

            </div>


            <div class="player-form" v-else>

                <section class="section">
                  <div>
                    <div class="section__button-out" v-on:click="playerOut()"> <i class="el-icon-arrow-left"></i>  Назад</div>
                    <h2 class="section__title">{{ title }}</h2> 
                  </div>

                  <div class="section__content">
                    <el-row :gutter="20">
                      <el-col :span="14">

                        <el-collapse accordion v-if="dataStyle != null">

                          <el-collapse-item>
                            <template slot="title">Основная кнопка play <i class="header-icon el-icon-video-play"></i></template>
                            <play-element :value="dataStyle.play"></play-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Панель управления <i class="header-icon el-icon-set-up"></i></template>
                            <panel-element :value="dataStyle.panel"></panel-element>
                          </el-collapse-item>

                          <!-- <el-collapse-item>
                            <template slot="title">Заголовок <i class="header-icon el-icon-video-play"></i></template>
                          </el-collapse-item> -->

                          <el-collapse-item>
                            <template slot="title">Линия времени <i class="header-icon el-icon-minus"></i></template>
                            <line-panel-element :value="dataStyle.linePanel"></line-panel-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Кнопка play <i class="header-icon el-icon-caret-right"></i></template>
                            <play-panel-element :value="dataStyle.playPanel"></play-panel-element>
                          </el-collapse-item>

                          <!-- <el-collapse-item>
                            <template slot="title">Стоп <i class="header-icon el-icon-video-play"></i></template>
                          </el-collapse-item> -->

                          <!-- <el-collapse-item>
                            <template slot="title">Далее <i class="header-icon el-icon-right"></i></template>
                          </el-collapse-item>
                          <el-collapse-item>
                            <template slot="title">Назад <i class="header-icon el-icon-back"></i></template>
                          </el-collapse-item> -->

                          <el-collapse-item>
                            <template slot="title">Кнопка звука <i class="header-icon el-icon-video-play"></i></template>
                            <audio-panel-element :value="dataStyle.volumPanel"></audio-panel-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Линия звука <i class="header-icon el-icon-video-play"></i></template>
                            <level-panel-element :value="dataStyle.levelPanel"></level-panel-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Продолжительность <i class="header-icon el-icon-time"></i></template>
                            <time-panel-element :value="dataStyle.timePanel"></time-panel-element>
                          </el-collapse-item>

                          <!-- <el-collapse-item>
                            <template slot="title">Загрузка <i class="header-icon el-icon-loading"></i></template>
                          </el-collapse-item> -->

                          <el-collapse-item>
                            <template slot="title">Полный экран <i class="header-icon el-icon-crop"></i></template>
                            <full-panel-element :value="dataStyle.fullPanel"></full-panel-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Плейлист <i class="header-icon el-icon-tickets"></i></template>
                            <play-list-element :value="dataStyle.playList"></play-list-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Настройки <i class="header-icon el-icon-s-tools"></i></template>
                            <menu-panel-element :value="dataStyle.menuPanel"></menu-panel-element>
                          </el-collapse-item>

                          <el-collapse-item>
                            <template slot="title">Список настроек <i class="header-icon el-icon-more"></i></template>
                            <menu-element  :value="dataStyle.menu"></menu-element>
                          </el-collapse-item>
                          
                        </el-collapse>
                        
                      </el-col>
                      <el-col :span="10">

                        <div class="player-update__colum" id="playerbildercontent">
                          <!-- <div id="playerbilder" ref="playerbilder" style="width:100%;height:300px;" v-once></div> -->
                          <player-fin 
                            :stylePanel="dataStyle" 
                            :styles="{width:'100%',height:'300px', marginTop:'10px'}" 
                            :playList="listTest">
                          </player-fin>
                        </div>

                      </el-col>
                    </el-row>
                  </div>
                </section>

            </div>

          </div>
        </main>
      </div>
    </div>
    
  </div>
</template>

<script>

  import player from '~/assets/js/vendor/player/src/App';

  import Play from '~/components/PlayerPage/ComponentsPlayer/Play';
  import Panel from '~/components/PlayerPage/ComponentsPlayer/Panel';
  import PlayPanel from '~/components/PlayerPage/ComponentsPlayer/PlayPanel';
  import AudioPanel from '~/components/PlayerPage/ComponentsPlayer/AudioPanel';
  import TimePanel from '~/components/PlayerPage/ComponentsPlayer/TimePanel';
  import MenuPanel from '~/components/PlayerPage/ComponentsPlayer/MenuPanel';
  import FullPanel from '~/components/PlayerPage/ComponentsPlayer/FullPanel';
  import LevelPanel from '~/components/PlayerPage/ComponentsPlayer/LevelPanel';
  import LinePanel from '~/components/PlayerPage/ComponentsPlayer/LinePanel';
  import Menu from '~/components/PlayerPage/ComponentsPlayer/Menu';
  import PlayList from '~/components/PlayerPage/ComponentsPlayer/PlayList';
 
  export default {
    name: 'PlayerPage',

    components: {
      'player-fin': player,

      'play-element': Play,
      'panel-element': Panel,
      'play-panel-element': PlayPanel,
      'audio-panel-element': AudioPanel,
      'time-panel-element': TimePanel,
      'menu-panel-element': MenuPanel,
      'full-panel-element': FullPanel,
      'level-panel-element': LevelPanel,
      'line-panel-element': LinePanel,
      'menu-element': Menu,
      'play-list-element': PlayList
    },

    data: function(){return{

      listTest: [
        {
          title: 'value', folder: [
            {
              title: '1', folder: [
                {title: 'title', file:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'},
                {title: 'title2', file:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}
              ]
            }
          ]
        }
      ],

      dataStyle: null,
      activPlayer: null,

      list: [],
      updatePlayer: false,
      
      bilderPlayer: null,
      
    }},

    created: function () {
      this.getList();
    },


    watch: {
      dataStyle: {
        handler: function (val, oldVal) { 
          this.$nextTick(function () {
            console.log('domains.updatePlayer',this.dataStyle);
            this.postMethod('domains.updatePlayer', {
              id: this.activPlayer,
              data: JSON.stringify(this.dataStyle)
            })
            .then(response => {
              // console.log(response);
            });
          });
        },
        deep: true
      },
    },

    computed: {
      title(){ return this.$router.currentRoute.meta.title},
    },

    methods: {

      getList(){
        // Запрос к api
        this.postMethod('domains.get')
        .then(response => {
          response = response.map(function(el){ 
            el.new_player = JSON.parse(el.new_player);
            return el; 
          });
          this.list = response;
        });
      },

      playerUp(player){
        this.updatePlayer = true;
        this.dataStyle =player.new_player;
        this.activPlayer = player.id;
      },

      playerOut(){
        this.updatePlayer = false;
        this.activPlayer = null;
        this.getList();
      },

    }
  }
</script>


<style lang='scss'>
  .el-divider{
    margin: 24px 0 5px 0;
  }
  .el-divider__text{
    font-size: 11px;
    padding: 0 10px;
  }
</style>


<style lang='scss' scoped>
  .vast{
    width: 300px; 
    height: 200px;
    position: relative;

    & video{
      // display: none;
    }
  }


  .player-list__item-content{
      width: 100%;
      border-radius: 3px;
      padding: 8px 5px;
      box-shadow: 0 0 0 1px #eff1f2;
      cursor:pointer;
  }
  .player-list__item-content:hover{
      box-shadow: 0 0 0 1px #49df85;
  }
  .player-list__title{
      padding: 0 0 5px 0;
  }
  .player-list__player{
      background: #000;
      border-radius: 3px;
      width: 100%;
      height: 130px;
  }

  .header-icon{
    position: relative;
    left: 10px;
  }
</style>


 



