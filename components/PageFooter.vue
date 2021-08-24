<template>
  <footer>
    <div class="container">
      <div class="team-uitbehandeld">
        <div class="image">
          <img
            src="~/assets/images/teamuitbehandeld_logo.svg"
            alt="Team Uitbehandeld logo"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          incidunt quibusdam temporibus. Ab totam perferendis impedit dolores
          minus beatae incidunt ipsam! Necessitatibus, sapiente voluptatibus.
        </p>
      </div>

      <div class="contact">
        <h2>Contact</h2>
        <div class="contact-info email">
          <Fa-icon :icon="['fas', 'envelope']" />
          <a href="mailto:info@teamuitbehandeld.nl">info@teamuitbehandeld.nl</a>
        </div>
        <div class="contact-info phone">
          <Fa-icon :icon="['fas', 'phone']" />
          <a href="#">06 - 1234 56 78</a>
        </div>
        <div class="contact-info address">
          <Fa-icon :icon="['fas', 'map-marker-alt']" />
          <span>den Blieklaan 33<br />3766AP Soest</span>
        </div>
      </div>

      <div class="about">
        <h2>Over team uitbehandeld</h2>
        <ul>
          <li><a href="#">Ons team</a></li>
          <li><a href="#">Pers</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

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
        flex-basis: 320px;
        margin-right: 50px;
      }

      p {
        color: $light-text-color;
        line-height: 1.4em;
        margin-top: 10px;
      }

      div.image {
        max-width: 250px;
        display: block;
        margin: auto;
        margin-bottom: 25px;

        @include min-900 {
          width: 220px;
        }
      }
    }

    div.contact {
      margin-bottom: 20px;

      @include min-900 {
        padding-right: 25px;
        border-right: 1px solid $footer-border-color;
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
      ul {
        li {
          list-style: none;

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
