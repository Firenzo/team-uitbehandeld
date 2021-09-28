<template>
  <main>
    <div class="container">
      <h1>Bedankt dat je ons wilt steunen!</h1>
      <form action="">
        <div class="price">
          <label for="">Kies zelf een donatiebedrag:</label>
          <div class="inputfield-for-price">
            <Fa-icon :icon="['fas', 'euro-sign']" />
            <input type="text" v-model="donationAmountString" placeholder="Donatiebedrag" @keypress="checkNumber($event)" @input="adaptString()">
            <p v-if="donationAmount">{{donationAmount}}</p>
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
    donationAmountString: ''
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
    }
  }
}
</script>

<style lang="scss">
@use "styles/main";
</style>
