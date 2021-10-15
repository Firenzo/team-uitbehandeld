<template>
  <main>
    <div class="container">
      <h1>{{ laatsteWensen.title }}</h1>
      <div class="md-container" v-html="$md.render(laatsteWensen.description)"></div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const laatsteWensen = await $axios.$get(`${process.env.strapiAPI}/last-wishes/${params.laatstewens}`)
    return { laatsteWensen }
  }
}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main {
  div.container {
    width: 90%;
    margin: auto;
    ul.laatsteWensFlexContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: auto;
      justify-content: center;

        @include min-1000 {
          flex-wrap: wrap;
        }

      h1{
        width: 100%;
        margin: 30px;
        text-align: center;

      @include min-900 {
        max-width: 800px;
        width: 90%;
        }
      }

      li {
        flex-basis: 250px;
        min-width: 200px;
        height: auto;
        max-height: 250px;
        overflow: hidden;
        width: 100%;
        margin: 20px;
        justify-content: center;
        padding: 10px;

        @include min-550 {
          flex-basis: 350px;
          min-width: 300px;
        }

        h2 {
          margin-bottom: 15px;
        }
      }
    }

    p.headerText {
      width: 90%;
      margin: 0 auto;
      grid-row: 2 / 3;
      grid-column: 1 / 3;
      margin-bottom: 20px;

      @include min-900 {
        max-width: 800px;
        width: 60%;
      }
    }

    p {
      grid-row-start: 2;
    }
  }
}
</style>
