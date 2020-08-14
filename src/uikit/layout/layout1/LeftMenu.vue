<template>
    <div class="left__menu">
        <a v-for="m in menus" :key="m.id" :class="'item '+(m.is_active?'active':'')"  :href="m.href">
          <div class="icon"><i :class=m.icon ></i></div>
          <div class="name"> {{m.name}}</div>
          <div class="badge" v-if="m.badge">{{m.badge}}</div>
        </a>
    </div>
</template>

<script>
import menus from "../../../config/menu.js";

console.log(menus);

export default {
    name:"LeftMenu",
    data(){
      return {
        menus:menus||[]
      }
    }
}
</script>

<style scoped>
  .left__menu{
   
    flex-grow: 1;
    overflow-y: auto;
  }
   .left__menu:hover {
     
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
   }
  .left__menu li {
    color: var(--secondry-dark);
    font-size: 16px;
  }
  
  .item {
  
    color: var(--secondry-dark);
    position: relative;
    line-height: 50px;
    display: flex;
    border-left: 2px solid #00000000;
    cursor: pointer;
  }

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
  
  .item:hover .badge{
    color: var(--danger);
    background-color: var(--light);
    border: 3px solid var(--light);
  }

  .item:hover{
    font-weight: 600;
    color: var(--secondry-dark);
    background-color: var(--light);
    border-left: 2px solid var(--primary);
  }

  .active {
    font-weight: 600;
    color: var(--secondry-dark);
    background-color: var(--light);
    border-left: 2px solid var(--primary);
  }

  .icon {
    font-size: 10px;
    padding: 0px 10px;
  }
</style>