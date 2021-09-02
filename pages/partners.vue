<template>
  <main>
    <div class="container">
      <h1>Partners</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, unde? Illum fugit atque architecto aperiam asperiores, molestiae excepturi doloribus odit nostrum consequatur accusantium laudantium ducimus, reprehenderit vel nobis velit, quaerat quod? Ab autem harum dignissimos consequuntur modi magnam numquam architecto, sint, neque magni perspiciatis beatae.</p>
      <div class="partners">
        <div class="image">
          <img src="~/assets/images/kanker.nl.jpg" alt="Logo van Kanker.nl">
        </div>
        <div class="image">
          <img src="~/assets/images/iknl.jpg" alt="Logo van IKNL">
        </div>
        <div class="image">
          <img src="~/assets/images/kwf-kankerbestrijding.jpg" alt="Logo van KWF Kankerbestrijding">
        </div>
        <div class="image">
          <img src="~/assets/images/nfk.jpg" alt="Logo van NFK">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main{
  div.container{
    >p{
      margin-bottom:40px;
      max-width:750px;
    }
    div.partners{
      display:flex;
      flex-wrap:wrap;
      flex-direction: row;
      max-width:285px;
      margin:auto;

      @include min-550{
        max-width:none;
      }

      div.image{
        border: 1px solid $light-green;

        @include min-550{
          flex-basis:50%;
          max-width:none;
        }

        @include min-700{
          flex-basis:25%;
        }
        img{
          display:block;
          width:100%;
          height:auto;
          // max-width:25%;
        }
      }
    }
  }
}
</style>
