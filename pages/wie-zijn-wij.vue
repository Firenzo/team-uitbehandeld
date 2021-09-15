!<template>
  <main>
    <div class="container">
      <h1>Wie zijn wij?</h1>
      <ul>
        <li v-for="teamMember in teamMembers" :key="teamMember.id" class="member">
          <div class="name-and-role">
            <div class="image">
              <img :src="teamMember.photo ? `http://localhost:1338${teamMember.photo.url}` : ''" />
            </div>
          </div>
          <div class="title-and-role">
            <h2>{{ teamMember.name }}</h2>
            <p class="role">{{ teamMember.role }}</p>
            <p class="second-role">{{ teamMember.short_description }}</p>
            <p class="role-description">
              {{ teamMember.long_description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {

  async asyncData ({ params, $axios }) {
    const teamMembers = await $axios.$get(`${process.env.strapiAPI}/team-members`)
    console.log(teamMembers)
    return { teamMembers }
  }
}
</script>

<style scoped lang="scss">
@use 'styles/main' as *;

main {
  div.container {
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
            // margin-top: 65px;
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
