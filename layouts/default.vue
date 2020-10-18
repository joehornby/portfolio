<template>
  <div class="container">
    <header class="header">
      <a class="skip" href="#content" tabindex="0">Skip to content</a>
      <div class="name"><nuxt-link title="home page" tabindex="0" to="/">Joseph Hornby</nuxt-link></div>
      <div class="role">Creative Technology</div>
      <div class="contact">
        <nuxt-link tabindex="0" to="/contact">Contact</nuxt-link>
        <a href="https://github.com/joehornby">GitHub</a>
        <a href="https://www.linkedin.com/in/joehornby/">LinkedIn</a>
        </div>
    </header>

    <Nuxt id="content" />
      
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/_remedy.scss';
  @import '@/assets/scss/_typography.scss';
  @import '@/assets/scss/_styles.scss';
</style>

<style lang="scss" scoped>
.skip {
  font-size: 0.75rem;
  position: absolute;
  left: 50%;
  top: 0.25rem;
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
}
  .header {
    padding: $spacing-small;
    background-color: rgba($light-grey, 0.9);

    display: grid;
    grid-template-columns: 2fr;
    grid-template-areas: "name contact"
                         "role contact";

    .name {
      grid-area: name;
    }
    .role {
      grid-area: role;
    }
    .contact {
      grid-area: contact;
      display: flex;
      flex-direction: column; 
    }
    
    
  }

  @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
    .header {
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
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "name role contact";
      gap: 1rem;
      padding: $spacing-large;
      .contact {    
        display: block;
        a {
          display: inline-block;
          &::after {
            content: ' \002F ';
          }
          &:last-child::after {
            content: '';
          }
        }
      }
    }

    
  }

</style>
