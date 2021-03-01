<template>
    <div class="messages">
      <transition-group name="messages__item-complete" tag="p">
        <div 
          class="messages__item" 
          :class="[ !item.tupe ? '' : item.tupe]"
          v-for="(item, index) in messagesList" 
          :key="index + 'item'"> 

          <div class="messages__item-close" v-on:click="close(item)">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>

          <div class="messages__item-icon">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </div>
          
          <div class="messages__item-content">
            <template v-if="typeof item == 'object'">
              <p class="messages__item-title">{{item.message}}</p>
            </template>
            <template v-else>
              {{item}}
            </template>
          </div>
          

        </div>
        
        <!-- <i class="fa fa-times" aria-hidden="true"></i> -->
      </transition-group>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Messages',
    data: () => ({ }),
    async created() {
      console.log('start messages');
    },
    computed:{
      messagesList(){
        return this.$store.state.messages;
      }
    },

    watch: {
      messagesList: {
        handler(){
          console.log(this.messagesList);
        }
      }
    },

    methods: {
      close(item){
        this.delMessages(item);
      },

      ...mapMutations([
        'delMessages'
      ]),
    }
  }
</script>

<style lang='scss' scoped>
  

  .messages{
    position: fixed;
    right: 30px;
    top: 80px;
    z-index: 99999999999999999999;
    font-family: 'Montserrat-Regular';

    &__item{
      width: 320px;
      padding: 15px 20px;
      border-radius: 5px;
      // box-shadow: 0 0 5px -2px #000;
      margin-bottom: 10px;
      border:1px solid #d3d3d3;
      background: #fff;
      transition: all 0.5s;
      display: flex;
      position: relative;

      &-close{
        position: absolute;
        top: 8px;
        right: 10px;
        color: #bbbbbb;
        cursor: pointer;
      }
      &-close:hover{
        color: #5e5e5e;
      }
      
      &-content{}
      &-title{
        font-family: 'Montserrat-Medium';
        font-size: 16px;
        line-height: 17px;
        padding: 8px 0;
      }
    }

    &__item-complete-enter, &__item-complete-leave-to{
      opacity: 0;
      transform: translateY(30px);
    }
    &__item-complete-leave-active {
      position: absolute;
    }

  }

  .messages__item{
    .messages__item-icon{
      font-size: 30px;
      padding-right: 15px;
      color: #dd2a2a;
    }
  }
  .messages__item.info{
    .messages__item-icon{
      font-size: 30px;
      padding-right: 15px;
      color: #158fe0;
    }
  }

  
</style>