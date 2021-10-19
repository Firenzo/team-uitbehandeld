<template>
  <main>
    <div class="container">
      <div class="content">
      <h1>Bedankt dat je ons wilt steunen!</h1>
      <div v-html="$md.render(donate.content)" class="md-container donation-information">
      </div>
    </div>
      <form action="">
        <fieldset class="price">
          <label for="">Kies zelf een donatiebedrag:</label>
          <div class="inputfield-for-price">
            <div class="euro-sign">
              <Fa-icon :icon="['fas', 'euro-sign']" />
            </div>
            <input
              type="text"
              v-model="donationAmountString"
              placeholder="Donatiebedrag"
              :class="{invalid: invalidInput.euros}"
              :disabled="loading"
              @keypress="checkNumber($event)"
              @input="adaptString()"
              @blur="fixString()"
              @paste.prevent
            >
          </div>
          <p v-if="invalidInput.euros" class="error-text">Vul een bedrag van minimaal {{`€${minimumDonationAmountInEuros},00`}} in.</p>
        </fieldset>

        <fieldset class="select-donation-amount">
          <label for="">Of kies een vaak gekozen bedrag:</label>
          <ul>
            <li v-for="(donationSelection, index) in donationSelections" :key="index" @click="setDonationAmount($event, donationSelections[index])">
              <button :disabled="loading">€ {{donationSelections[index]}}</button>
            </li>
          </ul>
        </fieldset>

        <fieldset class="transaction-costs">
          <div class="radio-option pay-transaction-costs">
            <input
              v-model="payTransactionCosts"
              type="radio"
              name="pay_transaction_costs"
              id="pay_transaction_costs"
              value="true"
              checked
              :disabled="loading"
            >
            <label for="pay_transaction_costs">Ik wil bijdragen aan de transactiekosten en betaal {{`€${transactionCosts.euros},${transactionCosts.cents}`}} extra</label>
          </div>

          <div class="radio-option dont-pay-transaction-costs">
            <input
              v-model="payTransactionCosts"
              type="radio"
              name="pay_transaction_costs"
              id="dont_pay_transaction_costs"
              value="false"
              :disabled="loading"
            >
            <label for="dont_pay_transaction_costs">Ik wil niet bijdragen aan de transactiekosten</label>
          </div>
        </fieldset>

        <div class="donateAs">
          <button @click="setContributor($event, true)" :class="donateAsPerson ? 'selected' : ''" :disabled="loading">Doneren als persoon</button>
          <button @click="setContributor($event, false)" :class="donateAsPerson ? '' : 'selected'" :disabled="loading">Doneren als bedrijf</button>
        </div>

        <fieldset v-if="donateAsPerson" class="contributor-info">
          <div class="label-and-input firstName">
            <label for="naam">Voornaam:</label>
            <input
              v-model="contributorInfo.person.firstName"
              type="text"
              name="naam"
              id="naam"
              placeholder="Typ hier je voornaam"
              :class="{invalid: invalidInput.firstName}"
              :disabled="loading"
            >
          </div>

          <p v-if="invalidInput.firstName" class="error-text">Vul een voornaam in.</p>

          <div class="label-and-input lastName">
            <label for="achternaam">Achternaam:</label>
            <input
              v-model="contributorInfo.person.lastName"
              type="text"
              name="achternaam"
              id="achternaam"
              placeholder="Typ hier je achternaam"
              :class="{invalid: invalidInput.lastName}"
              :disabled="loading"
            >
          </div>

          <p v-if="invalidInput.lastName" class="error-text">Vul een achternaam in.</p>

          <div class="label-and-input email">
            <label for="email">E-mailadres:</label>
            <input
              v-model="contributorInfo.person.email"
              type="email"
              name="email"
              id="email"
              placeholder="voorbeed@team-uitbehandeld.nl"
              :class="{invalid: invalidInput.personEmail}"
              :disabled="loading"
            >
          </div>
          <p v-if="invalidInput.personEmail" class="error-text">Vul een geldig emailadres in.</p>
        </fieldset>

        <fieldset v-else class="contributor-info">
          <div class="label-and-input companyName">
            <label for="bedrijfsnaam">Bedrijfsnaam:</label>
            <input
              v-model="contributorInfo.company.companyName"
              type="text"
              name="bedrijfsnaam"
              id="bedrijfsnaam"
              placeholder="Typ hier je bedrijfsnaam"
              :class="{invalid: invalidInput.companyName}"
              :disabled="loading"
            >
          </div>

          <p v-if="invalidInput.companyName" class="error-text">Vul een bedrijfsnaam in.</p>

          <div class="label-and-input email">
            <label for="email">E-mailadres:</label>
            <input
              v-model="contributorInfo.company.email"
              type="email"
              name="email"
              id="email"
              placeholder="voorbeed@team-uitbehandeld.nl"
              :class="{invalid: invalidInput.companyEmail}"
              :disabled="loading"
            >
          </div>

          <p v-if="invalidInput.companyEmail" class="error-text">Vul een geldig emailadres in.</p>
        </fieldset>

        <fieldset class="additional-preferences">
          <div class="label-and-checkbox">
            <input v-model="acceptTermsAndConditions" type="checkbox" name="accept-terms-and-conditions" id="accept-terms-and-conditions" :disabled="loading">
            <label for="accept-terms-and-conditions">Ik accepteer de Algemene voorwaarden.</label>
          </div>
          <p v-if="invalidInput.termsAndConditions" class="terms-and-conditions-error error-text">U dient akkoord te gaan met de algemene voorwaarden om verder te kunnen gaan!</p>
        </fieldset>
        <button type="submit" :disabled="loading" @click="submitPaymentForm($event)">
          Ga verder
          <Fa-icon v-if="!loading" :icon="['fas', 'chevron-right']" />
          <span v-else>...</span>
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const donate = await $axios.$get(`${process.env.strapiAPI}/donate`)
    return { donate }
  },

  data: () => ({
    minimumDonationAmountInEuros: 5,
    donationSelections: [15, 25, 50, 100],
    transactionCosts: {
      euros: 0,
      cents: 30
    },

    donationAmount: '0,00',
    donationAmountString: '',

    payTransactionCosts: 'true',
    donateAsPerson: true,
    acceptTermsAndConditions: false,

    invalidInput: {
      firstName: false,
      lastName: false,
      companyName: false,
      personEmail: false,
      companyEmail: false,
      termsAndConditions: false,
      euros: false
    },

    contributorInfo: {
      euros: 0,
      cents: 0,
      person: {
        firstName: '',
        lastName: '',
        email: ''
      },
      company: {
        companyName: '',
        email: ''
      }
    },
    loading: false
  }),

  methods: {
    submitPaymentForm (e) {
      const valid = this.validateForm(e)
      e.preventDefault()
      if (valid) {
        this.loading = true
        this.sendPaymentRequest()
      }
    },
    sendPaymentRequest () {
      // form is valid, send data to server-side function
      // const sendMail = await $axios.$post(`${process.env.serverAPI}/donation`, this.contributorInfo)
      // .then(function (response) {
      //   console.log(response);
      //    this.loading = false
      // })
      // .catch(function (error) {
      //   console.log(error);
      //    this.loading = false
      // });
    },
    validateForm (event) {
      event.preventDefault()

      // get euro
      if (this.donationAmount.includes(',')) {
        this.contributorInfo.euros = parseInt(this.donationAmount.substring(0, this.donationAmount.indexOf(',')))
      }

      // get cents
      if (this.donationAmount.includes(',')) {
        this.contributorInfo.cents = parseInt(this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length))

        if (this.payTransactionCosts === 'true') {
          this.contributorInfo.euros += this.transactionCosts.euros
          this.contributorInfo.cents += this.transactionCosts.cents

          if (this.contributorInfo.cents >= 100) {
            this.contributorInfo.euros += 1
            this.contributorInfo.cents -= 100
          }
        }
      }

      // check for errors in input fields
      if (this.donateAsPerson) {
        this.contributorInfo.person.firstName.match(/^[a-z'-\s]+$/i) ? this.invalidInput.firstName = false : this.invalidInput.firstName = true
        this.contributorInfo.person.lastName.match(/^[a-z'-\s]+$/i) ? this.invalidInput.lastName = false : this.invalidInput.lastName = true
        this.contributorInfo.person.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidInput.personEmail = false : this.invalidInput.personEmail = true
      }

      if (!this.donateAsPerson) {
        this.contributorInfo.company.companyName.match(/^[a-z'-\s]+$/i) ? this.invalidInput.companyName = false : this.invalidInput.companyName = true
        this.contributorInfo.company.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidInput.companyEmail = false : this.invalidInput.companyEmail = true
      }

      // check if the donation amount is higher than the minimum donation amount in euros
      if (this.payTransactionCosts === 'true') {
        if (this.contributorInfo.euros === this.minimumDonationAmountInEuros && this.contributorInfo.cents >= this.transactionCosts.cents) {
          this.invalidInput.euros = false
        } else if (this.contributorInfo.euros === this.minimumDonationAmountInEuros && this.contributorInfo.cents < this.transactionCosts.cents) {
          this.invalidInput.euros = true
        } else if (this.contributorInfo.euros > this.minimumDonationAmountInEuros) {
          this.invalidInput.euros = false
        } else if (this.contributorInfo.euros < this.minimumDonationAmountInEuros) {
          this.invalidInput.euros = true
        }
      }

      if (this.payTransactionCosts === 'false') {
        this.contributorInfo.euros >= this.minimumDonationAmountInEuros ? this.invalidInput.euros = false : this.invalidInput.euros = true
      }

      // check if the user has accepted the terms and conditions
      this.acceptTermsAndConditions ? this.invalidInput.termsAndConditions = false : this.invalidInput.termsAndConditions = true

      // check if there are no error's and proceed with the payment
      if (Object.values(this.invalidInput).every((element, index) => element === false)) {
        return true
      }
      return false
    },

    setContributor (event, val) {
      event.preventDefault()

      if (val === true) {
        this.invalidInput.companyName = false
        this.invalidInput.companyEmail = false
      }

      if (val === true) {
        this.invalidInput.firstName = false
        this.invalidInput.lastName = false
        this.invalidInput.personEmail = false
      }

      this.donateAsPerson = val
    },

    checkNumber (event) {
      if (isNaN(parseInt(event.key)) && event.key !== ',') {
        event.preventDefault()
      }

      if (event.key === ',' && /[,-]/.test(this.donationAmountString)) {
        event.preventDefault()
      }

      if (this.donationAmountString.includes(',')) {
        // code for when the string has a comma
        if (this.donationAmountString.substring(0, this.donationAmountString.indexOf(',')).length > 17 && event.key !== ',' && event.target.selectionEnd < this.donationAmountString.indexOf(',')) {
          event.preventDefault()
        }

        if (this.donationAmountString.substring(this.donationAmountString.indexOf(','), this.donationAmountString.length - 1).length >= 2 && event.target.selectionEnd > this.donationAmountString.indexOf(',')) {
          event.preventDefault()
        }
        // until here -----------------------------------------/
      }

      if (!this.donationAmountString.includes(',')) {
        // code for when the string has no comma
        if (this.donationAmountString.length > 17 && event.key !== ',') {
          event.preventDefault()
        }
        // until here -----------------------------------------/
      }
    },

    fixString () {
      if (this.donationAmount.includes(',')) {
        if (this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length).length === 1) {
          this.donationAmount = this.donationAmount.concat('0')
        }

        if (this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length).length === 0) {
          this.donationAmount = this.donationAmount.concat('00')
        }
      }

      if (!this.donationAmount.includes(',') && this.donationAmount.length >= 1) {
        if (this.donationAmountString !== '') {
          this.donationAmount = this.donationAmount.concat(',00')
        }
      }

      // if string has "0," at the beginning /// if string has 1 or more 0's followed by a number between 1 and 9 at the beginning
      if (this.donationAmount.match(/^0+,/)) {
        this.donationAmount = this.donationAmount.replace(/^0+/, '0')
      } else if (this.donationAmount.match(/^0+[1-9]+,?/)) {
        this.donationAmount = this.donationAmount.replace(/^0+/, '')
      }

      // if string starts with a comma
      if (this.donationAmountString.match(/^,/)) {
        this.donationAmount = this.donationAmount.replace(',', '0,')
      }

      this.donationAmountString = this.donationAmount.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

      if (this.donationAmountString === '') {
        this.donationAmount = '0,00'
      }
    },

    adaptString () {
      if (this.donationAmountString === ',') {
        this.donationAmountString = '0,'
      }

      this.donationAmount = this.donationAmountString.replace(/\./g, '')
      this.donationAmountString = this.donationAmount.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

      if (this.donationAmountString === '') {
        this.donationAmount = '0,00'
      }
    },

    setDonationAmount (event, amount) {
      event.preventDefault()
      this.donationAmountString = `${amount},00`
      this.donationAmount = `${amount},00`
    }
  }
}
</script>

<style scoped lang="scss">
@use "styles/main" as *;

main{
  div.container{
    max-width:850px;

    div.donation-information{
      p{
        margin-bottom:10px;
      }
    }
    form{
      margin-top:50px;
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
      >fieldset{
        border: none;
        flex-basis:100%;

        >div.label-and-input{
          display:flex;
          flex-wrap:wrap;
          margin-bottom:10px;

          label{
            flex-basis:100%;
            margin-bottom:5px;
          }

          input{
            flex-basis:100%;
          }
        }
      }

      fieldset.price{
        display:flex;
        flex-direction: column;
        margin-bottom:20px;

        @include min-700 {
          flex-basis:calc(50% - 10px);
        }

        label{
          margin-bottom:10px;
        }

        div.inputfield-for-price{
          display:flex;
          border-radius:5px;
          width:100%;

          input[type="text"]{
            border-radius: 0 5px 5px 0;
            width: calc(100% - 50px);
            font-size:18px;
            padding:14px 10px;

            &::placeholder{
              font-style: italic;
              font-size: 14px;
            }
          }

          div.euro-sign{
            background: $light-green;
            width:50px;
            border-radius:5px 0 0 5px;
            display:flex;
            justify-content: center;
            align-items: center;

            svg{
              color:white;
              font-size:23px;
            }
          }
        }
      }

      fieldset.select-donation-amount{
        display:flex;
        flex-wrap:wrap;

        @include min-700 {
          flex-basis:calc(50% - 10px);
        }

        label{
          flex-basis:100%;
          margin-bottom:10px;
        }
        ul{
          flex-basis:100%;
          display:flex;
          flex-wrap:wrap;
          justify-content: space-between;

          li{
            list-style:none;
            flex-basis: calc(50% - 10px);
            margin-bottom:10px;

            button{
              font-size:16px;
              width:100%;
              padding:20px;
              font-weight: 600;
            }
          }
        }
      }

      fieldset.transaction-costs{
        margin-top:20px;
        margin-bottom:20px;

        div.radio-option{
          &:first-of-type {
            margin-bottom:15px;
          }
          display:flex;
          align-items: center;

          input[type="radio"] {
            margin-right:8px;
          }
        }
      }

      div.donateAs{
        margin-top:20px;
        margin-bottom:20px;
        flex-basis:100%;
        width:100%;
        display:flex;
        justify-content: space-between;

        button{
          background:transparent;
          color:black;
          font-weight:600;
          padding:15px 5px;
          border: 2px solid $light-green;
          flex-basis: calc(50% - 5px);

          &.selected{
            background:rgba(156, 190, 47, 0.2);
          }

          &:focus{
            text-decoration: none;
          }
        }
      }

      fieldset.additional-preferences{

        div.label-and-checkbox{
          display:flex;
          align-items: center;
          margin-top:20px;
          margin-bottom:10px;

          input[type="checkbox"]{
            height:20px;
            width:20px;
            margin-right:10px;
          }
        }
      }

      button[type="submit"]{
        margin-top:10px;
      }
    }
  }
}

</style>
