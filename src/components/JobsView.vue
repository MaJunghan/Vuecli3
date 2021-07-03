<template>
  <div v-for="(item, index) in jobs" :key="index">
    <span> {{item.title}} </span>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  data() {
    return {
      jobs: ''
    }
  },
  created() {
    fetchJobsList()
      .then(res => this.jobs = res.data)
      .catch(err => console(err));
  }
}
</script>

<style>

</style>