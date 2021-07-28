<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 포인트영역 -->
        <!-- 기타정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{item.time_ago}} by  
            <router-link :to="`/user/${item.user}`" class="link-text"> {{item.user}} </router-link>
          </small>
        </div>
        <!-- 기타정보 영역 -->
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    const path = this.$route.path
      if(path === '/news') {
        this.$store.dispatch('FETCH_NEWS');
      } else if (path === '/jobs') {
        this.$store.dispatch('FETCH_JOB');
      } else if (path === '/ask'){
        this.$store.dispatch('FETCH_ASK');
    }
  },
  // computed: {
  //   listItems() {
  //    const name = this.$route.name
  //    if(name === 'news') {
  //      return this.$store.state.news
  //    } else {
  //      return '바보'
  //    }
  //   } 
  // },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.link-text {
  color: #828282;
}
</style>