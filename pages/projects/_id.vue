<template>
    <div>
        This is in project: {{ project.fields.title }}
    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>

<style lang="scss" scoped>

</style>