<template>
  <div id="app">
    <PageHeaderMobile v-if="viewportIsMobile" />
    <PageHeader v-else />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
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

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: transform 0.4s, opacity 0.4s;
  transform: translateX(0vw);
  opacity:1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(3vw);
  opacity:0;
}
</style>
