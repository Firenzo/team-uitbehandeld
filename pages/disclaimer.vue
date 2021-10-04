<template>
  <main>
    <div class="container">
      <div class="disclaimer">
        <div v-html="$md.render(disclaimer.text)" class="md-container"></div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
  },

  async asyncData ({ params, $axios }) {
    const disclaimer = await $axios.$get(`${process.env.strapiAPI}/disclaimer`)
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

    @include min-700 {
      max-width: 1200px;
    }
  }
}

</style>
