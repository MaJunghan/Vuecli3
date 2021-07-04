<template>
  <p v-for="(item, index) in this.$store.state.news" :key="index">
    <a :href="item.url">{{item.title}} </a>
    <small>{{item.time_ago}} by {{item.user}}</small>
  </p>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_NEWS'); // 1. dispatch로 actions를 호출.
  }
}
</script>

<style>

</style>