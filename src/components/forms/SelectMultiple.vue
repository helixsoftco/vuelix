<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: Array<string>
  options: Array<{ name: string; value: string }>
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
})
const emits = defineEmits<{
  (event: 'update:modelValue', modelValue: Array<string>): void
}>()

const values = computed({
  get() {
    return props.modelValue
  },
  set(newValues: Array<string>) {
    emits('update:modelValue', newValues)
  },
})
</script>

<template>
  <div class="d-flex flex-wrap">
    <div v-for="option in props.options" :key="option.value" class="me-3 my-1">
      <input
        :id="option.value"
        v-model="values"
        class="d-none"
        type="checkbox"
        :value="option.value"
        :required="props.required"
      />
      <label class="cursor-pointer" :for="option.value">
        <div class="border border-1 rounded-pill px-3 py-2">
          {{ option.name }}
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

input[type='checkbox'] {
  & + label {
    user-select: none;
    color: darken($white, 50%);

    .border {
      border-color: $secondary !important;
    }
  }

  &:checked + label {
    color: $primary;

    .border {
      border-color: $primary !important;
      background-color: rgba($primary, 0.1);
    }
  }

  &:hover + label {
    .border {
      background-color: rgba($primary, 0.05);
    }
  }
}
</style>
