<template>
  <div class="home">
    <h1 class="headline">{{ home.fields.h1 }}</h1>
    <h2 class="description">{{ home.fields.h2 }}</h2>
    <section class="work">
      <nuxt-link to="/projects">
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
    components: {
      PrimaryButton
    },
    asyncData ({env}) {
      return Promise.all([
        client.getEntry('2fRUBWy1oY6L18nlGnKBxk')
      ])
      .then( (entry) => {
        return {
          home: entry[0]
        }
      }).catch( console.error )
    }
  }
</script>

<style lang="scss">
  @import url('@/assets/scss/_home.scss');
</style>
