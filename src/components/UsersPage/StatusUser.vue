<template>
  <div class="tikets-s__stat">
    <span v-if="status == 0" class="display__string-color--red">Заблокированн</span>
    <span v-if="status == 1" class="display__string-color--blue">Активен</span>
    <span v-if="status == 2" class="display__string-color--grin">Подтвержден</span>
</div>
</template>

<script>
  export default {
    name: 'StatusUser',
    props: ['status']
  }
</script>

<style lang='scss' scoped>
  
</style>