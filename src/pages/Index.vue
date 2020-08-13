<template>
  <div class="content">
            <img src="/favicon.png" style="width:96px;height:96px">
            <h1 class="name">DanJingUI</h1>
            <h4 class="desc">100+前端组件 40+ 布局 100+页面 10+皮肤</h4>
  </div>
</template>

<script>
export default {
  name:"Index"
}
</script>

<style scoped>
#layout1 .content {
  flex-grow: 1;
  margin-top: 10px;
  margin-left: 10px;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;;
  align-items: center;
  justify-items: center;
  align-content: center;
}

h1 {
  margin-top: 20px;
  font-size: 48px;
  margin-bottom: 20px;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

h4 {
  font-size: 18px;
  margin-bottom: 20px;
}

.desc {
  margin-top: 10px;
}


</style>