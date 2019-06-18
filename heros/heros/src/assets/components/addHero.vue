<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 class="sub-header">新增英雄</h2>
    <form>
      <div class="form-group">
        <label>英雄名称:</label>
        <br>
        <input type="text" placeholder="请输入英雄名称" v-model="heroName">
      </div>
      <div class="form-group">
        <label>性别:</label>
        <br>
        <label>
          <input type="radio" name="gender" v-model="gender" value="男">男
        </label>&nbsp;&nbsp;&nbsp;
        <label>
          <input type="radio" name="gender" v-model="gender" value="女">女
        </label>
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="add">提交</button>
      <button type="submit" class="btn btn-default" @click.prevent="back">返回</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios"

export default {
  data() {
    return {
      heroName: "",
      gender: "男",
      url: "http://localhost:3000/data"
    };
  },
  methods: {
    add() {
      // 新增英雄接口
      // 地址：http://localhost:3000/data
      // 方式： post
      // 参数：name，gender
      this.$http({
        url: this.url,
        method: "post",
        data: {
          name: this.heroName,
          gender: this.gender
        }
      }).then(res=>{
          if(res.status==201){
              console.log(this.$router);
              this.$router.push('/herolist')
          }
      })
    },
    back(){
        this.$router.push('/herolist')
    }
  }
};
</script>

<style>
</style>
