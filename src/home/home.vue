<template>
    <div>
        <div class="banner">
          <img src="/img/logo_51weixiao.png" alt="">
          <div class="tabs">
              <ul>
                <li v-for="(item) in urlList" :key="item.id" :class="{active : active==item.massage}"   @click="goHome(item.massage)">
                  <router-link :to="item.to">{{item.massage}}</router-link>
                </li>
              </ul>
          </div>
          <div class="login">
              <div v-if="isIndex" @click="loginNew">登录微校</div>
              <div v-if="isIndex" @click="loginOld">旧版微校</div>
              <div class="experience" @click="loginExperience">申请体验</div>
          </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                isIndex: false,
                active: '',
                urlList: [{
                    to: '/index',
                    massage: '首页'
                }, {
                    to: '/product',
                    massage: '产品介绍'
                }, {
                    to: '/company',
                    massage: '公司介绍'
                }, ]
            };
        },
        methods: {
            goHome(e) {
                this.active = e;
                if (e === '首页') {
                    this.isIndex = true;
                } else {
                    this.isIndex = false
                }

            },
            loginNew() {
                const h = this.$createElement;
                this.$msgbox({
                    title: '登录',
                    message: h('p', null, [
                        h('span', null, '登录微校 '),
                        h('i', {
                            style: 'color: teal'
                        }, '账号密码')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            done();
                           this.$router.push('/loginIndex')
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    });
                });
            },
            loginOld() {},
            loginExperience() {},
        },
        created() {
            this.goHome("首页")
        },
    }
</script>

<style scoped>
    .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }
    
    .login {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .login div {
        padding: 0 20px;
        box-sizing: border-box;
    }
    
    .banner img {
        height: 80px;
        vertical-align: middle;
    }
    
    .tabs ul li {
        padding: 0;
        margin: 0;
        list-style: none;
        float: left;
        width: 92px;
        height: 75px;
        line-height: 75px;
        cursor: pointer;
        font-size: 16px;
        box-sizing: border-box;
        text-align: center;
    }
    
    a:-webkit-any-link {
        color: #000;
        cursor: pointer;
        text-decoration: none;
    }
    
    .tabs ul li.active {
        border-bottom: 5px solid #52689f;
        color: #52689f !important;
    }
    
    .tabs ul {
        margin: 0;
        padding: 0;
    }
    
    .login .experience {
        cursor: pointer;
        background: #00afef;
        box-sizing: border-box;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        padding: 10px 20px;
    }
</style>