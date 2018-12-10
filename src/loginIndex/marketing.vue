<template>
    <div class="marketing">
        <router-link to="/officialwebsite">
            <div class="w3">
                <div class="gwyx"></div>
                <p>官网营销</p>
            </div>
        </router-link>
        <router-link to="">
            <div class="w3">
                <div class="khzl"></div>
                <p>客户资料</p>
            </div>
        </router-link>
        <router-link to="">
            <div class="w3">
                <div class="ppfw"></div>
                <p>品牌服务</p>
            </div>
        </router-link>
        <router-link to="">
            <div class="w3">
                <div class="xxzx"></div>
                <p>学校咨询</p>
            </div>
        </router-link>
        <router-link to="">
            <div class="w3">
                <div class="xwbd"></div>
                <p>校务表单</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.marketing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.marketing a {
  width: 33%;
}
.w3 {
  width: 100%;
  text-align: center;
}
.w3 div {
  width: 160px;
  height: 160px;
  margin: auto;
  border-radius: 160px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-size: 160px 320px;
  background-position: 0 0;
  margin-top: 50px;
}
.w3 div:hover {
  background-position: 0 -160px;
}
p {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.gwyx {
  background-image: url("/img/wx02_icon01.png");
}
.khzl {
  background-image: url("/img/wx02_icon02.png");
}
.ppfw {
  background-image: url("/img/wx02_icon03.png");
}
.xxzx {
  background-image: url("/img/wx02_icon04.png");
}
.xwbd {
  background-image: url("/img/wx02_icon05.png");
}
</style>