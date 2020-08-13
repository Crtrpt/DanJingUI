<template>
    <ul class="left__menu">
        <li v-for="m in menus" :key="m.id" :class="'item '+(m.is_active?'active':'')">
          <div class="icon"><i :class=m.icon ></i></div>
          <div class="name"> {{m.name}}</div>
          <div class="badge" v-if="m.badge">{{m.badge}}</div>
        </li>
    </ul>
</template>

<script>
export default {
    name:"LeftMenu",
    data(){
      return {
        menus:[
          {
            id:1,
            is_active:true,
            icon:"fas fa-align-justify",
            name:"home",
            children:[],
          },
        
          {
            id:2,
            is_active:false,
            icon:"fas fa-align-justify",
            name:"base",
            children:[],
          },
          {
            id:3,
            icon:"fas fa-align-justify",
            name:"layout",
            badge:20000,
            children:[],
          },
          {
            id:4,
            icon:"fas fa-align-justify",
            name:"form",
            badge:"pro",
            children:[],
          },
          {
            id:5,
            icon:"fas fa-align-justify",
            name:"table",
             badge:"new",
            children:[],
          },
          {
            id:6,
            icon:"fas fa-align-justify",
            name:"component",
            badge:99,
            children:[],
          },
          {
            id:7,
            icon:"fas fa-align-justify",
            name:"pages",
            badge:6,
            children:[],
          },
          {
            id:8,
            is_active:false,
            icon:"fas fa-align-justify",
            name:"skin",
            children:[],
          },
         
        ]
      }
    }
}
</script>

<style scoped>
  .left__menu li {
    font-size: 16px;
  }
  
  .item {
    position: relative;
    color:var(--primary);
    line-height: 40px;
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
    color:var(--light);
    background-color:var(--secondry);
    border-left: 2px solid var(--primary);
  }

  .active {
    color:var(--light);
    background-color: var(--secondry);
    border-left: 2px solid var(--primary);
  }

  .icon {
    font-size: 10px;
    padding: 0px 10px;
  }
</style>