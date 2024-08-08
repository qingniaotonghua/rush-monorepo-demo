import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true, // 插入 types entry
    tsconfigPath: "./tsconfig.json",
    outDir: './dist/types',
    entryRoot: './src',
    copyDtsFiles: true,
  }),],
  build: {
    lib: {
      formats: ['es'],
      entry: 'src/main.ts',
      fileName: (format, name) => `${name}.${format}.js`,
    },
    sourcemap: true,
  },
})
