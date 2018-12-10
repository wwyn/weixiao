<template>
    <div>
       <div class="section">
            <p class="title">内容创建系统</p>
            <p class="intro">(CMS)</p>
            <p class="intro">内容拥有者可以透过内容管理平台，快速为老师，为学生，部署一堂生动的数位课堂在线下课堂使用，或在直播教室中教学，能让内容赋予课程化，呈现立体的学习模型，非常方便。</p>
       </div>
       <div class="section">
            <div class="wrap">
                <div class="col-md-6">
                    <p class="intro text-indent">为老师搭建完成的课程步奏，循序渐进的授课环节。</p>
                    <article class="text-indent c-grey">为老师搭建完整的课程步骤，循序渐进的授课环节，为老师带来许多的便利，当内容加入课程中心后，就能自动化的与班级管理工具结合使用，打造一个多维的授课模型。</article>
                    <article class="text-indent c-grey">提供了全学科、同步到书到课的优质资源与海量题库，支持本校资源、第三方资源引入，助力老师轻松备课、高效上课！</article>
                    <article class="text-indent c-grey">支持视频、图片、音频、flash、unity等多格式的上传，组成多种模式的教学课件。</article>
                    <div class="img-group">
                        <div class="text-center"><img src="/img/slide0005_image020.png"></div>
                        <div class="text-center"><img src="/img/slide0005_image022.png"></div>
                        <div class="text-center"><img src="/img/slide0005_image024.png"></div>
                        <div class="text-center"><img src="/img/slide0005_image026.png"></div>
                        <div class="text-center"><img src="/img/slide0005_image028.png"></div>
                    </div>
                </div>
                <div>
                    <img class="col-md-12" src="/img/image_pro01.png">
                </div>
            </div>
       </div>
       <div class="section">
            <div class="wrap clearfix">
                <div class="col-md-7">
                    <img class="col-md-12" src="/img/image_pro02.png">
                </div>
                <div class="col-md-5">
                    <p class="intro text-indent">学生端自动结合进学生移动学习平台，与微信互联，打通接口。</p>
                    <article class="text-indent c-grey">当老师布置一个课后作业时，家长或学生即可立即收到提醒，做到教与学的衔接。</article>
                    <article class="text-indent c-grey">我们为学生端设计的多达20种的练习模组，满足不同学科的学习需求。</article>
                    <article class="text-indent c-grey">学生练习模组：选择题、口语题、跟读模式、大图模式、问答模式、录音模式、填空模式……</article>
                </div>
            </div>
       </div>
       <div class="section">
            <div class="wrap">
                <div class="text-center">
                    <img src="/img/icon_president.png" class="mb-20">
                    <p class="intro text-indent">校长可以通过CMS获得什么？</p>
                    <article class="c-grey">优质资源越来越多</article>
                    <article class="">教师流动、资源留存</article>
                    <article class="">评估教师工作成果</article>
                    <article class="">节省培训时间、费用</article>
                </div>
                <div class="text-center">
                    <img src="/img/icon_teacher.png" class="mb-20">
                    <p class="intro text-indent">教师可以通过CMS获得什么？</p>
                    <article class="c-grey">获得属于自己的课程</article>
                    <article class="">增加积极性、成就感</article>
                    <article class="">更多的课堂互动方式</article>
                    <article class="">更好的与学生交流</article>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    img {
        width: 100%;
        vertical-align: middle;
    }
    
    .section {
        padding: 55px 20px;
        box-sizing: border-box;
        background: #efefef;
    }
    
    .section p {
        margin: 0;
        text-align: center;
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
    }
    
    .wrap>div {
        width: 50%;
    }
    
    .wrap>div:nth-child(2) {
        margin-left: 10px;
    }
    
    .img-group {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 20px auto 60px;
    }
    
    .img-group>div {
        width: 20%;
        margin-right: 10px;
    }
    
    .mb-20 {
        width: 120px;
        height: 120px;
    }
</style>