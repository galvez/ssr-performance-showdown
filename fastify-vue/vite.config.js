import { join } from 'node:path'
import vuePlugin from '@vitejs/plugin-vue'
import fastifyVuePlugin from '@fastify/vue/plugin'

export default {
  root: join(import.meta.dirname, 'client'),
  plugins: [
    vuePlugin(),
    fastifyVuePlugin()
  ],
}
