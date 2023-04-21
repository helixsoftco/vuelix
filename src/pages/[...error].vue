<route lang="yaml">
meta:
  public: true
</route>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  statusCode?: string
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  statusCode: '404',
  message: '',
})

function reloadPage() {
  window.location.reload()
}

const { t } = useI18n()
</script>

<template>
  <div class="fit py-5 my-5">
    <h1 class="text-center display-1 text-clear mt-100 text-secondary">{{ props.statusCode }}</h1>

    <h5 v-if="props.message" class="text-center">{{ props.message }}</h5>

    <div class="text-center fs-3">
      <a href="#" class="text-decoration-none d-block" @click="$router.back()">{{ t('Go to previous page') }}</a>
      <router-link :to="{ name: 'index' }" class="text-decoration-none d-block">{{
        t('Go to index page')
      }}</router-link>
      <a href="#" class="text-decoration-none d-block" @click.prevent="reloadPage">{{ t('Reload page') }}</a>
    </div>
  </div>
</template>
