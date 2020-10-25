<template>
    <button
          class="category-btn"
          :class="{ 'category-btn__selected' : selectedCategory === category }"
          @click="$emit('update:selectedCategory', category)"
          >
            {{ category }}
    </button>
</template>

<script>
export default {
  props: [
    'category',
    'selectedCategory'
  ]
}
</script>

<style lang="scss" scoped>
  .category-btn {
    box-shadow: none;
    border: $dark-grey solid 1px;
    border-radius: 5px;
    padding: 0.75em 1.5em;
    margin: 0 0.2rem 0.2rem 0;
    background-color: $light-grey;
    &:hover {
      background-color: $mid-grey;
      cursor: pointer;
    }
    &__selected {
      background-color: $dark-grey;
      color: $light-grey;
      // &:hover {
      //   background: lighten($dark-grey, 20);
      // }
    }
  }

  @media screen and (min-width: $bp-md) {
    .category-btn {
      padding: 0.25em 0.5em;
    }
  }

  
</style>