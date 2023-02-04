<script setup lang="ts">
// eslint-disable-next-line
// @ts-ignore
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import useToasts from '@/composables/useToasts'
import { nextTick, watch } from 'vue'

const { toasts, clearToast } = useToasts()

watch(toasts, () => nextTick(initializeToasts))

function initializeToasts() {
  const toastElList = [].slice.call(document.querySelectorAll('.toast:not(.show):not(.hide)'))
  toastElList.forEach((toastEl: HTMLElement) => {
    const t = Toast.getOrCreateInstance(toastEl)
    t.show()
    toastEl.addEventListener('hidden.bs.toast', removeToast)
  })
}

function removeToast(e: Event) {
  clearToast((e.target as HTMLElement).id)
}
</script>

<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999">
    <div
      v-for="toast in toasts"
      :id="toast.id"
      :key="toast.id"
      class="toast text-white mb-2"
      :class="`bg-${toast.variant}`"
      :data-bs-delay="toast.timeout"
      data-bs-autohide="true"
    >
      <div class="d-flex">
        <div class="toast-body fs-6">
          {{ toast.text }}

          <div v-html="toast.customHTML"></div>
        </div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>
