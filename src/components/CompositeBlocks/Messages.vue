<template>
    <div class="messages">
      <transition-group name="messages__item-complete" tag="p">
          <div 
          class="messages__item" 
          v-for="(item, index) in messagesList" 
          :key="index + 'item'"> 
          <i class="fa fa-info-circle" aria-hidden="true"></i>
          {{item}} 
        </div>
        
        <!-- <i class="fa fa-times" aria-hidden="true"></i> -->
      </transition-group>
    </div>
</template>

<script>
  // import {  } from "js-object-clone";

  export default {
    name: 'Messages',
    data: () => ({

    }),
    async created() {
      
    },
    computed:{
      messagesList(){
        return this.$store.state.messages;
      }
    },

    watch: {
      
    },

    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
  .messages{
    position: fixed;
    right: 20px;
    top: 20px;

    z-index: 99999999999999999999;

    &__item{
      width: 300px;
      padding: 10px;
      border-radius: 5px;
      // box-shadow: 0 0 5px -2px #000;
      margin: 10px 0;
      border:1px solid #d3d3d3;
      background: #fff;

      transition: all 0.5s;
    }

    &__item-complete-enter, &__item-complete-leave-to{
      opacity: 0;
      transform: translateY(30px);
    }
    &__item-complete-leave-active {
      position: absolute;
    }
  }
</style>