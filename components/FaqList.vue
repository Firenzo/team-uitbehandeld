<template>
  <section class="questions-and-answers">
    <div class="container">
      <h2>{{subject}}</h2>
      <div v-for="subjectQuestion in subjectQuestions" :key="subjectQuestion.id" class="faq">
        <h3>{{subjectQuestion.question}}?</h3>
        <p>{{subjectQuestion.answer}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['subjectQuestions', 'subject'],

  computed: {

  },
  mounted () {

  }
}
</script>

<style lang="scss">
@use "styles/main" as *;
section.questions-and-answers{
  margin-top:50px;
  div.container{
    h2{
      margin-bottom:20px;
      font-size:38px;
      font-weight:400;
    }

    div.faq{
      &:not(:last-of-type){
        margin-bottom:40px
      }
      h3{
        font-size:18px;
        font-weight:400;
      }
    }
  }
}
</style>
