<script setup lang="ts">
interface Props {
  modelValue: number
  totalPages: number
  loading?: boolean
}
const props = withDefaults(defineProps<Props>(), { loading: false })
const emits = defineEmits<{
  (event: 'update:modelValue', currentPage: number): void
}>()
</script>

<template>
  <div v-if="totalPages > 0" class="d-flex justify-content-end position-relative">
    <div v-if="props.loading" class="spinner-border text-info me-3" role="status"></div>
    <nav class="me-3">
      <ul class="pagination pagination-sm">
        <li
          v-if="props.modelValue > 1"
          class="page-item cursor-pointer"
          @click="emits('update:modelValue', props.modelValue - 1)"
        >
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          v-for="page in props.totalPages"
          :key="page"
          class="page-item cursor-pointer"
          :class="{ active: props.modelValue === page }"
          @click="emits('update:modelValue', page)"
        >
          <span class="page-link">{{ page }}</span>
        </li>

        <li
          v-if="props.modelValue !== props.totalPages"
          class="page-item cursor-pointer"
          @click="emits('update:modelValue', props.modelValue + 1)"
        >
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
