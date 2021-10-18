!<template>
  <main>
    <div class="container">
      <h1>ANBI Status</h1>
      <div v-html="$md.render(anbi.content)" class="md-container-default"></div>
      <ul class="reports">
        <li v-for="report in reports" :key="report.id" class="report" >
         <a target="blank" class="linkToAReport" v-bind:href="report.file ? `${$store.state.baseUrl}${report.file.url}` : ''" >{{ report.name }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const reports = await $axios.$get(`${process.env.strapiAPI}/reports`)
    const anbi = await $axios.$get(`${process.env.strapiAPI}/anbi-text`)
    return { reports, anbi }
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
      font-weight: 600;
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

    h2:nth-of-type(4) {
      color: $dark-green;
      font-weight: bold;
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
