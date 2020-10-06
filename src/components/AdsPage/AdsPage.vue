<template>
  <div class="main__content">

    <add-ads-form :visible.sync="addAdsVisible" @close="closeForm()"></add-ads-form>
    <update-ads-form :visible.sync="updateAdsVisible" :data="adData" @close="closeForm()"></update-ads-form>
    <all-setings-form :visible.sync="setingsAdsVisible" @close="closeForm()"></all-setings-form>


    <div class="content-site">
      <slot name="menu"></slot>
      <div>
        <slot name="header"></slot>
        <main>
          <div class="main">

    
            <section class="section">
              <div>
                  <h2 class="section__title">{{ title }}</h2>
                  <div class="section__title-button" @click="addAdsVisible = true">
                      <i class="icon el-icon-plus"></i>
                      Создать объявление
                  </div>
                  <div class="section__title-button-rever" @click="deleteList()">
                    <i class="icon el-icon-delete"></i>
                  </div>
                  <div class="section__title-button-rever" @click="setingsAdsVisible = true">
                    <i class="icon el-icon-setting"></i>
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
                    prop="name"
                    label="Вкл/Выкл"
                    width="100">
                    <template slot-scope="scope">
                      <el-switch v-model="scope.row.on" @change="onAd(scope.row.on, scope.row.id)"></el-switch>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="name"
                    label="Название"
                    width="180">
                  </el-table-column>

                  <el-table-column
                    prop="type"
                    label="Тип"
                    width="105">
                    <template slot-scope="scope">
                      <div v-if="scope.row.type == 'code'" class="tag">Код</div>
                      <div v-if="scope.row.type == 'link'" class="tag">Ссылка</div>
                      <div v-if="scope.row.type == 'baner'" class="tag">Банер</div>
                      <div v-if="scope.row.type == 'vast'" class="tag">VAST</div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="position"
                    label="Позиция">
                    <template slot-scope="scope">
                      <div v-if="scope.row.position == 'start'" class="tag-border">Начало</div>
                      <div v-if="scope.row.position == 'center'" class="tag-border">Середина</div>
                      <div v-if="scope.row.position == 'end'" class="tag-border">Конец</div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="sale"
                    label="Цена"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="procent"
                    label="Клиентам">
                  </el-table-column>

                  <el-table-column
                    prop="shows"
                    label="Показов">
                  </el-table-column>
                  <el-table-column
                    prop="showsNow"
                    label="Сегодня показов"
                    width="90">
                  </el-table-column>


                  <el-table-column
                    prop="name"
                    label=""
                    width="60">
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
  import AddAdsForm from '~/components/AdsPage/AddAdsForm';
  import UpdateAdsForm from '~/components/AdsPage/UpdateAdsForm';
  import AllSetingsForm from '~/components/AdsPage/AllSetingsForm';

  export default {
    name: 'AdsPage',

    components: {
      AddAdsForm,
      UpdateAdsForm,
      AllSetingsForm
    },

    data: () => ({
      addAdsVisible: false,
      updateAdsVisible: false,
      setingsAdsVisible: false,

      data: [],
      selectedData: [],

      adData: null
    }),

    async created() {
      this.getData();
    },

    computed:{
      title(){ return this.$router.currentRoute.meta.title},
    },

    methods: {

      getData(){
        this.postMethod('ads.get', {})
        .then((response) => {
          this.data = response;
        });
      },

      handleSelectionChange(list){
        console.log(list);

        this.selectedData = list;

        if(list.length != 0){

        }
      },

      deleteList(){
        let ids = this.selectedData.map(item => item.id);
        this.postMethod('ads.delete', {
          ids: ids.join(',')
        })
        .then(() => {
          this.getData();
        });
      },

      openUpdate(index){
        this.adData = this.data[index]
        this.updateAdsVisible = true;
      },


      closeForm(){
        this.addAdsVisible = false;
        this.updateAdsVisible = false;
        this.setingsAdsVisible = false;
        this.getData();
      },

      onAd(value, id){
        // console.log(value, id);
        this.postMethod('ads.on', {
          on: value,
          id: id
        })
        .then(() => {
          this.getData();
        });
      },

      allSetingsOpen(){

      },
      
    }
  }
</script>

<style lang='scss' scoped>
  
</style>