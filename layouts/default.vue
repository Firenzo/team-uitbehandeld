<template>
  <div id="app">
    <PageHeaderMobile v-if="viewportIsMobile"/>
    <PageHeader v-else />
    <Nuxt />
    <PageFooter />
    <div class="back-to-top" @click="scrollToTop()" :class="{visible: backToTopButton}" >
      <a><Fa-icon :icon="['fas', 'chevron-up']"  /></a>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
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
  mounted () {
    smoothscroll.polyfill()
    this.changeMobileState()
    window.addEventListener('resize', this.changeMobileState)
    window.addEventListener('scroll', this.onElementObserved)
  },

  methods: {
    changeMobileState () {
      this.viewportIsMobile = window.innerWidth < 1200
    },

    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
  background-color: $light-green;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: rgb(116, 151, 1);
  }

   @include min-700{
    margin: 20px;
   }

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
