<template>
  <section class="questions-and-answers">
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
        @include min-700 {
          display: grid;
          grid-template-columns: auto auto;
          gap: 2rem;
        }
      }
      li.faq{
        &:not(:last-of-type){
          margin-bottom:40px
        }
        h3{
          font-size:18px;
          font-weight:400;
        }
      }
    }

    a.standalone-link{
      display:block;
      text-align:center;
      color:gray;

      svg{
        margin-left:7px;
      }
    }
  }
}
</style>
