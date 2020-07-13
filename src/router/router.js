
import VueRouter from  'vue-router';
import Homepage from "../pages/Homepage";
import About from '../pages/About'
import Auth from "../pages/auth/Auth";
import store from '../store/store';

import * as firebase from 'firebase'

const routes=[
    { path:'/',component:Homepage,name:'Homepage',
        beforeEnter(from,to,next){
            store.state.user ? next() : next('/login');
        }},
    {path:'/about',component: About ,
        beforeEnter(from,to,next){
            store.state.user ? next() : next('/login');
        }
    },
    { path:'/login',component:Auth ,
    beforeEnter(from,to,next){
        store.state.user ? next('/') : next();
    }}
  ];


export default new VueRouter({
    routes,
    mode:'history'
})