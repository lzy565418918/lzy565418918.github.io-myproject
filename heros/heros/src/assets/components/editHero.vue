<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄信息编辑</h2>
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
      <button type="submit" class="btn btn-success" @click.prevent="edit">确认修改</button>
      <button type="submit" class="btn btn-default" @click.prevent="back">放弃修改</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      url: "http://localhost:3000/data",
      heroName: "",
      gender: ""
    };
  },
  methods: {
    getHeroById() {
      // 根据id查询英雄信息接口
      // 方法：get
      // 地址：http://localhost:3000/data/id
      // 无参数
      this.$http({
        url: `${this.url}/${this.$route.params.id}`
      }).then(res => {
        console.log(res);
        const { name, gender } = res.data;
        this.heroName = name;
        this.gender = gender;
      }).catch(err=>{
          alert(err)
      });
    },
    edit() {
      // 编辑英雄
      // 方法：put
      // 地址：http://localhost:3000/data/id
      // 参数：name，gender
      this.$http({
          url: `${this.url}/${this.$route.params.id}`,
          method:'put',
          data:{
              name:this.heroName,
              gender:this.gender
          }
      }).then(res=>{
          if(res.status==200){
            alert('修改成功')
            this.$router.push('/herolist')
          }
      }).catch(err=>{
          alert(err)
      })
    },
    back(){
         this.$router.push('/herolist')
    }
  },
  mounted() {
    this.getHeroById();
  }
};
</script>

<style>
</style>
