<template>
  <div v-for="(item, index) in Asks" :key="index">
    <span> {{item.id}} </span>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data() {
    return {
      Asks: ''
    }
  },
  created() {
    fetchAskList()
      .then(res => this.Asks = res.data)
      .catch(err => console(err));
  }
}
</script>

<style>

</style>