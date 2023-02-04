<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Loading from './Loading.vue'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asyncFunction: () => Promise<any>
  showRetry?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  showRetry: true,
  errorMessage: 'An error has occurred',
})
const loading = ref(false)
const hasError = ref(false)
const reload = callAsyncFunction

onMounted(callAsyncFunction)

async function callAsyncFunction() {
  loading.value = true
  hasError.value = false
  try {
    await props.asyncFunction()
  } catch {
    hasError.value = true
  }
  loading.value = false
}

defineExpose({
  reload,
})
</script>

<template>
  <div class="with-loading">
    <Loading v-if="loading" class="w-100 text-center pt-2 pb-3"></Loading>
    <div v-else-if="hasError" class="w-100 text-center border p-4">
      <h4>{{ props.errorMessage }}</h4>
      <button v-if="props.showRetry" class="btn btn-danger" @click="callAsyncFunction">{{ $t('Retry') }}</button>
    </div>
    <slot v-else></slot>
  </div>
</template>
