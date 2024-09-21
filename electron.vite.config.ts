import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@quills/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@quills/hooks': resolve('src/renderer/src/hooks'),
        '@quills/assets': resolve('src/renderer/src/assets'),
        '@quills/store': resolve('src/renderer/src/store'),
        '@quills/components': resolve('src/renderer/src/components'),
        '@quills/mocks': resolve('src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})
