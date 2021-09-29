<template>
  <main id="hulpvraag-onderwerp">
    <section class='hulpvraag-info'>
      <div class="container">
        <!-- <pre>{{ subject }}</pre> -->
        <h1>{{ subject.title }}</h1>
        <div class="hulpvraag-info-text">
          {{ subject.content }}{{ subject.content }}
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <ul>
            <li v-for="subjectQuestion in firstFourSubjectQuestions" :key="subjectQuestion.id" class="vragen">{{ subjectQuestion.question }}</li>
        </ul>
        <NuxtLink to="/hulpvraag/faq" class="standalone-link">Meer veelgestelde vragen<Fa-icon :icon="['fas', 'arrow-right']" /></NuxtLink>
      </div>
    </section>

    <section class="ask-question">
      <div class="container">
        <h2 class="lines">Stel je vraag aan een deskundige</h2>
      </div>
      <div class="container">
        <div class="person-info">
          <div class="image">
            <img :src="subject.experts[indexNumber] ? `${$store.state.baseUrl}${subject.experts[indexNumber].photo.url}` : ''" />
          </div>
          <div class="person-description">
            <h1>{{ subject.experts[indexNumber] ? subject.experts[indexNumber].name : '' }}</h1>
            <h2>{{ subject.experts[indexNumber] ? subject.experts[indexNumber].title : '' }}</h2>
            <span><Fa-icon :icon="['fas', 'map-marker-alt']" />{{ subject.experts[indexNumber] ? subject.experts[indexNumber].location : ''}}</span>
            <p>{{ subject.experts[indexNumber] ? subject.experts[indexNumber].content : '' }}</p>
             <NuxtLink :to="`/hulpvraag/stuur-bericht/${subject.experts[indexNumber].id}`" class="button">Stuur bericht</NuxtLink>
             <!-- <NuxtLink
             :to="stuur-bericht"
             ></NuxtLink> -->
          </div>
        </div>
      </div>
      <div class="people-list">
        <ul>
          <li v-for="(expert, index) in subject.experts" :key="expert.id" @click="getIndex(index)">
            <div class="image">
              <img :src="expert.photo ? `${$store.state.baseUrl}${expert.photo.url}` : ''" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  // Not sure it's a good idea to write several calls in one async function
  async asyncData ({ params, $axios }) {
    const slug = params.hulpvraagonderwerp.charAt(0).toUpperCase() + params.hulpvraagonderwerp.slice(1)
    const contentObjects = await $axios.$get(`${process.env.strapiAPI}/subjects?title=${slug}`)
    console.log(contentObjects)
    const firstFourSubjectQuestions = await $axios.$get(`${process.env.strapiAPI}/subject-questions?subject.title=${slug}&_start=0&_limit=4`)
    const subject = contentObjects[0]
    return { subject, firstFourSubjectQuestions }
  },

  data: () => ({
    indexNumber: 0
  }),

  methods: {
    getIndex (i) {
      this.indexNumber = i
      console.log(this.subject.experts[i].name)
    }
  }
}

</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main#hulpvraag-onderwerp{
  section.hulpvraag-info{
    div.container{
      p{
        margin-bottom:20px;
      }
    }
  }

  section.faq{
    margin-bottom:60px;

    div.container{
      ul{
        margin-top:40px;
        margin-bottom:20px;

        @include min-700{
          display:flex;
          flex-wrap:wrap;
          justify-content: space-between;
          margin-bottom:0;
        }

        li{
          list-style: none;
          background:rgb(228, 228, 228);
          border:1px solid $light-green;
          padding: 20px;
          margin-bottom:10px;

          @include min-450{
            padding: 30px;
          }

          @include min-700{
            flex-basis:calc(50% - 15px);
            margin-bottom:30px;
          }

          a{
            color:black;
            text-decoration: none;
            text-align:center;
            display:block;

            @include min-700{
              text-align: left;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            svg{
              color: $light-green;
              display:none;

              @include min-700{
                display:inline;
              }
            }
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

  section.ask-question{
    display:flex;
    flex-direction: column;

    div.container{
      &:first-of-type{
        order:-2;

        @include min-900{
      order:0;
        }
      }

      h2.lines{
        margin-bottom:20px;

        &:before, &:after{
          flex-basis: calc(50% - (378px /2 ) - 20px);
        }
      }

      div.person-info{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;

        div.image{
          margin-bottom:20px;
          flex-basis:100%;

          @include min-900{
            flex-basis:calc(50% - 10px);
          }

          img{
            margin:auto;
            display:block;
            width:100%;
            max-width:200px;
            border-radius:5px;
            box-shadow: 0 0 7px rgba(0,0,0,0.3);

            @include min-900{
              max-width: 570px;
              margin:0;
            }
          }
        }

        div.person-description{
          @include min-900{
            flex-basis:calc(50% - 10px);
          }

          h1{
            font-size:25px;
            margin-bottom:10px;
          }

          h2{
            font-size:20px;
            margin-bottom:10px;
          }

          >span{
            display:block;
            margin-bottom:15px;

            svg{
              margin-right:7px;
            }
          }

          p{
            margin-bottom:20px;
          }

          a.button{
            margin-bottom:20px;
          }
        }
      }
    }
    div.people-list{
      order:-1;
      margin-top:20px;
      margin-bottom:20px;

      @include min-900{
        order:0;
      }

      ul{
        display:flex;
        overflow:auto;
        justify-content: flex-start;

        li{
          list-style: none;
          border-radius:5px;

          div.image{
            background:white;
            margin-top:20px;
            margin-bottom:20px;
            border-radius:5px;
            box-shadow: 0 0 4px rgba(0,0,0,0.5);

            &:hover img{
              border: 4px solid $light-green;
              cursor: pointer;
            }

            img{
              width:35vw;
              max-width:140px;
              border-radius:5px;
              display:block;
              border: 5px solid transparent;

              @include min-1334{
                max-width:160px;
              }
            }
          }

          &:nth-of-type(2) div.image img{
            border: 5px solid $light-green;
          }

          &:first-of-type{
            padding-left:5vw;

            @include min-1334{
              padding-left:calc( (100% - 1200px) / 2);
            }
          }

          &:last-of-type{
            padding-right:5vw;

            @include min-1334{
              padding-right:calc( (100% - 1200px) / 2);
            }
          }

          &:not(:first-of-type){
            margin-left:20px;

            @include min-1334{
              margin-left:40px;
            }
          }
        }
      }
    }
  }
}
</style>
