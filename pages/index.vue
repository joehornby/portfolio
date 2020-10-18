<template>
  <div class="home">
    <h2 class="headline">{{ home.fields.h2 }}</h2>
    <nuxt-link class="cta" :to="`/projects/${projects[0].fields.slug}`">{{ home.fields.cta }}</nuxt-link>
    <ProjectList :projects="projects" />
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
        client.getEntry(process.env.CTF_HOME_PAGE_ID),
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
                         "cta"
                         "work";
  }

  .headline { 
    grid-area: headline;
    font-size: 2rem;
    max-width: 45ch;
  }

  .cta {
    grid-area: cta;
    margin-top: 10vh;
    width: max-content;
  }

  .work {
    margin-top: 20vh;
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

    &__list {
      &:hover,
      &:hover > * {
        color: $orange;
        transition: color $transition-props;
      }
    }
    
    &__titles {
      display: block;
      letter-spacing: -0.05em;
      grid-column: 1 / span 1;
      color: inherit;
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
                          ". cta ."
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
