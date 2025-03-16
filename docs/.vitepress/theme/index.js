import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import 'mapbox-gl/dist/mapbox-gl.css'
import Gallery from '../Gallery.vue'
import Map from '../Map.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Gallery', Gallery)
    app.component('Map', Map)
  },
}
