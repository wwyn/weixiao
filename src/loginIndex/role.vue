<template>
    <div class="role">
        <el-tabs type="border-card">
            <el-tab-pane label="学校信息">
                <Schoolmessage></Schoolmessage>
            </el-tab-pane>
            <el-tab-pane label="教师信息">配置管理</el-tab-pane>
            <el-tab-pane label="课程信息">角色管理</el-tab-pane>
            <el-tab-pane label="学生风采">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Schoolmessage from './schoolmessgae.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            Schoolmessage,
        },
        methods: {
            
        },
    }
</script>

<style>
    .tab-bar .role .el-tabs__nav-scroll{
        text-align: left;
    }
</style>