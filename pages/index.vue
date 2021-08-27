<template>
  <main>
    <div class="container">
      <div class="image hero"></div>
      <section id="main-content"><h1>Have to do a lot of work here, but not today</h1></section>
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
