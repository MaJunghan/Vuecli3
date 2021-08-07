<template>
  <div id='app'>
    <ToolBar/>
      <transition name="page">
        <router-view></router-view>
      </transition>
    <Spinner :loading="true"/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'


export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus : false,  
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    }
  },
  created() {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
 color: #42b883;
 text-decoration: underline;
}

a.rotuer-link-exact-active {
  text-decoration: underline;
}
</style>
