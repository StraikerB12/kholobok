<template>
  <div class="tikets-s__stat">
    <span v-if="status == 1" class="tikets-s__item-stat tikets-s__item-stat--blue">Открыт</span>
    <span v-if="status == 2" class="tikets-s__item-stat tikets-s__item-stat--yellow">Рассмотрение</span>
    <span v-if="status == 3" class="tikets-s__item-stat tikets-s__item-stat--red">Отклонен</span>
    <span v-if="status == 4" class="tikets-s__item-stat">Закрыт</span>
</div>
</template>

<script>

  export default {
    props: ['status']
  }
</script>

<style lang='scss' scoped>
    .tikets-s__stat{
      display: inline-block;
    }
    .tikets-s__item-stat{
        display: inline-block;
        padding: 2px 4px;
        border-radius: 3px;
        color: #fff;
        font-weight: normal;
        font-family: 'Montserrat-Regular';
        font-size: 12px;
        background: #cecece;
    }
    .tikets-s__item-stat--blue{background: #3ca6e4;}
    .tikets-s__item-stat--yellow{background: #f1b22a;}
    .tikets-s__item-stat--red{background: #ec5e5e;}
</style>