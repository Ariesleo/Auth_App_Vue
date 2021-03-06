import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'
import TopNavv from '../components/TopNavv.vue'
import TopNav from '../components/TopNav.vue'
import Uploadfile from '../views/Uploadfile.vue'
import LifecycleHooks from '../views/LifecycleHooks'
import FeedbackForm from '../views/FeedbackForm.vue';

import * as firebase from "firebase/app";
import "firebase/auth";
//import { from } from 'core-js/fn/array'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/topnav',
    name: 'topnav',
    component: TopNav
  },
  {
    path: '/hooks',
    name: 'lifecycle',
    component: LifecycleHooks
  },
  {
    path: '/feedbackform',
    name: 'feedbackform',
    component: FeedbackForm,
  },
  {
    path: '/upload',
    name: 'uploadfile',
    component: Uploadfile
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requiresAuth: true }
  },
  {
    path: '/top',
    name: 'Top',
    component: TopNavv
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated) {
    //alert("Please login first");
    next("/login");
  }else {
    next();
  }
})

export default router
