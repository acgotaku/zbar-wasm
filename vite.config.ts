import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name } from './package.json';

const fileName = name;

export default defineConfig({
  build: {
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: fileName,
      formats: ['es'],
      fileName: format => `${fileName}.${format}.js`
    },
    emptyOutDir: true
  },
  plugins: [
    dts({
      entryRoot: resolve(__dirname, 'src'),
      logLevel: 'error'
    })
  ]
});
