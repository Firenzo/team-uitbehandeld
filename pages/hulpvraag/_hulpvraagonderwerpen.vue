<template>
  <main id="hulpvraag-onderwerp">
    <section class='hulpvraag-info'>
      <div class="container">
        <h1>Onderwerp naam</h1>
        <div class="hulpvraag-info-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, praesentium. Debitis dolor iste assumenda et dolore impedit molestias vitae iusto, tenetur sequi dignissimos commodi doloribus qui vero eos sed praesentium tempora repudiandae inventore libero blanditiis natus animi perferendis. Incidunt velit totam iure! Excepturi corporis eum vitae facere quidem magnam porro, laboriosam rerum natus iusto optio accusamus libero, aspernatur rem temporibus adipisci eveniet fuga illum dignissimos? Quis eius quidem vero eum nisi quae tenetur non officia nemo ea ut omnis placeat aut dolores modi, cupiditate ad sed minima veniam soluta id atque ducimus repellendus illum. Tempora assumenda omnis accusamus ea modi.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam sunt blanditiis nostrum error ad? Deserunt consequatur tempora dolorem officiis eos impedit animi iusto quos optio neque soluta a, eligendi cum tempore aliquam deleniti dolore, hic reprehenderit praesentium illo expedita adipisci ut. Corporis at similique adipisci fugiat maxime et id.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat totam debitis? Dolorum molestias quas pariatur iusto, facilis nulla fuga?</p>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <ul>
          <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<Fa-icon :icon="['fas', 'chevron-right']" /></a></li>
          <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<Fa-icon :icon="['fas', 'chevron-right']" /></a></li>
          <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<Fa-icon :icon="['fas', 'chevron-right']" /></a></li>
          <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<Fa-icon :icon="['fas', 'chevron-right']" /></a></li>
        </ul>
        <a href="#" class="standalone-link">Meer FAQs<Fa-icon :icon="['fas', 'arrow-right']" /></a>
      </div>
    </section>

    <section class="ask-question">
      <div class="container">
        <h2 class="lines">Stel je vraag aan een deskundige</h2>
      </div>
      <div class="container">
        <div class="person-info">
          <div class="image">
            <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
          </div>

          <div class="person-description">
            <h1>Naam van Deskundige</h1>
            <h2>Titel deskundige</h2>
            <span><Fa-icon :icon="['fas', 'map-marker-alt']" />Locatie</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, minus voluptatem, cumque error facilis repellendus ad tempora quod iusto, laborum necessitatibus pariatur laudantium accusamus! Cum esse cumque sapiente corrupti quas voluptatem repudiandae provident voluptate quo, vero, excepturi perferendis, illum iure dolor alias impedit facilis sequi. Eligendi aliquid commodi tempora quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, minus voluptatem, cumque error facilis repellendus ad tempora quod iusto, laborum necessitatibus pariatur laudantium accusamus! Cum esse cumque sapiente corrupti quas voluptatem repudiandae provident voluptate quo, vero, excepturi perferendis, illum iure dolor alias impedit facilis sequi. Eligendi aliquid commodi tempora quo.</p>
            <a href="#" class="button">Stuur bericht</a>
          </div>
        </div>
      </div>

      <div class="people-list">
        <ul>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
          <li>
            <div class="image">
              <img src="~assets/images/person-picture-square.jpg" alt="Foto van Persoon">
            </div>
          </li>
        </ul>
      </div>
    </section>

  </main>
</template>

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
            // max-width:200px;

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
        justify-content: space-between;

        li{
          list-style: none;
          border-radius:5px;

          &:nth-of-type(2) div.image{
            border: 4px solid $light-green;
          }

          div.image{
            background:white;
            margin-top:20px;
            margin-bottom:20px;
            border-radius:5px;
            box-shadow: 0 0 4px rgba(0,0,0,0.5);

            img{
              width:35vw;
              max-width:140px;
              border-radius:5px;

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
