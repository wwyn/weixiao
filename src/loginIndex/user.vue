<template>
    <div>
       <div class="main clearfix mt-20">
            <div class="x_content wrap">
                <div id="ele-album-div" class="conteiner-right dis-none" style="display: block;">
                    <div class="yc-content">
                      <div class="yc-hander">
                          <div class="switch">
                              <el-switch
                              v-model="value1"
                              active-text="模板"
                              inactive-text="已生成">
                            </el-switch>
                          </div>
                          <div class="add-activity" @click="selectStyle"><i class="el-icon-tickets"></i>新增活动</div>
                      </div>
                      <div class="yc-cards">
                          <div class="yc-card" v-for="item in ycList">
                              <div class="yc-card-bgimg">
                                <div class="yc-bgimg-model">
                                  <div class="yc-look" @click='lookCY'>
                                    <div><i class='el-icon-view'></i></div>
                                    <p>查看</p>
                                  </div>
                                  <div class="yc-use">
                                      <div><i class='el-icon-edit'></i></div>
                                      <p>已使用</p>
                                  </div>
                                </div>
                              </div>
                              <h3>{{item.title}}</h3>
                              <h5>{{item.type}}</h5>
                              <div class="editor">
                                <img class="reweima" src="/img/seen2.png" alt="">
                                <div class="write">
                                    <i class="el-icon-edit"></i>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>			
        </div>
        <Model :is-show='Show' @children='activity'></Model>
</div>
</template>

<script>
    import Model from '../components/model.vue'
    export default {
        data() {
            return {
                value1: true,
                Show: false,
                ycList: [],
            }
        },
        components: {
            Model,
        },
        methods: {
            selectStyle() {
                this.Show = true;
            },
            activity() {
                this.Show = false;
            }
            // lookCY() {
            //     this.Show = true;
            // },

        }
    };
</script>

<style scoped>
    .yc-content {
        margin: 20px 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: center;
    }
    
    .switch {
        flex: 1;
        margin: 20px auto 0;
    }
    
    .yc-hander {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .add-activity {
        width: 100px;
        font-size: 16px;
        color: #00adef;
    }
    
    .yc-cards {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 30px 20px;
        box-sizing: border-box;
    }
    
    .yc-card {
        width: 220px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-right: 10px;
        overflow: hidden;
        padding-bottom: 10px;
    }
    
    .yc-card-bgimg {
        height: 180px;
        background: url('http://editor-material.oss-cn-beijing.aliyuncs.com/style/20181018/1539842234/%E6%96%B0%E5%A2%9E%E7%B4%A0%E6%9D%90_1.png') no-repeat;
        background-size: contain;
        position: relative;
    }
    
    .yc-card-bgimg:hover .yc-bgimg-model {
        opacity: 1;
    }
    
    .yc-bgimg-model {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 180px;
        top: 0;
        left: 0;
        background-color: rgba(10, 10, 10, .3);
        transition: all .6s;
    }
    
    .yc-bgimg-model>div {
        width: 44px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        display: inline-block;
        margin-top: 40px;
    }
    
    .yc-look {
        margin-right: 20px;
    }
    
    .yc-look div i {
        font-size: 22px;
    }
    
    .yc-use div i {
        font-size: 22px;
    }
    
    .yc-look div {
        width: 44px;
        height: 44px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 100%;
        line-height: 50px;
    }
    
    .yc-use div {
        width: 44px;
        height: 44px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 100%;
        line-height: 50px;
    }
    
    .yc-card h3+h5 {
        font-size: 14px;
        text-align: center;
        color: #000;
    }
    
    .editor {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .reweima {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-left: 10px;
    }
    
    .write {
        flex: 1;
        text-align: center;
    }
</style>