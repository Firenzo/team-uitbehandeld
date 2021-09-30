import Vue from 'vue'
import VueSplide from '@splidejs/vue-splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

Vue.use( VueSplide )

export default function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }

  enablePreview()
}
