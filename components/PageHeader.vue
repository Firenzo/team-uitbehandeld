<template>
  <header>
    <div class="container">
      <NuxtLink class="logo" to="/">
        <img
          src="~/assets/images/teamuitbehandeld_logo.svg"
          alt="Team Uitbehandeld logo"
        />
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
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 20px;
  margin-bottom: 40px;

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    a.logo {
      width: 270px;
      flex-basis: 270px;
    }

    nav {
      flex-basis: calc(100% - 270px - 50px);

      ul {
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: black;

            &:hover {
              padding-bottom:3px;
              border-bottom: 2px solid black;
            }
          }
        }
      }
    }
  }
}
</style>
