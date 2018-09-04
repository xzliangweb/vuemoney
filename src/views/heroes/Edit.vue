<template>
    <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="英雄名称" value="xxx">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" value="xxx">
          </div>
          <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Example block-level help text here.</p>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Check me out
            </label>
          </div>
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
</template>
<script>

import axios from "axios";

export default {
    props:['id'],
    data(){
        return{
            formData:{
                name:'',
                gender:''
            }
        }
    },
    mounted(){
        this.loadData();
    },
    methods: {
        // 根据英雄id获取详细信息
        loadData(){
            axios
            .get(` ${this.id}`)
            .then((response) => {
                if(result.status === 200){
                    this.formData =  response.data
                }
            })
            .catch((err) => {
                console.log(err)
            });

        },
        // 修改英雄
        handleEdit(){
            axios
            .put(` ${this.id}`)
            .then((response) =>{
               if(response.status === 200){
                   this.$router.push('/heroes');
               }else{
                   alert('修改失败');
               }
            })
            .catch((err) => {

            })
        }
    }
}
</script>
<style>

</style>
