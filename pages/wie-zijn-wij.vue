!<template>
  <main>
    <div class="container">
      <h1>Wie zijn wij?</h1>
      <div v-html="$md.render(pageText.content)" class="md-container"></div>
      <ul>
        <li v-for="teamMember in teamMembers" :key="teamMember.id" class="member">
          <div class="name-and-role">
            <div class="image">
              <img :src="teamMember.photo ? `${$store.state.baseUrl}${teamMember.photo.url}` : `${$store.state.baseUrl}/uploads/stock_ee325cb78c.jpg`" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>{{ teamMember.name }}</h2>
            <p class="role">{{ teamMember.role }}</p>
            <p class="second-role">{{ teamMember.short_description }}</p>
            <div v-html="$md.render(teamMember.long_description)" class="role-description md-container-default" />
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const teamMembers = await $axios.$get(`${process.env.strapiAPI}/team-members?_sort=order:ASC`)
    const pageText = await $axios.$get(`${process.env.strapiAPI}/our-people-text`)
    return { teamMembers, pageText }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {

    div.md-container{
      margin-bottom:60px;
      max-width:750px;
    }

    h1 {
      text-align: left;
      margin-bottom: 50px;
    }
    max-width: 400px;

    @include min-700 {
      max-width: 1200px;
    }

    h2 {
      margin-bottom: 0;

      @include min-700 {
        grid-column-start: 1;
      }
    }

    ul {
      li.member {
        list-style-type: none;

        &:not(:first-of-type) {
          margin-top: 40px;
        }
        @include min-700 {
          display: grid;
          max-width:800px;

          &:nth-of-type(even){
            margin-left:auto;
          }

          &:not(:first-of-type) {
            margin-top: 85px;
          }
        }

        @include min-700 {
          grid-template-columns: fit-content(25%) fit-content(75%);
        }

        img {
          width: 100%;
          max-width: 250px;
        }

        div.title-and-role {
          grid-area: 1/2;
          margin-left: 15px;
          p.role {
            font-weight: 600;
            margin-bottom: 5px;
          }
          p.second-role {
            margin-bottom: 10px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
