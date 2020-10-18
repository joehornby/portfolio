<template>
  <div class="work">
      <h2 class="work__heading" id="project-list">Selected Projects</h2>
      <ul>
        <nuxt-link tabindex="0" v-for="project in projects" :key="project.fields.id" :to="`/projects/${project.fields.slug}`" prefetch>
          <li class="work__list" >
            {{ project.fields.title }}
            <span class="work__details">{{ project.fields.headline }}</span>
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

</style>