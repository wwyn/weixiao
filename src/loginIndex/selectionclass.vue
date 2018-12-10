<template>
    <div class="selection-class">
        <div>
            <p>选择您的班级</p>
            <router-link :to="{path:'/manageclass',query: {name: id}}">
                <div class="class-item" v-for="item in items" :key="item.id">
                    <img :src="item.img"  alt="">
                    <p>{{ item.title }}</p>
                    <h5>截止日期：{{ item.time }}</h5>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 1,
                items: [{
                    img: '/img/51logo.png',
                    title: '自然拼读A班',
                    time: '2019-1-23'
                }]
            }
        },
    }
</script>

<style scoped>
    .selection-class {
        background-color: #cecece;
        padding: 20px 30px;
        box-sizing: border-box;
        height: 100vh;
    }
    
    .selection-class a {
        text-decoration: none;
        color: #333;
    }
    
    .selection-class>div img {
        width: 120px;
        height: 120px;
        vertical-align: middle;
    }
    
    .class-item {
        width: 200px;
        cursor: pointer;
        background: #fff;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 30px;
        transition: all 0.5s ease;
    }
    
    .class-item:hover {
        transform: scale(1.05)
    }
</style>