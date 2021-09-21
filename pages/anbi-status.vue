!<template>
  <main>
    <div class="container">
      <h1>ANBI Status (draft)</h1>
      <h2>STICHTING teamuitbehandeld.nl - IBAN Rekeningnummer: NL84 RABO 0350 6129 00</h2>
      <br><br>
      <h2>Downloads</h2>
      <br><br>
      <ul>
        <!-- <div v-for="report in reports" :key="report.id" >
        <img :src="reports.Download ? `${$store.state.baseUrl}${report.Download.url}` : ''" /> -->
        <img :src="reports" />
        here should be a report
        <!-- </div> -->
         <!-- <li><a target="blank" href="http://teamuitbehandeld.nl/Beleidsplan_Stichting_Teamuitbehandeld_2021.pdf">Beleidsplan Stichting Teamuitbehandeld 2021</a></li>
         <li><a target="blank" href="http://teamuitbehandeld.nl/Jaarverslag_2020_stichting_Teamuitbehandeld.pdf">Jaarverslag 2020 stichting Teamuitbehandeld.nl</a></li>
         <li><a target="blank" href="http://teamuitbehandeld.nl/Rapportage_Teamuitbehandeld.nl_2020.pdf">Rapportage Teamuitbehandeld.nl 2020</a></li> -->
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const reports = await $axios.$get(`${process.env.strapiAPI}/reports`)
    console.log(reports[0].Download.url)
    return { reports }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
    h1 {
      text-align: left;
      margin-bottom: 50px;
    }
    max-width: 400px;

    @include min-700 {
      max-width: 1200px;
    }
  }
}
</style>
