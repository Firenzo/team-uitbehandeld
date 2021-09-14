<template>
  <main>
    <div class="container">
      <h1>Actueel</h1>
      <ul>
        <NewsArticle v-for="post in visiblePosts" :key="post.id" :post="post" />
      </ul>
      <button v-if="this.range < this.posts.length" @click="addComponent()">Laad meer...</button>
    </div>
  </main>
</template>

<script>
export default {

  async asyncData ({ params, $axios }) {
    const posts = await $axios.$get('http://localhost:1338/posts')
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
    this.range = 2
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
  }
}
</style>
