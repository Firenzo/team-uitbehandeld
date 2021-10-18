<template>
  <main>
    <section id="wishes">
    <div class="container">
      <h1>Laatste wensen</h1>
      <div v-html="$md.render(pageText.content)" class="md-container"></div>
      <div class="wishesAndButton">
      <ul class='laatsteWensFlexContainer'>
          <li v-for="laatsteWens in visiblePosts" :key="laatsteWens.id">
            <div class="liCont">
              <NuxtLink :to="`laatste-wensen/${laatsteWens.id}`"><h2>{{ laatsteWens.title }}</h2></NuxtLink>
              <p>{{ laatsteWens.preview_text }}</p>
          </div>
        </li>
      </ul>
        <button v-if="this.range < this.laatsteWensen.length" @click="addComponent()">Laad meer...</button>
    </div>
    </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const laatsteWensen = await $axios.$get(`${process.env.strapiAPI}/last-wishes?_sort=created_at:DESC`)
    const pageText = await $axios.$get(`${process.env.strapiAPI}/last-wishes-text`)
    return { laatsteWensen, pageText }
  },
  data: () => ({
    range: 0,
    visiblePosts: []
  }),
  computed: {
    maxWishes () {
      return this.range > this.laatsteWensen.length ? this.laatsteWensen.length - 1 : this.range
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
      for (let i = 0; i <= this.maxWishes; i++) {
        this.visiblePosts.push(this.laatsteWensen[i])
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

  section#wishes{
    div.container {
      position: relative;
      display: flex;
      flex-flow: row wrap;

      div.md-container{
        margin-bottom:30px;
        max-width:750px;
      }

      >h1{
        @include min-1000{
          flex-basis:100%;
        }
      }

      @include min-1000 {
        justify-content: space-between;
        align-items: stretch;
        position: relative;
      }

      div.wishesAndButton {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        justify-content:center;

        h1{
          flex-basis:100%;
        }
        ul {
          margin: auto;
          display: grid;
          gap: 20px;
          margin-bottom: 20px;

          @include min-450 {
            grid-template-columns: repeat(2, minmax(calc(100% /2), 1fr));
            width: auto;
            margin: 0;
            margin-bottom: 20px;
          }

          @include min-750 {
            gap: 15px;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
          }

          li {
            border: solid 1px #9cbe2f;
            padding: 20px;
            list-style: none;
            border-radius:3px;

            &:hover{
              h2{
                text-decoration: underline;
              }
            }

            p{
              color:$light-text-color;
            }

            div.liCont {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;

            a {
              text-decoration: none;

          h2 {
            margin-bottom: 15px;
            color: $light-text-color;
          }
        }
      }
    }
        button {
          margin: auto;
        }
      }
    }
  }
}
}
</style>
