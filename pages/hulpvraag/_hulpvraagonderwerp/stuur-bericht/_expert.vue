<template>
  <main>
    <div class="container">
      <h1>Stel een medische vraag aan {{ expertsData.name }}</h1>
      <div class="ask-question-form">
        <form action="">
          <div class="label-and-input">
            <label for="">Naam:</label>
            <input
            v-model="senderInfo.name"
            type="text"
            name="name"
            placeholder="Typ hier je voornaam"
            :class="{invalid: invalidInput.name}"
            >
          </div>
          <p v-if="invalidInput.name" class="error-text">Vul je naam in</p>

          <div class="label-and-input">
            <label for="">Email:</label>
            <input
            type="email"
            v-model="senderInfo.email"
            name="name"
            placeholder="voorbeeld@teamuitbehandeld.nl"
            :class="{invalid: invalidInput.email}"
            >
          </div>
           <p v-if="invalidInput.email" class="error-text">Vul je email in</p>

          <div class="label-and-input">
            <label for="">Telefoonnummer:</label>
            <input
            type="tel"
            v-model="senderInfo.phoneNumber"
            placeholder="06-12345678"
            :class="{invalid: invalidInput.phoneNumber}"
            >
          </div>
          <p v-if="invalidInput.phoneNumber" class="error-text">Vul je telefoonnummer in</p>

          <div class="label-and-input">
            <label for="">Onderwerp:</label>
            <input
            type="text"
            v-model="senderInfo.messageSubject"
            name="subject"
            placeholder="Onderwerp"
            :class="{invalid: invalidInput.messageSubject}"
            >
          </div>
          <p v-if="invalidInput.messageSubject" class="error-text">Vul jouw onderwerp in</p>

          <div class="label-and-input">
            <label for="">Jouw bericht:</label>
            <textarea
            name=""
            id=""
            v-model="senderInfo.messageText"
            placeholder="type hier je bericht..."
            :class="{invalid: invalidInput.messageText}"
            ></textarea>
          </div>
          <p v-if="invalidInput.messageText" class="error-text">Vul jouw bericht in</p>
          <button id="submitInput" type="submit" @click='validateContactForm($event)'>Verstuur</button>
        </form>
      </div>
      <div class="image">
        <img :src="`${$store.state.baseUrl}${expertsData.photo.url}`"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const expertsData = await $axios.$get(`${process.env.strapiAPI}/experts/${params.expert}`)
    return { expertsData }
  },
  data () {
    return {
      senderInfo: {
        name: '',
        email: '',
        phoneNumber: '',
        messageSubject: '',
        messageText: ''
      },
      invalidInput: {
        name: false,
        email: false,
        phoneNumber: false,
        messageSubject: false,
        messageText: false
      }
    }
  },
  methods: {
    validateContactForm (event) {
      event.preventDefault()
      this.senderInfo.name.match(/^[a-z'-\s]+$/i) ? this.invalidInput.name = false : this.invalidInput.name = true
      this.senderInfo.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidInput.email = false : this.invalidInput.email = true
      this.senderInfo.phoneNumber.match(/(^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$)/i) ? this.invalidInput.phoneNumber = false : this.invalidInput.phoneNumber = true
      this.senderInfo.messageSubject.match(/^[a-z'-\s]+$/i) ? this.invalidInput.messageSubject = false : this.invalidInput.messageSubject = true
      this.senderInfo.messageText.length > 10 ? this.invalidInput.messageText = false : this.invalidInput.messageText = true
      if (Object.values(this.invalidInput).every(element => element === false)) {
        // form is valid, send data to server-side function
        // const sendMail = await $axios.$post(`${process.env.serverAPI}/sendMail`, this.senderInfo)
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      }
      this.trimPhoneNumber()
    },
    trimPhoneNumber () {
    },
    getUserInput () {
    }
  }
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
      grid-template-rows: fit-content(100px) 1fr 1fr;
      column-gap:40px;
    }

    >h1{
      margin-bottom: 0;
    }

    div.ask-question-form{

      @include min-1000{
        grid-row-start:2;
      }

      form{
        display:flex;
        flex-wrap:wrap;
        margin-bottom:20px;

        #submitInput {
          margin-top: 20px;
        }

        p.error-text {
          flex-basis: 100%;
        }

        div.label-and-input{
          flex-basis:100%;
          display:flex;
          flex-wrap:wrap;

          label{
            flex-basis:100%;
            margin-bottom:5px;
            margin-top: 25px;
          }

          input, textarea{
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
        grid-row-start: 2;
        margin-top:0;
      }

      img{
        width:100%;
        display:block;
        max-width:400px;
        margin:auto;
        border-radius:5px;
        box-shadow: 0 0 7px rgba(0,0,0,0.25);

        @include min-1000{
          margin:0;
          max-width:none;
        }
      }
    }
  }
}
</style>
