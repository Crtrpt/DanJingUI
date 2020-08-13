<template>
  <div id="layout1">
    <slot class="left">
        left1
    </slot>
    <div class="body">
        body
    </div>
  </div>
</template>

<script>


export default {
  name: 'Layout1',
  components: {

  }
}
</script>

<style>
#layout1 {
  display: flex;
  flex-direction: row;
}

#layout1 .left {
  width:200px;
}

</style>
