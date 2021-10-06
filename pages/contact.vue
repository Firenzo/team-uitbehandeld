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
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
       :class="{invalid: invalidEmailClass}"
        v-model="userEmail"/>
        <p v-if="invalidEmailClass" class="error-text">Vul een geldig emailadres in</p>
        <label for="message">Jouw bericht:</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Type je bericht..."
         :class="{invalid: invalidTextClass}"
         v-model="userText"
        ></textarea>
        <p v-if="invalidTextClass" class="error-text">Schrijf uw bericht</p>
        <input type="submit" @click.prevent="validateContactForm($event)" value="Verstuur" />
      </form>

      <div class="contact-info">
        <div class="contact-info-item email">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fas', 'envelope']" />
          </div>
          <p>Email</p>
          <a href="mailto:info@teamuitbehandeld.nl">{{ contactInfo.email }}</a>
        </div>
        <div class="contact-info-item phone-number">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fas', 'phone']" />
          </div>
          <p>Telefoonnr.</p>
          <a href="#">{{ contactInfo.phoneNumber }}</a>
        </div>
        <div class="contact-info-item facebook">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'facebook-f']" />
          </div>
          <p>Facebook</p>
          <a href="#">{{ contactInfo.facebook }}</a>
        </div>
        <div class="contact-info-item twitter">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'instagram']" />
          </div>
          <p>Instagram</p>
          <a href="#">{{ contactInfo.instagram }}</a>
        </div>
        <div class="contact-info-item facebook">
          <div class="contact-info-icon">
            <Fa-icon :icon="['fab', 'linkedin-in']" />
          </div>
          <p>LinkedIn</p>
          <a href="#">{{ contactInfo.linkedin }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const contactInfo = await $axios.$get(`${process.env.strapiAPI}/contact-info`)
    console.log(contactInfo)
    return { contactInfo }
  },
  data () {
    return {
      userText: '',
      userEmail: '',
      invalidEmailClass: false,
      invalidTextClass: false
    }
  },
  methods: {
    validateContactForm (event) {
      event.preventDefault()
      this.userText.length >= 10 ? this.invalidTextClass = false : this.invalidTextClass = true
      this.userEmail.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidEmailClass = false : this.invalidEmailClass = true
      if (this.invalidEmailClass === false && this.invalidTextClass === false) {
        this.getUserMessage()
      }
    },
    getUserMessage () {
      console.log(this.userText, this.userEmail)
    }
  }
}
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

      @include min-550{
        flex-direction: row;
        flex-wrap: wrap;
      }

      @include min-900 {
        flex-wrap: nowrap;
        text-align: center;
        justify-content: space-between;
      }

      div.contact-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        @include min-550{
          flex-basis: 50%;
        }

        @include min-900 {
          text-align: center;
          flex-basis: auto;
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
  }
}
</style>
