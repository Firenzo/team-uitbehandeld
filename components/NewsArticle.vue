<template>
  <li>
    <div class="grid-element">
      <p class="date-and-author">Date | Name author</p>
      <h1>Titel</h1>
      <p class="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem a in,
        delectus quae voluptate accusamus enim optio cupiditate excepturi autem
        similique incidunt ad architecto.
      </p>
    </div>
  </li>
</template>

<script>
export default {}
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
    height: 120px;
    overflow: hidden;
    color: $light-text-color;
  }
  p.date-and-author {
    color: $light-text-color;
  }
  h1 {
    margin-bottom: 15px;
    color: $light-text-color;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
