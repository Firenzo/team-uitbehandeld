!<template>
  <main>
    <div class="container">
      <h1>Disclaimer</h1>
      <div class="disclaimer">
        <p>{{disclaimer.text}}</p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const disclaimer = await $axios.$get(`${process.env.strapiAPI}/disclaimer`)
    console.log(disclaimer)
    return { disclaimer }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;

    h1 {
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: 550;
      color: $light-text-color;
        @include min-700 {
        font-size: 25px;
      }
    }

    h2 {
      margin-bottom: 20px;
      line-height: 1.5;
      font-size: 16px;
        @include min-700 {
        font-size: 20px;
      }
    }

    h2:nth-of-type(2) {
      color: $dark-green;
    }

    ul.reports {
      li.report {
        margin-bottom: 15px;
        list-style: none;
        width: 30px;
        a.linkToAReport {
          text-decoration: none;
          color: black;
          font-weight:700;
          &:hover {
            color: $light-text-color;
          }
        }
      }
    }

    @include min-700 {
      max-width: 1200px;
    }
  }
}
</style>
