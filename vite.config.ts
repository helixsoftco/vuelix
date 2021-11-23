import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
