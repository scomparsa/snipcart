import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name } from './package.json'

console.log('name', name)
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${name}/` : '/',
  build: {
    // Set this for gh-pages deploy dir
    // https://docs.github.com/cn/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
    outDir: 'docs',
  },
}))
