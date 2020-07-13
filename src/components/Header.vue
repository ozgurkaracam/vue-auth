<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <router-link class="navbar-brand" to="/">Auth İşlemleri</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" tag="li">
          <router-link
            tag="a"
            class="nav-link"
            to="/">
            Anasayfa
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Hakkımda</router-link>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item">
          <a @click.prevent="logout" v-if="$store.state.user ? true : false" class="nav-link" href="#">{{ $store.state.user.email+' ' }}Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  import * as firebase from 'firebase';
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    },
    name:'Header',
    computed:{
      isUser:()=>{
      }
    }
  }
</script>
