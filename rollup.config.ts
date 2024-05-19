import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';

export default defineConfig([
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      typescript(),
      terser(),
      copy({
        targets: [{ src: 'build/zbar.wasm', dest: 'dist' }]
      })
    ]
  },
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    plugins: [dts()]
  }
]);
