<template>
  <div class="home">
    <h2 class="headline">{{ home.fields.h2 }}</h2>
    <section class="work">
      <h2 class="work__heading">Selected Projects</h2>
      <ul>
          <li class="work__list" v-for="project in projects" :key="project.fields.id">
              <nuxt-link class="work__titles" :to="`/projects/${project.fields.slug}`"> {{ project.fields.title }}</nuxt-link>
              <!-- <span class="work__details" v-for="(role, index) in project.fields.role" :key="`role-${index}`">{{ role }}</span> -->
              <span class="work__details">{{ project.fields.headline }}</span>
          </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    head() {
      return {
        title: `${this.title} | ${this.page}`,
        meta: [
          // // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          // {
          //   hid: 'description',
          //   name: 'description',
          //   content: 'My custom description'
          // }
        ]
      }
    },
    data() {
      return {
        title: "Joseph Hornby",
        page: "Creative Technology"
      }
    },
    // Get home page content
    asyncData ({env}) {
      return Promise.all([
        client.getEntry('2fRUBWy1oY6L18nlGnKBxk'),
        client.getEntries({
                     'content_type': env.CTF_PROJECT_TYPE_ID,
                      order: 'fields.id'
                 })
      ])
      .then( ([ homeContent, projectList ]) => {
        return {
          home: homeContent,
          projects: projectList.items
        }
      }).catch( console.error )
    },
  }
</script>

<style lang="scss">
  .home {
    margin-top: calc(4rem + 7vh);
    margin-bottom: $spacing-small;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    grid-template-areas: "headline"
                         "work";
  }

  .headline { 
    grid-area: headline;
    font-size: 2rem;
    max-width: 45ch;
  }

  .work {
    margin-top: 30vh;
    margin-bottom: 30vh;
    grid-area: work;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    &__heading {
      grid-column: 1 / span 1;
      padding-top: 0.5rem;
    }

    ul {
      grid-column: 2 / -1;
    }

    li {
      list-style: none;
      margin-bottom: 1rem;
      display: grid;
      gap: 0 1rem;
      grid-template-columns: 1fr;
      padding-top: 0.5rem;
    }
    
    &__titles {
      display: block;
      letter-spacing: -0.05em;
      color: $dark-grey; 
      grid-column: 1 / span 1;
    }
    &__details {
      display: none;
      grid-column: 2 / span 1;
    }
  }

  @media screen and (min-width: $bp-md) {
  .home {
    margin-bottom: $spacing-large;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: ". headline headline"
                         "work work work ";
    
  }
  .work {
    grid-template-columns: repeat(3, 1fr);

    li {
      border-top: 0.5px solid $dark-grey;
      grid-template-columns: 1fr 1fr;
    }
    &__details {
      display: block;
    }
  }
}

</style>
