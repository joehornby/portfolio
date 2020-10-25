<template>
  <ul>
      <li class="work__list" v-for="(project, index) in filteredProjects" :key="project.fields.id">
        <nuxt-link tabindex="0" :to="`/projects/${project.fields.slug}`" prefetch>
          <h3 class="work__title">
            {{ project.fields.title }}
          </h3>
        </nuxt-link>
        <p class="work__details">
            {{ project.fields.headline }}
        </p>
        <ul class="work__categories">
          <li v-for="category in project.fields.categories" :key="category" class="work__category">
            {{ category }}
          </li>
        </ul>
        <video v-if="project.fields.video && index < 6 && displayVideos" :src="project.fields.video.fields.file.url" 
            autoplay="true" 
            muted="true" 
            loop="true" 
            controls />
        
      </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: [
    'categories'
  ],
  computed: {
    selectedCategory() { 
      return this.$store.state.content.selectedCategory
    },
    projects() {
        return this.$store.state.content.projects
    },
    displayVideos() {
      /* return true - display the videos - if we're not in small breakpoint */
      return this.$mq !== "sm"
    },
    filteredProjects() {
      if (this.selectedCategory === 'All'){
        return this.projects
      } else {
        return this.projects.filter( p => p.fields.categories.includes(this.selectedCategory))
      }
    }
  },
  methods: {
    ...mapMutations({
      updateSelectedCategory: 'content/updateSelectedCategory'
    })
  }
}
</script>

<style lang="scss" scoped>
  .work {
    &__list {
      border-top: 1px solid $dark-grey;
        list-style: none;
        margin-bottom: 3rem;
        display: grid;
        gap: 0 1rem;
        grid-template-columns: 1fr;
        padding-top: 0.5rem;
        p {
          padding-bottom: 1rem;
        }
        a {
          &:hover > h3,
          &:hover ~ p {
            color: $orange;
            transition: color $transition-props;
          } 
        }
    }

    &__category-title,
    &__categories {
      grid-column: 1 / span 1;
      font-size: 0.66em;
    }
    &__category-title {
      font-weight: 600;
      margin-top: 2rem;
    }
    &__categories {
      margin-bottom: 1rem;
    }
  }
  li.work__category {
    border: none;
    display: inline-block;
    padding-right: 1rem;
    margin: 0;
  }
  video {
    grid-column: 1 / -1;
  }

  

  @media screen and (min-width: $bp-md) {
    .work {
      ul {
        grid-column: 2 / -1;
      }
      &__list {
        grid-template-columns: 1fr 1fr;
      }
      &__details {
        display: block;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    video {
      grid-column: 2 / span 1;
    }
  }
  
</style>