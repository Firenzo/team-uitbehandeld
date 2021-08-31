!<template>
  <main>
    <div class="container">
      <h2>Ons Team</h2>
      <div class="memberA">
        <img src="~/assets/images/Team_SaskiaKlein.png" />
      </div>
      <div class="member-name-and-role">
        <p>Saskia Klein</p>
        <p>Bestuurslid</p>
      </div>
      <p class="member-text">
        “Je arts vertelt je dat er geen behandeling meer is om je beter te
        maken. Wat dan? Waar kan je terecht met al je vragen? Vragen die ik als
        hematoloog regelmatig in de spreekkamer krijg. Persoonlijk hou ik de
        deur altijd open en probeer te helpen, maar ook ik weet niet op alle
        vragen een gepast antwoord. Daarom hebben wij TeamUitbehandeld.nl
        opgericht, een platform om informatie voor uitbehandelde patiënten
        makkelijker toegankelijk te maken. Hopelijk een steuntje in de rug in
        een verschrikkelijk moeilijke tijd”.
      </p>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
    max-width: 400px;

    @include min-700 {
      display: grid;
      grid-template-columns: fit-content(25%) fit-content(75%);
      max-width: 800px;
    }

    div.memberA {
      grid-column-start: 1;
      grid-row-start: 2;

      img {
        display: block;

        @include min-700 {
          width: 100%;
        }
      }
    }

    h2 {
      margin-bottom: 20px;

      @include min-700 {
        grid-column-start: 1;
      }
    }

    p.member-text {
      grid-column: 2;
      margin-top: 20px;
      grid-row-start: 2;

      @include min-700 {
        margin-left: 15px;
      }
    }

    div.member-name-and-role {
      grid-column-start: 1;
      justify-self: center;
      margin-top: 20px;
      grid-column-start: 1;
      justify-self: center;

      @include min-700 {
        margin-top: 0;
      }
    }
  }
}
</style>
