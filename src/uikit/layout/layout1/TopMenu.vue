<template>
    <div class="topNav">
      <div class="handler"><i class="fas fa-ellipsis-v"></i></div>
      <slot name="left">
        <ul class="left">
            <li class="item" v-for="m in menus" :key="m.id">
              <div class="ui__icon"> {{m.icon}}</div>
              <div class="ui__name"> {{m.name}}</div>
            </li>
        </ul>
      </slot>
      <slot name="right">
        <ul class="right">
            <li class="item" v-for="m in menus" :key="m.id">
              <div class="ui__icon"> {{m.icon}}</div>
              <div class="ui__name"> {{m.name}}</div>
            </li>
        </ul>
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
            id:1,
            icon:"",
            name:"Laravel",
            children:[],
          },
          {
            id:2,
            icon:"",
            name:"Springboot",
            children:[],
          },
          {
            id:3,
            icon:"",
            name:"ThinkPHP",
            children:[],
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
  .left li, .right li {
    line-height: 60px;
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