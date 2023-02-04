import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const DEFAULT_TIMEOUT = 5000

type BSVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
type DefaultVariants = 'danger' | 'success'
export interface ToastOptions {
  id?: string
  text: string
  variant?: BSVariant
  timeout?: number
  customHTML?: string
}
export type Toast = Required<ToastOptions>

const toasts = ref<Toast[]>([])

export default function useToasts() {
  const { t } = useI18n()

  function pushToast(toast: Toast) {
    toasts.value = [...toasts.value, toast]
  }

  function addToast({ text, variant = 'primary', timeout = DEFAULT_TIMEOUT, customHTML = '' }: ToastOptions) {
    pushToast({ id: `toast-${Date.now()}`, text, variant, timeout, customHTML })
  }

  function addDefaultToast(variant: DefaultVariants) {
    let text = ''
    switch (variant) {
      case 'success':
        text = t('Action successful')
        break
      case 'danger':
        text = t('An unexpected error happened')
        break
    }
    pushToast({ id: `toast-${Date.now()}`, text, variant, timeout: DEFAULT_TIMEOUT, customHTML: '' })
  }

  function clearToast(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, addToast, clearToast, addDefaultToast }
}
