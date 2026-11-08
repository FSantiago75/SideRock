import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imageDimensions } from './build/plugins/imageDimensions'

// https://vite.dev/config/
export default defineConfig({
  plugins: [imageDimensions(), react()],
  // base: '/SideRock/',
})
