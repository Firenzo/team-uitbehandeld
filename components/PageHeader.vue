<template>

<header>
  <div class="container">
    <NuxtLink class="logo" to="/">
      <img src="~/assets/images/teamuitbehandeld_logo.svg" alt="Team Uitbehandeld logo">
    </NuxtLink>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">Hulpvraag</NuxtLink></li>
        <li><NuxtLink to="/about">Teamspecialisten</NuxtLink></li>
        <li><NuxtLink to="/about">Buddy's &amp; vrijwilligers</NuxtLink></li>
        <li><NuxtLink to="/about">Laatste wens</NuxtLink></li>
        <li><NuxtLink to="/about">Actueel</NuxtLink></li>
        <li><NuxtLink to="/about">Partners</NuxtLink></li>
        <li><NuxtLink to="/about">Contact</NuxtLink></li>
      </ul>
    </nav>
  </div>
</header>
</template>

<style scoped lang="scss">

header {

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 300px;
      flex-basis: 300px;
    }

    nav {
      flex-basis: calc(100% - 300px - 50px);

      ul {
        display: flex;
        justify-content: space-between;

      li {
        list-style: none;

        a {
          text-decoration: none;
        }
      }
    }
  }
}

}
</style>
