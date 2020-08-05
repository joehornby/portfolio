<template>
    <button @click="callback($event)"><slot></slot></button>
</template>

<script>
export default {
    props: ['text'],
    methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>
    button {
        color: $light-grey;
        background-color: $dark-grey;
        
        width: 18ch;
        height: 18ch;
        font-size: inherit;
        font-family: inherit;
        font-weight: 700;
        border-radius: 50%;
        border: none;
        margin: 0;
        padding: .5rem 1rem;
        z-index: 10;

        &:hover {
            background-color: rgba($dark-grey,0.7);
            cursor: pointer;
        }
    }
</style>