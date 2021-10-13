<template>
  <main>
    <section class="subjects">
      <div class="container">
        <h1>Veelgestelde vragen</h1>
        <h2>Over welke ziekte heeft u een vraag?</h2>
      </div>
      <ul class="diseases">
        <li v-for="(disease, index) in diseases" :key="disease.id" :class="{selected: index===indexNumber.disease}">
          <button :id="disease.id" @click="getDiseaseIndex($event, index)">{{disease.disease_name}}</button>
        </li>
      </ul>

      <transition name="fade" mode="out-in">
        <div v-if="filterDiseaseId" class="container">
          <h2>{{ getSubjectTitle() }}</h2>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <ul v-if="filterDiseaseId" class="subjects">
          <li v-for="(subject, index) in filteredData" :key="subject.id" :class="{selected: index===indexNumber.subject}">
            <button @click="getSubjectIndex(index)">{{subject.title}}</button>
          </li>
        </ul>
      </transition>
    </section>
    <FaqList
      v-if="this.indexNumber.subject !== null"
      :subjectQuestions="subjectQuestions"
      :subject="filteredData[indexNumber.subject].title"
    />
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const diseases = await $axios.$get(`${process.env.strapiAPI}/diseases`)
    const subjects = await $axios.$get(`${process.env.strapiAPI}/subjects`)
    return { subjects, diseases }
  },

  data () {
    return {
      filteredData: this.subjects,
      filterDiseaseId: 0,

      indexNumber: {
        subject: null,
        disease: null
      }
    }
  },

  computed: {
    subjectQuestions () {
      if (this.indexNumber.subject !== null) {
        return this.subjects[this.indexNumber.subject].subject_questions
      }
      return 0
    }
  },

  methods: {
    getSubjectIndex (i) {
      this.indexNumber.subject = i
    },

    getDiseaseIndex (e, i) {
      e.preventDefault()
      this.indexNumber.disease = i
      this.indexNumber.subject = null
      this.filterDiseaseId = parseInt(e.target.id, 10)
      this.filteredData = this.subjects.filter(subject => subject.disease !== null && subject.disease.id === this.filterDiseaseId)
    },

    getSubjectTitle () {
      const currentDisease = this.diseases.filter(disease => disease.id === this.filterDiseaseId)
      // return currentDisease.length ? `Kies een onderwerp ${currentDisease[0].disease_name}` : ''
      return currentDisease.length ? 'Kies een onderwerp' : ''
    }
  },

  mounted () {
    console.log(this.subjects)
    console.log(this.subjectQuestions)
    console.log(this.diseases)
  }
}
</script>

<style lang="scss">
@use "styles/main" as *;

main section.subjects{

  .fade-enter-active{
    transition: transform 0.4s, opacity 0.4s;
    transform: translateY(-30px);
    opacity: 0;
  }

  .fade-enter-to{
    transform: translateY(0vw);
    opacity: 1;
  }

  .fade-leave-active{
    transition: transform 0.4s, opacity 0.4s;
    transform: translateY(0vw);
    opacity: 1;
  }

  .fade-leave-to{
    transform: translateY(-30px);
    opacity: 0;
  }

  >div.container>h2{
    margin-bottom:15px;
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

      @include min-700-max-999{
        &:nth-of-type(3n + 3){
          margin-right:0;
        }
      }

      @include min-1000{
        flex-basis: calc(100% / 4 - 15px);
        margin-right:20px;

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
