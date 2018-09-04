<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="txtgender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    // 1、绑定文本框
    dat(){
      return{
        formData:{
            name:'',
            gender:''
        }
      }
    },
    methods:{
        // 点击按钮添加数据
        handleAdd(){
            axios 
            .post('http://localhost:3000/heroes',this.formData)
            .then((response) => {
                // 判断添加的是否成功
                if(response.status === 201){
                    alert('添加成功');
                    this.$router.push('/heroes')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }
}
</script>
<style>
    
</style>