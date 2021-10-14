<template>
  <main>
    <div class="container">
      <h1>Stel een medische vraag aan {{ expertsData.name }}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta quod ratione rerum voluptatem quaerat perspiciatis cum illum animi doloribus.</p>
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
          <input id="submitInput" type="submit" value="Verstuur" @click='validateContactForm($event)'>
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
    // console.log(process.env.strapiAPI)
    const expertsData = await $axios.$get(`${process.env.strapiAPI}/experts/${params.expert}`)
    console.log(expertsData)
    return { expertsData }
  },
  data () {
    return {
      senderInfo: {
        name: 'Naam',
        email: 'email',
        phoneNumber: 'telefoonnummer',
        messageSubject: 'Subject',
        messageText: 'Message'
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
      console.log(this.senderInfo.phoneNumber.split('-'))
    },
    getUserInput () {
      console.log(this.senderInfo)
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
      grid-template-rows: fit-content(100px) 1fr;
      column-gap:40px;
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

        #submitInput {
          margin-top: 20px;
        }

        p.error-text {
          flex-basis: 100%;
        }

        // input.submitInput {
        //   margin-top: 100px;
        //   height: 100px;
        // }

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
            // margin-bottom:15px;
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
