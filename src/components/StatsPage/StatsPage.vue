<template>
  <div class="content-site">
    <slot name="menu"></slot>
    <main>
      <div class="main">
        <slot name="header"></slot>
        <div class="main__content">
          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__title">Пользователи</div>
            </el-col>
          </el-row>

          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__data">
                <div class="data-item">
                  <div class="data-item__data">{{ countUsers }}</div>
                  <div class="data-item__title">Всего пользователей</div>
                </div>
              </div>

              <div class="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="usersStat"></apexchart>
              </div>

            </el-col>
          </el-row>


          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__title">API</div>
            </el-col>
          </el-row>

          <el-row type="flex" class="row-bg">
            <el-col :span="12">
              <div class="stat__data">
                <div class="data-item">
                  <div class="data-item__data">{{ reqwest }}</div>
                  <div class="data-item__title">Среднее число запросов</div>
                </div>
              </div>

              <div class="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="apiStat"></apexchart>
              </div>
              
            </el-col>

            <el-col :span="12">
              <div class="stat__data">
                <div class="data-item">
                  <div class="data-item__data">{{ loading }}%</div>
                  <div class="data-item__title">Средняя нагрузка</div>
                </div>
              </div>

              <div class="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="systemStat"></apexchart>
              </div>

            </el-col>
          </el-row>



          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__title">Просмотры</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__data">
                <div class="data-item">
                  <div class="data-item__data">{{ shows }}</div>
                  <div class="data-item__title">Просмотры</div>
                </div>
                <div class="data-item">
                  <div class="data-item__data">{{ lowShow }}</div>
                  <div class="data-item__title">Неполные просмотры</div>
                </div>
              </div>

              <div class="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="showStat"></apexchart>
              </div>

            </el-col>
          </el-row>

          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__title">Обращения</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="stat__data">
                <div class="data-item">
                  <div class="data-item__data">{{ tikets }}</div>
                  <div class="data-item__title">Тикеты</div>
                </div>
                <div class="data-item">
                  <div class="data-item__data">{{ films }}</div>
                  <div class="data-item__title">Заказы</div>
                </div>
                <div class="data-item">
                  <div class="data-item__data">{{ domains }}</div>
                  <div class="data-item__title">Модерация</div>
                </div>
              </div>

              <div class="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="tiketsStat"></apexchart>
              </div>

            </el-col>
          </el-row>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/legend";
import "echarts/lib/chart/pie";
import echarts from "vue-echarts/components/ECharts";

import VueApexCharts from 'vue-apexcharts'

export default {
  name: "StatsPage",
  components: {
    echarts,
    apexchart: VueApexCharts,
  },
  data: () => ({

    
    countUsers: 0,
    usersStat: [],

    apiStat: [],
    reqwest: 0,

    systemStat: [],
    loading: 0,

    showStat: [],
    shows: 0,
    lowShow: 0,

    tiketsStat: [],
    tikets: 0,
    domains: 0,
    films: 0,


    chartOptions: {
  
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'dd.MM.yy'
        }
      },
      yaxis: {
        labels: {
          formatter: (value) => { return Math.round(value) },
        },
      },
      tooltip: {
        x: {
          format: 'dd.MM.yy'
        },
      },
    },


  }),

  async created() {
    this.getStats();
  },
  mounted() {
    
  },

  computed: {
    
  },
  methods: {
    getStats() {
      this.postMethod("stats.get").then(({
        users, 
        tikets: {tikets, domains, films}, 
        shows: {show, lowshow}, 
        system: {reqwest, loading}
      }) => {

        this.usersStat.push({
          name: 'Пользователи',
          data: users
        });
        this.countUsers = users.reduce((sum, item) => sum + item[1], 0);

        this.tiketsStat.push({
          name: 'Тикеты',
          data: tikets
        });
        this.tikets = tikets.reduce((sum, item) => sum + item[1], 0);
        this.tiketsStat.push({
          name: 'Заказы',
          data: films
        });
        this.films = films.reduce((sum, item) => sum + item[1], 0);
        this.tiketsStat.push({
          name: 'Модерация',
          data: domains
        });
        this.domains = domains.reduce((sum, item) => sum + item[1], 0);

        this.showStat.push({
          name: 'Просмотры',
          data: show
        });
        this.shows = show.reduce((sum, item) => sum + item[1], 0);
        this.showStat.push({
          name: 'Неполные просмотры',
          data: lowshow
        });
        this.lowShow = lowshow.reduce((sum, item) => sum + item[1], 0);


        this.apiStat.push({
          name: 'Запросы к api',
          data: reqwest
        });
        this.systemStat.push({
          name: 'Загрузка системы',
          data: loading
        });
        this.reqwest = Math.round( reqwest.reduce((sum, item) => sum + item[1], 0) / reqwest.length );
        this.loading = Math.round( loading.reduce((sum, item) => sum + item[1], 0) / loading.length );


        
      });
    },

    
  }
};
</script>

<style lang='scss' scoped>
.el-col {
  margin: 10px;
}

.chart{
  position: relative;
  left: -18px;
}

.stat__title {
  font-family: "Montserrat-Medium";
  font-size: 22px;
  padding: 60px 0 15px 0;
}
.stat__data {
  display: flex;
}

.data-item {
  padding-right: 80px;
}
.data-item__data {
  font-family: "Montserrat-Bold";
  font-size: 30px;
}
.data-item__title {
  font-size: 12px;
  color: #757575;
}
</style>


<style lang='scss'>

</style>