<template>
  <li>
    <div class="grid-element">
      <p class="date-and-author">{{ formatDate }} | {{ post.author ? post.author.username : '' }}</p>
      <NuxtLink :to="`/actueel/${ post.id }`">
      <h1>{{ post.title }}</h1>
      </NuxtLink>
      <p class="content">
        {{ post.excerpt }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    formatDate () {
      const postDate = new Date(this.post.published_at)
      return `${postDate.getDate()}-${postDate.getMonth()}-${postDate.getFullYear()}`
    }
  }
}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

li {
  list-style: none;
  padding: 20px 10px;
  border: solid 1px $light-green;
  div.grid-element {
    p.date-and-author {
      word-spacing: 2px;
      margin-bottom: 15px;
    }
  }
  p.content {
    height: 130px;
    overflow: hidden;
    color: $light-text-color;
  }
  p.date-and-author {
    color: $light-text-color;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin-bottom: 15px;
    color: $light-text-color;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
