<template>
  <main>
    <div class="container">
      <div class="image hero"></div>

      <section id="gesprekshulp">
        <h1>Gesprekshulp</h1>
        <ol>
          <li>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
          <li>
            <h2>Lorem2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
          <li>
            <h2>Lorem3</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
        </ol>
      </section>

      <section id="laatste-wens">
        <div class="laatste-wens-content">
          <h1>Laatste Wens</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, doloremque dolore pariatur ratione quam excepturi facilis quas aut odit exercitationem consectetur odio earum adipisci iste placeat ullam rerum nihil nesciunt! Et sunt quis rem facilis eos praesentium dolores in, voluptatum porro. Minima ullam, cumque asperiores itaque ducimus dolorum atque at!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est quia, corporis recusandae dignissimos soluta, aliquam inventore exercitationem reiciendis qui at nemo quaerat! Maiores eveniet accusamus nostrum impedit molestiae tenetur modi expedita recusandae reprehenderit. Cupiditate voluptatibus aliquam hic alias reprehenderit aliquid maxime laborum nulla soluta at accusantium, quidem minus repellendus nobis nostrum, placeat facere distinctio quam eligendi laboriosam, aspernatur tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque consectetur deserunt architecto voluptatem, id sit?</p>
        </div>
        <div class="image">
          <img src="~/assets/images/laatste-wens.png" alt="mensen op een brug">
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

    section#gesprekshulp {
      flex-basis:calc(50% - 10px);

      @include min-1200{
        flex-basis:calc(40% - 10px);
      }

      h1{
        margin-bottom:20px;
      }
      ol{
        list-style:none;
        counter-reset: gesprekshulp-counter;

        li{
          counter-increment: gesprekshulp-counter;
          display:flex;
          flex-wrap:wrap;
          align-items: center;

          @include min-750 {
            // max-width: 500px;
          }

          &:not(:last-of-type){
            margin-bottom:30px;
          }

          &:before {
            content: counter(gesprekshulp-counter);
            color: white;
            background: $light-green;
            display:flex;
            justify-content: center;
            align-items:center;
            height:40px;
            width:40px;
            border-radius:50%;
            font-weight: 600;
            margin-right:12px;
          }

          p{
            &:first-of-type{
              margin-top:10px;
            }
          }
        }
      }
    }

    section#laatste-wens{
      flex-basis:calc(50% - 10px);

      @include min-1200{
        display:flex;
        justify-content: space-between;
        flex-basis:calc(60% - 10px);
      }

      div.image{
        display:none;
        // height:100%;
        // background:rgb(192, 192, 192);
        overflow:hidden;

        @include min-1200{
          display:block;
        }

        img{
          width:100%;
          border-radius:3px;
        }
      }

      div.laatste-wens-content{

        @include min-1200{
          flex-basis:calc(40% - 10px)
        }

        p{

          &:first-of-type{
            margin-top:20px;

            @include min-750{
              margin-top:30px;
            }
          }

          &:not(:last-of-type){
            margin-bottom:20px;
          }
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
