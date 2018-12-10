<template>
    <div class="teaching">
        <router-link to="/selectionclass" class="teaching-link">
            <div>
                <img src="/img/index_icon02_01.png" alt="">
                <p>班级经营</p>
            </div>
        </router-link>
        <router-link to="" class="teaching-link">
            <div>
                <img src="/img/index_icon02_01.png" alt="">
                <p>课程资源</p> 
            </div>
        </router-link>
        <router-link to="" class="teaching-link">
            <div>
                <img src="/img/index_icon02_01.png" alt="">
                <p>我的工作</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .teaching {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .teaching .teaching-link {
        width: 33%;
        position: relative;
        height: 100vh;
    }
    .teaching a div {
        width: 100%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .teaching a div p {
        
    }
</style>