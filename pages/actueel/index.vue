<template>
  <main>
    <section id="posts">
      <div class="container">
       <h1>Actueel</h1>
        <div v-if="visiblePosts.length">
          <ul>
            <NewsArticle v-for="post in visiblePosts" :key="post.id" :post="post" />
          </ul>
          <button v-if="this.range < this.posts.length" @click="addComponent()">Laad meer...</button>
        </div>
        <div v-else>
          Er is nog geen nieuws
        </div>
      </div>
    </section>
    <section id="news">
      <div class="container">
        <h1>Laatste nieuws</h1>
        <p>in de media</p>
        <div class="newsImage">
        <a href="https://www.nporadio1.nl/langs-de-lijn-en-omstreken/onderwerpen/63246-2020-08-13-team-uitbehandeld-helpt-in-loodzware-levensfase" target="_blank">
          <div class="image">
            <img src="~/assets/images/Nieuws1_cropped.jpg" alt="npo1">
          </div>
        </a>
        <p>Luister het interview terug op <a href="https://www.nporadio1.nl/langs-de-lijn-en-omstreken/onderwerpen/63246-2020-08-13-team-uitbehandeld-helpt-in-loodzware-levensfase" target="_blank">nporadio</a></p>
      </div>
        <div class="newsImage">
        <a href="https://www.baarnschecourant.nl/lokaal/mensen/353325/wout-middelman-maakt-platform-voor-uitbehandelde-patinten" target="_blank">
          <div class="image">
            <img src="~/assets/images/Nieuws2.jpg" alt="baarnschecourant">
          </div>
        </a>
        <p>Lees het interview op <a href="https://www.baarnschecourant.nl/lokaal/mensen/353325/wout-middelman-maakt-platform-voor-uitbehandelde-patinten" target="_blank">baarnschecourant.nl</a></p>
      </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

  async asyncData ({ params, $axios }) {
    const posts = await $axios.$get(`${process.env.strapiAPI}/posts?_sort=created_at:DESC`)
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
  section#news {
    background: #ededed;
    padding: 25px 0;
    margin-top: 40px;

    div.container{
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content:center;

      @include min-1000{
        justify-content: space-between;
      }

      h1 {
        color: #000;
        margin-bottom: 0;
        flex-basis: 100%;
        text-align: center;
        font-size: 28px;

        @include min-550{
          font-size: 35px;
        }
      }

      >p {
        flex-basis: 100%;
        font-size: 24px;
        color: $light-text-color;
        text-align: center;
      }

      div.newsImage{

        @include min-1000{
          flex-basis:calc(50% - 10px);
        }
        >a{
          div.image{
            img {
              width: 100%;
              display: block;
              margin-bottom: 20px;
              margin-top: 20px;
              border-radius:5px;
              box-shadow: 0 0 8px rgba(0,0,0,0.2);
            }
          }

          p {
            @include min-1000 {
              position: absolute;
              bottom: 0;
            }
          }
        }
      }
    }
  }

  section#posts{
    div.container {
      position: relative;
      display: flex;
      flex-flow: row wrap;

      @include min-1000 {
        justify-content: space-between;
        align-items: stretch;
        position: relative;
      }

      h1{
        flex-basis:100%;
      }

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
    }
  }
}
</style>
