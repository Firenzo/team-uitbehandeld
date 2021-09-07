<template>
  <main>
    <div class="container">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum
        itaque cumque commodi asperiores exercitationem magni quis nisi
        voluptas? Necessitatibus!
      </p>
      <div class="map-location"></div>

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
        <div class="contact-info-item address">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fas', 'map-marker-alt']" />
          </div>
          <p>Straatnaam</p>
          <span>Straatnaam 780</span>
        </div>
        <div class="contact-info-item twitter">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'twitter']" />
          </div>
          <p>Twitter</p>
          <a href="#">@user_name</a>
        </div>
        <div class="contact-info-item facebook">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'facebook-f']" />
          </div>
          <p>Facebook</p>
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
    max-width: 550px;

    @include min-900 {
      max-width: 1200px;
      display: grid;
      column-gap: 40px;
      row-gap: 40px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 35px fit-content(2px) 1fr;
    }
    p{
      grid-row-start: 2;
    }

    div.map-location {
      background: gray;
      height: 300px;
      width: 100%;
      margin-bottom: 20px;
      grid-row-start: 3;

      @include min-900 {
        grid-row-start: 3;
      }
    }

    form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      grid-column-start: 2;
      grid-row-start: 3;

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
      grid-column: 1 / span 3;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      @include min-600 {
        flex-direction: row;
        display: flex;
        text-align: center;
      }

      div.contact-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        @include min-600 {
          flex-direction: column;
          align-items: center;
          text-align: center;
          display: flex;
        }
        div.contact-info-icon {
          width: 50px;
          height: 50px;
          background: lightgrey;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a{
          text-decoration: none;
          color: black;
        }
      }
      svg {
        color: $light-text-color;

        @include min-600 {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>
