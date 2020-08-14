<template>
  <div class="page">
    <div>
        <div>
            Size:
        </div>
        <div>
            <UIButton size="sm" >按钮</UIButton>
            <UIButton size="md" >按钮</UIButton>
            <UIButton size="bg" >按钮</UIButton>
        </div>

    </div>

    <div>
        code
    </div>
    <div>
        priview
    </div>
  </div>
</template>

<script>
import UIButton from "@/uikit/base/UIButton"
export default {
  name:"Button",
  components:{
      UIButton
  }
}
</script>

<style scoped>
    .page {
        margin-top: 10px;
        margin-left: 10px;
    }
</style>