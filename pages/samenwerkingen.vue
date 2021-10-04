<template>
  <main>
    <div class="container">
      <h1>Samenwerkingen</h1>
      <p>Why is the sky orange?</p>
      <splide :options="options" >
        <splide-slide v-for="partner in partners" :key="partner.id">
          <img :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''" />
      <!-- <div class="partners">
        <div v-for="partner in partners" :key="partner.id" class="image">
          <img :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''"/>
        </div>
      </div> -->
        </splide-slide>
      </splide>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const partners = await $axios.$get(`${process.env.strapiAPI}/partners`)
    console.log(partners)
    return { partners }
  },

  data () {
    return {
      options: {
        type: 'loop',
        trimSpace: false,
        autoplay: true,
        interval: 2000,
        pauseOnHover: false,
        pagination: false,
        arrows: true,
        perMove: 1,
        // autoWidth: true,
        // focus: 'center',
        perPage: 4,
        breakpoints: {
          600: {
            perPage: 1
          },
          900: {
            perPage: 2
          },
          1300: {
            perPage: 3
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main {
  div.container {
    > p {
      margin-bottom: 40px;
      max-width: 750px;
    }

    //let op, styling past nu op elke img toe
    li.splide__slide img {
      // max-width: 285px;
      width: 100%;
      height: auto;
      display: block;
      margin: auto;
    }

    // div.partners {
    //   display: flex;
    //   flex-wrap: wrap;
    //   flex-direction: row;
    //   max-width: 285px;
    //   margin: auto;

    //   @include min-550 {
    //     max-width: none;
    //   }

    //   div.image {
    //     border: 1px solid $light-green;

    //     @include min-550 {
    //       flex-basis: 50%;
    //       max-width: none;
    //     }

    //     @include min-700 {
    //       flex-basis: 25%;
    //     }
    //     img {
    //       display: block;
    //       width: 100%;
    //       height: auto;
    //       // max-width: 25%;
    //     }
    //   }
    // }
  }
}
</style>
