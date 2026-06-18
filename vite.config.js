import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `viteSingleFile` inlines all JS + CSS into a single dist/index.html,
// so the built site is one self-contained file you can open directly
// (no server) or publish as an artifact.
export default defineConfig({
  // Relative base so the build works under any path (GitHub Pages
  // project subpath like /Armenia/, or opened directly as a file).
  base: './',
  plugins: [vue(), viteSingleFile()],
})
