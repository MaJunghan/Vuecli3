<template>
  <p v-for="(item, index) in askList" :key="index">
    <router-link :to="`/item/${item.id}`">
      {{item.title}} 
    </router-link>
    <small>{{item.time_ago}} by {{item.user}}</small>
  </p>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters({
      askList: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>