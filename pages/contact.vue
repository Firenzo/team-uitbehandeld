<template>
  <main>
    <div class="container">
      <h1>Contact</h1>
      <div class="map-location">

      </div>

      <form action="">
        <input type="email" id="email" name="email" placeholder="Email" />
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

    div.map-location{
      background:gray;
      height:200px;
      width:100%;
      margin-bottom:20px;
    }

    form{
      display:flex;
      flex-wrap:wrap;

      input[type="email"],textarea{
        margin-bottom:15px;
      }

      >*{
        flex-basis:100%;
      }
    }
  }
}
</style>
