<template>
  <div class="home">
    <!-- <h1 class="headline">{{ home.fields.h1 }}</h1> -->
    <h2 class="description">{{ home.fields.h2 }}</h2>
    <div class="cta">
      <nuxt-link to="/projects/01">
        <primary-button>{{ home.fields.cta }}</primary-button>
      </nuxt-link>
    </div>
    <Circles />
    <section class="work">
      <ul>
          <li v-for="project in projects" :key="project.fields.id">
              <nuxt-link class="work__titles" :to="`/projects/${project.fields.id}`"> {{ project.fields.title }}</nuxt-link>
          </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import PrimaryButton from '~/components/PrimaryButton'
  import Circles from '~/components/Circles'

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
    components: {
      PrimaryButton
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
    display: grid;
    // grid-template-columns: repeat( 6, 1fr );
    grid-template-areas: 
                " description "
                " cta "
                " work ";
    grid-template-rows: 30vh 36ch auto;
    row-gap: 2em;
    margin-top: calc(4rem + 7vh);
    margin-bottom: 3rem;
    position: relative;
  }

  .headline { 
    grid-area: headline;
    max-width: 35ch;
    font-size: clamp(2rem, 10vw, 3rem);
  }

  .description { 
    grid-area: description;
    max-width: 35ch;
    font-size: clamp(1rem, 5vw, 2rem);
  }
  .cta {
    grid-area: cta;
    position: absolute;
    left: 50vw;
    transform: translateX(-50%);
  }

  .work {
    grid-area: work;
    li {
      list-style: none;
      display: inline;
    }
    &__titles {
      display: inline;
      font-family: $font-stack-display;
      font-weight: 900;
      font-size: clamp(2rem, 9vw, 4rem);
      letter-spacing: -0.08em;
      line-height: 0.95;
      color: rgba($mid-grey,0.6);
      
      &::after {
        font-family: 'Montserrat', sans-serif;
        content: '\00A0\2192\0020';
        color: $mid-grey;
      }
      
      &:hover {
        color: $mid-grey;
        transition: color $transition-props;
      }  
    }
  }

</style>
