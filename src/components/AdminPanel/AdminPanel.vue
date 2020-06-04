<template>
    <main class="form-main">
        
        <slot name="header"></slot>
        <slot name="menu"></slot>
        panel

    </main>
</template>

<script>
  export default {
    name: 'AdminPanel',
    data: () => ({
      
    }),
    async created() {
      console.log({ token: this.token, tokenRefresh: this.tokenRefresh, status: this.status});
    },
    computed:{
      token(){
        return this.$store.state.user.token
      },
      tokenRefresh(){
        return this.$store.state.user.tokenRefresh
      },
      status(){
        return this.$store.state.user.status
      }
    },
    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
  
</style>