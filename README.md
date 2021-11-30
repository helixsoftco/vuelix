# Vuelix

Vuelix is a Vue 3 + Vite starter template to scaffold new projects really fast and with a great developer experience.

## Table of contents

- [Setup](#setup)
- [Build](#build)
- [Features](#features)
  - [🚀 Vue 3 + Vite 2](#-vue-3--vite-2)
  - [🦾 TypeScript and SCSS](#-typescript-and-scss)
  - [🗂 File system routing](#-file-system-routing)
  - [📑 Layouts system](#-layouts-system)
  - [🔗 Path Aliasing](#-path-aliasing)
  - [😃 Universal Icons Framework](#-universal-icons-framework)
  - [✨ Routes Transitions](#-routes-transitions)
  - [🪄 Eslint + Prettier](#-eslint--prettier)
  - [🔧 OpenAPI Client Generator](#-openapi-client-generator)
  - [👤 Authentication System](#-authentication-system)
    - [The Auth Plugin](#the-auth-plugin)
    - [The Navigation Guards](#the-navigation-guards)
    - [The Axios Interceptors](#the-axios-interceptors)
  - [🌐 Internationalization: vue-i18n and vue-i18n-extract](#-internationalization-vue-i18n-and-vue-i18n-extract)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Deployment](#deployment)
  - [Heroku](#heroku)

## Setup

Install Dependencies

```
npm install
```

Generate API client

```
npm run gen-api
```

> **NOTE:** This command requires a java `jvm` to be installed, if you want to avoid asking all developers to install it
> check [OpenAPI Client Generator](#-openapi-client-generator) for more info.

Start the development server

```
npm run dev
```

## Build

To build the app, run

```
npm run build
```

And to preview it, after building the app run

```
npm run serve
```

## Features

### 🚀 Vue 3 + Vite 2

The version 3 of Vue with its powerful **Composition API** is available in this project.

The new `<script setup>` SFCs syntax is also available and recommended.

Vite is the lightning Fast Next Generation Frontend Tooling that highly improves the development experience along with
all the community-created plugins.

> **NOTE:** The initial state of this project was generated using Vite oficial scaffolding: `npm init vite@latest`

See:

- [Vue 3 Docs](https://v3.vuejs.org)
- [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Vite Docs](https://vitejs.dev/guide/features.html)

### 🦾 TypeScript and SCSS

TypeScript and SCSS languages are supported and strongly recommended.

See:

- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

### 🗂 File system routing

Routes for `vue-router` will be auto-generated from Vue files in the `src/pages` using the file structure.

See:

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### 📑 Layouts system

Vue components in the `src/layouts` dir are used as layouts.
By default, `default.vue` will be used unless an alternative is specified in the route meta.

You can specify the layout in the page's SFCs like this:

```vue
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

### 😃 Universal Icons Framework

Use icons from any icon set, one syntax for all icons: Material Design Icons, Bootstrap Icons, Font Awesome, etc.
All icons libraries are available powered by [iconify](https://iconify.design/) and [unplugin-icons](https://github.com/antfu/unplugin-icons). And don't worry, **only** the icons you use would be included in the final bundle,
keeping the production build lightweight.

The usage is simple, if you want for instance a Material Design Icon (mdi) with name "thumb-up",
then just place this inside your template:

```html
<i-mdi-thumb-up />
```

Just by placing it, the `unplugin-icons/resolver` would look for the corresponding icon and in case the related
iconify icon set is not installed, it would automatically install it using `npm`, e.g. `@iconify-json/mdi`.

The convention to use icons is as follows:

```
{prefix}-{collection}-{icon}
```

Where the `prefix` is "i", the `collection` is the collection ID from https://icon-sets.iconify.design/,
and finally the `icon` is the icon name.

See:

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [iconify](https://iconify.design/)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [Icônes - to search for icons available in iconify](https://icones.js.org/)

### ✨ Routes Transitions

Route changes are animated. By default, the `fade` transition will be used unless an alternative is specified in the route meta.

The `fade` and `slide-fade` transitions are available.
You can specify the transition in the page's SFCs like this:

```vue
<route lang="yaml">
meta:
  transition: slide-fade
</route>
```

> _NOTE:_ Transitions are not triggered between routes of the same type, therefore changing the parameters of the active route won't cause a route transition. This could be changed by using the `route.fullPath` instead of `route.name` as the key in [RouterViewTransition.vue](./src/components/RouterViewTransition.vue). More info: https://stackoverflow.com/a/70042452/4873750.

> Route transitions can be deactivated by changing the provided `enable-route-transitions` value in [main.ts](./src/main.ts).

See:

- [RouterViewTransition.vue](./src/components/RouterViewTransition.vue)

### 🪄 Eslint + Prettier

This project comes with the recommended Eslint configuration for Vue 3 plus integration with Prettier.
Prettier helps formatting code while Eslint helps catching bugs in development.

When opening the project in VSCode, it will ask the developers to install Eslint and Prettier, because that way
the VSCode [settings.json](.vscode/settings.json) will work and therefore both Prettier and Eslint fix will be
executed when saving a file.

Aditionally, commands to lint, check and autoformat code are available in the scripts of [package.json](./package.json)

See:

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/docs/en/comparison.html)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)

### 🔧 OpenAPI Client Generator

Manually creating an API client is hard to maintain and time demanding,
but thanks to OpenAPI and its generators we can now generate the entire API client from an `OpenAPI Spec`.

To do so just place your spec in `spec/schema.yml`, then run:

```
npm run gen-api
```

Which would generate the API client in Typescript and place the generated code in `src/api-client`.

> **NOTE:** This command requires `java` to be installed, because the OpenAPI generator is built with it, if you
> want to avoid asking all developers to install a `jvm` and run this command by themselves, just run it once you change
> the OpenAPI spec, and commit the generated code, for that you need to remove the `/src/api-client` line from the `.gitignore`.
> The reason we exclude the generated client by default if because it can always be generated from the spec (`spec/schema.yml`), and because
> the spec file is actually versioned, then the code reviewing is improved by checking only spec changes and not the generated code that nobody wrotes.

> **INFO:** If you have a Mac with an M1 Chip, this page have the correct `OpenJDK` installers for you: https://www.azul.com/downloads/?os=macos&architecture=arm-64-bit

To use the generated APIs just initialize them and make it available for the rest of the application.
The following is an example using Swagger Demo PetStore API:

```ts
// "api/index.ts"
import { PetApi } from '@/api-client'
export const petApi = new PetApi()
```

You can also configure the APIs parameters like `basePath` and provide your own `axios` instance with interceptors configured like this:

```ts
// "api/index.ts"
import { PetApi } from '@/api-client'
import { Configuration } from '@/api-client/configuration'
import axiosInstance from './axios'

// See Vite env vars: https://vitejs.dev/guide/env-and-mode.html
const config = new Configuration({ basePath: import.meta.env.BASE_URL })
export const petApi = new PetApi(config, undefined, axiosInstance)
```

Then in your Vue Components:

```html
<!-- "pages/home.vue" -->
<script setup lang="ts">
  import { petApi } from '@/api'
  import { Pet, PetStatusEnum } from '@/api-client'
  import { ref } from 'vue'

  const pets = ref<Pet[]>()
  const loading = ref(false)

  async function testOpenAPI() {
    loading.value = true
    const { data } = await petApi.findPetsByStatus({ status: [PetStatusEnum.Available] })
    pets.value = data.slice(0, 10)
    loading.value = false
  }
</script>
```

See:

- [OpenAPI Specification](https://swagger.io/docs/specification/about/)
- [OpenAPI Generator](https://openapi-generator.tech/)
- [OpenAPI Generator CLI](https://github.com/openapitools/openapi-generator-cli)
- [OpenAPI typescript-axios generator](https://openapi-generator.tech/docs/generators/typescript-axios)

### 👤 Authentication System

The auth system consist on three main parts:

- The Plugin
- The Navigation Guards
- The Axios Interceptors

#### The Auth Plugin

The plugin is installed in Vue's `globalProperties` with the name `$auth`, it includes an `isAuthenticated` property,
an `user` object, an `accessToken` plus the `login` and `logout` functions. It can be used in templates like this:

```html
<span v-if="$auth.isAuthenticated">
  Authenticated as <b>{{ $auth.user.email }}</b>
  <button @click="$auth.logout">Logout</button>
</span>
<span v-else>Not Authenticated</span>
```

The `auth` instance is created using the composition API, therefore we can alternatively retrieve it outside of
components with the `useAuth` function:

```ts
import { useAuth } from './useAuth'

const auth = useAuth()
if (auth.isAuthenticated) {
  console.log(auth.userFullName)
}
```

```html
<script setup lang="ts">
  import { useAuth } from './useAuth'
  import { watchEffect } from 'vue'

  const auth = useAuth()
  watchEffect(() => {
    console.log(auth.isAuthenticated)
  })
</script>
```

Aditionally, the auth plugin can be inspected in the **Vue's Devtools panel** when having the extension in the browser.
The plugin's values are displayed when inspecting any component.

#### The Navigation Guards

The navigation guards protects pages from non-authenticated users and redirect them to the login page,
by default **all** pages but the `login` page are protected.

In order to make a page available for non-authenticated users, a route meta boolean called `public` needs to be
configured in the page. E.g:

```vue
<!-- pages/index.html -->
<route lang="yaml">
meta:
  public: true
</route>
```

The navigation guards can be disabled by changing the `autoConfigureNavigationGuards` when configuring the auth system:

```ts
// main.ts
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'

const auth = createAuth({
  router,
  loginRouteName: 'login',
  autoConfigureNavigationGuards: false,
})

const app = createApp(App)
app.use(router)
app.use(auth)
```

#### The Axios Interceptors

The axios interceptors helps appending auth information to requests and responses of APIs.

The main interceptor adds the `Authorization` header with a value of `Bearer the-token-value` to all authenticated requests.

This can be configured and disabled in the `createAuth` options:

```ts
// api/axios.ts
import axios from 'axios'

const axiosInstance = axios.create()
export default axiosInstance
```

```ts
// main.ts
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'
import axiosInstance from './api/axios'

const auth = createAuth({
  router,
  axios: {
    instance: axiosInstance,
    autoAddAuthorizationHeader: true, // default: false
    authorizationHeaderPrefix: 'Token', // default: 'Bearer'
  },
})

const app = createApp(App)
app.use(router)
app.use(auth)
```

See:

- [Auth System](./src/auth)
- [Vue Router - Navigation Guards](https://next.router.vuejs.org/guide/advanced/navigation-guards.html)
- [Axios - Interceptors](https://github.com/axios/axios#interceptors)
- [Vue Devtools - Plugin Registration](https://devtools.vuejs.org/plugin/plugins-guide.html#registering-your-plugin)

### 🌐 Internationalization: vue-i18n and vue-i18n-extract

The `vue-i18n` package is used as the internationalization system.

All translation files located in the `locales` dir are loaded automatically with the corresponding language code obtained from the file name, e.g. `locales/es.json` -> lang code: `es`.

**How to use it?**

Put the texts in the original language inside the function of vue-i18n, for example:

```html
<!-- Single or double quote, and template literals -->
<p>{{ $t('Hello World') }} {{ $t("Hello, how are you?") }} {{ $t(`Hey. I'm watching you!`) }}</p>

<!-- *Note: to be able to use it in tags or when we send text to a component, we must use the single quote format
and bind it to the attribute. -->

<MyComponent :text="$t('example text')" />

<b-form-input v-model="name" type="text" :placeholder="$t('Name')"></b-form-input>

// In TS:
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  t('This is an example')
</script>
```

You may have noticed that we don't use translations keys like: `greetings.hello`, the reason is that defining keys is a troublesome task, and keys doesn't always show what we want to display, take this translation file for example:

```js
// es.json

{
  "greetings": {
    "hello": "Hola, ¿cómo estás?."
  }
}
```

And the corresponding translation usage:

```js
// Component.vue

t('greetings.hello')
```

By just looking at the translation key, we won't know what the original text was, now look a this example:

```js
// es.json

{
  "Hello, how are you?": "Hola, ¿cómo estás?."
}
```

```js
// Component.vue

$t('Hello, how are you?')
```

Better right?, we can directly see the original text, and it's much simpler to translate, we also won't need to define keys because **the original text is the key!**.

**Browser language detection**

The default language would match the language of the browser,
in case the language is not supported by the application, the fallback language `en` would be activated.

**Vue i18n extract**

Manually extracting the texts from vue or js,ts files is a complex task, we are often lazy to do so or we forget to add them, therefore we lose the sync between the translations files and the source code, that's why we use `vue-i18n-extract`, a handy tool that runs static analysis of the source code files and extracts the translation texts from the source code and add them to the translations files like `es.json`, `en.json`, `de.json`, etc. It no only adds the missing keys but also with a command we can remove the no longer used translations.

To extract the keys/original text into the translations files, run:

```
npm run vue-i18n-extract
```

This executes the command located in `package.json`, which will search for the keys in the vue files given, compare it with the files inside the lang folder and if it finds new words, it will add them.

This script uses the [vue-i18n-extract.config.js](./vue-i18n-extract.config.js) file for its configuration. This file is located in the root of the project.

**Adding a new language:**

To add a new language, for instance the German language, just create its file inside the `locales` folder using its language code, example: `./locales/de.json`. Then run `npm run vue-i18n-extract` to populate the translation keys into that file.

> _IMPORTANT_: When creating the file, make it a valid JSON file, then at least it must has `{}`, otherwise the extraction would fail.

Example:

```js
// locales/es.json

{
}
```

The file would be loaded automatically by `vite`, a vite restart may be needed.

**Removing unused translations**

In case you want to remove the keys that are in the translation files but are not being used in the vue files, you can run:

```
npm run vue-i18n-extract-remove
```

See:

- [Vue i18n](https://vue-i18n.intlify.dev/)
- [Vue i18n extract](https://github.com/pixari/vue-i18n-extract)
- [i18n plugin](./src/plugins/i18n.ts)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Deployment

### Heroku

In Heroku create the app, then configure the following buildpacks in the same order:

- heroku/jvm
- heroku/nodejs
- heroku-community/static

Config the Heroku remote:

```
heroku login
heroku git:remote -a <app_name>
```

Finally, push the changes:

```
git push heroku main
```
