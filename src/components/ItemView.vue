<template>
  <div>
    <p>{{ setItem.title}}</p>
    <p>{{setItem.content}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    setItem() {
      return this.$store.state.item
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>
  
<style>

</style>