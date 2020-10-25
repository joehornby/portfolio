<template>
  <div class="work__heading">
        <h2 id="project-list">Selected Projects</h2>
        <h3 class="filter">Filter by Category</h3>
        <div class="filter__buttons">
          <CategoryButton 
            v-for="cat in categories" 
            :key="cat" 
            :category="cat" 
            :selectedCategory.sync="selectedCategory" />
        </div>
      </div>
</template>

<script>
export default {
  computed: {
    categories(){
      return this.$store.state.content.categories
    },
    selectedCategory() {
      return this.$store.state.content.selectedCategory
    }
  }
}
</script>

<style lang="scss" scoped>

</style>