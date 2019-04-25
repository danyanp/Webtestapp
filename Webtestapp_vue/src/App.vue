<template>
  <div id="app">
    <div>
      <h1 align="center">web考试题</h1>
    </div>
    <div class="container">
      <div class="row col-md-4 col-md-offset-4">({{S_number}}){{Subject}}</div>
      <div class="row col-md-4 col-md-offset-4">
        <div>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">{{Option[0]}}
          </label>
        </div>

        <div>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">{{Option[1]}}
          </label>
        </div>

        <div id>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">{{Option[2]}}
          </label>
        </div>

        <div id>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">{{Option[3]}}
          </label>
        </div>
      </div>
      <div class="row col-md-4 col-md-offset-4" v-if="showAnswer">正确答案：{{Answer}}</div>
    </div>
    <div align="center">
      <button type="button" class="btn btn-info glyphicon glyphicon-arrow-left" v-on:click="frontSubject"></button>
      <button type="button" class="btn btn-info glyphicon glyphicon-arrow-right" v-on:click="lastSubject"></button>
    </div>
    <div align="center" style="padding-top: 10px;">
      <button type="button" class="btn btn-success" v-on:click="showCorrect">查看答案</button>
    </div>
  </div>
</template>

<script>
var Snumber = 1
export default {
  name: 'App',
  created:function(){
    this.newQuery(Snumber)
  },
  data: function() {
    return{
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
        Snumber++
        console.log(Snumber)
        this.newQuery(Snumber)
    },
    //前一个题目
    frontSubject:function(){
        Snumber--
        console.log(Snumber)
        this.newQuery(Snumber)
    },
    //新建一个查询
    newQuery:function(Snumber){
      if(Snumber<0){
        return false
      }
      const query = Bmob.Query("question")
      query.limit(1);
      query.equalTo("S_number", "==",Snumber)
      query.find().then(res => {
            console.log(res)
            if(res.length==0){
              console.log('没有')
              return false
            }
            this.S_number = res[0].S_number
            this.Subject = res[0].Subject
            this.Option = res[0].Option
            this.Answer = res[0].Answer
        });
    },
  }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  font-size: 20px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
