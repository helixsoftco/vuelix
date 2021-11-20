# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Features

### 🗂 File system routing

Routes for `vue-router` will be auto-generated from Vue files in the `src/pages` using the file structure. 

See: 
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### 📑 Layouts system

Vue components in the `src/layouts` dir as used as layouts.
By default, `default.vue` will be used unless an alternative is specified in the route meta.

You can specify the layout in the page's SFCs like this:

```html
<route lang="yaml">
meta:
  layout: home
</route>
```

See: 
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### 🔗 Path Aliasing

`@/` is aliased to the `./src/` folder.

For example, instead of having

```ts
import HelloWorld from '../../../components/HelloWorld.vue'
```

you can use

```ts
import HelloWorld from '@/components/HelloWorld.vue'
```

### ✨ Routes Transitions

Route changes are animated. By default, the `fade` transition will be used unless an alternative is specified in the route meta.

The `fade` and `slide-fade` transitions are available.
You can specify the transition in the page's SFCs like this:

```html
<route lang="yaml">
meta:
  transition: slide-fade
</route>
```
> *NOTE:* Transitions are not triggered between routes of the same type, therefore changing the parameters of the active route won't cause a route transition. This could be changed by using the `route.fullPath` instead of `route.name` as the key in [RouterViewTransition.vue](./src/components/RouterViewTransition.vue). More info: https://stackoverflow.com/a/70042452/4873750.

> Route transitions can be deactivated by changing the provided `enable-route-transitions` value in [main.ts](./src/main.ts).

See:
- [RouterViewTransition.vue](./src/components/RouterViewTransition.vue)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
