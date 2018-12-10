<template>
    <div>
        <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="课堂管理" name="first">
                  <Management></Management>
              </el-tab-pane>
              <el-tab-pane label="班级交流" name="second">
                  班级交流
              </el-tab-pane>
              <el-tab-pane label="学生档案" name="third">
                <Record></Record>
              </el-tab-pane>
            </el-tabs>
          </template>
</div>
</template>

<script>
    import Management from './classroom/management.vue'
    import Record from './record.vue'
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components: {
            Management,
            Record
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        created() {
            console.log(this.$route.query)
        },
    }
</script>

<style scoped>

</style>