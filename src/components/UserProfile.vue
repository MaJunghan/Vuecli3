<template>
  <div>
    <div class="user-container"> 
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <div> {{userInfo.id }}</div>
        <!-- <router-link :to="`/user/${userInfo.user}`">
            {{userInfo.id}}
        </router-link> -->
        <div class="time">
            {{userInfo.created}}
        </div>
    </div>
    </div>
   </div>
</template>

<script>
export default {
 computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>