<template>
  <div class="main__content">

    <!-- Modals -->
    <article-form :visible.sync="articleFlag" :id="idArticle" @close="closeFormArticle()"></article-form>

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
                <div class="section__title-button-rever" @click="deleteList()">
                  <i class="icon el-icon-delete"></i>
                </div>
              </div>
              <div class="section__content">
                
                <el-table
                  :data="data"
                  stripe
                  style="width: 100%"
                  @selection-change="handleSelectionChange">

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
                      <div class="table__button" @click="openUpdate(scope.row.id)">
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
      articleFlag: false,
      idArticle: null,
      selectedData: [],
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

      closeFormArticle(){
        this.articleFlag = false; 
        this.idArticle = null;
        this.getArtikles();
      },

      openUpdate(id){
        this.articleFlag = true;
        this.idArticle = id;
      },

      handleSelectionChange(list){
        this.selectedData = list;
        if(list.length != 0){}
      },

      deleteList(){
        let ids = this.selectedData.map(item => item.id);
        this.postMethod('articles.delete', {
          ids: ids.join(',')
        })
        .then(() => {
          this.getArtikles();
        });
      },
    }
  }
</script>

<style>

</style>