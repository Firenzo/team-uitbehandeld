<template>
  <main>
    <div class="container">
      <h1>Samenwerking</h1>
      <div v-html="$md.render(partnersText.content)" class="md-container"></div>
      <splide :options="options">
        <splide-slide v-for="partner in partners" :key="partner.id">
          <img v-if="!partner.link_to_cooperation_website" :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''" />
          <a v-else :href="partner.link_to_cooperation_website" target="_blank">
            <img :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''" />
          </a>
        </splide-slide>
      </splide>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const partners = await $axios.$get(`${process.env.strapiAPI}/partners`)
    const partnersText = await $axios.$get(`${process.env.strapiAPI}/collaboration-text`)
    return { partners, partnersText }
  },

  data () {
    return {
      options: {
        type: 'loop',
        autoplay: true,
        interval: 3000,
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
    div.md-container{
      max-width:750px;
      margin-bottom:40px;
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
