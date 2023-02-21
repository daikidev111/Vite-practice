import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      lib: {
        entry: path.resolve(__dirname, './src/main.ts'),
        name: 'MyLib',
        fileName: (format) => `my-lib.${format}.js`,
        formats: ['es'], // need to specify this to produce only es bundle
      },
      emptyOutDir: true,
    }
  })

// export default defineConfig({
//     build: {
//       rollupOptions: {ee
//         input: './src/main.ts',
//         output: {
//             dir: 'dist/bundle.js',
//             format: 'cjs'
//         }
//       }
//     }
//   })