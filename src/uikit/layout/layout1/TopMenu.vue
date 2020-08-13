<template>
    <div class="topNav">
      <div class="handler"><i class="fas fa-ellipsis-v"></i></div>
      <slot name="left">
        <div class="left">
            <a :href="m.href" class="item" v-for="m in menus" :key="m.id">
              <img class="icon" :src="m.icon"  height="16px">
              <div class="name"> {{m.name}}</div>
            </a>
        </div>
      </slot>
      <slot name="right">
        <div class="right">
            <a :href="m.href" class="item" v-for="m in rightMenu" :key="m.id">
              <img class="icon" :src="m.icon"  height="16px">
              <div class="name">{{m.name}}</div>
            </a>
        </div>
      </slot>
    </div>
</template>

<script>
export default {
    name:"TopMenu",
    data(){
      return {
        menus:[
          {
            href:"#/laravel",
            id:2,
            icon:"/material/laravel_32x32.png",
            name:"Laravel",
            children:[],
          },
          {
            href:"#/springboot",
            id:3,
            icon:"/material/springboot_32x32.png",
            name:"Springboot",
            children:[],
          },
          {
            href:"#/thinkphp",
            id:4,
            icon:"/material/thinkphp_32x32.gif",
            name:"ThinkPHP",
            children:[],
          },
          {
            href:"#/beego",
            id:2,
            icon:"/material/beego_20x20.png",
            name:"Geego",
            children:[],
          },
        ],
        rightMenu:[
          {
            href:"https://github.com/Crtrpt/DanJingUI.git",
            id:1,
            icon:"/material/github_32x32.png",
            name:"Github",
          },
          {
            href:"https://gitee.com/945627077/DanJingUI.git",
            id:2,
            icon:"/material/gitee_32x32.ico",
            name:"Gitee",
          },
        ]
      }
    }
}
</script>

<style scoped>
  .left__menu li {
    margin-left: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .topNav{
    display: flex;
    flex-direction: row;
  }

  .left {
    display: flex;
    flex-direction: row;
  }
  .handler {
    text-align: center;
    width: 60px;
    line-height: 60px;
    font-size: 20px;
  }
  .left .item, .right .item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;
    line-height: 60px;
    align-items: center;

    font-size: 14px;
  }
  .icon {
    margin-right: 10px;
  }
  .right {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .item {
    padding: 0px 10px;
  }
</style>