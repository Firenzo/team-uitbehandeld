<template>
  <main>
    <section class="subjects">
      <div class="container">
        <h1>Veelgestelde vragen</h1>
        <h2 class="ziektespecifiek lines" :class="{deselected: this.greyedOut.disease}">Ziektespecifieke onderwerpen</h2>
      </div>
      <ul class="diseases" :class="{deselected: this.greyedOut.disease}">
        <li v-for="(disease, index) in diseases" :key="disease.id" :class="{selected: index===indexNumber.disease}">
          <button :id="disease.id" @click="getDiseaseIndex($event, index)">{{disease.disease_name}}</button>
        </li>
      </ul>

      <transition name="fade" mode="out-in">
        <div v-if="filterDiseaseId" class="container">
          <h2 class="disease-subject" :class="{deselected: this.greyedOut.disease}">{{ getSubjectTitle() }}</h2>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <ul v-if="filterDiseaseId" class="subjects" :class="{deselected: this.greyedOut.disease}">
          <li v-for="(subject, index) in filteredData" :key="subject.id" :class="{selected: index===indexNumber.subject}">
            <button @click="getSubjectIndex(index)">{{subject.title}}</button>
          </li>
        </ul>
      </transition>

      <div class="container">
        <h2 class="lines generic-subjects" :class="{deselected: this.greyedOut.genericData}">Generieke onderwerpen</h2>
      </div>

      <ul class="subjects-generic" :class="{deselected: this.greyedOut.genericData}">
        <li v-for="(subject, index) in genericData" :key="subject.id" :class="{selected: index===indexNumber.genericData}">
          <button @click="getGenericSubjectIndex(index)">{{subject.title}}</button>
        </li>
      </ul>
    </section>
    <FaqList
      v-if="this.indexNumber.subject !== null "
      :subjectQuestions="subjectQuestions"
      :subject="filteredData[indexNumber.subject].title"
    />

    <FaqList
      v-if="this.indexNumber.genericData !== null "
      :subjectQuestions="genericSubjectQuestions"
      :subject="genericData[indexNumber.genericData].title"
    />
  </main>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

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

      greyedOut: {
        disease: false,
        genericData: false
      },

      indexNumber: {
        subject: null,
        disease: null,
        genericData: null
      }
    }
  },

  computed: {
    subjectQuestions () {
      if (this.indexNumber.subject !== null) {
        return this.subjects[this.indexNumber.subject].subject_questions
      }
      return 0
    },

    genericSubjectQuestions () {
      if (this.indexNumber.genericData !== null) {
        return this.subjects[this.indexNumber.genericData].subject_questions
      }
      return 0
    },

    genericData () {
      return this.subjects.filter(subject => subject.disease === null)
    }
  },

  methods: {
    getSubjectIndex (i) {
      this.greyedOut.disease = false
      this.greyedOut.genericData = true
      this.indexNumber.genericData = null
      this.indexNumber.subject = i
      setTimeout(() => {
        document.querySelector('section.questions-and-answers').scrollIntoView({ behavior: 'smooth' })
      }, 20)
    },

    getGenericSubjectIndex (i) {
      this.greyedOut.disease = true
      this.greyedOut.genericData = false
      this.indexNumber.disease = null
      this.indexNumber.subject = null
      this.indexNumber.genericData = i
      setTimeout(() => {
        document.querySelector('section.questions-and-answers').scrollIntoView({ behavior: 'smooth' })
      }, 20)
    },

    getDiseaseIndex (e, i) {
      e.preventDefault()
      this.greyedOut.disease = false
      this.greyedOut.genericData = true
      this.indexNumber.disease = i
      this.indexNumber.genericData = null
      this.indexNumber.subject = null
      this.filterDiseaseId = parseInt(e.target.id, 10)
      this.filteredData = this.subjects.filter(subject => subject.disease !== null && subject.disease.id === this.filterDiseaseId)
    },

    getSubjectTitle () {
      const currentDisease = this.diseases.filter(disease => disease.id === this.filterDiseaseId)
      return currentDisease.length ? `Onderwerpen bij ${currentDisease[0].disease_name}` : ''
    }
  },

  mounted () {
    smoothscroll.polyfill()
  }
}
</script>

<style lang="scss">
@use "styles/main" as *;

main section.subjects{

  .deselected{
    opacity:0.5;
    transition: opacity 0.3s ease;

    &:hover{
      opacity: 1;
    }
  }

  >div.container>h1{
    margin-bottom:50px;
  }

  >div.container>h2{
    margin-bottom:20px;

    &.ziektespecifiek {
      font-size: 28px;

      &:before, &:after{
        flex-basis:calc(50% - 213px - 20px);
      }
    }

    &.disease-subject{
      font-size: 24px;
      margin-top:20px;
      margin-bottom:20px;
      text-align:center;
    }

    &.generic-subjects{
      margin-top:40px;
      font-size:28px;

      &:before, &:after{
        flex-basis:calc(50% - 170px - 20px);
      }
    }
  }

  ul{
    display:flex;
    overflow:auto;

    &.diseases li button, &.subjects-generic li button{
      padding: 40px 0;
      font-size:16px;
    }

    &.subjects{
      margin-bottom:30px;
    }

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
}
</style>
