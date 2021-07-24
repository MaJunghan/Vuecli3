<template>
 <div>
    <ul class="news-list">
      <li v-for="(item, index) in fetchedAsk" :key="index" class="post">
        <!-- 포인트영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 포인트영역 -->
        <!-- 기타정보 영역 -->
        <div>
          <p class="news-title">
            <router-view :to="`item/${item.id}`">
              {{ item.title }}
            </router-view>
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
import { mapGetters } from 'vuex';


export default {
   computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
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
</style>s