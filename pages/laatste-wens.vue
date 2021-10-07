<template>
  <main>
    <div class="container">
      <h1>Laatste wensen</h1>
      <ul class='laatsteWensFlexContainer'>
        <li v-for="laatsteWens in laatsteWensen" :key="laatsteWens.id">
          <h2>{{ laatsteWens.title }}</h2>
            <p>{{ laatsteWens.description }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const laatsteWensen = await $axios.$get(`${process.env.strapiAPI}/laatste-wens`)
    console.log(laatsteWensen)
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

    h1{
      width: 90%;
      margin: 0 auto;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      margin-bottom: 20px;

      @include min-900 {
        max-width: 800px;
        width: 60%;
      }
    }

    ul.laatsteWensFlexContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: auto;

        @include min-1000 {
          flex-wrap: wrap;
        }

      li {
        flex-basis: 250px;
        min-width: 200px;
        height: 250px;
        overflow: hidden;
        width: 100%;
        margin: 20px;
        // background-color: coral;
        justify-content: center;

        @include min-550 {
          flex-basis: 350px;
          min-width: 300px;
        }

        // @include min-356px {
        //   min-width: 100%;
        // }

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
