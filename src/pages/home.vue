<route lang="yaml">
meta:
  layout: main
  transition: slide-fade
</route>

<script setup lang="ts">
import { petApi } from '@/api'
import { Pet, PetStatusEnum } from '@/api-client'
import { ref } from 'vue'

// Begin OpenAPI Test
const pets = ref<Pet[]>()
const loading = ref(false)

async function testOpenAPI() {
  loading.value = true
  const { data } = await petApi.findPetsByStatus({ status: [PetStatusEnum.Available] })
  pets.value = data.slice(0, 10)
  loading.value = false
}
// End Open API
</script>

<template>
  <h1>Home Page</h1>
  <p>This page correspond to the "/home" URL generated from this file name and location</p>

  <router-link :to="{ name: 'profile' }">To Profile</router-link>
  <br />
  <router-link :to="{ name: 'index' }">To Index</router-link>

  <div>
    <button class="btn btn-primary my-3" @click="testOpenAPI()">Test OpenAPI</button>
    <h5 v-if="loading">Loading!</h5>
    <div v-if="pets">
      <h5>Result:</h5>
      <pre>
        {{ pets }}
      </pre>
    </div>
  </div>
</template>
