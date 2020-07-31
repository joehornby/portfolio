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
        
        width: auto;
        font-size: inherit;
        font-family: inherit;
        font-weight: 700;
        border-radius: 10px;
        border: none;
        height: 3rem;
        margin: 0;
        padding: 1rem 1rem;

        &:hover {
            background-color: rgba($dark-grey,0.7);
            cursor: pointer;
        }
    }
</style>