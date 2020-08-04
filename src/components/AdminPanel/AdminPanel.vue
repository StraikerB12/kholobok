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
      
    },
    computed:{

    },
    methods: {
      
    }
  }
</script>

<style lang='scss' scoped>
  
</style>