<template>
  <div id="layout1">
    <div class="left" >
        <Logo />
        <LeftMenu />
    </div>
    <div class="body" >
        <div class="top">
           <TopMenu />
        </div>
        <div class="content">
            <img src="/favicon.png" style="width:96px;height:96px">
            <h1 class="name">DanJingUI</h1>
            <h4 class="desc">100+前端组件 40+ 布局 100+页面 10+皮肤</h4>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo";
import LeftMenu from "./layout1/LeftMenu";
import TopMenu from "./layout1/TopMenu";
export default {
  name: 'Layout1',
  components: {
    LeftMenu,TopMenu,Logo
  }
}
</script>

<style scoped>
#layout1 {
  display: flex;
  flex-direction: row;
}

#layout1 .left {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(133, 133, 133, 0.534);
  width:250px;
}


#layout1 .body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

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

#layout1 .top {
  height: 60px;
  border-bottom: 1px solid rgba(133, 133, 133, 0.534);
}
</style>
