//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/login",
  name:"Login",
  component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },
 {
  path:"/registro",
  name:"Registro",
  component:()=> import("../views/Registro.vue")
},

{
  path:"/soundifyHome",
  name:"SoundifyHome",
  component:()=> import("../views/SoundifyHome.vue")
},
{
  path:"/soundifySearch",
  name:"SoundifySearch",
  component:()=> import("../views/SoundifySearch.vue")

},
{
  path:"/soundifyPlaylists",
  name:"SoundifyPlaylists",
  component:()=> import("../views/SoundifyPlaylists.vue")

},

{
  path:"/soundifyPlayer",
  name:"SoundifyPlayer",
  component:()=> import("../views/SoundifyPlayer.vue")

},


  

]

const router = createRouter({
  //history: createWebHashHistory(),
  history:createWebHistory(),
  routes
})

export default router
