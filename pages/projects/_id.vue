<template>
    <div>
        <div class="project__text">
            <h1 class="project__text__title">{{ project.fields.title }}</h1>
            <h2 class="project__text__headline">{{ project.fields.headline }}</h2>
            <pre class="project__text__description">{{ project.fields.description }}</pre>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>

<style lang="scss" scoped>
    .project {

        &__text {
            width: clamp(35ch, 100%, 33vw);
            &__title,
            &__headline {
                // font-family: $font-stack-text;
                // font-weight: 400;
                font-size: 2rem;
                // letter-spacing: -0.035em;
                
            }
            &__description {
                margin-top: 2rem;
            }
        }

        
        &__info{
            position: fixed;
            bottom: 20vh;
            left: 0;
            height: 33vh;
            
            &__entry{
                font-weight: 700;
            }
        }
    }
</style>