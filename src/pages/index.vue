<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <HelloWorld title="Hi developer!" msg="This is the index page!" />

  <p>Click on the links to test the route transitions:</p>
  <router-link :to="{ name: 'about' }">To About</router-link>
  <br />
  <router-link :to="{ name: 'home' }">To Home</router-link>
</template>
