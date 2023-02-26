import { loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'
import { visualizer } from "rollup-plugin-visualizer";
import legacy from '@vitejs/plugin-legacy'


export default ({ command, mode }) => {
  const isBuild = command === 'build';
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    plugins: [...setupPlugins(isBuild,env),
      legacy({
        targets: ['Chrome 55'],
        modernPolyfills: true,
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks:true,
      //   polyfills:[
      //      'es.symbol',
      //      'es.array.filter',
      //      'es.promise',
      //      'es.promise.finally',
      //      'es/map',
      //      'es/set',
      //      'es.array.for-each',
      //      'es.object.define-properties',
      //      'es.object.define-property',
      //      'es.object.get-own-property-descriptor',
      //      'es.object.get-own-property-descriptors',
      //      'es.object.keys',
      //      'es.object.to-string',
      //      'web.dom-collections.for-each',
      //      'esnext.global-this',
      //      'esnext.string.match-all',
      //      "es.array.flat",
      //      'es.array.flatMap'
      //  ]
    }),
      visualizer()
    ],
    resolve: {
      alias,
    }
  }
}
