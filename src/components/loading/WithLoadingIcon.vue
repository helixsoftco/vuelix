<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
interface Props {
  loading: boolean
}

defineProps<Props>()
</script>

<template>
  <div v-if="loading" v-bind="$attrs" class="spinner-grow" role="status" style="width: 1.2rem; height: 1.2rem"></div>
  <slot v-else>
    <i-bi-circle v-bind="$attrs"></i-bi-circle>
  </slot>
</template>
