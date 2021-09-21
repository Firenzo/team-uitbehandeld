<template>
  <div id="app">
     <div ref="top"></div>
    <PageHeaderMobile v-if="viewportIsMobile"/>
    <PageHeader v-else />
    <Nuxt />
    <PageFooter />
    <div class="back-to-top" @click="scrollToTop('top')" :class="{visible: backToTopButton}" >
    <NuxtLink to= #top><Fa-icon :icon="['fas', 'chevron-up']"  /></NuxtLink></div>
  </div>
</template>

<script>
export default {

  head () {
    return {
      title: 'Team Uitbehandeld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'informatie voor uitbehandelde mensen en hun families'
        }
      ]
    }
  },

  data: () => ({
    viewportIsMobile: true,
    backToTopButton: true
  }),

  computed: {

  },
  /// I only need methods, mounted or created (created fires before mounted)
  mounted () {
    this.changeMobileState()
    window.addEventListener('resize', this.changeMobileState)
    window.addEventListener('scroll', this.onElementObserved)
  },

  methods: {
    changeMobileState () {
      this.viewportIsMobile = window.innerWidth < 1200
    },

    scrollToTop (top) {
      const element = this.$refs[top]
      const topTop = element.offsetTop
      window.scrollTo(0, topTop)
    },

    onElementObserved () {
      if (window.pageYOffset > 0) {
        this.backToTopButton = true
      } else {
        this.backToTopButton = false
      }
    }
  }
}

</script>

<style lang="scss">
@use 'styles/main' as *;
body {
  scroll-behavior: smooth;

  .back-to-top {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: rgb(155, 155, 155);
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
   display: flex;
  }

    svg {
      font-size: 35px;
      color: #FFF;
    }
  }

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
}
</style>
