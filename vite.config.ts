import { join } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { VitePluginDoubleshot } from 'vite-plugin-doubleshot'

// https://vitejs.dev/config/
export default defineConfig({
  root: join(__dirname, 'src/render'),
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: { svgProps: { fill: 'currentColor' }, icon: true }
    }),
    VitePluginDoubleshot({
      type: 'electron',
      outDir: 'dist/main',
      main: 'dist/main/index.js',
      entry: 'src/main/index.ts',
      external: ['electron'],
      electron: {
        waitForRenderer: true,
        rendererUrl: 'http://localhost:5173/',
        build: { config: './electron-builder.config.js' },
        preload: {
          outDir: 'dist/preload',
          entry: 'src/preload/index.ts'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@main': join(__dirname, 'src/main'),
      '@render': join(__dirname, 'src/render'),
      '@common': join(__dirname, 'src/common')
    }
  },
  base: './',
  build: {
    outDir: join(__dirname, 'dist/render'),
    emptyOutDir: true
  }
})
