<template>
  <div id="layout1">
    <div class="left" >
        <Logo />
        <LeftMenu />
    </div>
    <div class="body" >
        <TopMenu />
        <router-view>
        </router-view>
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
  width:200px;
}


#layout1 .body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}


</style>
