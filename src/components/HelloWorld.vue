<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{ title: string; msg: string; likes?: number }>()

const count = ref(props.likes || 0)

watchEffect(() => {
  props.likes && (count.value = props.likes)
})
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" style="height: 200px" />

  <h1>{{ title }}</h1>
  <p>{{ msg }}</p>

  <p>
    <a href="https://helixsoft.com.co" target="_blank">Helix Software</a>
    |
    <a href="https://www.instagram.com/helixsoft/" target="_blank">@helixsoft</a>
  </p>

  <p>
    <button class="btn btn-primary" @click="count++">
      <i-mdi-thumb-up />
      {{
        $tc('This template has no likes | This template has one like | This template has {likes} likes', count, {
          likes: count,
        })
      }}
    </button>
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
