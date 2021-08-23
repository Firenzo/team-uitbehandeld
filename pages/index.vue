<template>
  <main>
    <div class="container">
      <div class="image hero"></div>
      <section id="gesprekshulp">
        <h1>Gesprekshulp</h1>
        <ol>
          <li>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
          <li>
            <h2>Lorem2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
          <li>
            <h2>Lorem3</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              maiores quisquam repellat cumque quos aliquam, eligendi pariatur
              neque, illo odit soluta voluptas inventore dolor ab numquam
              asperiores dolorum laborum harum.
            </p>
          </li>
        </ol>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
    div.image.hero {
      background: url("~/assets/images/Strand_uitgesneden.png") no-repeat fixed center;
      height: 300px;
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  data: () => ({}),

  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style lang="scss">
@use "styles/main";
</style>
