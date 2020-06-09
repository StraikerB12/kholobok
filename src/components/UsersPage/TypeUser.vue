<template>
  <div class="tikets-s__stat">
      <span v-if="type == 'administrator'" class="tikets-s__item-type">Администратор</span>
      <span v-if="type == 'managing'" class="tikets-s__item-type">Менджер</span>
      <span v-if="type == 'redactor'" class="tikets-s__item-type">Редактор</span>
      <span v-if="type == 'client'" class="tikets-s__item-type">Клиент</span>
  </div>
</template>

<script>
  export default {
    name: 'TypeUser',
    props: ['type']
  }
</script>

<style lang='scss' scoped>
  
</style>