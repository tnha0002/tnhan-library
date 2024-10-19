import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [vue(), ghPages()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/tnhan-library/'
})
