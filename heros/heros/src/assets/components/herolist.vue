<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-primary btn-ml" href="#" role="button">新增</a> -->
    <router-link to="/herolist/addHero" class="btn btn-primary btn-ml">新增</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in heroList" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <router-link
                to="/herolist/editHero"
                class="btn btn-primary btn-ml"
                @click.prevent="edit(item.id)"
              >编辑</router-link> -->

              <a href="#" @click.prevent="edit(item.id)">编辑</a>
              <a href="#" @click.prevent="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      url: "http://localhost:3000/data",
      heroList: []
    };
  },
  methods: {
    // 获取英雄列表
    // 方法：get
    // 地址：http://localhost:3000/data
    // 无参数
    getHeroList() {
      this.$http({
        url: this.url
      }).then(res => {
        this.heroList = res.data;
        console.log(this.heroList);
      });
    },
    // 删除英雄
    // 方法：delete
    // 地址：http://localhost:3000/data/id
    // 无参数
    del(id) {
      this.$http({
        method: "delete",
        url: `${this.url}/${id}`
      })
        .then(res => {
          if (confirm("确认要删除吗？")) {
            if (res.status == 200) {
              this.getHeroList();
            }
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    edit(id){
        let link= `herolist/editHero/${id}`
        this.$router.push(link)
    }
  },
  mounted() {
    this.getHeroList();
  }
};
</script>

<style>
</style>
