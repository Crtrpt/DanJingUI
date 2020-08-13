<template>
  <div id="Logo">
    <div class="logo">
      <div>DanJingUI</div>
      <Badge text="0.0.1" color="" />
    </div>
  </div>
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

.logo {
  position: relative;
  color: var(--primary);
  height: 60px;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
}

</style>
