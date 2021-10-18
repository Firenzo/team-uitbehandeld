<template>
  <main>
    <section id="hero-container">
        <div class="image hero">
          <div class="hero-overlay-container">
            <div class="hero-overlay-container-img">
              <img src="~/assets/images/teamuitbehandeld_handen.svg" alt="">
            </div>
            <div class="hero-overlay-container-text">
              <div><h1>{{ homepage.description }}</h1></div>
            </div>
          </div>
          </div>
        <div class="container">
          <h2>{{ homepage.slogan }}</h2>
        </div>
    </section>
    <section id="samen-doen">
      <div class="container">
        <div v-html="$md.render(homepage.content_1)" class="md-container-default samen-doen-content">
        </div>
        <div class="image samen-doen-image">
        <img :src="homepage.content_1_image ? `${$store.state.baseUrl}${homepage.content_1_image.url}` : ''">
        </div>
      </div>
    </section>
    <section id="vragen">
      <div class="container">
        <div v-html="$md.render(homepage.green_block_1)" class="md-container-default practische-vragen"></div>
        <div v-html="$md.render(homepage.green_block_2)" class="md-container-default andere-vragen"></div>
      </div>
    </section>
    <section id="terecht-met-vragen">
      <div class="container">
        <div class="image terecht-met-vragen-image">
          <img :src="homepage.content_2_image ? `${$store.state.baseUrl}${homepage.content_2_image.url}` : ''">
        </div>
        <div v-html="$md.render(homepage.content_2)" class="md-container-default terecht-met-vragen-content"></div>
    </div>
    </section>
    <section id="landelijke-dekking">
      <div class="container">
        <div v-html="$md.render(homepage.content_3)" class="md-container-default landelijke-dekking-content"></div>
        <div class="landelijke-dekking-content-image">
          <img :src="homepage.content_3_image ? `${$store.state.baseUrl}${homepage.content_3_image.url}` : ''">
        </div>
      </div>
    </section>
    <section id="ons-doel">
      <div class="container">
        <div class="ons-doel-content">
          <div class="image ons-doel-content-image-left">
            <img :src="homepage.banner_image_1 ? `${$store.state.baseUrl}${homepage.banner_image_1.url}` : ''">
          </div>
          <div class="ons-doel-header-text">
            <h1>{{ homepage.banner_title }}</h1>
            <h2>{{ homepage.banner_description }}</h2>
          </div>
          <div class="image ons-doel-content-image-right">
            <img :src="homepage.banner_image_2 ? `${$store.state.baseUrl}${homepage.banner_image_2.url}` : ''">
          </div>
          <div v-html="$md.render(homepage.banner_content_1)" class="md-container-default ons-doel-vragen-left"></div>
          <div v-html="$md.render(homepage.banner_content_2)" class="md-container-default ons-doel-vragen-right"></div>
        <div class="ons-doel-footer">
          <h3>{{ homepage.banner_bottom_text}}</h3>
        </div>
        </div>
      </div>
    </section>
    <section id="hulpvraag-onderwerpen">
      <div class="container">
        <h1 class="hulpvraag-onderwerpen">Hulpvraag onderwerpen</h1>
        <h2 class="ziektespecifiek lines">Ziektespecifieke onderwerpen</h2>
        <ul>
          <li v-for="disease in diseases" :key="disease.id" :class="{selected: filterDiseaseId === disease.id}">
            <button :id="disease.id" class="button" @click="setDiseaseId">{{ disease.disease_name }}</button>
          </li>
        </ul>
        <h2 v-if="filterDiseaseId" class="disease-title">{{ getSubjectTitle() }}</h2>
        <ul>
          <li v-for="(subject, index) in filteredData" :key="subject.id" :class="`trans trans-${index}`">
            <NuxtLink class="button" :to="`hulpvraag/${subject.slug}`">{{ subject.title }}</NuxtLink>
          </li>
        </ul>
        <h2 class="generiek lines">Generieke onderwerpen</h2>
        <ul>
          <li v-for="(subject, index) in genericData" :key="subject.id" :class="`trans trans-${index}`">
            <NuxtLink class="button" :to="`hulpvraag/${subject.slug}`">{{ subject.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const subjects = await $axios.$get(`${process.env.strapiAPI}/subjects`)
    const diseases = await $axios.$get(`${process.env.strapiAPI}/diseases`)
    const homepage = await $axios.$get(`${process.env.strapiAPI}/homepage`)
    return { subjects, diseases, homepage }
  },

  data () {
    return {
      filteredData: [],
      filterDiseaseId: 0
    }
  },

  computed: {
    genericData () {
      return this.subjects.filter(subject => subject.disease === null)
    }
  },

  mounted () {

  },

  methods: {
    setDiseaseId (e) {
      e.preventDefault()
      this.filterDiseaseId = parseInt(e.target.id, 10)
      this.filteredData = this.subjects.filter(subject => subject.disease !== null && subject.disease.id === this.filterDiseaseId)
    },
    getSubjectTitle () {
      const currentDisease = this.diseases.filter(disease => disease.id === this.filterDiseaseId)
      return currentDisease.length ? `Hulpvragen over ${currentDisease[0].disease_name}` : ''
    }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  section#hero-container {
   div.image.hero {
      background: url("~/assets/images/Strand_uitgesneden.png") no-repeat center;
      background-size: cover;
      height: 280px;
      width: 100%;
      margin-bottom: 40px;
      position: relative;
      text-align: center;

      @include min-450{
        height: 400px;
      }

      @include min-1000{
        height: 450px;
      }
        .hero-overlay-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: inherit;
          background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, 0.4));

            @include min-1000{
              display: flex;
              flex-direction: row;
            }
         div.hero-overlay-container-img {
            img {
              background: url("~/assets/images/teamuitbehandeld_handen.svg") no-repeat center;
              height: 100px;
              width: auto;
              position: relative;
              margin-top: 15px;

            @include min-450{
              height: 230px;
            }

            @include min-1000{
              height: 450px;
            }
          }
         }

       div.hero-overlay-container-text {
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: center;
         width: 100%;
         height: 100%;

           div {
            width: 100%;
            height: auto;

           h1 {
              font-size: 30px;
              line-height: 1.2;
              font-weight: 500;
              text-shadow: 0 1px 1.5px rgba(0,0,0,0.5);
              color: white;
              width: 90%;
              margin: 0 auto;
              margin-bottom: 50px;

              @include min-1000 {
                margin: 0 0;
                margin-bottom: 70px;
                font-size:50px;
              }
           }
        }
       }
     }
   }

      h2 {
      margin-bottom: 30px;
      text-align: center;
      }

    @include min-750 {
      display:flex;
      justify-content: space-between;
      flex-wrap:wrap;
    }

    }
    section#samen-doen{
      align-items: center;
      justify-content: space-between;
      margin: 50px auto;
      margin-bottom: 100px;

          div.container {
          @include min-900{
          display: flex;
          }
          }

      div.samen-doen-content {
        margin-bottom: 20px;

            @include min-450{
            width: 100%;
            margin-left: 0px;
          }

            @include min-900{
            width: 100%;
            margin-right: 20px;
          }
      }

      div.samen-doen-image {
         overflow:hidden;
         display: flex;
         justify-content: flex-end;
         width: 100%;

            @include min-450{
            justify-content: center;
            width: 100%;
          }

            @include min-900{
            width: 100%;
            margin: 0;
            display: flex;
            justify-content: flex-end;
          }

         img{
          border-radius:3px;
          object-fit: contain;
          height: 500px;
        }
      }
    }

    section#vragen{
      width: 100%;
      margin: 20px auto;
      color: #fff;
      margin-bottom: 100px;

        div.container {
          @include min-900{
          display: flex;
          }
        }

      div.practische-vragen {
      background-color: $dark-green;
      padding: 30px;
      margin-bottom: 25px;

        @include min-900{
        width: 50%;
        margin-right: 20px;
        margin-bottom: 0px;
        }

        li {
          list-style: none;
          line-height: 1.5;
            &:not(:first-of-type) {
            margin-bottom: 15px;
            }

          h2 {
            margin-bottom: 20px;
            font-weight: 300;
          }
        }
      }

      div.andere-vragen {
      background-color: $light-green;
      padding: 30px;

        @include min-900{
        width: 50%;
        }

        li {
          list-style: none;
          line-height: 1.5;
            &:not(:first-of-type) {
            margin-bottom: 15px;
            }

          h2 {
            margin-bottom: 20px;
            font-weight: 300;
          }
        }
      }
    }

    section#terecht-met-vragen{
      margin-bottom: 100px;

      div.container {
      align-items: center;
      justify-content: space-between;
      margin: 40px auto;
      display:flex;
      flex-direction: column-reverse;
      align-items: flex-start;

        @include min-450{
        display: flex;
        flex-direction: column-reverse;
        }

        @include min-900{
        display: flex;
        flex-direction: row;
        }
      }

      div.terecht-met-vragen-content {
        margin-bottom: 20px;

          @include min-450{
          width: 100%;
          margin-left: 0px;
          }

          @include min-900{
          width: 100%;
          margin-left: 20px;
          }
      }

      div.terecht-met-vragen-image {
      overflow:hidden;
      display: flex;
      justify-content: flex-end;
      width: 100%;

        @include min-450{
        width: 100%;
        }

        @include min-900{
        width: 100%;
        margin: 0;
        }

        img{
          object-fit: contain;
          height: 500px;
        }
      }
    }

    section#landelijke-dekking {
      align-items: center;
      justify-content: space-between;
      margin: auto;
      width: 90%;
      margin-bottom: 40px;

      div.container {
         @include min-450{
          display: flex;
          flex-direction: column;
          }

          @include min-900{
          display: flex;
          flex-direction: row;
          }

      div.landelijke-dekking-content {
        margin-bottom: 20px;

          @include min-450{
          width: 100%;
          margin-left: 0px;
          }

          @include min-900{
          width: 100%;
          margin-left: 20px;
          }
        button {
          width: 130px;
          padding: 15px 0;
          font-weight: 600;
          font-size: 16px;
          background-color: $cta-color;
          margin: 10px auto;

          @include min-450 {
            margin: 10px 0px;
          }
        }
      }

      div.landelijke-dekking-content-image {
      overflow:hidden;
      display: flex;
      justify-content: flex-end;
      display: flex;
      justify-content: center;

        @include min-450{
        width: 100%;
        }

        @include min-900{
        width: 100%;
        margin: 0;
        }

        img{
          object-fit: contain;
          width: 100%;
        }
      }
    }
    }

    section#hulpvraag-onderwerpen{
      width:100%;
      margin-top: 70px;

      h1{
        font-size:40px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom:50px;

        &.hulpvraag-onderwerpen{
          display:block;
        }
      }

      h2 {
        color: $light-text-color;
        text-align: center;
        margin: 40px 0px;

        &.ziektespecifiek{
          font-size: 28px;
          &:before, &:after{
            flex-basis:calc(50% - 213px - 20px);
          }
        }

        &.generiek{
          font-size: 28px;
          &:before, &:after{
            flex-basis:calc(50% - 170px - 20px);
          }
        }

        &.disease-title{
          margin:0;
          margin-bottom:20px;
        }
      }

      ul{
        display:flex;
        justify-content: space-between;
        overflow:auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 0;

        @include min-450{
          flex-wrap:wrap;
        }

        @include min-700{
          justify-content:flex-start;
        }

        li{
          list-style: none;
          background: none;
          border-radius:10px;
          flex-basis:70%;
          margin-bottom:50px;
          margin-right:20px;
          min-width:200px;

          @include min-450{
            flex-basis:calc( (100% / 2) - 10px);
            margin-right:0;
          }

          @include min-700-max-999{
            flex-basis: calc( (100% / 3) - 10px);
            margin-right:15px;

            //3n = elke derde , + 3 = verander de positie vanaf waar hij (bijv elke derde) moet tellen
            &:nth-of-type(3n + 3) {
              margin-right:0;
            }
          }

          @include min-1000{
            flex-basis:calc( (100% / 4) - 15px);
            margin-right:20px;

            //3n = elke derde , + 3 = verander de positie vanaf waar hij (bijv elke derde) moet tellen
            &:nth-of-type(4n + 4) {
              margin-right:0;
            }
          }

          a.button{
            display:block;
            text-align: center;
            color:white;
            padding: 25px 0px;
            width:200px;
            text-decoration: none;
            border: 3px solid $light-green;
            font-size: 18px;

            &:hover{
              text-decoration:underline;
            }

            @include min-450{
              width:auto;
              padding: 35px 0;
            }
          }

          button{
            background:transparent;
            color:black;
            font-weight:600;
            padding:15px 5px;
            border: 2px solid $light-green;
            flex-basis: calc(50% - 5px);
            width: 100%;
            font-size: 18px;

            &:focus{
              text-decoration: none;
            }
          }

          &.selected button{
            background:rgba(156, 190, 47, 0.2);
          }

          @keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
          }
          &.trans {
            display: list-item;
            animation: fadeIn linear .5s;
            transition-delay: 0s;
            -webkit-transition-delay: 0ms;
          }
        }
      }
    }

    section#ons-doel{
     background-color: #9cbe2f;
     margin-bottom: 40px;

      div.container {
      padding: 25px 0;
      }

        div.ons-doel-content {
        width: 90%;
        margin: auto;
        display: grid;
        grid-auto-columns: 1fr 1fr 1fr 1fr;
        padding: 20px 0;

           .ons-doel-content-image-left {
            grid-column: 1 /5;
            grid-row: 2 /3;

            @include min-600 {
             grid-column: 4 /5;
             grid-row: 3 /4;
             }

             @include min-1000 {
             grid-column: 1 /2;
             grid-row: 1 /2;
             }
          }

          .ons-doel-header-text {
            text-align: center;
            grid-column: 1 /5;
            grid-row: 1 /2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

              @include min-1000 {
              grid-column: 2 /4;
              grid-row: 1 /2;
              }

              h1 {
                margin-bottom: 20px;
                font-weight: 300;
              }

                h2 {
                width: 80%;
                margin: 0 auto;
                color: #fff;
                line-height: 1.5;
                font-weight: 400;
                margin-bottom: 20px;
              }
          }

          .ons-doel-content-image-right {
          grid-column: 1 /5;
          grid-row: 4 /5;

             @include min-600 {
             grid-column: 1 /2;
             grid-row: 2 /3;
            }

            @include min-1000 {
             grid-column: 4 /5;
             grid-row: 1 /2;
            }
          }

          .image {
            margin: auto;
            text-align: center;

            img {
              width: 150px;
              text-align: center;

            @include min-600 {
            width: 200px;
            }

            @include min-1000 {
             width: 250px;
            }
            }
          }

           .ons-doel-vragen-left {
             grid-column: 1/5;
             grid-row: 3/4;
             padding: 25px;

              @include min-600 {
             grid-column: 2 /5;
             grid-row: 2 /3;
            }

              @include min-1000 {
              grid-column: 1 /3;
              grid-row: 2 /4;
              }
           }

             .ons-doel-vragen-right {
             grid-column: 1/5;
             grid-row: 5/6;
             padding: 25px;

             @include min-600 {
             grid-column: 1 /4;
             grid-row: 3 /4;
             }

              @include min-1000 {
              grid-column: 3/5;
              grid-row: 2/4;
              }

           }

        div.ons-doel-footer {
          width: 90%;
          margin: auto;
          grid-column: 1 /5;
          grid-row: 6 /7;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          h3 {
            padding: 25px;
            color: #fff;
          }
        }
      }
    }
  }

</style>
