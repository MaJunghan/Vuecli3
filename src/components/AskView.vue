<template>
  <div v-for="(item, index) in this.$store.state.ask" :key="index">
    <span> {{item.id}} </span>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>