<template>
    <div id="app">
      <div name="dsa" v-html="lesson">{{lesson}}</div>
		<div align="center" style="margin-bottom: 50px;">
			<a href="index.html" style="font-size:20px ;color:red">返回主页</a>
		</div>
    </div>
</template>
<style>

</style>
<script>
export default {
	name: "App",
	created:function(){
    this.newQuery()
  },
  data() {
    return {
			lesson:''
    };
  },
methods: {
    back(){
      this.$router.push("/");
		},
		//新建一个查询
    newQuery:function(){
      const query = Bmob.Query("lesson")
      query.find().then(res => {
						this.lesson = res[1].content
        });
		}
}
};
</script>

