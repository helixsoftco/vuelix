import { ref, VNode } from 'vue'
import { useI18n } from 'vue-i18n'

const DEFAULT_TIMEOUT = 5000

type BSVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
type DefaultVariants = 'danger' | 'success'
export interface ToastOptions {
  id?: string
  text?: string
  variant?: BSVariant
  timeout?: number
  customHTML?: string
  customVNode?: VNode
}
export interface Toast extends ToastOptions {
  // These are optional in the options because we can provide default values from them, but when adding the Toast these values should be set
  id: string
  variant: BSVariant
  timeout: number
}

const toasts = ref<Toast[]>([])

export function addToast({
  text,
  variant = 'primary',
  timeout = DEFAULT_TIMEOUT,
  customHTML,
  customVNode,
}: ToastOptions) {
  pushToast({ id: `toast-${Date.now()}`, text, variant, timeout, customHTML, customVNode })
}

function pushToast(toast: Toast) {
  toasts.value = [...toasts.value, toast]
}

export default function useToasts() {
  const { t } = useI18n()

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
    pushToast({
      id: `toast-${Date.now()}`,
      text,
      variant,
      timeout: DEFAULT_TIMEOUT,
    })
  }

  function clearToast(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, addToast, clearToast, addDefaultToast }
}
