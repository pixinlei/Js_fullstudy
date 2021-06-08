  import type { App } from 'vue'
  import Vant from 'vant'
  import 'vant/lib/index.css'
  
  export default (app: App<Element>): void => {
    app.use(Vant)
  }
