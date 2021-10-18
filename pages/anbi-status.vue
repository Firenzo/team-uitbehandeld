!<template>
  <main>
    <div class="container">
      <h1>ANBI Status</h1>
      <div v-html="$md.render(anbi.content)" class="md-container-default"></div>
      <h2 class="reports-title">Downloads:</h2>
      <ul class="reports">
        <li v-for="report in reports" :key="report.id" class="report" >
         <a target="blank" class="linkToAReport" v-bind:href="report.file ? `${$store.state.baseUrl}${report.file.url}` : ''" >
           <Fa-icon :icon="['fas', 'file-alt']" />
           {{ report.name }}
          </a>
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

    div.md-container-default{
      margin-bottom:50px;
    }

    h2.reports-title{
      color: $dark-green;
      font-weight:700;
      margin-bottom:20px;
    }

    ul.reports {
      li.report {
        display:flex;
        margin-bottom: 30px;
        list-style: none;
        align-items:center;
        justify-content: flex-start;

        svg{
          font-size:24px;
          margin-right:7px;
        }

        a.linkToAReport {
          text-decoration: none;
          color:black;
          font-weight:700;
          transition: color 0.2s ease;

          &:hover {
            color: $light-text-color;
            text-decoration:underline;
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
