<template>
  <h2>Login Page</h2>
  <p v-if="$route.query.redirectTo" style="color: brown">You need to be Authenticated in order to see this page</p>
  <button @click="$auth.login">Login</button>

  <br /><br />
  <router-link :to="{ name: 'index' }">To Index</router-link>
</template>

<script setup lang="ts"></script>
