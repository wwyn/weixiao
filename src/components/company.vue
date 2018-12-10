<template>
    <div>
        <div class="section bg-purple">
            <p class="title c-white bigFont mb-20">关于博寰</p>
            <p class="intro c-white mb-title text-center">博寰教育科技公司于2017年3月于上海成立，集团背景为台湾数位乐学，上海双壹教育，上海乐谷教育培训公司共同合资成立，为打造科技教育的生态圈，为更好的教育而生。</p>
        </div>
        <div class="section bg-grey">
            <div class="wrap">
                <div class="col-md-12">
                    <p class="title bigFont">旗下品牌</p>
                    <p class="intro mb-20 text-center c-black brand-p">51WeSchool微校系统<img class="brand1" src="/img/51logo.png"></p>
                    <p class="intro c-grey mb-title text-indent">此系统为面向全球的教育机构，包括高等院校、中小学、教育管理机构及在线教育机构、混合式教学、移动学习、在线教学及教学管理等方面提供优质的解决方案和专业的服务。</p>
                    <div class="text-center">
                        <img class="" src="/img/image_com01.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-white product">
                <div class="wrap">
                    <div class="col-md-12">
                        <p class="title bigFont">产品资讯</p>
                        <p class="intro c-grey mb-title text-indent">目前博寰教育科技为国内300家的教育机构提供先进的教学信息化方案和服务，产品主要包括六大项：</p>
                        <div class="wrap mb-20">
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_01.png">
                                    <p>内容创建系统</p>
                                </div>
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_02.png">
                                    <p>课程教学中心</p>
                                </div>
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_03.png">
                                    <p>题库测评系统</p>
                                </div>
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_04.png">
                                    <p>校务管理系统</p>
                                </div>
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_05.png">
                                    <p>招生营销中心</p>
                                </div>
                                <div class="item">
                                    <img class="item-img" src="/img/com_icon_06.png">
                                    <p>移动学习系统</p>
                                </div>
                        </div>
                        <p class="intro c-grey text-indent">WeSchool核心产品覆盖教学全过程，集课程建设、资源管理、移动学习、社区学习、交流互动、统计测评、在线课堂于一体，满足学生在课堂内外进行自主学习和协作学习的需求。</p>               
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            name() {

            }
        },
    }
</script>

<style scoped>
    p {
        margin: 0;
    }
    
    .section {
        padding: 55px 0;
        box-sizing: border-box;
    }
    
    .bg-purple {
        background: #4c5e96;
    }
    
    .bg-grey {
        background: #efefef;
    }
    
    .bg-white {
        background: #fff;
    }
    
    .title {
        font-size: 36px;
        font-weight: bold;
        line-height: 2;
    }
    
    .text-indent {
        text-align: left;
        text-indent: 2em;
    }
    
    .article {
        font-size: 18px;
        line-height: 30px;
    }
    
    .intro {
        font-size: 22px;
        line-height: 1.6;
    }
    
    .wrap {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    
    .item {
        width: 30%;
        margin-bottom: 20px;
    }
    
    .c-white {
        color: white !important;
    }
    
    .mb-20 {
        margin-bottom: 20px !important;
    }
    
    .brand1 {
        width: 100px;
        height: 100px;
        vertical-align: middle;
        margin-left: 20px;
    }
    
    .mb-title {
        margin-bottom: 60px !important;
    }
</style>