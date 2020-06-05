<template>
  <div class="content-site">
    <slot name="menu"></slot>
    <main>
      <div class="main">
        <slot name="header"></slot>
        <div class="main__content">
            panel
        </div>
      </div>
    </main>
  </div>
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