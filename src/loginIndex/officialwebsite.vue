<template>
    <div>
        <header>
            <p>官网直销</p>
        </header>
        <div class="tab-bar">
            <div class="go-back" @click="goBack"> < 返回</div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="营销活动" name="first">
                   <User></User> 
                </el-tab-pane>
                <el-tab-pane label="营销海报" name="second">
                    <Poster></Poster>
                </el-tab-pane>
                <el-tab-pane label="布置官网" name="third">
                    <Role></Role>
                </el-tab-pane>
            </el-tabs>

        </div>
    </div>
</template>

<script>
    import User from './user.vue'
    import Poster from './poster.vue'
    import Role from './role.vue'
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            User,
            Poster,
            Role
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            goBack() {
                console.log(1);
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    header {
        text-align: center;
        height: 70px;
        background: #2a3f54;
        line-height: 70px;
        color: #fff;
        font-size: 16px;
    }
    
    .tab-bar .el-tabs__nav {
        display: inline-block;
        float: none;
    }
    
    .tab-bar .el-tabs__nav-scroll {
        text-align: center;
    }
    
    .tab-bar {
        position: relative;
    }
    
    .go-back {
        position: absolute;
        top: 9px;
        left: 0;
        z-index: 999;
    }
</style>