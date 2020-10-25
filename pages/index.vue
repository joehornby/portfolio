<template>
  <div class="home">
    <h2 class="headline">{{ home.fields.h2 }}</h2>
    <nuxt-link class="cta" :to="`/projects/${projects[0].fields.slug}`">{{ home.fields.cta }}</nuxt-link>
    <div class="work">
      <ProjectFilter />
      <transition name="list">
        <ProjectList :projects="projects" :key="selectedCategory" />
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `${this.title} | ${this.subtitle}`,
        meta: [
        ]
      }
    },
    data() {
      return {
        title: "Joseph Hornby",
        subtitle: "Creative Technology",
        pageName: "Home"
      }
    },
    // Get content from store
    computed: {
      home() {
        return this.$store.state.content.homepage
      },
      projects() {
        return this.$store.state.content.projects
      },
      categories(){
        return this.$store.state.content.categories
      },
      selectedCategory() {
        return this.$store.state.content.selectedCategory
      }
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
    grid-area: work;
    width: 100%;
    margin-top: 20vh;
    margin-bottom: 30vh;
    grid-area: work;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    &__heading {
      grid-column: 1 / span 1;
      padding-top: 0.5rem;
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

  /* Filter */

  h3.filter,
  .category-btn {
    font-size: 0.66em;
  }

  h3.filter{
    margin-top: 2rem;
    padding-top: 1em;
    margin-bottom: 1rem;
  }

  .filter {
    &__buttons {
      margin-bottom: 2rem;
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
    }
    .filter {
    &__buttons {
      max-width: 22ch;
    }
  }
  }

</style>
