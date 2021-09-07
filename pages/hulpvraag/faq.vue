<template>
  <main>
    <section class="subjects">
      <div class="container">
        <h1>Veelgestelde vragen</h1>
      </div>
      <ul>
        <li v-for="(subject, index) in subjects" :key="subject.id" @click="getIndex(index)" :class="{selected: index===indexNumber}"><button>{{subject.title}}</button></li>
      </ul>
    </section>
    <FaqList :subjectQuestions="subjectQuestions" :subject="subjects[indexNumber].title" />
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const subjects = await $axios.$get('http://localhost:1338/subjects')
    return { subjects }
  },

  data: () => ({
    indexNumber: 0
  }),

  computed: {
    subjectQuestions () {
      return this.subjects[this.indexNumber].subject_questions
    }
  },

  methods: {
    getIndex (i) {
      this.indexNumber = i
    }
  },

  mounted () {
    console.log(this.subjects)
    console.log(this.subjectQuestions)
  }
}
</script>

<style lang="scss">
@use "styles/main" as *;

main section.subjects{
  div.container{

  }

  ul{
    display:flex;
    overflow:auto;

    @include min-700{
      width:90%;
      margin:auto;
      max-width:1200px;
      flex-wrap:wrap;
    }

    li{
      list-style:none;
      margin-left:20px;

      @include min-700{
        flex-basis: calc(100% / 3 - 10px);
        margin-left: 0;
        margin-bottom:15px;
        margin-right:15px;
      }

      @include min-700-max-100{
        &:nth-of-type(3n + 3){
          margin-right:0;
        }
      }

      @include min-1000{
        flex-basis: calc(100% / 4 - 15px);
        &:nth-of-type(4n + 4){
          margin-right:0;
        }
      }

      &:first-of-type{
        margin-left:5vw;

        @include min-700{
          margin-left: 0;
        }
      }

      &:last-of-type{
        margin-right:5vw;

        @include min-700{
          margin-right: 0;
        }
      }

      &.selected button{
        background:rgba(156,190,47,0.2);
      }

      button{
        border: 2px solid $dark-green;
        background:transparent;
        color:black;
        font-weight:600;
        padding: 20px 0;
        text-decoration: none;
        transition: background 0.2s ease;

        @include min-700{
          width:100%;
        }
      }
    }
  }
}
</style>
