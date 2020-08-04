<template>
    <menu>


        <!--  @open="handleOpen" @close="handleClose" -->
        <el-menu default-active="2" class="el-menu-vertical" :collapse="isCollapse">

            <div class="menu-button">
               <div class="menu-icon" v-on:click="isCollapse = !isCollapse"></div> 
            </div>
            
            <el-menu-item v-for="(item, index) in routers" :key="index" class="menu__item">
                <!-- {{ item.path }} {{ route }} -->
                <a :href="item.path" :title="item.meta.title" :class="{active: item.path == route}" class="menu__href">
                    <div class="menu__icon" :class="item.name"></div>
                    <span class="menu__name" slot="title">{{ item.meta.title }}</span>
                </a>
            </el-menu-item>



            <!-- <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Navigator One</span>
                </template>
                <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">item four</span>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">Navigator Four</span>
            </el-menu-item>-->
        </el-menu> 



        <!-- <div class="menu__head">
            <h1 class="menu__h1">Kholobok.biz</h1>
            <p class="menu__p">Видео контент</p>
        </div>
        <ul class="menu__list">

            <li v-for="(item, index) in routers" :key="index" class="menu__item">
                <template v-if="item.meta.visible && !item.meta.rights.includes(status)">
                    <a :href="item.path" :title="item.meta.title" :class="{active: item.path == route.path}" class="menu__href">
                        <div class="menu__icon" :class="item.name"></div>
                        <span class="menu__name">{{ item.meta.title }}</span>
                    </a>
                </template>
                

                <template v-if="value.attachments">
                    <div :title="value.name" class="menu__href">
                        <div class="menu__icon" :class="name"></div>
                        <span class="menu__name">{{ value.name }}</span>
                    </div>
                </template>
                <template v-else>
                    <a :href=" '/' + name " :title="value.name" class="menu__href">
                        <div class="menu__icon" :class="name"></div>
                        <span class="menu__name">{{ value.name }}</span>
                    </a>
                </template>
            </li>

        </ul> -->
    </menu>
</template>

<script>
    import {routers} from '~/router';

    export default {
        name: 'Menu',
        data: () => ({
            data: [],
            isCollapse: true
        }),
        async created() {
          console.log(this.$store.state.route)
        },
        computed:{
            routers(){ return routers.filter((item) => item.meta.visible && !item.meta.rights.includes(status) )},
            status(){ return this.$store.state.user.status},
            route(){ return this.$store.state.route } //this.$router.currentRoute}
        },
        methods: {}
    }
</script>

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

            .menu__href{
                height: 60px;
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

    .AdminPanel{
        background: url(../../assets/images/svg-icons/HOME.svg) no-repeat center/ 40px; 
    }
    .PlayerPage{
        background: url(../../assets/images/svg-icons/PLAY.svg) no-repeat center/ 35px;
    }
    .pages{
        background: url(../../assets/images/svg-icons/MINIMIZE.svg) no-repeat center/ 35px;
    }
    .VideoPage{
        background: url(../../assets/images/svg-icons/VIDEO_CAMERA.svg) no-repeat center/ 40px;
    }
    .TiketsPage{
        background: url(../../assets/images/svg-icons/MAIL.svg) no-repeat center/ 40px;
    }
    .UsersPage{
        background: url(../../assets/images/svg-icons/SHARE.svg) no-repeat center/ 40px;
    }
    .StatsPage{
        background: url(../../assets/images/svg-icons/STATISTICS.svg) no-repeat center/ 40px;
    }
    .AdsPage{
        background: url(../../assets/images/svg-icons/STAR.svg) no-repeat center/ 40px;
    }

    

    @media all and (min-width: 1440px) {
        // menu{ width: 300px; }
        // .menu__name{ font-size: 14px; }
        // .menu__href{ padding: 10px 30px; }
    }
</style>