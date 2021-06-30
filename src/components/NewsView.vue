<template>
  <div v-for="(item, index) in users" :key="index">
    <span> {{item.id}} </span>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: '',
    }
  },
  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(res => this.users = res.data)
    .catch(err => console(err));
  }
}
</script>

<style>

</style>