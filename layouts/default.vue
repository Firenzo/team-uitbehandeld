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

<style lang="scss">

.page-enter-active{
  transition: transform 0.4s, opacity 0.4s;
  transform: translateX(3vw);
  opacity: 0;
}

.page-enter-to{
  transform: translateX(0vw);
  opacity: 1;
}

.page-leave-active{
  transition: transform 0.4s, opacity 0.4s;
  transform: translateX(0vw);
  opacity: 1;
}

.page-leave-to{
  transform: translateX(-3vw);
  opacity: 0;
}
</style>
