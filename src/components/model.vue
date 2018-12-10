<template>
    <div class="modal-box" v-if='isShow'>
        <div class="modal-body">
                <div class="modal-hander">
                    <div>活动模板</div>
                    <i @click='clearStyle' class="el-icon-close"></i>
                </div>
                <div class="modal-content">
                    <el-form ref="form" :model="form" label-width="50px">
                        <el-form-item label="头像">
                            <div class="upImage">+<input type="file" @change='addImg($event)'></div>
                            </el-form-item>
                        <el-form-item label="标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="类别">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="连接">
                            <el-input v-model="form.connect"></el-input>
                        </el-form-item>
                        <el-form-item label="活动说明">
                            <el-input type="textarea" v-model="form.description"></el-input>
                        </el-form-item>
                        <el-form-item label="上传文件">
                            <el-input type="file" v-model="form.file"></el-input>
                        </el-form-item>
                        <el-form-item label="zip说明">
                            <el-input type="textarea" v-model="form.zipdescription"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">确认</el-button>
                            <el-button @click='clearStyle'>取消</el-button>
                        </el-form-item>
                        </el-form>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        props: {
            isShow: {
                type: Boolean,
            }
        },
        data() {
            return {
                form: {
                    img: '',
                    title: '',
                    type: '',
                    connect: '',
                    description: '',
                    file: '',
                    zipdescription: '',
                },
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                }
            }
        },
        methods: {
            onSubmit(e) {
                // let obj = this.form;
                // this.ycList.push(obj);
                this.$emit('children')
                this.form = {}
            },
            clearStyle() {
                this.$emit('children')
            },
            addImg(event) {                
                let  reader  = new  FileReader();              
                let  img1 = event.target.files[0];
                console.log(event, 'E')              
                let  type = img1.type; //文件的类型，判断是否是图片  
                            
                let  size = img1.size; //文件的大小，判断图片的大小  
                            
                if (this.imgData.accept.indexOf(type)  ==  -1) {                  
                    alert('请选择我们支持的图片格式！');                  
                    return  false;              
                }              
                if (size > 3145728) {                  
                    alert('请选择3M以内的图片！');                  
                    return  false;              
                } 
                // this.form.img = 'aaa'
            },
        },
    }
</script>

<style scoped>
    .modal-box {
        width: 100%;
        height: 100%;
        background-color: rgba(22, 22, 22, .5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    
    .modal-body {
        width: 600px;
        height: 700px;
        overflow: auto;
        margin: 30px auto;
        background-color: #cecece;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .modal-hander {
        display: flex;
        justify-content: space-between;
        height: 40px;
    }
    
    .modal-content {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .el-form-item {
        text-align: right;
    }
    
    .upImage {
        width: 148px;
        height: 148px;
        line-height: 148px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 6px;
        position: relative;
    }
    
    .upImage>input {
        width: 100%;
        height: 148px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>