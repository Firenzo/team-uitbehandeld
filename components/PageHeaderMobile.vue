<template>
  <header>
    <div class="container">
      <NuxtLink class="logo" to="/">
        <img
          src="~/assets/images/teamuitbehandeld_logo.svg"
          alt="Team Uitbehandeld logo"
        />
      </NuxtLink>
      <button @click="openMenu()" class="mobileMenu">
        <Fa-icon v-if="!this.$store.state.mobileMenuOpen" :icon="['fas', 'bars']" />
        <Fa-icon v-else :icon="['fas', 'times']" />
      </button>
      <transition name="slideIn">
        <MobileMenu v-if="this.$store.state.mobileMenuOpen" />
      </transition>
    </div>
  </header>
</template>

<script>
export default {

  data: () => ({

  }),

  computed: {

  },

  mounted () {
    console.log(this.$store.state.mobileMenuOpen)
  },

  methods: {
    openMenu () {
      this.$store.dispatch('checkMobileMenuState')
      if (this.$store.state.mobileMenuOpen === true) {
        document.querySelector('body').classList.add('noscroll')
        document.querySelector('header button.mobileMenu').classList.add('menuOpen')
      } else {
        document.querySelector('body').classList.remove('noscroll')
        document.querySelector('header button.mobileMenu').classList.remove('menuOpen')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

.slideIn-enter-active, .slideIn-leave-active {
  transition: transform 0.4s;
  transform: translateX(0vw);
}
.slideIn-enter, .slideIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
}

header {
  padding-top: 5vw;
  margin-bottom: 40px;

  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @include min-450 {
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    a.logo {
      // flex-basis: 100%;
      order: 1;
      transform: translateY(-14px);
      display: flex;
      justify-content: center;

      @include min-450 {
        order: 0;
        transform: none;
        display: block;
      }

      img {
        width: 220px;
        display: block;

        @include min-700 {
          max-width: 300px;
        }
      }
    }

    button.mobileMenu {
      width: 50px;
      height: 50px;
      outline: none;
      border: none;
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      background: $light-green;
      box-shadow: 0 0 4px rgb(70, 84, 22);
      flex-basis: 50px;
      margin-left: calc(100% - 50px);
      z-index: 1;

      transition:background-color 0.2s ease;

      &.menuOpen{
        background-color:$mobile-menu-background;
        box-shadow:none;
      }

      @include min-450 {
        margin-left: 0;
      }

      svg {
        width: 22px;
        height: 22px;
        color: white; // is hex better?
      }
    }
  }
}
</style>
