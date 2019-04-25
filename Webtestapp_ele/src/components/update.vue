<template>
  <div>
    <el-form :label-position="labelPosition" ref="form" :model="form" label-width="80px">
    <el-form-item label="题目">
      <el-input placeholder="请输入题目" v-model="form.Subject" clearable></el-input>
    </el-form-item>
      <el-form-item label="A">
        <el-input v-model="form.Option.A"></el-input>
      </el-form-item>
      <el-form-item label="B">
        <el-input v-model="form.Option.B"></el-input>
      </el-form-item>
      <el-form-item label="C">
        <el-input v-model="form.Option.C"></el-input>
      </el-form-item>
      <el-form-item label="D">
        <el-input v-model="form.Option.D"></el-input>
      </el-form-item>
    <el-form-item label="正确答案">
      <el-input placeholder="请输入正确答案" v-model="form.Answer" clearable></el-input>
    </el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        Subject: "",
        Option: {
          A: '',
          B: '',
          C: '',
          D: ''
        },
        Answer: ""
      },
      labelPosition: 'right',

    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.Subject);
      var Option = this.form.Option
      const query = Bmob.Query('question');
        query.set("Subject",this.form.Subject)
        query.set("Option", Option)
        query.set("Answer",this.form.Answer)
        query.save().then(res => {
          
          console.log(res)
        }).catch(err => {
        console.log(err)
        })
      console.log("submit!");
    }
  }
};
</script>