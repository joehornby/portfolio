<template>
  <div class="container">
    <div class="contact">
      <h1>Get in touch</h1>
      <a href="mailto:contact@joehornby.co.uk">Email me</a>
      <a href="https://github.com/joehornby">GitHub</a>
      <a href="https://codepen.io/joehornby">CodePen</a>
      <a href="https://www.linkedin.com/in/joehornby/">LinkedIn</a>
      <div class="contact__form">
        <h2>Contact form</h2>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      
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

    &__form {
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 0.5pt solid $dark-grey;
      width: max-content;
      h2 {
        margin-bottom: 2rem;
      }
      label {
        display: block;
        margin-top: 2rem;
      }
      input, 
      textarea,
      button {
        display: block;
        width: 40ch;
        margin-top: 1rem;
        border: 0.5pt solid $dark-grey;
        border-radius: 3px;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        &:focus,
        &:focus-visible {
          outline: 0.5pt solid $dark-grey;
          box-shadow: none;
        }
      }
      button {
        background-color: transparent;
        &:hover {
          background-color: rgba($dark-grey, 0.1);
          cursor: pointer;
        }
      }
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