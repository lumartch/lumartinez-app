import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'lumartinez',
      fileName: 'lumartinez-components',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
      },
    },
  },
})