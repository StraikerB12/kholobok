<template>
    <div>
        header {{title}}
    </div>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      
    }),
    async created() {
      console.log(this.$router.currentRoute)
    },
    computed:{
      title(){ return this.$router.currentRoute.meta.title}
    },
    methods: {}
  }
</script>

<style lang='scss' scoped>
  
</style>