<template>
  <div class="container">
    <div class="contact">
      <h1>Get in touch</h1>
      <a href="mailto:contact@joehornby.co.uk">Email me</a>
      <a href="https://github.com/joehornby" target="_blank" rel="noopener noreferrer">See what I'm up to on GitHub</a>
      <a href="https://www.linkedin.com/in/joehornby/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'contact';
    gap: 1rem;
  }
  .contact {
    margin-top: 10vh;
    grid-area: contact;
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