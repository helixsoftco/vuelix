<template>
  <h1>Login Page</h1>
  <p v-if="$route.query.redirectTo" style="color: brown">You need to be Authenticated in order to see this page</p>
  <button @click="$auth.login">Login with Auth Plugin</button>

  <br /><br />
  <router-link :to="{ name: 'index' }">To Index</router-link>
</template>

<script setup lang="ts"></script>
