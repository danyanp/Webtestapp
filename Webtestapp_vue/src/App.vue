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
      <div class="row col-md-4 col-md-offset-4">{{Answer}}</div>
    </div>
    <div align="center">
      <button type="button" class="btn btn-info glyphicon glyphicon-arrow-left"></button>
      <button type="button" class="btn btn-info glyphicon glyphicon-arrow-right"></button>
    </div>
    <div align="center" style="padding-top: 10px;">
      <button type="button" class="btn btn-success">查看答案</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return{
      S_number:'1/100',
      Subject:'【单选题】下列不属于水平分隔线＜hr＞标记的属性是()。',
      Option:{"0":"A、width","1":"B、height","2":"C、size","3":"D、color"},
      Answer:'正确答案:B'
    }
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
