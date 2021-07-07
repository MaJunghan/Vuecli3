<template>
  <div class="header">
    <router-link to='/ask'> Ask</router-link> 
    <router-link to='/jobs'> Jobs </router-link> 
    <router-link to='/news'> News </router-link>
  </div>
</template>

<script>



export default {
  components: {
  }
}
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
</style>