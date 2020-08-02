<template>
  <div class="container">
    <header class="header">
      <div class="name"><nuxt-link to="/">Joseph Hornby</nuxt-link></div>
      <div class="role">Creative Technology</div>
      <div class="contact"><nuxt-link to="/contact">Contact</nuxt-link></div>
    </header>

    <Nuxt />

    <footer>
      <a href="https://github.com/joehornby" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/joehornby/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  </div>
</template>

<style lang="scss">
  .header {
    padding: $spacing-small;
    background-color: rgba($light-grey, 0.9);

    display: grid;    
    grid-template-areas:  "name"
                          "role" 
                          "contact";


    .name {
      grid-area: name;
    }
    .role {
      grid-area: role;
    }
    .contact {
      grid-area: contact;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $spacing-large;
    background-color: rgba($light-grey, 0.9);
    a {
      display: inline-block;
      margin-right: 1rem;
    }
  }

  @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
    .header,
    footer {
      background-color: rgba($light-grey, 0.4);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
  }

  @media only screen and (min-width: $bp-md){
    .header {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "name . role contact";
      gap: 2rem;

      padding: $spacing-large;
    }
  }

</style>
