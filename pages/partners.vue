<template>
  <main>
    <div class="container">
      <h1>Partners</h1>
      <p>Why is the sky orange?</p>
      <div class="partners">
        <div v-for="partner in partners" :key="partner.id" class="image" >
          <img :src="partner.logo ? `${$store.state.baseUrl}${partner.logo.url}` : ''" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const partners = await $axios.$get(`${process.env.strapiAPI}/partners`)
    console.log(partners)
    return { partners }
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
    div.partners {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      max-width: 285px;
      margin: auto;

      @include min-550 {
        max-width: none;
      }

      div.image {
        border: 1px solid $light-green;

        @include min-550 {
          flex-basis: 50%;
          max-width: none;
        }

        @include min-700 {
          flex-basis: 25%;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
          // max-width:25%;
        }
      }
    }
  }
}
</style>
