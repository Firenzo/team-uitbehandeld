<template>
  <main>
    <div class="container">
      <h1>Stel je medische vraag</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta quod ratione rerum voluptatem quaerat perspiciatis cum illum animi doloribus.</p>
      <div class="ask-question-form">
        <form action="">
          <div class="label-and-input">
            <label for="">Naam:</label>
            <input type="text" placeholder="Naam">
          </div>

          <div class="label-and-input">
            <label for="">Email:</label>
            <input type="email" placeholder="voorbeeld@teamuitbehandeld.nl">
          </div>

          <div class="label-and-input">
            <label for="">Telefoonnummer:</label>
            <input type="tel" placeholder="06-12345678">
          </div>

          <div class="label-and-input">
            <label for="">Onderwerp:</label>
            <input type="text" placeholder="Onderwerp">
          </div>

          <div class="label-and-input">
            <label for="">Jouw bericht:</label>
            <textarea name="" id="" placeholder="type hier je bericht..."></textarea>
          </div>
          <input type="submit" value="Verstuur">
        </form>
      </div>
      <div class="image">
        <img src="~assets/images/Strand_HR.jpeg" alt="?">
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
    display:grid;

    @include min-1000{
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: fit-content(100px) 1fr;
      column-gap:40px;
    }

    h1{

    }

    >p{
      max-width:400px;

      @include min-1000{
        grid-row-start:2;
        max-width:530px;
      }
    }

    div.ask-question-form{

      @include min-1000{
        grid-row-start:3;
      }

      form{
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;
        margin-bottom:20px;

        div.label-and-input{
          flex-basis:100%;
          display:flex;
          flex-wrap:wrap;

          label{
            flex-basis:100%;
            margin-bottom:5px;
          }

          input, textarea{
            margin-bottom:15px;
            flex-basis:100%;
          }

          textarea{
            height:150px;
          }
        }
      }
    }
    div.image{
      margin-top:20px;

      @include min-1000{
        height:1px;
      }

      img{
        width:100%;
        display:block;
        max-width:400px;
        margin:auto;
        border-radius:5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);

        @include min-1000{
          margin:0;
          max-width:none;
        }
      }
    }
  }
}
</style>
