<template>
  <div v-for="(item, index) in users" :key="index">
    <span> {{item.id}} </span>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data() {
    return {
      users: ''
    }
  },
  created() {
    console.log(`호출전 this`, this); 
    fetchNewsList()
      .then(res => { 
        console.log(`호출후 this`, this);
        console.log(res);
      }) 
      .catch(err => console(err));
  }
}
</script>

<style>

</style>