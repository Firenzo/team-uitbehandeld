<template>
  <main>
    <div class="container">
      <div class="image hero"></div>
      <section id="main-content">
        <h2>Ons platform heet niet voor niets Teamuitbehandeld.nl</h2>
        <div id="samen-doen">
          <div class="samen-doen-content">
            <h1>We willen het samen doen</h1>
<p>“Er zijn geen behandelingen meer om je ziekte te bestrijden.” Jaarlijks krijgen <a target="blank" href="https://www.rijksoverheid.nl/actueel/nieuws/2019/06/20/betere-informatie-over-palliatieve-zorg">
120.000 mensen</a> te horen, dat zij ‘uitbehandeld’ zijn en daarvan weten
circa 30.000 vervolgens niet wat dit concreet voor hun betekent en wat ze moeten en kunnen doen. <br><br>
TeamUitbehandeld.nl wil helpen vragen te beantwoorden die op zo’n moment ontstaan. <br><br>
In veel gevallen zal de behandelend specialist in het ziekenhuis terugverwijzen naar de huisarts.
De huisarts speelt een heel belangrijke rol in de begeleiding van patiënten,
voor wie geen “ziekte onderdrukkende” behandeling meer bestaat. Als er geen passende geneesmiddelen meer zijn om de ziekte zelf te bestrijden,
kom je in een fase die artsen “palliatieve zorg” noemen. Palliatieve zorg is erop gericht een zo hoog mogelijke kwaliteit van leven te realiseren
voor een patiënt die niet meer beter wordt. <br><br>
Het is een harde boodschap als je te horen krijgt dat jij of een dierbare (naaste) is uitbehandeld.
Iets wat je hoopt nooit te zullen mee maken. Dit slechte nieuws brengt naast veel verdriet, doorgaans veel vragen met zich mee.
Vragen waarvan het soms moeilijk is om een goed antwoord op te vinden.</p>
          </div>
          <div class="image samen-doen-image">
          <img src="~/assets/images/laatste-wens.png" alt="mensen op een brug">
          </div>
        </div>
        <div id="vragen">
          <!-- <h1>Je kunt denken aan heel concrete, praktische vragen zoals: </h1> -->
          <ul class="practische-vragen">
            <!-- /// can't stay like this, display: flex: 50%, flex-wrap, to change the order-->
            <li>- wie is mijn aanspreekpunt bij problemen?</li>
            <li>- welke zorg is er nog wel?</li>
            <li>- waar kan ik welke hulp vragen en krijgen?</li>
            <li>- waar kan ik welke hulpmiddelen kopen en of lenen?</li>
          </ul>
          <ul class="andere-vragen">
            Andere vragen zijn persoonlijker en behoeven een gericht, vakkundig antwoord zoals:
            <li>- hoe lang heb ik nog te leven?</li>
            <li>- hoe zal ik komen te overlijden? Welke hulp is er en wat zou ik willen als het lijden voor mij ondragelijk wordt?</li>
            <li>- wat mag ik doen en wat is goed voor mij en wat kan
ik beter niet doen? (Bijvoorbeeld op het gebied van bewegen en voeding). - hoe vervul ik mijn laatste wens?</li>
          </ul>
        </div>
      </section>
      <section id="hulpvraag-onderwerpen">
        <h1>Hulpvraag onderwerpen</h1>
        <ul>
          <li><NuxtLink class="button" to="hulpvraag/medisch">Medisch</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/palliatief">Palliatief</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/beweging">Beweging</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/voeding">Voeding</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/mentaal">Mentaal</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/maatschappelijk">Maatschappelijk</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/hulpmiddelen">Hulpmiddelen</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/rouwverwerking">Rouwverwerking</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/levenseinde">Levenseinde</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/emoties">Emoties</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/oncologie">Oncologie</NuxtLink></li>
          <li><NuxtLink class="button" to="hulpvraag/button">Button</NuxtLink></li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {

    >*:not(:last-child){
      margin-bottom:40px;
    }

    @include min-750 {
      display:flex;
      justify-content: space-between;
      flex-wrap:wrap;
    }

    div.image.hero {
      background: url("~/assets/images/Strand_uitgesneden.png") no-repeat center;
      background-size: cover;
      height: 150px;
      width: 100%;
      border-radius:3px;

      @include min-450{
        height: 230px;
      }

      @include min-700{
        height: 300px;
      }
    }
    div#samen-doen{
      width: 100%;

      align-items: center;
      justify-content: space-between;

        //   @include min-450{
        // flex-direction: column;
        //   }

          @include min-900{
          display: flex;
          }

      div.samen-doen-content {
        margin-bottom: 20px;

             @include min-450{
            width: 100%;
            margin-left: 0px;
          }

             @include min-900{
            width: 100%;
            margin-right: 20px;
          }
      }

      div.samen-doen-image {
         overflow:hidden;
         display: flex;
         justify-content: flex-end;
         width: 100%;

             @include min-450{
            justify-content: center;
            width: 100%;
          }

             @include min-900{
            width: 100%;
            margin: 0;
          }

         img{
          border-radius:3px;
          object-fit: contain;
          height: 500px;
        }
      }
    }

    div#vragen{
      width: 100%;
      margin: 20px auto;

        //       @include min-450{
        // flex-direction: column;
        //   }

          @include min-900{
      display: flex;
          }

      ul.practische-vragen {
        background-color: #4ca734;
        padding: 25px;

         @include min-900{
          width: 50%;
          }

        li {
          list-style: none;
        }
      }

          ul.andere-vragen {
        background-color: #9cbe2f;
        padding: 25px;

         @include min-900{
          width: 50%;
          }

        li {
          list-style: none;
        }
      }
    }

    section#hulpvraag-onderwerpen{
      width:100%;

      h1{
        font-size:28px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom:20px;

        &:before, &:after{
          content:'';
          display:block;
          height:2px;
          background:$light-green;
          flex-basis:calc(50% - 161px - 20px);
        }
      }

      ul{
        display:flex;
        justify-content: space-between;
        overflow:auto;
        -webkit-overflow-scrolling: touch;

        @include min-450{
          flex-wrap:wrap;
        }

        li{
          list-style: none;
          background:$light-green;
          border-radius:10px;
          flex-basis:70%;
          margin-bottom:20px;
          margin-right:20px;

          @include min-450{
            flex-basis:calc( (100% / 2) - 10px);
            margin-right:0;
          }

          @include min-700{
            flex-basis:calc( (100% / 3) - 10px);
          }

          @include min-1000{
            flex-basis:calc( (100% / 4) - 10px);
          }

          a.button{
            display:block;
            text-align: center;
            color:white;
            padding: 25px 0px;
            width:200px;
            text-decoration: none;

            &:hover{
              text-decoration:underline;
            }

            @include min-450{
              width:auto;
              padding: 35px 0;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  data: () => ({}),

  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style lang="scss">
@use "styles/main";
</style>
