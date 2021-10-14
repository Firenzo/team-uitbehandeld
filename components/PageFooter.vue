<template>
  <footer>
    <div class="container">
      <div class="team-uitbehandeld">
        <div class="image footer-logo">
          <NuxtLink to="/">
          <img
            src="~/assets/images/teamuitbehandeld_logo.svg"
            alt="Team Uitbehandeld logo"
          />
          </NuxtLink>
        </div>
        <p>
          KvK: {{ contactInfo.kvk }}<br />
          BSIN / fiscaal: {{ contactInfo.bsin }}
        </p>
        <div class="image anbi-status">
       <NuxtLink to="/anbi-status">
          <img
            :src="contactInfo.anbi_logo ? `${$store.state.baseUrl}${contactInfo.anbi_logo.url}` : ''"
            alt="ANBI logo"
          />
      </NuxtLink>
        </div>
      </div>

      <div class="contact">
        <h2>Contact</h2>
        <div class="contact-info email">
          <Fa-icon :icon="['fas', 'envelope']" />
          <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
        </div>
        <div class="contact-info phone">
          <Fa-icon :icon="['fas', 'phone']" />
          <a href="#">{{ contactInfo.phoneNumber }}</a>
        </div>
        <!-- <div class="contact-info address">
          <Fa-icon :icon="['fas', 'map-marker-alt']" />
          <span>den Blieklaan 33<br />3766AP Soest</span>
        </div> -->
      </div>

      <div class="about">
        <h2>Over team uitbehandeld</h2>
        <ul>
          <!-- <li><NuxtLink to='/team'>Ons team</NuxtLink></li> -->
          <li><NuxtLink to="/wie-zijn-wij">Wie zijn wij?</NuxtLink></li>
          <li><NuxtLink to="/disclaimer">Disclaimer</NuxtLink></li>
          <li><NuxtLink to="/hulpvraag/faq">Veelgestelde vragen</NuxtLink></li>
        </ul>
        <NuxtLink to="/doneren" class="button">Doneer</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    contactInfo () {
      return this.$store.state.contactInfo
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@use 'styles/main' as *;

footer {
  padding: 20px 0;
  border-top: 1px solid $footer-border-color;
  color: $light-text-color;
  font-size: 14px;
  margin-top:50px;

  @include min-900 {
    padding: 0;
  }

  div.container {
    max-width: 400px;

    @include min-450 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    @include min-900 {
      flex-wrap: nowrap;
      max-width: 1200px;
      justify-content: flex-start;
    }

    > div {
      @include min-900 {
        margin-top: 40px;
      }
    }

    div > h2 {
      font-size: 16px;
      color: $light-text-color;
      font-weight: 600;
      margin-bottom: 7px;
    }

    div.team-uitbehandeld {
      margin-bottom: 20px;

      @include min-900 {
        flex-basis:25%;
        margin-right: 50px;
      }

      p {
        color: $light-text-color;
        line-height: 1.4em;
        margin-top: 10px;
        text-align: center;

        @include min-450{
          text-align:left;
        }
      }

      div.image {
        max-width: 250px;
        display: block;
        margin: auto;
        margin-bottom: 25px;
        cursor: pointer;
        text-align: center;

        &.anbi-status img{
          width: 80px;
          margin-top: 10px;
        }

        &.footer-logo img{
          margin-top: 10px;
        }

        @include min-900 {
          width: 220px;
          margin:0;
          margin-bottom:25px;
        }

        @include min-450 {
          text-align: left;
        }
      }
    }

    div.contact {
      margin-bottom: 20px;
      display:flex;
      flex-direction: column;
      align-items:center;

      @include min-450{
        display:block;
      }

      @include min-900 {
        padding-right: 25px;
        border-right: 1px solid $footer-border-color;
        flex-basis: calc(25% - 50px);
      }

      div.contact-info {
        display: flex;
        align-items: center;

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }

        > svg {
          color: $light-text-color;
          margin-right: 10px;
          width: 20px;
          height: 20px;
        }

        > a,
        > span {
          color: $light-text-color;
          text-decoration: none;
        }
      }
    }

    div.about {
      @include min-900 {
        margin-left: 25px;
      }

      h2{
        text-align: center;
      }

      a.button {
        width: 130px;
        padding: 20px 0;
        font-weight: 600;
        font-size: 16px;
        background-color: $cta-color;
        margin: 10px auto;

        @include min-450 {
          margin: 10px 0px;
        }
      }

      ul {
        li {
          list-style: none;
          text-align: center;

          @include min-450{
            text-align: left;
          }

          &:not(:last-of-type) {
            margin-bottom: 10px;
          }

          a {
            color: $light-text-color;
            text-decoration: none;
          }
        }
       }
      }
    }
  }

</style>
