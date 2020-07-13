import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import router from "../router/router";

Vue.use(Vuex);

export default new Vuex.Store({
   state:{
        isUser:false,
       user:false,
       alertMessage:null
   },
    mutations:{
        login(state){
            state.isUser=true;
            state.user=firebase.auth().currentUser;
        },
        logout(state){
            state.isUser=false;
            state.user=null;
        }
    },
    actions:{
        login({commit,state},payload){
            console.log(payload);
            firebase.auth().signInWithEmailAndPassword(payload.user.email,payload.user.password)
                .then(()=>{
                    commit('login');
                    router.replace('/');
                }).catch(err=>state.alertMessage=err.message);
        },
        signUp({commit,state},payload){
            console.log(payload);
            firebase.auth().createUserWithEmailAndPassword(payload.user.email,payload.user.password)
                .then(()=>{
                    commit('login');
                    router.replace('/');
                }).catch(err=>state.alertMessage=err.message);
        },
        logout({commit}){
            firebase.auth().signOut().then(()=>{
                commit('logout');
                router.replace('/login');
            });
        }
    },
    getters:{

    }
});