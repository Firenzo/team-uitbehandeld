!<template>
  <main>
    <div class="container">
      <h2>Ons Team</h2>
      <ul>
        <li class="member">
          <div class="name-and-role">
            <img src="~/assets/images/Team_SaskiaKlein.png" />
            <p>Saskia Klein</p>
            <p class="role">Bestuurslid</p>
          </div>
          <p class="member-text">
            “Je arts vertelt je dat er geen behandeling meer is om je beter te
            maken. Wat dan? Waar kan je terecht met al je vragen? Vragen die ik
            als hematoloog regelmatig in de spreekkamer krijg. Persoonlijk hou
            ik de deur altijd open en probeer te helpen, maar ook ik weet niet
            op alle vragen een gepast antwoord. Daarom hebben wij
            TeamUitbehandeld.nl opgericht, een platform om informatie voor
            uitbehandelde patiënten makkelijker toegankelijk te maken. Hopelijk
            een steuntje in de rug in een verschrikkelijk moeilijke tijd”.
          </p>
        </li>
        <li class="member">
          <div class="name-and-role">
            <img src="~/assets/images/Team_WoutMiddelman.png" />
            <p>Saskia Klein</p>
            <p class="role">Bestuurslid</p>
          </div>
          <p class="member-text">
            “Mij helpt het verwerken door me in te zetten, dan krijgt het
            verdriet een plek.” Echtgenote Mirjam (54) van de Soester ondernemer
            Wout Middelman en lid van Rotary Soest-Baarn, heeft in april 2019 te
            horen gekregen dat ze medisch is uitbehandeld. ,,Dat is een harde
            boodschap. Het ziekenhuis laat je vervolgens los en verwijst je naar
            je huisarts die niet altijd alle antwoorden heeft. En als je googled
            op ‘uitbehandeld’ vind je geen informatie.” Reden voor Wout
            Middelman Teamuitbehandeld.nl op te richten”
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
    max-width: 400px;

    @include min-700 {
      max-width: 800px;
    }

    h2 {
      margin-bottom: 20px;

      @include min-700 {
        grid-column-start: 1;
      }
    }

    ul {
      li.member {
        display: grid;
        &:not(:first-of-type) {
          margin-top: 15px;
        }

        @include min-700 {
          grid-template-columns: fit-content(25%) fit-content(75%);
        }

        div.name-and-role {
          grid-area: 1/1;
        }

        p.role {
          font-style: italic;
        }

        img {
          width: 100%;
        }

        p.member-text {
          grid-area: 1/2;
          margin-left: 15px;

          @include min-700 {
            margin-top: 0;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
