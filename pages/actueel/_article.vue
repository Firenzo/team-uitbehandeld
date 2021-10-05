!<template>
  <main>
    <div class="container">
      <h1 class="post-title">{{ post.title }}</h1>
      <span class="author-and-date">{{ post.author.username }} | {{ formatDate }}</span>
      <div v-html="$md.render(post.content)" class="md-container"></div>
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

div.container::v-deep {
  max-width: 650px;
  margin: auto;

    h1.post-title {
      margin-bottom: 10px;
    }

  span.author-and-date {
    display: block;
    margin-bottom: 60px;
    color: $light-text-color;
  }
}

</style>
