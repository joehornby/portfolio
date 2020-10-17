<template>
  <div class="container">
    <div class="error">
      <h1 v-if="error.statusCode === 404">Hmm... I couldn't find that page.</h1>
      <h1 v-else>Something's not right.</h1>
      <p>I hope the links below will get you back on track.</p>
      <nuxt-link to="/">Home page</nuxt-link>
      <nuxt-link to="/projects">Portfolio</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'contact';
    gap: 1rem;
  }
  .error {
    margin-top: 5rem;
    grid-area: contact;
    p {
      margin-bottom: 2rem;
    }
    a {
      display: block;
      margin-bottom: 1rem;
      width: max-content;
    }
  }
  @media screen and (min-width: $bp-md) {
    .container {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:  ". contact contact";
      gap: 1rem;
    }
  }
</style>
