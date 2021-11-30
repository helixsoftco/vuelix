<route lang="yaml">
meta:
  public: true
</route>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import { useAuth } from '@/auth'
import { useI18n } from 'vue-i18n'

// Composition API example
let auth = useAuth()
const { t, locale, availableLocales } = useI18n()
</script>

<template>
  <HelloWorld title="Hi developer!" msg="This is the index page!" />

  <p>Click on the links to test the route transitions:</p>
  <router-link :to="{ name: 'about' }">To About</router-link>
  <br />
  <router-link :to="{ name: 'home' }">To Home</router-link>
  <br />
  <router-link :to="{ name: 'login' }">To Login</router-link>

  <p class="mb-0 mt-4">[Default Layout]</p>
  <p>
    <span v-if="auth.isAuthenticated">
      <i18n-t keypath="Authenticated as {user}">
        <template #user>
          <b class="me-2">{{ auth.user.email }}</b>
        </template>
      </i18n-t>
      <button @click="auth.logout">Logout</button>
    </span>
    <b v-else>{{ t('Not Authenticated') }}</b>
  </p>

  <p>
    {{ t('Change Language') }}:
    <select v-model="locale">
      <option v-for="code in availableLocales" :key="code" :value="code">{{ code }}</option>
    </select>
  </p>
</template>
