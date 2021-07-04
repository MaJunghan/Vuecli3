<template>
  <div v-for="(item, index) in this.$store.state.job" :key="index">
    <span> {{item.title}} </span>
  </div>
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