import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Set this for gh-pages deploy dir
    // https://docs.github.com/cn/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
    outDir: 'docs',
  },
})
