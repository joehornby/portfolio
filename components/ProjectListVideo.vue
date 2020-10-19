<template>
  <div class="work">
      <h2 class="work__heading" id="project-list">Selected Projects</h2>
      <ul>
        <nuxt-link tabindex="0" v-for="(project, index) in projects" :key="project.fields.id" :to="`/projects/${project.fields.slug}`" prefetch>
          <li class="work__list" >
            {{ project.fields.title }}
            <span class="work__details">{{ project.fields.headline }}</span>
            <h4 class="work__category-title">Categories</h4>
            <ul class="work__categories">
              <li v-for="category in projects[index].fields.categories" :key="category" class="work__category">
                {{ category }}
              </li>
            </ul>
            <video v-if="project.fields.video" :src="project.fields.video.fields.file.url" 
                autoplay="true" 
                muted="true" 
                loop="true" 
                controls />
            
          </li>
        </nuxt-link>
      </ul>
    </div>
</template>

<script>
export default {
  props: [
    "projects"
  ]
}
</script>

<style lang="scss" scoped>
  .work {
    &__category-title,
    &__categories {
      grid-column: 1 / span 1;
      font-size: 0.66em;
      &:hover {
        cursor: default;
      }
    }
    &__category-title {
      font-weight: 600;
      margin-top: 2rem;
    }
  }
  li.work__category {
    border: none;
    display: inline-block;
    padding-right: 1rem;
  }

  video {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 1024px) {
    video {
      grid-column: 2 / span 1;
    }
  }
  

</style>