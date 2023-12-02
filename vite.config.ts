import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import requireTransform from 'vite-plugin-require-transform';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';

export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      fileRegex: /.js$|.tsx$/
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 80,
  },
  resolve: {
    //设置路径别名
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src"),
      },
    ]
  },
  css: {
    postcss: {
      plugins: [
        // autoprefixer({
        //   overrideBrowserslist: [
        //     'Android 4.1',
        //     'iOS 7.1',
        //     'Chrome > 31',
        //     'ff > 31',
        //     'ie >= 8'
        //   ],
        // }),
        // postCssPxToRem({
        //   rootValue: 75,
        //   propList: ['*'],
        //   selectorBlackList: ['norem'],
        // }),
      ]
    }
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // chunks 大小限制
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 分类输出
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) { // 超大静态资源拆分
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
