<template>
	<menu>

		<!--  @open="handleOpen" @close="handleClose" -->
		<el-menu default-active="2" class="el-menu-vertical" :collapse="isCollapse">

			<div class="menu-button">
					<div class="menu-icon" v-on:click="isCollapse = !isCollapse"></div> 
			</div>
			

      <template v-for="(item, index) in routers">

        <el-menu-item class="menu__item" v-if="!item.meta.type && item.meta.type != 'sub'" :key="index">
          <a 
            :href="item.path" 
            :title="item.meta.title" 
            :class="{active: item.path == route}" 
            class="menu__href">
            <div class="menu__icon" :class="item.name">
              <div class="messages-indicator" v-if="item.name == 'TiketsPage' && countMessages != 0">{{countMessages}}</div>
            </div>
            <span class="menu__name" slot="title">{{ item.meta.title }}</span>
            
          </a>
        </el-menu-item>

        <el-submenu v-else :key="index" :index="index+''" class="menu__item">
          <template slot="title">
            <a
              v-if="item.meta.access.includes(status)"
              :href="item.path" 
              :title="item.meta.title" 
              :class="{active: item.path == route}" 
              class="menu__href">
              <div class="menu__icon" :class="item.name"></div>
              <span class="menu__name" slot="title">{{ item.meta.title }}</span>
            </a>

            <div
              v-else
              :title="item.meta.title" 
              :class="{active: item.path == route}" 
              class="menu__href">
              <div class="menu__icon" :class="item.name"></div>
              <span class="menu__name" slot="title">{{ item.meta.title }}</span>
            </div>
          </template>

          <el-menu-item v-for="(subItem, subIndex) in artikles" :key="subIndex" :index="index+'-'+subIndex">
            <a
              :href="'/articles/'+ subItem.id" 
              :class="{active: subItem.path == route}" 
              class="menu__href">
              <span class="menu__name" slot="title">{{ subItem.title }}</span>
            </a>
          </el-menu-item>
          
        </el-submenu>

      </template>




		</el-menu> 


	</menu>
</template>

<script>
  import {routers} from '~/router';
  import { mapActions } from 'vuex';

  export default {
    name: 'Menu',
    data: () => ({
      data: [],
      isCollapse: true,

      artikles: null,
    }),
    async created() {
      this.getArtikles();
      
      this.getNewMessages();
      setInterval(() => { this.getNewMessages(); }, 30000);
    },
    computed:{
        routers(){ return routers.filter((item) => item.meta.visible && !item.meta.rights.includes(this.status) ) },
        status(){ return this.$store.state.user.status},
        route(){ console.log('router', this.$store.state.route); return this.$store.state.route },

        countMessages(){ return this.$store.state.tikets.messages },
    },
    methods: {
      ...mapActions([
        'getNewMessages'
      ]),

      getArtikles(){
        this.postMethod('articles.get').then((response) => {
          this.artikles = response;
        });
      },
    }
  }
</script>

<style lang='scss'>

	.el-submenu__title {
		padding: 0 !important;
	}
	.el-submenu__title:hover {
		background-color: transparent;
	}
  .el-submenu__icon-arrow {
    height: 56px;
    top: 0;
    right: 0;
    margin-top: 0;
    padding: 0 20px;
    line-height: 56px;
    transition: none;

    &:hover{
      background: rgba(56, 207, 154, 0.2);
    }

  }

  .el-submenu .el-menu-item {
    padding: 0 !important;
  }

  .el-menu.el-menu--popup {
    padding: 0;

    & .el-menu-item{
      height: 40px;
      line-height: 40px;
      
      & a{color: #000;}

      &:hover{
        background: rgba(56, 207, 154, 0.2);
      }
    }
  }


</style>

<style lang='scss' scoped>
  // 38cf99
  // 2fb887

  

  menu{
    min-height: 100vh;
    width: 80px;
    // background: #323232;
    color: #fff;
  }

  .el-menu-vertical{
    width: 80px;
    height: 100vh;
    z-index: 999;

    .el-menu-item:hover{ background-color: transparent;}

    &:not(.el-menu--collapse) {
        width: 250px;
    }

    .menu__item{ 
      // color: #a1a1a1; 
      padding: 0 !important;
      height: auto;

      .el-menu-item .menu__href{
        padding: 15px 0 15px 45px;
      }

      .menu__href{
        height: 56px;
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 15px 0 15px 80px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        cursor: pointer;
        position: relative;

        &:hover{
          background: rgba(56, 207, 154, 0.2);
        }
        &.active{
          background: rgba(56, 207, 154, 0.2);
        }
        &.active:before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #38cf99;
          width: 4px;
          height: 100%;
          border-radius: 0 3px 3px 0;
        }

        .menu__icon{
          position: absolute;
          left: 25px;
          top: 15px;
          width: 30px;
          height: 30px;
          color: #a1a1a1;
          padding: 5px 15px;

          .messages-indicator{
            width: 18px;
            height: 18px;
            font-size: 10px;
            text-align: center;
            line-height: 18px;
            border-radius: 20px;
            background: crimson;
            color: #fff;
            font-family: 'ProximaNova-Bold';
            position: absolute;
            top: -8px;
            right: -8px;
          }
        }

        .menu__name{
          font-size: 12px;
          font-family: 'Montserrat-Medium';
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 30px;
          color: #000000;
        }
      }
    }
  }


  .menu-button{
    padding: 25px 25px 150px 25px;
    
    .menu-icon{
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: url(../../assets/images/svg-icons/HAMBURGER_MENU.svg) no-repeat center/ 30px; 
    }
    .menu-icon:hover{
      background: url(../../assets/images/svg-icons/HAMBURGER_MENU_black.svg) no-repeat center/ 30px;
    }
  }

  .AdminPanel{ background: url(../../assets/images/svg-icons/HOME.svg) no-repeat center/ 40px; }
  .PlayerPage{ background: url(../../assets/images/svg-icons/PLAY.svg) no-repeat center/ 35px; }
  .pages{ background: url(../../assets/images/svg-icons/MINIMIZE.svg) no-repeat center/ 35px; }
  .VideoPage{  background: url(../../assets/images/svg-icons/VIDEO_CAMERA.svg) no-repeat center/ 40px; }
  .TiketsPage{ background: url(../../assets/images/svg-icons/MAIL.svg) no-repeat center/ 40px; }
  .UsersPage{ background: url(../../assets/images/svg-icons/SHARE.svg) no-repeat center/ 40px; }
  .StatsPage{ background: url(../../assets/images/svg-icons/STATISTICS.svg) no-repeat center/ 40px; }
  .AdsPage{ background: url(../../assets/images/svg-icons/STAR.svg) no-repeat center/ 40px; }

  .ArticlesPage{ background: url(../../assets/images/svg-icons/BLANK.svg) no-repeat center/ 40px; }

</style>