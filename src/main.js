import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import router from './router';
import store from './store';
import axios from "axios";
import firebase from "firebase/app";
import {firestorePlugin} from 'vuefire';


Vue.use(firestorePlugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccNdEgml7xg5iz_YhF6AAR4TTMqKrVuo",
  authDomain: "auth-app-8af52.firebaseapp.com",
  databaseURL: "https://auth-app-8af52.firebaseio.com",
  projectId: "auth-app-8af52",
  storageBucket: "auth-app-8af52.appspot.com",
  messagingSenderId: "299609958427",
  appId: "1:299609958427:web:56327fcb919c314c6c30be",
  measurementId: "G-H0L8WD3D1R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();



//will help me to stay in the same page even after refresh when loggedin
let app

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
