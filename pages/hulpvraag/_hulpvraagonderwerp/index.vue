<template>
  <main id="hulpvraag-onderwerp">
    <section class='hulpvraag-info'>
      <div class="container">
        <h1>{{ subject.title }}</h1>
        <div v-html="$md.render(subject.content)" class="hulpvraag-info-text md-container" />
      </div>
    </section>

    <FaqList :subject-questions="subjectQuestions" subject="Veelgestelde vragen" :max="4" page="subject" />

    <section class="ask-question">
      <div class="container">
        <h2 class="lines">Stel je vraag aan een deskundige</h2>
      </div>
      <div class="container" v-if="subject.experts.length !== 0">
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
          </div>
        </div>
      </div>
      <div v-else class="container">
        <p class="empty-state-text">Op dit moment zijn er nog geen deskundigen voor dit onderwerp.</p>
      </div>
      <div class="people-list">
        <ul>
          <li v-for="(expert, index) in subject.experts" :key="expert.id" @click="getIndex(index)">
            <div class="image">
              <img :src="expert.photo ? `${$store.state.baseUrl}${expert.photo.url}` : ''" :class="{selected: index === indexNumber}" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  async asyncData ({ params, $axios }) {
    const slug = params.hulpvraagonderwerp
    const contentObjects = await $axios.$get(`${process.env.strapiAPI}/subjects?slug=${slug}`)
    const subjectQuestions = await $axios.$get(`${process.env.strapiAPI}/subject-questions?subject.slug=${slug}&_start=0`)
    const subject = contentObjects[0]
    return { subject, subjectQuestions }
  },

  data: () => ({
    indexNumber: 0
  }),

  methods: {
    getIndex (i) {
      this.indexNumber = i
    }
  }
}

</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main#hulpvraag-onderwerp{
  section.hulpvraag-info{
    div.container{

      div.hulpvraag-info-text.md-container{
        margin-bottom:20px;
        max-width:750px;
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

      p.empty-state-text{
        margin-top:30px;
        font-size:20px;
        color:$light-text-color;
        text-align:center;
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
              border: 5px solid $light-green;
              cursor: pointer;
            }

            img{
              width:35vw;
              max-width:140px;
              border-radius:5px;
              display:block;
              border: 5px solid transparent;
              transition: all ease-out 0.5s;

              &.selected{
                border: 5px solid $light-green;
              }

              @include min-1334{
                max-width:160px;
              }
            }
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
