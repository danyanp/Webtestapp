<template>
    <div>
      <div v-for="item in data" v-bind:key="item.id" v-bind:title="item.title">
        <!-- 单元格 --> 
        <el-row>
          <div style="height: 20px;padding: 10px;">
            <el-col :span="24">
                <button href="" class="button button-raised button-primary button-pill" style="padding:0 120px;">{{item.title}}</button>
            </el-col>
          </div>
        </el-row> 
      </div>

    </div>
</template>
<script>
export default {
    //1.请求总结目录数据
    created(){
      this.openFullScreen()
      this.newQuery()
    },
    data() {
      return {
        data: ''
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
      },
      //新建一个查询
      newQuery:function(){
        const query = Bmob.Query("lesson")
        query.find().then(res => {
              console.log(res)
              this.data = res
          });
      }
    }
  }
</script>
<style>
  #app{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
  }
  /* .headerh1{
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
	} */
</style>
