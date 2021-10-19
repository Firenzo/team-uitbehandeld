<template>
  <main>
    <div class="container">
      <h1>Contact</h1>
      <div v-html="$md.render(contactInfo.content)" class="md-container"></div>
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
        <button type="submit" @click.prevent="validateContactForm($event)">Verstuur</button>
      </form>
    </div>

    <div class="contact-info">
      <div v-if="contactInfo.email" class="contact-info-item email">

        <div class="contact-info-icon">
          <Fa-icon :icon="['fas', 'envelope']" />
        </div>
        <p>Email</p>
        <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
      </div>

      <div v-if="contactInfo.phoneNumber" class="contact-info-item phone-number">
        <div class="contact-info-icon">
          <Fa-icon :icon="['fas', 'phone']" />
        </div>
        <p>Telefoonnr.</p>
        <a :href="`tel:${contactInfo.phoneNumber}`">{{ contactInfo.phoneNumber }}</a>
      </div>

      <div v-if="contactInfo.facebook" class="contact-info-item facebook">
        <div class="contact-info-icon">
          <Fa-icon :icon="['fab', 'facebook-f']" />
        </div>
        <p>Facebook</p>
        <a v-if="contactInfo.facebook_link" :href="contactInfo.facebook_link" target="_blank">{{ contactInfo.facebook }}</a>
        <p v-else class="link-replacement">{{ contactInfo.facebook }}</p>
      </div>

      <div v-if="contactInfo.instagram" class="contact-info-item instagram">
        <div class="contact-info-icon">
          <Fa-icon :icon="['fab', 'instagram']" />
        </div>
        <p>Instagram</p>
        <a v-if="contactInfo.instagram_link" :href="contactInfo.instagram_link" target="_blank">{{ contactInfo.instagram }}</a>
        <p v-else class="link-replacement">{{ contactInfo.instagram }}</p>
      </div>

      <div v-if="contactInfo.linkedin" class="contact-info-item linkedin">
        <div class="contact-info-icon">
          <Fa-icon :icon="['fab', 'linkedin-in']" />
        </div>
        <p>LinkedIn</p>
        <a v-if="contactInfo.linkedin_link" :href="contactInfo.linkedin_link" target="_blank">{{ contactInfo.linkedin }}</a>
        <p v-else class="link-replacement">{{ contactInfo.linkedin }}</p>
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

  computed: {

  },

  methods: {
    validateContactForm (event) {
      event.preventDefault()
      this.userText.length >= 10 ? this.invalidTextClass = false : this.invalidTextClass = true
      this.userEmail.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidEmailClass = false : this.invalidEmailClass = true
      if (this.invalidEmailClass === false && this.invalidTextClass === false) {
        // form is valid, send data to server-side function
        // const sendMail = await $axios.$post(`${process.env.serverAPI}/sendMail`, this.senderInfo)
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
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
    max-width:800px;

    div.md-container{
      margin-bottom:30px;
    }

    h1{
      margin: 0 auto;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
      margin-bottom: 20px;
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
      margin: 0 auto;
      margin-bottom: 30px;

      label {
        margin-bottom: 10px;
      }

      input[type="email"],
      textarea {
        margin-bottom: 15px;
      }
    }
  }

  div.contact-info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width:90%;
    max-width:1200px;
    margin:auto;
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

      p.link-replacement{
        text-decoration: none;
        color: $light-text-color;
        font-size: 14px;
        margin-top: 5px;
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
</style>
