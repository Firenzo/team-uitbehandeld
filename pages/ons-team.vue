!<template>
  <main>
    <div class="container">
      <h1>Ons Team</h1>
      <ul>
        <li class="member">
          <div class="name-and-role">
            <div class="image">
              <img src="~/assets/images/Team_SaskiaKlein.png" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>Saskia Klein</h2>
            <p class="role">Bestuurslid</p>
            <p class="second-role">Internist Hematoloog UMC Groningen</p>
            <p class="role-description">
              “Je arts vertelt je dat er geen behandeling meer is om je beter te
              maken. Wat dan? Waar kan je terecht met al je vragen? Vragen die
              ik als hematoloog regelmatig in de spreekkamer krijg. Persoonlijk
              hou ik de deur altijd open en probeer te helpen, maar ook ik weet
              niet op alle vragen een gepast antwoord. Daarom hebben wij
              TeamUitbehandeld.nl opgericht, een platform om informatie voor
              uitbehandelde patiënten makkelijker toegankelijk te maken.
              Hopelijk een steuntje in de rug in een verschrikkelijk moeilijke
              tijd”.
            </p>
          </div>
        </li>
        <li class="member">
          <div class="name-and-role">
            <div class="image">
              <img src="~/assets/images/Team_WoutMiddelman.png" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>Wout Middelman</h2>
            <p class="role">Bestuurslid</p>
            <p class="second-role">
              Eigenaar Middelman wonen, partner van zijn uitbehandelde vrouw en
              vader van 4 kinderen en oprichter van de stichting
              teamuitbehandeld.nl
            </p>
            <p class="role-description">
              “Mij helpt het verwerken door me in te zetten, dan krijgt het
              verdriet een plek.” Echtgenote Mirjam (54) van de Soester
              ondernemer Wout Middelman en lid van Rotary Soest-Baarn, heeft in
              april 2019 te horen gekregen dat ze medisch is uitbehandeld. ,,Dat
              is een harde boodschap. Het ziekenhuis laat je vervolgens los en
              verwijst je naar je huisarts die niet altijd alle antwoorden
              heeft. En als je googled op ‘uitbehandeld’ vind je geen
              informatie.” Reden voor Wout Middelman Teamuitbehandeld.nl op te
              richten”
            </p>
          </div>
        </li>
        <li class="member">
          <div class="name-and-role">
            <div class="image">
              <img src="~/assets/images/Team_MettySpelt.png" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>Metty Spelt</h2>
            <p class="role">Voorzitter</p>
            <p class="second-role">Programmanager Gezondheid Wonen Inc.</p>
            <p class="role-description">
              “Als je gezond bent kun je je moeilijk voorstellen hoe het is om
              ernstig ziek te zijn en helemaal moeilijk voor te stellen als je
              dan de mededeling te krijgen dat je uitbehandeld bent. En dan is
              het ineens heel dichtbij als de wereld van dierbare vrienden
              opeens op z’n kopt staat. Het verdriet, de ontgoocheling de
              toekomst die er niet meer samen is en alle vragen die geen
              antwoorden hebben. Het platform van Teamuitbehandeld gaat
              antwoorden geven op die vragen die zo belangrijk zijn in de laste
              fase van het leven. Daar ga ik mij voor inzetten”!
            </p>
          </div>
        </li>
        <li class="member">
          <div class="name-and-role">
            <div class="image">
              <img src="~/assets/images/Team_PieterMul.png" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>Pieter Mul</h2>
            <p class="role">Penningmeester</p>
            <p class="second-role">
              Accountant en algemeen directeur en partner van Jan© Accountants
              en adviseurs B.V.
            </p>
            <p class="role-description">
              “Om hulp vragen betekent niet dat je opgeeft, zei het paard. Het
              betekent dat je weigert op te geven.” Een prachtige quote uit “De
              Jongen, de Mol, de Vos en het Paard” van Charlie Mackesy. Met ons
              platform hoop ik dat we veel antwoorden kunnen geven op hulpvragen
              van uitbehandelde patiënten. Met mijn financiële achtergrond draag
              ik graag mijn steentje bij aan de Stichting Teamuitbehandeld.nl.
            </p>
          </div>
        </li>
        <li class="member">
          <div class="name-and-role">
            <div class="image">
              <img src="~/assets/images/Team_JacquelineDrop-Pullens.png" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>Jacqueline Drop-Pullens</h2>
            <p class="role">Secretaris</p>
            <p class="second-role">
              Rouw- en verlies- begeleider, eigenaar van stoerkracht
            </p>
            <p class="role-description">
              “Alles waar je ogen van gaan sprankelen moet je doen!” Wanneer je
              het bericht krijgt dat je uitbehandeld bent eindigt er iets voor
              de boodschapper en begint er een periode voor de persoon (en
              omgeving) die dit te horen krijgt. Uit ervaring als rouw en
              verliestherapeut weet ik hoe belangrijk het is dat er op dat
              moment ook een soort houvast gerecreëerd kan worden. Iets waar jij
              gezien en gehoord wordt met jouw vraag. Team Uitbehandeld heeft
              een platform ontwikkeld die jou en je naasten hierin kunnen
              ondersteunen. Mijn energie en expertise inzetten dit te creëren,
              is waar mijn ogen en hart van gaan sparkelen!!
            </p>
          </div>
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
      margin-bottom: 0;

      @include min-700 {
        grid-column-start: 1;
      }
    }

    ul {
      li.member {
        list-style-type: none;
        &:not(:first-of-type) {
          margin-top: 40px;
        }
        @include min-700 {
          display: grid;
          &:not(:first-of-type) {
            margin-top: 65px;
          }
        }

        @include min-700 {
          grid-template-columns: fit-content(25%) fit-content(75%);
        }

        img {
          width: 100%;
          max-width: 250px;
        }

        div.title-and-role {
          grid-area: 1/2;
          margin-left: 15px;
          p.role {
            font-weight: 600;
            margin-bottom: 5px;
          }
          p.second-role {
            margin-bottom: 10px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
