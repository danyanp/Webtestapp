<template>
  <div id="app">
    <el-container>
      <el-header><h1 align='center'>WEB测试题</h1></el-header>
  <el-main style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <p>{{S_number}} {{Subject}}</p> 
        <div style="padding-left:20px">
            <el-row><el-radio v-model="radio" label="1">A.{{Option.A}}</el-radio></el-row>
            <el-row><el-radio v-model="radio" label="2">B.{{Option.B}}</el-radio></el-row>
            <el-row><el-radio v-model="radio" label="3">C.{{Option.C}}</el-radio></el-row>
            <el-row><el-radio v-model="radio" label="4">D.{{Option.D}}</el-radio></el-row>   
        </div>
        <div>
             <el-col :span="24">
               <div style="text-align: center;">
               <div v-if="showAnswer">正确答案：{{Answer}}</div>
                </div>
               <div style="text-align: center;padding-top:20px">
                 <el-button type="primary" v-on:click="showCorrect">查看答案</el-button>
               </div>
             </el-col>
        </div>
      </el-main>

      <el-footer style="text-align: center;padding-top:20px">
        <el-row>
          <el-col :span="24">
            <el-button-group>
              <el-button type="primary" icon="el-icon-arrow-left" v-on:click="frontSubject">上一题</el-button>
              <el-button type="primary" v-on:click="lastSubject">下一题<i class="el-icon-arrow-right el-icon--right"></i> </el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
var Snumber = 0
export default {
  name: 'App',
  created:function(){
    this.lastSubject()
  },
  data: function() {
    return{
      radio:'',
      S_number:'',
      Subject:'',
      Option:{},
      Answer:'',
      showAnswer:false
    }
  },
  methods: {
    //显示正确答案
    showCorrect: function(){
      this.showAnswer = !this.showAnswer
    },
    //后一个题目
    lastSubject:function(){
        //Snumber++
        //console.log(Snumber)
        this.newQuery(true)
    },
    //前一个题目
    frontSubject:function(){
        //Snumber--
        //console.log(Snumber)
        this.newQuery(false)
    },
    //新建一个查询
    newQuery:function(status){
      status ? Snumber++ : Snumber-- 
      console.log(Snumber) 
      if(Snumber<1){
        Snumber++
        this.open()
        return false
      }
      const query = Bmob.Query("question")
      query.limit(1);
      query.equalTo("S_number", "==",Snumber)
      query.find().then(res => {
            console.log(res)
            if(res.length==0){
              Snumber-- 
              this.open()
              console.log('没有')
              return false
            }
            this.S_number = res[0].S_number
            this.Subject = res[0].Subject
            this.Option = res[0].Option
            this.Answer = res[0].Answer
        });
    },
    open() {
        const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: h('i', { style: 'color: teal'}, '没有更多！！')
        });
      },
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

