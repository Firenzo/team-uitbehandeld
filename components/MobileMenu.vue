<template>
  <nav>
    <ul @click="closeMenu()">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/ons-team">Ons Team</NuxtLink></li>
        <li><NuxtLink to="/about">Hulpvraag</NuxtLink></li>
        <li><NuxtLink to="/about">Actueel</NuxtLink></li>
        <li><NuxtLink to="/about">Partners</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {

  data: () => ({

  }),

  computed: {

  },

  mounted () {

  },

  methods: {
    closeMenu () {
      this.$store.dispatch('checkMobileMenuState')
      document.querySelector('body').classList.remove('noscroll')
      document.querySelector('header button.mobileMenu').classList.remove('menuOpen')
    }
  }
}

</script>

<style scoped lang="scss">
@use 'styles/main' as *;

nav{
  position:fixed;
  top: 0;
  left:0;
  width:100vw;
  height:100vh;
  background:$mobile-menu-background;
  overflow:scroll;

  ul {
    margin-top:50px;
    li{
      list-style:none;

      a{
        display:block;
        padding:40px 0;
        text-align: center;
        color:white;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
}
</style>
