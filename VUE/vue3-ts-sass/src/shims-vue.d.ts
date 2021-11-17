/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent, Vue } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export {component, Vue}
}
