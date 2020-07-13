import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router'
import store from "./store/store";
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDhbsnFGkCxNWHyj4LfX6lcYg3A3KDtrYA",
  authDomain: "productservice-88ba6.firebaseapp.com",
  databaseURL: "https://productservice-88ba6.firebaseio.com",
  projectId: "productservice-88ba6",
  storageBucket: "productservice-88ba6.appspot.com",
  messagingSenderId: "1062528067771",
  appId: "1:1062528067771:web:3d3fe0f6be59e530d4219e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
