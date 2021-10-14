<template>
  <main>
    <div class="container">
      <ul class='laatsteWensFlexContainer'>
        <h1>Laatste wensen</h1>
          <li v-for="laatsteWens in laatsteWensen" :key="laatsteWens.id">
            <div class="liCont">
              <NuxtLink :to="`laatste-wensen/${laatsteWens.id}`"><h2>{{ laatsteWens.title }}</h2></NuxtLink>
              <p>{{ laatsteWens.preview_text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const laatsteWensen = await $axios.$get(`${process.env.strapiAPI}/last-wishes`)
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
        border: solid 1px #9cbe2f;
        flex-basis: 250px;
        margin: 10px;
        padding: 20px 10px;
        list-style: none;
        .liCont {
        // min-width: 200px;
        // height: auto;
        // max-height: 250px;
        // overflow: hidden;
        // width: 100%;
        // justify-content: center;
        // list-style: none;
        // padding: 20px 10px;

        margin: 10px;
        padding: 0px 20px;
        // padding: 120px;
        // line-clamp: 4;
        // box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

        @include min-550 {
          flex-basis: 350px;
          min-width: 300px;
        }
        a {
          text-decoration: none;

          h2 {
            margin-bottom: 15px;
            color: black;
            text-decoration: underline;
          }
        }
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
