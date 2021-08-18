<template>
  <footer>
    <div class="container">
      <div class="team-uitbehandeld">
        <div class="image">
          <img src="~/assets/images/teamuitbehandeld_logo.svg" alt="Team Uitbehandeld logo">
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto incidunt quibusdam temporibus. Ab totam perferendis impedit dolores minus beatae incidunt ipsam! Necessitatibus, sapiente voluptatibus.
        </p>
      </div>

      <div class="contact">
        <h2>Contact</h2>
        <div class="email">
          <fa :icon="['fas', 'envelope']" />
          <a href="mailto:info@teamuitbehandeld.nl">info@teamuitbehandeld.nl</a>
        </div>
        <div class="phone">
          <fa :icon="['fas', 'phone']" />
          <a href="#">06 - 1234 56 78</a>
        </div>
        <div class="address">
          <fa :icon="['fas', 'map-marker-alt']" />
          <span>den Blieklaan 33<br />3766AP Soest</span>
        </div>
      </div>

      <div class="about">

      </div>
    </div>
  </footer>
</template>

<style>
</style>
