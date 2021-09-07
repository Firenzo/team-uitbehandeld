<template>
  <main>
    <div class="container">
      <h1>Actueel</h1>
      <ul>
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </ul>
      <button>Laad meer...</button>
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
