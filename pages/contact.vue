<template>
  <main>
    <div class="container">
      <div class="map-location">

      </div>

      <form action="">
        <input type="text" id="email" name="email" placeholder="Email" />
        <textarea id="subject" name="subject" placeholder="Type je bericht..."></textarea>
        <input type="submit" value="Submit" />
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
    div.map-location{
      background:gray;
      height:200px;
      width:100%;
    }

    form{
      display:flex;
      flex-wrap:wrap;

      >*{
        flex-basis:100%;
      }
    }
  }
}
</style>
