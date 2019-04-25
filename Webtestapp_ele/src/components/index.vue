<template>
 <div id="app">
    <el-container style="text-align: center;">
      <el-header>
        <h1 class="headerh1">WEB前端<i class="el-icon-question" style="float:right" @click="aboutjump"></i></h1>
      </el-header>
      <el-main>
       <!--  <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="lookjump">查看题库</el-button>
          </el-col>
        </el-row> -->

        <!-- <el-row>
          <el-col :span="24">
            <el-button type="success" style="margin-top:20px" @click="dialogVisible = true">
              @click="dialogVisible = true"
              <router-link to="/update">录入题库</router-link>
              录入题库
            </el-button>
          </el-col>
        </el-row> -->


      	<!-- 单元格 --> 
      <el-row class="cell">
        <div style="height: 20px;padding: 10px;" @click="lesson_1" >
          <el-col :span="22"><div>前言</div></el-col>
          <el-col :span="2" style="padding-top:4px"><i class="el-icon-arrow-right"></i></el-col>
        </div>
      </el-row>


      </el-main>
    </el-container>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="75%" :before-close="handleClose">
      <span>请联系管理员!!</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
var Snumber = 1;
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
      activeIndex: '1',
      isCollapse: true
    };
  },
  created: function() {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    lookjump() {
      this.$router.push("/look");
      //传递的参数用{{ $route.query.goodsId }}获取
      //this.$router.push({path: '/cart?goodsId=12'})
      //this.$router.go(-2)
      //后退两步
    },
    lesson_1(){
      //window.location.href = 'https://www.schoowall.com/uploads/index.html'; 
      this.$router.push("/lesson_1");
    },
    aboutjump(){
      this.$router.push("/about");
    }
  }
};
</script>

<style>
  #app{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .headerh1{
    color: white;
    text-align: center;
    letter-spacing: 10px;
  }
  .cell{
		 background: linear-gradient(90deg,#0081ff,#1cbbb4);
		 border-radius: 40px;
     margin-top: 10px;
     margin-bottom: 10px;
	}
	div.cell:active{
		 background: linear-gradient(90deg,#1cbbb4,#0081ff);
	}
</style>
