<template>
    <div>
        <el-col class="fk">
            <el-menu
            default-active="1"
            @select="handleSelect"
            >
           <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-col>
        <div class="fk-content">
            <div v-show="index1 == 1">
                <textarea v-model="textarea" maxlength="1000" placeholder="发布班级通知，最多100字" name="" id="" cols="80" rows="10"></textarea>
                 <div class="submit-btn"><el-button @click="SubBtn" size="24" type="primary" round>提交</el-button></div>
            </div>
            <div v-show="index1 == 2">导航二</div>
            <div v-show="index1 == 3">导航三</div>
            <div v-show="index1 == 4">导航四</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textarea: '',
                index1: '1'
            }
        },
        methods: {
            handleSelect(key) {
                this.index1 = key;
            },
            SubBtn() {
                console.log(this.textarea)
            }
        }
    };
</script>

<style>
    .fk.el-col-24 {
        width: 30%;
    }
    
    .fk-content {
        width: 70%;
        float: right;
    }
    
    .fk-content .submit-btn {
        text-align: right;
    }
    
    .fk .el-menu {
        margin-right: 20px;
        border: none;
    }
    
    .el-menu-item {
        height: 72px;
        border: 1px solid #d9d9d9;
        background: #fff;
        line-height: 72px;
        font-weight: 900;
        font-size: 17px;
        padding: 0 40px;
        margin-bottom: 16px;
        border-radius: 5px;
    }
</style>