<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="关于Webtestapp" name="1">
      <div>没事做，做一个没有用的小程序，学学新的知识</div>
      <div>技术栈：VUE+webpack+element-ui+node.js</div>
      <div>服务器：Linux</div>
      <div>数据：Bmob</div>
      <div>项目地址：<a href="https://github.com/danyanp/Webtestapp">GITHUB（https://github.com/danyanp/Webtestapp）</a></div>
      <div>你有什么好的建议欢迎加入这个项目，一起学习。</div>
      <div>提建议:<a href="https://github.com/danyanp/Webtestapp/issues/1">https://github.com/danyanp/Webtestapp/issues/1</a></div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style>
</style>
