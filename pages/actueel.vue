<template>
  <main>
    <div class="container">
      <h1>Actueel</h1>
      <ul>
        <NewsArticle v-for="post in visiblePosts" :key="post.id" :post="post" />
      </ul>
      <button v-if="this.range < this.posts.length" @click="addComponent()">Laad meer...</button>
      <div class="flex">
        <h1>Laatse nieuws</h1>
        <p>in de media</p>
        <div class="newsImage">
        <img src="~/assets/images/Nieuws1_.jpg" alt="npo1">
        <p>Luister het interview terug op <a href="https://www.nporadio1.nl/langs-de-lijn-en-omstreken/onderwerpen/63246-2020-08-13-team-uitbehandeld-helpt-in-loodzware-levensfase">nporadio</a></p>
        </div>
        <div class="newsImage">
        <img src="~/assets/images/Nieuws2.jpg" alt="baarnschecourant">
        <p>Lees het interview op <a href="https://www.baarnschecourant.nl/lokaal/mensen/353325/wout-middelman-maakt-platform-voor-uitbehandelde-patinten">baarnschecourant.nl</a></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

  async asyncData ({ params, $axios }) {
    const posts = await $axios.$get(`${process.env.strapiAPI}/posts`)
    console.log(posts)
    return { posts }
  },

  data: () => ({
    range: 0,
    visiblePosts: []
  }),

  computed: {
    maxPosts () {
      return this.range > this.posts.length ? this.posts.length - 1 : this.range
    }
  },

  methods: {
    addComponent () {
      this.visiblePosts = []
      if (this.range === 0) {
        this.range = 5
      } else {
        this.range += 6
      }
      for (let i = 0; i <= this.maxPosts; i++) {
        this.visiblePosts.push(this.posts[i])
      }
    }
  },

  created () {
    this.addComponent()
  }
}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main {
  div.container {
    ul {
      width: 200px;
      margin: auto;
      display: grid;
      gap: 20px;
      margin-bottom: 20px;
      @include min-450 {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        width: auto;
        margin: 0;
        margin-bottom: 20px;
      }

      @include min-750 {
        gap: 15px;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
      }
    }
    button {
      margin: auto;
    }

    div.flex{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      h1 {
        color: $light-green;
        margin-bottom: 0;
      }
      div.newsImage{
        @include min-550 {
          // width: 50%;
          flex-direction: row;
          flex-basis: 50%;
      img {
        width: 100%;
        display: block;
          }
        }
      }
    }
  }
}
</style>
