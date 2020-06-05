<template>
  <div class="tikets-s__type">
    <span v-if="type == `tiket`" class="tikets-s__item-type">Обращение</span>
    <span v-if="type == `domain`" class="tikets-s__item-type">Домен</span>
    <span v-if="type == `film`" class="tikets-s__item-type">Фильм</span>
    <span v-if="type == `pay`" class="tikets-s__item-type">Выплаты</span>
  </div>
</template>

<script>

  export default {
    props: ['type']
  }
</script>

<style lang='scss' scoped>
  .tikets-s__item-type{
    font-size: 14px; 
    color: #979797;
    padding-bottom: 10px;
  }
</style>