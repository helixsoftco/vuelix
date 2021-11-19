<route lang="yaml">
meta:
  layout: main
</route>

<template>
  <h1>Home Page</h1>
  <p>This page correspond to the "/home" URL generated from this file name and location</p>

  <router-link :to="{ name: 'index' }">To Index</router-link>
</template>
