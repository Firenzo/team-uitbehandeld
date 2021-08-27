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
          <li><NuxtLink to="/about">Ons Team</NuxtLink></li>
          <li><NuxtLink to="/about">Hulpvraag</NuxtLink></li>
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
      display: flex;
      justify-content: flex-end;

      ul {
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;

          &:not(:first-of-type) {
            margin-left: 25px;
          }

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
