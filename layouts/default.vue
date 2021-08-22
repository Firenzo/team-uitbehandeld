<template>
  <div id="app">
    <PageHeaderMobile v-if="viewportIsMobile" />
    <PageHeader v-else />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script>
export default {
  layout: 'default',

  data: () => ({
    viewportIsMobile: true
  }),

  computed: {

  },

  mounted () {
    this.changeMobileState()
    window.addEventListener('resize', this.changeMobileState)
  },

  methods: {

    changeMobileState () {
      this.viewportIsMobile = window.innerWidth < 1200
    }

  }
}

</script>
