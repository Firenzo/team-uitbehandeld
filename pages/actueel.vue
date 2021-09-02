<template>
  <main>
    <div class="container">
      <h1>Actueel</h1>
      <ul>
        <NewsArticle />
        <!-- <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle /> -->
      </ul>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main {
  div.container {
    // display: grid;
    background: lightyellow;
  }
  h1 {
    // grid-area: 1/1;
  }
}
</style>
