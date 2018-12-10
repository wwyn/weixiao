<template>
    <div class="hb">
        <div class="conteiner-top">
            <div class="search">
                <input v-model='searchInput' @keyup="searchInput1" type="text" placeholder="搜索" class="search-input" id="SelePosterWhere">
                <a class="searchBtn"></a>
                <p class="keyword"><a>春节</a><a>母亲节</a><a>端午节</a><a>儿童节</a><a>万圣节</a><a>感恩节</a><a>圣诞节</a><a>中秋节</a><a>英语</a><a>数学</a></p>
            </div>
            <div id="addTemplate" class="addTemplate" @click="addTemplate">
                <i class="el-icon-tickets"></i>
                <span>添加海报</span>
            </div>
        </div>
        <Model :is-show="isShow" @children='poster'></Model>
    </div>
</template>

<script>
import Model from '../components/model.vue'
    export default {
        data() {
            return {
               isShow: false,
               searchInput: '',
            }
        },
        components: {
           Model, 
        },
        methods: {
            searchInput1(){
                console.log(this.searchInput,'wxp')
            },
           addTemplate() {
              this.isShow = true
           } ,
           poster() {
              this.isShow = false 
           }
        },
    }
</script>

<style scoped>
.hb {
    margin: 30px 20px;
    box-sizing: border-box;
}
.conteiner-top {
    width: 70%;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.search {
    margin-right: 20px;
}
.search-input {
    flex: 1;
    width: 100%;
    height: 30px;
    border-radius: 24px;
    padding-left: 10px;
    outline: none;
}
.addTemplate {
    margin-top: 6px;
    font-size: 16px;
    color: #00adef;

}
.keyword a {
    margin-right: 5px;
}

</style>