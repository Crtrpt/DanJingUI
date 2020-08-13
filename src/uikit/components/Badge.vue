<template>
  <div class="badge" v-if="text">{{text}}</div>  
</template>

<script>
export default {
  name:"Badge",
  props:{
    color:{
      type:String,
      default:"primary",
    },
    text:String,
  }
}
</script>

<style scoped>
   .badge {
      background-color: var(--danger);
      position: absolute;
      right: 5px;
      top: 5px;
      font-size: 10px;
      transform: scale(0.8);
      line-height: 12px;
      border-radius: 12px;
      border: 3px solid var(--danger);
      color: var(--light);
      min-width: 12px;
      text-align: center;
  }
</style>