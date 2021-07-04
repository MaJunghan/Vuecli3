<template>
  <p v-for="(item, index) in this.$store.state.job" :key="index">
    <a :href="item.url">{{item.title}} </a>
    <small> {{item.domain}} </small>
  </p>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOB');
  }
}
</script>

<style>

</style>