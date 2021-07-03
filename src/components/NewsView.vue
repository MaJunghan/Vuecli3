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
    fetchNewsList()
      .then(res => this.users = res.data)
      .catch(err => console(err));
  }
}
</script>

<style>

</style>