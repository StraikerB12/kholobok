<template>
  <div class="system-messages">

    <template v-for="(item, index) in messages">
      <el-alert
        v-if="isVisible(item.id)"
        :key="index"
        :title="item.text"
        :type="item.type"
        :class="item.type"
        @close="close(item.id)"
        show-icon
        class="system-messages__item">
      </el-alert>
    </template>

  </div>
</template>

<script>
  export default {

    name: 'SystemMessages',
    data: () => ({
      messages: null
    }),

    async created() { 
      this.getMessages();
    },

    computed:{},
    watch: {},
    methods: {
      getMessages(){
        this.postMethod('system.getMessage')
        .then((response) => {
          this.messages = response;
          
        });
      },

      isVisible(id){
        // sessionStorage.setItem('test', 1);
        let message = sessionStorage.getItem(id +'');
        console.log(message);
        if(message){ return false; }else{ return true; }
      },

      close(id){
        sessionStorage.setItem(id +'', 200);
      },


    }
  }
</script>

<style lang='scss' scoped>
  .system-messages{

    padding: 20px 0;
    
    &__item{
      margin-bottom: 8px;
      
      &.success{ border: 1px solid #67C23A; }
      &.warning{ border: 1px solid #E6A23C; }
      &.error{ border: 1px solid #F56C6C; }
      &.info{ border: 1px solid #909399; }

      &:last-child{
        margin-bottom: 0;
      }
    }
  }

</style>