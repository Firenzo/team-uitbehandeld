!<template>
  <main>
    <div class="container">
      <h1>{{ post.title }}</h1>
      <span class="author-and-date">{{ post.author.username }} | {{ formatDate }}</span>
      <!-- <p class="date">{{ formatDate }}</p> -->
      <p class="content">{{ post.content }}</p>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    formatDate () {
      const postDate = new Date(this.post.published_at)
      return `${postDate.getDate()}-${postDate.getMonth()}-${postDate.getFullYear()}`
    }
  },

  async asyncData ({ params, $axios }) {
    console.log(params)
    const post = await $axios.$get(`${process.env.strapiAPI}/posts/${params.article}`)
    console.log(post)
    return { post }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

div.container {
  max-width: 650px;
  margin: auto;

  span.author-and-date {
    display: block;
    margin-bottom: 20px;
  }
}

</style>
