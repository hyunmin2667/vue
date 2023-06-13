import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      includeAssets: ['./favicon.ico', './public/img/192png.png', './src/assets/logo.svg'],
      manifest: {
        name: '디비(DBI)',
        short_name: '디비',
        description: '동서대학교 버스정보 앱',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/img/192png.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './public/img/512png.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
