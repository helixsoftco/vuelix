<script setup lang="ts">
import RouterViewTransition from '@/components/RouterViewTransition.vue'
</script>

<template>
  <nav>
    <strong>PROJECT NAME</strong>
    <div>Hello Developer!</div>
  </nav>

  <main>
    <RouterViewTransition></RouterViewTransition>
    <p>[Main Layout]</p>
  </main>
</template>

<style>
nav {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  justify-content: space-between;
}
</style>
