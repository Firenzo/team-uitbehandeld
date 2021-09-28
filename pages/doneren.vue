<template>
  <main>
    <div class="container">
      <h1>Bedankt dat je ons wilt steunen!</h1>
      <form action="">
        <div class="price">
          <label for="">Kies zelf een donatiebedrag:</label>
          <div class="inputfield-for-price">
            <Fa-icon :icon="['fas', 'euro-sign']" />
            <input type="text" v-model="donationAmount" placeholder="Donatiebedrag" @keypress="checkNumber($event)" @input="adaptString()">
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
    donationAmount: null
  }),

  methods: {
    checkNumber (event) {
      if (isNaN(parseInt(event.key)) && event.key !== ',') {
        event.preventDefault()
        console.log(parseInt(event.key))
      }

      if (event.key === ',' && /[,-]/.test(this.donationAmount)) {
        event.preventDefault()
      }
    },

    adaptString () {
      if (this.donationAmount === ',') {
        this.donationAmount = '0,'
      }
    }
  }
}
</script>

<style lang="scss">
@use "styles/main";
</style>
