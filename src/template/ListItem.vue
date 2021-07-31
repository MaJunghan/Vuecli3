<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 포인트영역 -->
        <!-- 기타정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by  
            <router-link v-if="item.user"  :to="`/user/${item.user}`" class="link-text"> {{item.user}} </router-link>
            <a v-else :href="item.url" >
              {{ item.domain }}
            </a>
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
    const name = this.$route.name;
    if(name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOB');
    } else if (name === 'ask'){
      this.$store.dispatch('FETCH_ASK');
    }
  },
  computed: {
    listItems() {
     const name = this.$route.name
     if(name === 'news') {
       return this.$store.state.news
     } else if(name === 'jobs') {
       return this.$store.state.job
     } else if(name === 'ask') {
       return this.$store.state.ask
     } else {
       return console.log('예외사항');
     }
    } 
  },
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