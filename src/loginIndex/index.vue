<template>
    <div>
        <div class="login-banner">
            <img class="logo" src="/img/logo_51weixiao.png" alt="">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.login-banner {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #D9DEE4;
    background: #fff;
}
.logo {
    height: 69px;
    vertical-align: middle;
    margin-left: 60px;
}
</style>