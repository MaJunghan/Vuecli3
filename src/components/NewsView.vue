<template>
  <div v-for="(item, index) in this.$store.state.news" :key="index">
    <span> {{item.id}} </span>
  </div>
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