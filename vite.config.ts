import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { imageDimensions } from './build/plugins/imageDimensions'
import { socialPreview } from './build/plugins/socialPreview'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    imageDimensions(),
    react(),
    socialPreview(loadEnv(mode, process.cwd()).VITE_SITE_URL || 'https://side-rock.vercel.app'),
  ],
  // base: '/SideRock/',
}))
