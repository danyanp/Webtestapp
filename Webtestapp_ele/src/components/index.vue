<template>
 <div id="app">
    <el-container style="text-align: center;">
      <el-header>
        <h1 class="headerh1">WEB前端</h1>
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


      <el-row style="padding-top:150px">
          <button @click="summaryjump" class="button button-3d button-primary button-rounded">总结模式</button>
      </el-row>
      <el-row style="padding-top:20px">
          <button @click="practicaljump" class="button button-3d button-primary button-rounded">实训模式</button>
      </el-row>
      <el-row style="padding-top:20px">
          <button @click="answerjump" class="button button-3d button-primary button-rounded">答题模式</button>
      </el-row>
      <el-row style="padding-top:20px">
          <button @click="aboutjump" class="button button-3d button-primary button-rounded">关于APP</button>
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
    summaryjump(){
     var that = this
     setTimeout(function () {
        that.$router.push("/summary");
      }, 500)
    },
    answerjump(){
      var that = this
      setTimeout(function () {
        that.$router.push("/answer");
      }, 500)
    },
    practicaljump(){
      var that = this
      setTimeout(function () {
        that.$router.push("/practical");
      }, 500)
    },
    aboutjump(){
      var that = this
      setTimeout(function () {
        that.$router.push("/about");
      }, 500)
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

</style>
