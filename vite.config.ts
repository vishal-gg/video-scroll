import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
       // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
       tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react()
  ],
  server: {
    host: true,
    port: 5173
  }
})