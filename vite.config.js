import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      topExecutionPriority: false
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    lib: {
      // 组件地址
      entry: path.resolve(__dirname, "src/components/HelloWorld.vue"),
      // 组件名称
      name: 'HelloWorld',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },

      }
    },
  },
  define: {
    'process.env.NODE_ENV': "\"production\"",
  },
})
