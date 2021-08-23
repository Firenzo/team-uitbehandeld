<template>

<header>
  <div class="container">
    <NuxtLink class="logo" to="/">
      <img src="~/assets/images/teamuitbehandeld_logo.svg" alt="Team Uitbehandeld logo">
    </NuxtLink>
    <button class="mobileMenu"><Fa-icon :icon="['fas', 'bars']" /></button>
  </div>
</header>
</template>

<style scoped lang="scss">
@use 'styles/main' as *;

header {
  padding-top: 5vw;

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a.logo {
      flex-basis: 100%;
      order: 1;
      transform: translateY(-14px);
      display: flex;
      justify-content: center;

      img {
        max-width: 300px;
        display: block;
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
      background: #9cbe2f;
      box-shadow: 0 0 4px rgb(70, 84, 22);
      flex-basis: 50px;
      margin-left: calc(100% - 50px);

      svg {
        width: 22px;
        height: 22px;
        color: white; // is hex better?
      }
    }
  }
}

</style>
