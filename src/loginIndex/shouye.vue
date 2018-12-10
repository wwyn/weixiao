<template>
    <div>
        <div class="circle">
            <router-link to="/marketing">
                <dl class="c-item tl">
                    <dt><img src="img/inner_icon01_scyx.png"></dt>
                    <dd><h3>市场营销</h3></dd>
                </dl>
            </router-link>
            <router-link to="">
                <dl class="c-item tr">
                    <dt><img src="img/inner_icon02_ydcp.png"></dt>
                    <dd><h3>云端测评</h3></dd>
                </dl>
            </router-link>
            
            <router-link to="">
                <dl class="c-item bl">
                    <dt><img src="img/inner_icon03_xwgl.png"></dt>
                    <dd><h3>校务管理</h3></dd>
                </dl>
           </router-link>
            
            <router-link to="">
                <dl class="c-item br">
                    <dt><img src="img/inner_icon04_zxzb.png"></dt>
                    <dd><h3>师训课程</h3></dd>
                </dl>
            </router-link>
            
            <router-link to="/teaching">
                <dl class="center-item ">
                    <dt><img src="img/inner_image03.png"></dt>
                    <dd><h3>教学中心</h3></dd>
                </dl>
            </router-link>
            
        </div>
        <div id="allNav" :class="showNav? 'showNav':''">
            <span class="show-nav-btn" @click="ShowNav">
                <i class="fa fa-angle-right"></i>
            </span>
            <ul>   
                <router-link to="">
                    <li>微校首页<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>
                <router-link to="">           
                    <li>市场营销<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>   
                <router-link to="">
                <li>云端测评<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>   
                <router-link to="">
                    <li>教学中心<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>  
                <router-link to="">
                    <li>校务管理<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>  
                <router-link to="">
                    <li>师训课程<span class="fa fa-angle-right pull-right"></span></li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showNav: false
            }
        },
        methods: {
            ShowNav() {
                this.showNav = !this.showNav;
            }
        },
    };
</script>

<style scoped>
    .circle {
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 2px dashed #999;
        position: absolute;
        top: 50%;
        transform: translateY(-55%);
        -webkit-transform: translateY(-55%);
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    
    .circle dl {
        cursor: pointer;
        color: #000;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    
    .tl {
        top: 20%;
        margin-top: -87px;
        left: -60px;
    }
    
    .c-item {
        position: absolute;
        text-align: center;
    }
    
    .c-item dt,
    .c-item dt img {
        width: 150px;
        height: 150px;
    }
    
    dd,
    dt {
        margin-left: 0;
        line-height: 1.42857143;
    }
    
    .c-item dd,
    .center-item dd {
        margin-top: 20px;
    }
    
    .tr {
        top: 20%;
        margin-top: -87px;
        right: -60px;
    }
    
    .bl {
        bottom: 15%;
        margin-bottom: -87px;
        left: -60px;
    }
    
    .br {
        bottom: 15%;
        margin-bottom: -87px;
        right: -60px;
    }
    
    .center-item {
        width: 250px;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 0;
        right: 0;
        margin: -125px auto 0;
    }
    
    .circle dl:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        color: #00b0f0 !important;
    }
    
    #allNav {
        width: 200px;
        position: fixed;
        left: -200px;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        z-index: 9999;
        cursor: pointer;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    
    #allNav .show-nav-btn {
        z-index: 9998;
        position: absolute;
        right: -26px;
        top: 50%;
        margin-top: -30px;
        display: inline-block;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background: #00b0f0;
        text-align: right;
    }
    
    #allNav.showNav {
        left: 0 !important;
    }
    
    #allNav .show-nav-btn i {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        line-height: 60px;
        margin-right: 10px;
    }
    
    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .fa-angle-right:before {
        content: "\f105";
    }
    
    ul {
        padding: 0;
    }
    
    #allNav ul a li {
        color: #fff;
        font-size: 16px;
        line-height: 60px;
    }
    
    #allNav ul a li {
        height: 60px;
        padding: 0 30px;
        background: #00b0f0;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }
    
    ul li {
        list-style: none;
    }
    
    #allNav ul a li span {
        line-height: 60px;
    }
    
    .fa.pull-right {
        margin-left: .3em;
    }
    
    .pull-right {
        float: right;
    }
</style>