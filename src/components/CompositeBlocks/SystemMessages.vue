<template>
  <div class="system-messages">

    <el-alert
      v-for="(item, index) in messages"
      :key="index"
      :title="item.text"
      :type="item.type"
      :class="item.type"
      class="system-messages__item">
    </el-alert>

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
      console.log(this.$router.currentRoute)
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