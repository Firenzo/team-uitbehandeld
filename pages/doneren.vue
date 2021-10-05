<template>
  <main>
    <div class="container">
      <h1>Bedankt dat je ons wilt steunen!</h1>
      <div class="donation-information">
        <p>Alle online betalingen gaan via ideal. Mocht u het handmatig willen overmaken, dan kan dat ook direct op onze rekening.</p>
        <p>Rekeningnummer: NL00 RABO 0123 4567 89</p>
        <p>BIC: RABONL2U</p>
        <p>Ten name van Team Uitbehandeld</p>
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
              @keypress="checkNumber($event)"
              @input="adaptString()"
              @blur="fixString()"
              @paste.prevent
            >
          </div>
          <p v-if="donationAmount || payTransactionCosts ">{{donationAmount}} {{payTransactionCosts}}</p>
        </fieldset>

        <fieldset class="select-donation-amount">
          <label for="">Of kies een vaak gekozen bedrag:</label>
          <ul>
            <li v-for="(donationSelection, index) in donationSelections" :key="index" @click="setDonationAmount($event, donationSelections[index])">
              <button>€ {{donationSelections[index]}}</button>
            </li>
          </ul>
        </fieldset>

        <fieldset class="transaction-costs">
          <div class="pay-transaction-costs">
            <input
              v-model="payTransactionCosts"
              type="radio"
              name="pay_transaction_costs"
              id="pay_transaction_costs"
              value="true"
              checked
              @change="setTransactionCosts()"
            >
            <label for="pay_transaction_costs">Ik wil bijdragen aan de transactiekosten en betaal € 0,65 extra</label>
          </div>

          <div class="dont-pay-transaction-costs">
            <input
              v-model="payTransactionCosts"
              type="radio"
              name="pay_transaction_costs"
              id="dont_pay_transaction_costs"
              value="false"
              @change="setTransactionCosts()"
            >
            <label for="dont_pay_transaction_costs">Ik wil niet bijdragen aan de transactiekosten</label>
          </div>
        </fieldset>

        <div class="donateAs">
          <button @click="setContributor($event, true)" :class="donateAsPerson ? 'selected' : ''">Doneren als persoon</button>
          <button @click="setContributor($event, false)" :class="donateAsPerson ? '' : 'selected'">Doneren als bedrijf</button>
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
            >
          </div>

          <p v-if="invalidInput.companyEmail" class="error-text">Vul een geldig emailadres in.</p>
        </fieldset>

        <fieldset class="additional-preferences">
          <div class="label-and-checkbox">
            <input v-model="acceptTermsAndConditions" type="checkbox" name="accept-terms-and-conditions" id="accept-terms-and-conditions">
            <label for="accept-terms-and-conditions">Ik accepteer de Algemene voorwaarden.</label>
          </div>
          <p v-if="invalidInput.termsAndConditions" class="terms-and-conditions-error error-text">U dient akkoord te gaan met de algemene voorwaarden om verder te kunnen gaan!</p>
        </fieldset>
        <button type="submit" @click="validateForm($event)">Ga verder <Fa-icon :icon="['fas', 'chevron-right']"/></button>
        <!-- <input type="submit" value="Ga Verder" class="button" @click="validateForm($event)"> -->
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    donationAmount: '0',
    donationAmountString: '',
    donationSelections: [15, 25, 50, 100],
    payTransactionCosts: 'true',
    donateAsPerson: true,
    acceptTermsAndConditions: false,

    invalidInput: {
      firstName: false,
      lastName: false,
      companyName: false,
      personEmail: false,
      companyEmail: false,
      termsAndConditions: false
    },

    contributorInfo: {
      euros: 0,
      cents: 0,
      person: {
        firstName: 'Firenzo',
        lastName: 'Jorden',
        email: 'firenzo.jorden@capgemini.com'
      },
      company: {
        companyName: 'Team Uitbehandeld',
        email: 'info@teamuitbehandeld.nl'
      }
    }
  }),

  methods: {

    validateForm (event) {
      event.preventDefault()

      // get euro
      if (this.donationAmount.includes(',')) {
        console.log('euro:', this.donationAmount.substring(0, this.donationAmount.indexOf(',')))
      }

      // get cents
      if (this.donationAmount.includes(',')) {
        console.log('cents:', this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length))
      }

      if (this.donateAsPerson) {
        this.contributorInfo.person.firstName.match(/^[a-z'-]+$/i) ? this.invalidInput.firstName = false : this.invalidInput.firstName = true
        this.contributorInfo.person.lastName.match(/^[a-z'-\s]+$/i) ? this.invalidInput.lastName = false : this.invalidInput.lastName = true
        this.contributorInfo.person.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidInput.personEmail = false : this.invalidInput.personEmail = true
      }

      if (!this.donateAsPerson) {
        this.contributorInfo.company.companyName.match(/^[a-z'-\s]+$/i) ? this.invalidInput.companyName = false : this.invalidInput.companyName = true
        console.log(this.contributorInfo.company.companyName)
        this.contributorInfo.company.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) ? this.invalidInput.companyEmail = false : this.invalidInput.companyEmail = true
      }

      this.acceptTermsAndConditions ? this.invalidInput.termsAndConditions = false : this.invalidInput.termsAndConditions = true
      console.log(this.invalidInput)
      console.log(Object.values(this.invalidInput))

      if (Object.values(this.invalidInput).every((element, index) => element === false)) {
        console.log('form valid:', true)
        this.getUserInput()
      }
    },

    getUserInput () {
      console.log(this.contributorInfo)
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
      console.log(this.donateAsPerson)
    },

    setTransactionCosts () {
      if (this.payTransactionCosts === 'true') {
        console.log('+65')
      }

      if (this.payTransactionCosts === 'false') {
        console.log('-65')
      }
    },

    checkNumber (event) {
      if (isNaN(parseInt(event.key)) && event.key !== ',') {
        event.preventDefault()
        console.log(parseInt(event.key))
      }

      if (event.key === ',' && /[,-]/.test(this.donationAmountString)) {
        event.preventDefault()
      }

      console.log(this.donationAmountString.indexOf(','))
      console.log(this.donationAmountString.substring(0, this.donationAmountString.indexOf(',')).length)

      if (this.donationAmountString.includes(',')) {
        // code for when the string has a comma
        if (this.donationAmountString.substring(0, this.donationAmountString.indexOf(',')).length > 17 && event.key !== ',' && event.target.selectionEnd < this.donationAmountString.indexOf(',')) {
          console.log(event.target.selectionEnd)
          console.log(this.donationAmountString.indexOf(','))
          console.log('case 1')
          event.preventDefault()
        }

        if (this.donationAmountString.substring(this.donationAmountString.indexOf(','), this.donationAmountString.length - 1).length >= 2 && event.target.selectionEnd > this.donationAmountString.indexOf(',')) {
          console.log('case 2')
          console.log(this.donationAmountString.substring(this.donationAmountString.indexOf(','), this.donationAmountString.length))
          event.preventDefault()
        }
        // until here -----------------------------------------/
      }

      if (!this.donationAmountString.includes(',')) {
        // code for when the string has no comma
        if (this.donationAmountString.length > 17 && event.key !== ',') {
          event.preventDefault()
        }
        // until here
      }
    },

    fixString () {
      console.log('string fixed', this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length))
      if (this.donationAmount.includes(',')) {
        if (this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length).length === 1) {
          this.donationAmount = this.donationAmount.concat('0')
          console.log(this.donationAmount)
        }

        if (this.donationAmount.substring(this.donationAmount.indexOf(',') + 1, this.donationAmount.length).length === 0) {
          this.donationAmount = this.donationAmount.concat('00')
        }
      }

      if (!this.donationAmount.includes(',') && this.donationAmount.length >= 1) {
        console.log('no comma!!')
        this.donationAmount = this.donationAmount.concat(',00')
      }

      this.donationAmount = this.donationAmount.replace(/^0+/, '')
      this.donationAmountString = this.donationAmount.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

      if (this.donationAmountString === '') {
        this.donationAmount = '0'
      }

      console.log(this.donationAmountString)
    },

    adaptString () {
      if (this.donationAmountString === ',') {
        this.donationAmountString = '0,'
      }

      this.donationAmount = this.donationAmountString.replace(/\./g, '')
      this.donationAmountString = this.donationAmount.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      console.log('without seperators:', this.donationAmount)

      if (this.donationAmountString === '') {
        this.donationAmount = '0'
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
    div.donation-information{
      p{
        margin-bottom:10px;
      }
    }
    form{
      margin-top:50px;
      >fieldset{
        border: none;

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
        flex-wrap:wrap;
        margin-bottom:20px;

        label{
          flex-basis:100%;
          margin-bottom:10px;
        }

        div.inputfield-for-price{
          display:flex;
          border-radius:5px;

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
              width:100%;
              padding:20px;
            }
          }
        }
      }

      fieldset.transaction-costs{
        div.pay-transaction-costs{
          margin-bottom:10px;
        }
      }

      div.donateAs{
        margin-top:20px;
        margin-bottom:20px;
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
