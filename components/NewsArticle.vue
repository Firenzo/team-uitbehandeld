<template>
  <li>
    <div class="grid-element">
      <p class="date-and-author">{{ formatDate }} | {{ post.author ? post.author.username : '' }}</p>
      <NuxtLink :to="`/actueel/${ post.id }`"><h2>{{ post.title }}</h2></NuxtLink>
      <div class="liCont">
        <p class="content">{{ post.preview_text }}</p>
      </div>
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

  &:hover{
    a>h2{
      text-decoration: underline;
    }
  }

  div.grid-element {
    p.date-and-author {
      word-spacing: 2px;
      margin-bottom: 15px;
    }
  }

  div.liCont{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;

    p.content {
      color: $light-text-color;
    }
  }

  p.date-and-author {
    color: $light-text-color;
  }

  a {
    text-decoration: none;
  }

  h2 {
    margin-bottom: 15px;
    color: $light-text-color;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
