
const routes = [
  { path: '/', 
    component: require("../uikit/layout/Layout1").default,
    children:[
      { path: '/', component: require("../pages/Index").default },
      { path: '/integrated/laravel', component: require("../pages/integrated/Laravel").default },
      { path: '/integrated/springboot', component: require("../pages/integrated/Springboot").default },
      { path: '/integrated/Thinkphp', component: require("../pages/integrated/Thinkphp").default },
      { path: '/integrated/Beego', component: require("../pages/integrated/Beego").default },
    ]
  },
 
]

export default routes;