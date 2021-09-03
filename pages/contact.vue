<template>
  <main>
    <div class="container">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum itaque cumque commodi asperiores exercitationem magni quis nisi voluptas? Necessitatibus!</p>
      <div class="map-location"></div>

      <form action="">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label for="message">Jouw bericht:</label>
        <textarea id="subject" name="subject" placeholder="Type je bericht..."></textarea>
        <input type="submit" value="Verstuur" />
      </form>

      <div class="contact-info">
        <div class="contact-info-item email"></div>
        <div class="contact-info-item phone-number"></div>
        <div class="contact-info-item address"></div>
        <div class="contact-info-item twitter"></div>
        <div class="contact-info-item facebook"></div>
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
    max-width:550px;

    @include min-900{
      max-width:1200px;
      display:grid;
      column-gap:40px;
      row-gap:40px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 35px fit-content(2px) 1fr;
    }

    div.map-location{
      background:gray;
      height:300px;
      width:100%;
      margin-bottom:20px;

      @include min-900{
        grid-row-start: 2;
      }
    }

    form{
      display:flex;
      flex-wrap:wrap;
      flex-direction:column;
      grid-column-start:2;
      grid-row-start:2;

      label{
        margin-bottom:10px;
      }

      input[type="email"],textarea{
        margin-bottom:15px;
      }
    }
  }
}
</style>
