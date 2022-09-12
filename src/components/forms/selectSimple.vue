<script setup lang="ts">
import { BSVariant, FormOption } from '@/plugins/consts'

interface Props {
  modelValue: string | number
  options: Array<FormOption>
  placeholder?: string
  required?: boolean
  bg?: BSVariant
  textColor?: BSVariant
  enableAllOption?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  required: false,
  bg: 'white',
  textColor: 'dark',
  enableAllOption: false,
})
const emits = defineEmits<{
  (event: 'update:modelValue', modelValue: string | number): void
}>()
</script>

<template>
  <div class="d-flex field-select">
    <select
      :value="modelValue"
      class="form-select letter-spacing-05 field-select__simple-select text-truncate rounded-2"
      :class="[modelValue ? `text-${textColor}` : 'text-muted', `bg-${bg}`]"
      :required="required"
      @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
      <option v-if="props.placeholder" value="" disabled selected :class="`text-${textColor}`">
        {{ props.placeholder }}
      </option>
      <option v-if="props.modelValue && enableAllOption" value="" :class="`text-${textColor}`">{{ $t('All') }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>

    <label class="align-self-center field-select__arrow">
      <i-entypo-select-arrows :class="`mx-3 text-${textColor}`" style="height: 0.85rem"></i-entypo-select-arrows>
    </label>
  </div>
</template>
