<route lang="yaml">
meta:
  layout: main
  transition: slide-fade
</route>

<template>
  <h1>Profile Page</h1>
  <p>This is the profile page</p>

  <router-link :to="{ name: 'home' }">To Home</router-link>
  <br />
  <router-link :to="{ name: 'index' }">To Index</router-link>
</template>
