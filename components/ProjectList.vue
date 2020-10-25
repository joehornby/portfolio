<template>
  <div class="work">
      <div class="work__heading">
        <h2 id="project-list">Selected Projects</h2>
        <h3 class="filter">Filter by Category</h3>
        <CategoryButton 
          v-for="cat in categories" 
          :key="cat" :category="cat" 
          :selectedCategory.sync="selectedCategory"
          v-on:updateCategory="selectedCategory" />
        
      </div>
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'All',
      categories: [
        'All',
        'Web',
        'Development',
        'Design',
        'Art',
        'Immersive Technology',
        'Sound'
      ]
    }
  },
  mounted() {
    this.selectedCategory = this.$route.query.category ? this.$route.$query.category : "All"
  },
  computed: {
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
  transition: 'slide-bottom'
}
</script>

<style lang="scss" scoped>
  .work {
    grid-area: work;
    width: 100%;
    li {
      border-top: 1px solid $dark-grey;
        list-style: none;
        margin-bottom: 1rem;
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

  

  @media screen and (min-width: $bp-md) {
    .work {
      grid-template-columns: repeat(3, 1fr);
      ul {
        grid-column: 2 / -1;
      }
      li {
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

  .slide-bottom-enter-active,
  .slide-bottom-leave-active {
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .slide-bottom-enter,
  .slide-bottom-leave-to {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }
</style>