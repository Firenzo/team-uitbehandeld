<template>
  <main>
    <div class="container">
      <h1>Contact</h1>
      <p class='headerText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend odio eu pretium mattis.
        Aenean id risus nec mauris efficitur maximus sit amet eget mi. Sed posuere sit amet arcu at tincidunt.
        Mauris nec libero a nunc hendrerit cursus. Morbi aliquam libero nec tristique egestas. Cras ornare odio dolor,
        eu interdum dolor sodales a. Sed id blandit tellus.
        Aenean congue nunc eget accumsan ornare. Sed ut massa dolor.</p>
      <form action="">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label for="message">Jouw bericht:</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Type je bericht..."
        ></textarea>
        <input type="submit" value="Verstuur" />
      </form>

      <div class="contact-info">
        <div class="contact-info-item email">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fas', 'envelope']" />
          </div>
          <p>Email</p>
          <a href="mailto:info@teamuitbehandeld.nl">info@teamuitbehandeld.nl</a>
        </div>
        <div class="contact-info-item phone-number">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fas', 'phone']" />
          </div>
          <p>Telefoonnr.</p>
          <a href="#">+012-3456789</a>
        </div>
        <div class="contact-info-item facebook">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'facebook-f']" />
          </div>
          <p>Facebook</p>
          <a href="#">@user_name</a>
        </div>
        <div class="contact-info-item twitter">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'instagram']" />
          </div>
          <p>Instagram</p>
          <a href="#">@user_name</a>
        </div>
        <div class="contact-info-item facebook">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'linkedin-in']" />
          </div>
          <p>LinkedIn</p>
          <a href="#">@user_name</a>
        </div>
      </div>
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
    width: 90%;
    margin: auto;

    h1{
      width: 90%;
      margin: 0 auto;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      margin-bottom: 20px;

      @include min-900 {
        max-width: 800px;
        width: 60%;
      }
    }

    p.headerText {
      width: 90%;
      margin: 0 auto;
      grid-row: 2 / 3;
      grid-column: 1 / 3;
      margin-bottom: 20px;

      @include min-900 {
        max-width: 800px;
        width: 60%;
     }
   }

    @include min-900 {
      margin-top: 50px;
      max-width: 1200px;
      display: grid;
      row-gap: 40px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 35px fit-content(2px) 1fr;
    }
    p {
      grid-row-start: 2;
    }

    form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 30px;

      @include min-900 {
      max-width: 800px;
      width: 60%;
      }

      label {
        margin-bottom: 10px;
      }

      input[type="email"],
      textarea {
        margin-bottom: 15px;
      }
    }
    div.contact-info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      @include min-900 {
        flex-direction: row;
        display: flex;
        text-align: center;
        grid-column: 1 / span 3;
      }

      div.contact-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        @include min-900 {
          flex-direction: column;
          align-items: center;
          text-align: center;
          display: flex;
        }
        div.contact-info-icon {
          width: 75px;
          height: 75px;
          background: lightgrey;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
        }
        a {
          text-decoration: none;
          color: $light-text-color;
          font-size: 14px;
          margin-top: 5px;
        }
      }
      svg {
        color: $light-text-color;
        @include min-900 {
          padding: 5px;
          width: 30px;
          height: 30px;
        }
      }
    }
    div.mapouter {
      height: 100%;
      width: 100%;
      div.gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 100%;
        width: 100%;
        iframe {
          height: 500px;
          width: 100%;
        }
      }
    }
  }
}
</style>
