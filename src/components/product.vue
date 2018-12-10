<template>
    <div>
       <div class="section bg-purple">
            <p class="title c-white bigFont mb-20">51微校</p>
            <p class="subheading c-white text-center">覆盖教学全过程</p>
            <p class="intro c-white mb-title text-center">协助机构办好学校</p>
       </div>
       <div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="hh">
                <el-tab-pane label="内容创建系统" name="first">
                  <Content></Content>
                  <Footer></Footer>
                </el-tab-pane>
                <el-tab-pane label="老师教学中心" name="second">
                  <Teacher></Teacher>
                  <Footer></Footer>
                </el-tab-pane>
                <el-tab-pane label="校务管理中心" name="third">
                  <Administration></Administration>
                  <Footer></Footer>
                </el-tab-pane>
                <el-tab-pane label="招生营销中心" name="fourth">
                  <Marketing></Marketing>
                  <Footer></Footer>
                </el-tab-pane>
                <el-tab-pane label="学生作业中心" name="fifth">
                  <Student></Student>
                  <Footer></Footer>
                </el-tab-pane>
            </el-tabs>

       </div>

    </div>
</template>

<script>
    import Content from './content.vue'
    import Teacher from './teacher.vue'
    import Administration from './administration.vue'
    import Marketing from './marketing.vue'
    import Student from './student.vue'
    import Footer from './footer.vue'
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            Content,
            Teacher,
            Administration,
            Marketing,
            Student,
            Footer
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style>
    .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
    .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
    .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
    .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding-left: 20px !important;
    }
    
    .el-tabs--bottom .el-tabs__item.is-bottom:last-child,
    .el-tabs--bottom .el-tabs__item.is-top:last-child,
    .el-tabs--top .el-tabs__item.is-bottom:last-child,
    .el-tabs--top .el-tabs__item.is-top:last-child {
        padding-right: 20px !important;
    }
    
    .hh .el-tabs__header {
        margin: 0 !important;
    }
    
    .hh .el-tabs__active-bar {
        background-color: rgba(250, 173, 173, 0.993) !important;
    }
    
    .hh .el-tabs__item.is-active {
        background-color: rgba(250, 173, 173, 0.993);
        color: #fff !important;
    }
    
    .section {
        text-align: center;
        padding: 55px 0;
        box-sizing: border-box;
    }
    
    .bg-purple {
        background: #4c5e96;
    }
    
    .bg-purple p {
        color: #fff;
    }
    
    .title {
        font-size: 36px;
        font-weight: bold;
    }
    
    .subheading {
        font-size: 28px;
        line-height: 2;
        margin: 0;
    }
    
    .intro {
        font-size: 22px;
        line-height: 1.6;
        margin-top: 0px;
    }
    
    .hh .el-tabs__nav {
        display: inline-block;
        float: none;
    }
    
    .hh .el-tabs__nav-scroll {
        text-align: center;
    }
</style>