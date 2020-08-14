<template>
  <div id="view" :class="theme">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      theme:"default"
    }
  }
}
</script>

<style>

html,body,#app {
  width: 100vw;
  height: 100vh;
  font-family: "微软雅黑";
}
</style>
