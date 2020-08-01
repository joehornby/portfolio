<template>
  <div class="home">
    <h1 class="headline">{{ home.fields.h1 }}</h1>
    <h2 class="description">{{ home.fields.h2 }}</h2>
    <section class="work">
      <nuxt-link to="/projects/01">
        <primary-button>{{ home.fields.cta }}</primary-button>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import PrimaryButton from '~/components/PrimaryButton'

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
  @import url('@/assets/scss/_home.scss');
</style>
