<template>
  <main>
    <div class="container">
      <h1>Bedankt dat je ons wilt steunen!</h1>
      <div class="donation-information">
        <p>Alle online betalingen gaan via ideal. Mocht u het handmatig willen overmaken, dan kan dat ook direct op onze rekening.</p>
        <p>Rekeningnummer: NL67 INGB 0009 0216 57</p>
        <p>BIC: RABONL2U</p>
        <p>Ten name van Firenzo Jorden</p>
      </div>
      <form action="">
        <div class="price">
          <label for="">Kies zelf een donatiebedrag:</label>
          <div class="inputfield-for-price">
            <div class="euro-sign">
              <Fa-icon :icon="['fas', 'euro-sign']" />
            </div>
            <input type="text" v-model="donationAmountString" placeholder="Donatiebedrag" @keypress="checkNumber($event)" @input="adaptString()">
          </div>
          <p v-if="donationAmount">{{donationAmount}}</p>
        </div>

        <div class="select-donation-amount">
          <label for="">Of kies een vaak gekozen bedrag:</label>
          <ul>
            <li v-for="(donationSelection, index) in donationSelections" :key="index" @click="setDonationAmount($event, donationSelections[index])">
              <button>€ {{donationSelections[index]}}</button>
            </li>
          </ul>
        </div>

        <div class="transaction-costs">
          <div class="pay-transaction-costs">
            <input type="radio" name="pay_transaction_costs" id="pay_transaction_costs">
            <label for="pay_transaction_costs">Ik wil bijdragen aan de transactiekosten en betaal € 0,65 extra</label>
          </div>

          <div class="dont-pay-transaction-costs">
            <input type="radio" name="pay_transaction_costs" id="dont_pay_transaction_costs">
            <label for="dont_pay_transaction_costs">Ik wil niet bijdragen aan de transactiekosten</label>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    donationAmount: null,
    donationAmountString: '',
    donationSelections: [15, 25, 50, 100]
  }),

  methods: {
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
      }

      if (!this.donationAmountString.includes(',')) {
        // code for when the string has no comma
        if (this.donationAmountString.length > 17 && event.key !== ',') {
          event.preventDefault()
        }
      }
    },

    adaptString () {
      if (this.donationAmountString === ',') {
        this.donationAmountString = '0,'
      }

      this.donationAmount = this.donationAmountString.replace(/\./g, '')
      this.donationAmountString = this.donationAmount.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      console.log('without seperators:', this.donationAmount)
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
    form{
      div.price{
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

      div.select-donation-amount{
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

      div.transaction-costs{
        div.pay-transaction-costs{
          margin-bottom:10px;
        }
      }
    }
  }
}

</style>
