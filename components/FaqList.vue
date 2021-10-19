<template>
  <section class="questions-and-answers" v-if="subjectQuestionsDisplayed.length">
    <div class="container">
      <h2 v-if="subject">{{subject}}</h2>
      <ul :class="{grid: page !== 'faq'}">
        <li v-for="subjectQuestion in subjectQuestionsDisplayed" :key="subjectQuestion.id" class="faq">
          <h3>{{subjectQuestion.question}}</h3>
          <div v-html="$md.render(subjectQuestion.answer)" class="md-container"></div>
        </li>
      </ul>
      <NuxtLink v-if="showMoreLink" to="/hulpvraag/faq" class="standalone-link">Meer veelgestelde vragen<Fa-icon :icon="['fas', 'arrow-right']" /></NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 99
    },
    page: {
      type: String,
      default: 'faq'
    },
    subjectQuestions: Array,
    subject: String
  },

  computed: {
    subjectQuestionsDisplayed () {
      return this.subjectQuestions.slice(0, this.max)
    },
    showMoreLink () {
      return (this.subjectQuestions.length > this.max && this.page !== 'faq')
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
@use "styles/main" as *;
section.questions-and-answers{
  margin-top:50px;
  margin-bottom:50px;

  div.container{
    h2{
      margin-bottom:20px;
      font-size:38px;
      font-weight:400;
    }

    ul {
      list-style-type: none;
      &.grid {
        @include min-900 {
          display: grid;
          grid-template-columns: auto auto;
          gap: 2rem;

          li{
            margin-bottom:0;

            &.faq{
              @include min-900{
                margin-bottom:0;
              }
            }
          }
        }
      }
      li.faq{
        padding:20px;
        border: 1px solid $light-green;
        margin-bottom:40px;
        border-radius:3px;

        h3{
          font-size:22px;
          font-weight:400;
          margin-bottom:15px;
        }
      }
    }

    a.standalone-link{
      display:block;
      text-align:center;
      color:gray;
      margin-top:40px;

      svg{
        margin-left:7px;
      }
    }
  }
}
</style>
