<template>
    <div class="index">
        <img src="/img/51weixiao.png" alt="">
        <img src="/img/51weixiao2.png" alt="">
        <div class="content">
            <p class="title">51WeSchool</p>
            <p class="subheading">Learning Management System (LMS 3.0)</p>
            <p class="intro">整合科技 连接内容 服务用户</p>
            <div class="imgGroup1">
                <img src="/img/image_m2_1.png" alt="">
                <img src="/img/image_m2_2.png" alt="">
            </div>
            <div class="imgGroup2">
                <img src="/img/image_m2_3.png" alt="">
                <img src="/img/image_m2_4.png" alt="">
                <img src="/img/image_m2_5.png" alt="">
            </div>
        </div>
        <div class="circle">
            <div class="wrap clearfix c-white">
                    <div class="col-md-12 text-center">
                        <p class="title mb-title bigFont">微校的生态圈</p>
                        <div class="circleBox">
                            <div class="la-ball-scale-multiple">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <p class="circleText circleText1">学生及家长</p>
                            <p class="circleText circleText2">管理者及老师</p>
                            <p class="circleText circleText3">内容伙伴</p>
                            <p class="circleText circleText4">解决方案及工具</p>
                            <p class="circleText circleText5">微校<br>WeSchool</p>
                            <p class="circleText circleText6">Solution &amp; Tools</p>
                            <p class="circleText circleText7">Content Provider</p>
                            <p class="circleText circleText8">Administrator &amp; Teacher</p>
                            <p class="circleText circleText9">Student &amp; Parents</p>
                        </div>
                    </div>
                </div>
        </div>
        <div class="bg-grey">
            <p class="title bigFont">解决方案合作模型</p>
            <p class="intro c-grey mb-title text-indent">解决方案（key Tech）需要解合产业知识（domain know how）成为行业所属的应用，为技术产品化及人性化是我们努力的目标，我们整合关键技术，形成合力，真正落实科技+教育。</p>
            <img src="/img/image_m3.png">
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .index img {
        width: 100%;
        vertical-align: middle;
    }
    
    .content {
        text-align: center;
        padding: 55px 0;
        box-sizing: border-box;
    }
    
    .content p {
        margin: 0;
        line-height: 2;
    }
    
    .title {
        font-size: 36px;
        font-weight: bold;
    }
    
    .subheading {
        font-size: 28px;
        line-height: 2;
    }
    
    .content p.intro {
        font-size: 22px;
        line-height: 1.6;
        margin-top: 0px;
        margin-bottom: 60px;
    }
    
    .imgGroup1 {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    
    .imgGroup1 img {
        width: 320px;
        height: 320px;
        margin: 0 20px;
    }
    
    .imgGroup2 {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    
    .imgGroup2 img {
        width: 260px;
        height: 260px;
        margin: 0 20px;
    }
    
    .circle {
        width: 100%;
        padding: 55px 0;
        background-color: #fff;
    }
    
    .wrap {
        text-align: center;
    }
    
    .circleBox {
        position: relative;
    }
    
    .circleBox .circleText {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }
    
    .circleBox .circleText1 {
        color: #6781cc;
        top: 5%;
    }
    
    .circleBox .circleText2 {
        color: #6781cc;
        top: 15%;
    }
    
    .circleBox .circleText3 {
        color: #E8E9EE;
        top: 25%;
    }
    
    .circleBox .circleText4 {
        color: #fff;
        top: 35%;
    }
    
    .circleBox .circleText5 {
        color: #ffb400;
        top: 50%;
        font-size: 28px;
    }
    
    .circleBox .circleText6 {
        color: #fff;
        top: 65%;
    }
    
    .circleBox .circleText7 {
        color: #E8E9EE;
        top: 75%;
    }
    
    .circleBox .circleText8 {
        color: #6781cc;
        top: 85%;
    }
    
    .circleBox .circleText9 {
        color: #6781cc;
        top: 95%;
    }
    
    .la-ball-scale-multiple,
    .la-ball-scale-multiple>div {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    .la-ball-scale-multiple {
        display: block;
        font-size: 0;
        color: #697ace;
        text-align: center;
    }
    
    .la-ball-scale-multiple.la-dark {
        color: #333;
    }
    
    .la-ball-scale-multiple>div {
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor;
    }
    
    .la-ball-scale-multiple {
        width: 700px;
        height: 520px;
        margin: auto;
    }
    
    .la-ball-scale-multiple>div {
        position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        height: 520px;
        border-radius: 50%;
        opacity: 0;
        -webkit-animation: ball-scale-multiple 6s 0s linear infinite;
        -moz-animation: ball-scale-multiple 6s 0s linear infinite;
        -o-animation: ball-scale-multiple 6s 0s linear infinite;
        animation: ball-scale-multiple 6s 0s linear infinite;
    }
    
    .la-ball-scale-multiple>div:nth-child(2) {
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1s;
        -o-animation-delay: 1s;
        animation-delay: 1s;
    }
    
    .la-ball-scale-multiple>div:nth-child(3) {
        -webkit-animation-delay: 2s;
        -moz-animation-delay: 2s;
        -o-animation-delay: 2s;
        animation-delay: 2s;
    }
    
    .la-ball-scale-multiple>div:nth-child(4) {
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
        -o-animation-delay: 3s;
        animation-delay: 3s;
    }
    
    .la-ball-scale-multiple>div:nth-child(5) {
        -webkit-animation-delay: 4s;
        -moz-animation-delay: 4s;
        -o-animation-delay: 4s;
        animation-delay: 4s;
    }
    
    .la-ball-scale-multiple>div:nth-child(6) {
        -webkit-animation-delay: 5s;
        -moz-animation-delay: 5s;
        -o-animation-delay: 5s;
        animation-delay: 5s;
    }
    /*
 * Animation
 */
    
    @-webkit-keyframes ball-scale-multiple {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
        5% {
            opacity: .75;
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
    }
    
    @-moz-keyframes ball-scale-multiple {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
        5% {
            opacity: .75;
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
    }
    
    @-o-keyframes ball-scale-multiple {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
        5% {
            opacity: .75;
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            transform: scale(0.15);
        }
    }
    
    @keyframes ball-scale-multiple {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.15);
            -moz-transform: scale(0.15);
            -o-transform: scale(0.15);
            transform: scale(0.15);
        }
        5% {
            opacity: .75;
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
        }
    }
    
    .bg-grey {
        padding: 55px 80px;
        background: #efefef;
        text-align: center;
    }
    
    .bg-grey p.intro {
        margin-bottom: 60px;
    }
    
    .bigFont {
        font-size: 36px;
        font-weight: bold;
    }
    
    .bg-grey img {
        margin: auto;
    }
</style>