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
            100+前端组件 40+ 布局 100+页面 10+皮肤
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
  border-right: 1px solid rgba(133, 133, 133, 0.534);
  width:200px;
}


#layout1 .body {
  flex-grow: 1;
}

#layout1 .content {
  margin-top: 10px;
  margin-left: 10px;
}

#layout1 .top {
  height: 60px;
  border-bottom: 1px solid rgba(133, 133, 133, 0.534);
}
</style>
