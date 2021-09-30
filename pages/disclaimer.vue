!<template>
  <main>
    <div class="container">
      <div class="disclaimer">
        <div v-html="markDownToHTML" class="md-container" ></div>
      </div>
    </div>
  </main>
</template>
<script>

const md = require('markdown-it')({
  html: true,
  linkify: false,
  typographer: true
})

export default {
  data () {
    // return {
    //   ps: document.getElementsByTagName("P")
    // }
  },
  async asyncData ({ params, $axios }) {
    const disclaimer = await $axios.$get(`${process.env.strapiAPI}/disclaimer`)
    // console.log(disclaimer)
    return { disclaimer }
  },
  computed: {
    markDownToHTML () {
      return md.render(this.disclaimer.text)
    }
  },
  methods: {
  },
  mounted () {
    const ps = document.querySelector('.md-container')
    console.log(ps.innerHTML)
    if (ps.innerHTML.includes('\n')) {
      console.log('line break here')
    }
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

    div.disclaimer {
      div.md-container {
        background-color: yellow;
          ::v-deep h1 {
          color: blue;
        }
        ::v-deep h2 {
          color: plum;
          margin-bottom: 10px;
        }
         ::v-deep p  {
          color: red;
          margin-bottom: 50px;
        }
      }
    }
  }
}

</style>
