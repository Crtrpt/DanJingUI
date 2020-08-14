<template>
  <div :class="'button '+size+' '+color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"UIButton",
  props:{
    size:{
      type:String,
      default:"small"
    },
    color:{
      type:String,
      default:"primary"
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 5px 10px;
  margin:10px;
  cursor: pointer;
}
.sm {
  font-size: 18px;
}
.md {
  font-size: 24px;
}
.bg {
  font-size: 36px;
}
</style>