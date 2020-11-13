<template>
  <div>
    <el-dialog
      title="Предпросмотр"
      :visible.sync="visibleStep"
      width="800px"
      :before-close="close">

      <player-fin 
        v-if="dataFilm != null"
        :stylePanel="dataFilm.style" 
        :playList="dataFilm.list"
        :styles="{width:'740px',height:'370px'}">
      </player-fin>

    </el-dialog>
  </div>
</template>

<script>
  import player from '~/assets/js/vendor/player/src/App';

  export default {
    name: 'ShowVideo',
    components: {
      'player-fin': player
    },
    props: ['visible', 'data'],
    data: () => ({
      visibleStep: false,
      dataFilm: null
    }),

    async created() {
    },
    
    watch: {
      visible: function (newValue) {
        if(newValue) this.visibleStep = true;
      },

      data: function (newValue) {
        this.getVideoData(newValue);
      },
    },
    methods: {
      close(){
        this.visibleStep = false;
        this.dataFilm = null;
        this.$emit('close');
      },

      getVideoData(id){
        if(id != 0){
          this.postMethod('videos.dataFilm', {id}).then(({dataplayer, playList}) => {
            this.dataFilm = { style: JSON.parse(dataplayer), list: playList};
          });
        }
      },


    }
  }
</script>

<style lang='scss' scoped>

</style>