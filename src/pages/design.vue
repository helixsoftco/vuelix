<route lang="yaml">
meta:
  layout: main
  transition: slide-fade
  public: true
</route>

<script setup lang="ts">
import useToasts from '@/composables/useToasts'

const { addToast, addDefaultToast } = useToasts()
const numbers = [1, 2, 3, 4, 5, 6]
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white']

function exampleToast(variant: string, text: string) {
  switch (variant) {
    case 'defaultDanger':
      addDefaultToast('danger')
      break
    case 'defaultSuccess':
      addDefaultToast('success')
      break
    default:
      addToast({ text: text, timeout: 10000 })
      break
  }
}
</script>

<template>
  <div class="container mt-4 pb-100">
    <h1>Headings</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Heading</th>
          <th scope="col">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="number in numbers" :key="number">
          <th scope="row" class="align-middle">
            {{ `
            <h1 class="display-${number}"></h1>
            `}}
          </th>
          <td><span :class="`display-${number}`">Vuelix Example</span></td>
        </tr>

        <tr v-for="number in numbers" :key="number">
          <th scope="row" class="align-middle">
            {{ `
            <h${number}></h${number}>
            `}}
          </th>
          <td>
            <span :class="`h${number}`">Vuelix Example</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h1 clas="mt-4">Texts</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Texts</th>
          <th scope="col">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <p></p>
            `}}
          </th>
          <td><p>Vuelix Example</p></td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <p class="text-muted"></p>
            `}}
          </th>
          <td><p class="text-muted">Vuelix Example</p></td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <small></small>
            `}}
          </th>
          <td><small>Vuelix Example</small></td>
        </tr>
      </tbody>
    </table>

    <h1 class="mt-5">Colors</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Colors</th>
          <th scope="col">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="color in colors" :key="color">
          <th scope="row">{{ color }}</th>
          <td>
            <div :class="[{ border: color === 'light' }, `bg-${color}`]" style="height: 20px"></div>
          </td>
        </tr>
      </tbody>
    </table>

    <h1 class="mt-5">Buttons</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Buttons</th>
          <th scope="col">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="color in colors" :key="color">
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-${color}"></button>
            `}}
          </th>
          <td class="text-center">
            <button :class="`btn btn-${color}`">Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-white"></button>
            `}}
          </th>
          <td class="bg-gradient-dark-purple text-center">
            <button class="btn btn-white">Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-primary rounded-pill"></button>
            `}}
          </th>
          <td class="text-center">
            <button class="btn btn-primary rounded-pill">Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-secondary" disabled></button>
            `}}
          </th>
          <td class="text-center">
            <button class="btn btn-secondary" disabled>Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <a class="btn btn-primary disabled"></a>
            `}}
          </th>
          <td class="text-center">
            <a class="btn btn-primary disabled">Vuelix Example</a>
          </td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th scope="col">Buttons outline</th>
          <th scope="col">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="color in colors" :key="color">
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-outline-${color}"></button>
            `}}
          </th>
          <td class="text-center" :class="(color === 'light' || color === 'white') && 'bg-gradient-dark-purple'">
            <button :class="`btn btn-outline-${color}`">Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-outline-primary rounded-pill"></button>
            `}}
          </th>
          <td class="text-center">
            <button :class="`btn btn-outline-primary rounded-pill`">Vuelix Example</button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="align-middle">
            {{ `
            <button class="btn btn-outline-warning btn-dashed"></button>
            `}}
          </th>
          <td class="text-center">
            <button :class="`btn btn-outline-warning btn-dashed`">Vuelix Example</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h1 class="mt-5">Toasts</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="text-center">
            <button class="btn btn-danger" @click="exampleToast('defaultDanger', '')">Default danger Example</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <button class="btn btn-success" @click="exampleToast('defaultSuccess', '')">Default success Example</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <button class="btn btn-primary" @click="exampleToast('Custom ', 'Toast with a duration of 10 seconds')">
              Custom Example
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
