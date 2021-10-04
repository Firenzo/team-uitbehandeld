<template>
  <main>
    <div class="container">
      <h1>Samenwerking</h1>
      <p>Why is the sky orange?</p>
      <splide :options="options">
        <splide-slide v-for="partner in partners" :key="partner.id">
          <img :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''" />
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
        autoplay: true,
        interval: 3000,
        // true is recommended for accessibility
        pauseOnFocus: true,
        pagination: false,
        arrows: true,
        perPage: 3,
        perMove: 1,
        focus: 'center',
        gap: '3em',
        breakpoints: {
          600: {
            perPage: 1
          },
          900: {
            perPage: 2
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

    .splide__slide img {
      width: 100%;
      opacity: 0.5;
    }

    .splide__arrow {
      background: green !important;
    }

    .splide__slide.is-active img {
      opacity: 1;
    }
  }
}
</style>
