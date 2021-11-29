<script setup lang="ts">
import RouterViewTransition from '@/components/RouterViewTransition.vue'
</script>

<template>
  <nav>
    <strong>PROJECT NAME</strong>
    <div class="user">
      <i-mdi-account /> Hello {{ $auth.userFullName }}!&nbsp;
      <button class="btn btn-secondary btn-sm ms-2" @click="$auth.logout">Logout</button>
    </div>
  </nav>

  <main class="pt-3">
    <RouterViewTransition></RouterViewTransition>
    <p>[Main Layout]</p>
  </main>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;
  justify-content: space-between;

  .user {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
}
</style>
