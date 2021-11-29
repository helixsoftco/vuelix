<script setup lang="ts"></script>

<template>
  <h1 class="pt-100">Login Page</h1>
  <p v-if="$route.query.redirectTo" style="color: brown">You need to be Authenticated in order to see this page</p>
  <button class="btn btn-success" @click="$auth.login">Login with Auth Plugin</button>

  <br /><br />
  <router-link :to="{ name: 'index' }">To Index</router-link>
</template>
