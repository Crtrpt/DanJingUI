<template>
  <a id="Logo" href="#/">
    <img src="/favicon.png" style="width:48px;height:48px">
    <div class="logo">
      <div>DanJingUI</div>
    </div>
     <Badge text="0.0.1" color="" />
  </a>
</template>

<script>
import Badge  from "./components/Badge";
export default {
  name: 'Logo',
  components: {
    Badge
  }
}
</script>

<style scope>
#Logo {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin: 6px 0px;;
}
.logo {
  color: var(--primary);
  height: 48px;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
}

</style>
