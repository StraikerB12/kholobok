<template>
  <div class="main__content">

    <!-- Modals -->
    <article-form :visible.sync="articleFlag" @close="articleFlag = false"></article-form>

    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

            <section class="section">
              <div>
                <h2 class="section__title">{{ title }}</h2>
                <div class="section__title-button" @click="articleFlag = true">
                  <i class="icon el-icon-plus"></i>
                  Создать статью
                </div>
              </div>
              <div class="section__content">
                
                <el-table
                  :data="data"
                  stripe
                  style="width: 100%">

                  <el-table-column
                    type="selection"
                    width="45">
                  </el-table-column>

                  <el-table-column
                    prop="title"
                    label="Название">
                  </el-table-column>

                  <el-table-column
                    label="Дата создания"
                    width="200">
                    <template slot-scope="scope">
                      <div>{{ scope.row.created_at }}</div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label=""
                    width="140">
                    <template slot-scope="scope">
                      <div class="table__button" @click="openUpdate(scope.$index)">
                        <i class="el-icon-edit"></i>
                      </div>
                    </template>
                  </el-table-column>

                </el-table>


              </div>
            </section>

          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script>

  import ArticleForm from '~/components/ArticlesPage/ArticleForm';

  export default {
    name: 'ArticlesPage',
    components:{
      ArticleForm
    },


    created: function () {
      this.getArtikles();
    },

    data: () => ({
      data: null,
      articleFlag: false
    }),

    computed: {
      title(){ return this.$router.currentRoute.meta.title},
    },

    methods: {

      getArtikles(){
        this.postMethod('articles.get').then((response) => {
          this.data = response;
        });
      },

      openUpdate(){}
    }
  }
</script>

<style>

</style>