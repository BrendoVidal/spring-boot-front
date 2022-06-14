<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <div class="app-container bg-light">
    <!--Navbar contendo uma visualização dinâmica, sendo exibida conforme a confirmação do Login-->
    <nav
      id="navbar"
      v-show="authStore.user"
      class="navbar navbar-expand navbar-dark bg-dark"
    >
      <div class="navbar-nav">
        <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
        <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
        <RouterLink to="/register" class="nav-item nav-link"
          >Cadastrar Usuários</RouterLink
        >
      </div>
    </nav>
    <div class="container pt-4 pb-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
