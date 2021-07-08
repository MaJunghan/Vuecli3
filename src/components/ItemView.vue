<template>
  <div>
    <section>
      <!-- 질문상세 --> 
      <div>
        <div>User</div>
        <div>
          <router-link to="">
            {{fetchedItem.user}}
          </router-link>
          <div>
            {{fetchedItem.time_ago}}
          </div>
        </div>
        <h2>{{fetchedItem.title}}</h2>
      </div>
    </section>
    <section>
      <!-- 질문답변 --> 
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>
  
<style>

</style>