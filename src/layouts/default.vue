<script setup lang="ts">
import { useAuth } from '@/auth'
import RouterViewTransition from '@/components/RouterViewTransition.vue'

// Composition API example
let auth = useAuth()
</script>

<template>
  <RouterViewTransition></RouterViewTransition>
  <p>[Default Layout]</p>

  <p>
    <span v-if="auth.isAuthenticated">
      Authenticated as <b style="margin-right: 5px">{{ auth.user.email }}</b>
      <button @click="auth.logout">Logout</button>
    </span>
    <b v-else>Not Authenticated</b>
  </p>
</template>
