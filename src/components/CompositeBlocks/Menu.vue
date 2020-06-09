<template>
    <menu>
        <div class="menu__head">
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
                

                <!-- <template v-if="value.attachments">
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
                </template> -->
            </li>

        </ul>
    </menu>
</template>

<script>
    import {routers} from '~/router';

    export default {
        name: 'Menu',
        data: () => ({
            data: []
        }),
        async created() {
          //console.log(this.route)
        },
        computed:{
            routers(){ return routers},
            status(){ return this.$store.state.user.status},
            route(){ return this.$router.currentRoute}
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>

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


    menu{
        min-height: 100vh;
        width: 200px;
        background: #323232;
        color: #fff;
    }
    .menu__head{
        width:100%;
        padding: 60px 20px 60px 20px;
        box-shadow: 0px 1px 0px #515151;
        margin-bottom: 50px;
    }
    .menu__h1{
        font-size: 22px;
        font-family: 'Montserrat-Black';
        line-height: 30px;
    }
    .menu__p{
        font-size: 12px;
        color: #9e9e9e;
    }
    .menu__list{ list-style: none; }
    .menu__item{ color: #a1a1a1; }
    .menu__href{
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 10px;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        cursor: pointer;
    }
    .menu__href:hover, .menu__href.active{
        background: #3b3b3b;
    }
    .menu__icon{
        width: 50px;
        height: 30px;
        color: #a1a1a1;
        padding: 5px 15px;
    }
    .menu__icon .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        line-height: 30px;
    }
    .active .menu__icon{ color: #34db93; }
    .menu__name{
        font-size: 12px;
        font-family: 'Montserrat-Medium';
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: 30px;
    }
    .menu__item.active{ color: #fff; }

    @media all and (min-width: 1440px) {
        menu{ width: 300px; }
        .menu__head{
            padding: 60px 20px 60px 20px;
            margin-bottom: 50px;
        }
        .menu__h1{
            font-size: 34px;
            line-height: 36px;
        }
        .menu__p{ font-size: 14px; }
        .menu__name{ font-size: 14px; }
        .menu__href{ padding: 10px 30px; }
    }
</style>