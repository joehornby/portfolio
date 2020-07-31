<template>
    <div>
        <div class="project__text">
            <h1 class="project__text__title">{{ project.fields.title }}</h1>
            <h2 class="project__text__headline">{{ project.fields.headline }}</h2>
            <pre class="project__text__description">{{ project.fields.description }}</pre>
        </div>
        <div class="project__image"></div>
        <div class="project__info">
            <div class="project__info--left">
                <h3 class="project__info__label">Client</h3>
                <p class="project__info__entry" v-for="client in project.fields.clients">{{ client }}</p>
                
                <h3 class="project__info__label">Place and Time</h3>
                <p class="project__info__entry" v-if="project.fields.location">{{ project.fields.location }}</p>
                <p class="project__info__entry" ><span v-if="project.fields.startDate">{{ project.fields.startDate }}&ndash;</span>{{ project.fields.endDate }}</p>
                
            </div>
            <div class="project__info--right">
                <h3 class="project__info__label">Role</h3>
                <p class="project__info__entry" v-for="role in project.fields.role">{{ role }}</p>
                <h3 class="project__info__label">Tech</h3>
                <div class="project__info--right">
                    <span class="project__info__entry" v-for="(tech,index) in project.fields.tech">
                        <span>{{ tech }}</span><span v-if="index+1 < project.fields.tech.length">, </span>
                    </span>
                </div>
            </div>
            
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:  "title headline"
                                    "image description";
            gap: 2rem;

            &__title,
            &__headline {
                font-family: $font-stack-text;
                letter-spacing: -0.015em;
                margin: 0;            
            }
            &__title{
                font-weight: 700;
                font-size: 2rem;
                grid-area: title;
            }
            &__headline { 
                font-size: 1rem;
                font-weight: 700;
                grid-area: headline;
                }
            &__description {
                grid-area: description;
            }
        }

        
        &__info{
            position: fixed;
            top: 75vh;
            left: 0;
            height: 25vh;
            padding-bottom: 1rem;
            margin-left: 1rem;
            border-top: 2px solid $dark-grey;
            width: 33vw;

            background-color: $light-grey;

            display: grid;
            grid-template-columns: 1fr 1fr;

            &--left{
                grid-column: 1 / 1;
            }
            &--right {
                grid-column: 2 / 3;
            }
            &--two-col {
                display: block;
                column-count: 2;
            }

            &__label {
                margin: 0;
                padding-top: 1rem;
                padding-bottom: 0.2rem;;
            }
            &__entry {
                font-weight: 700;
                margin: 0;
                & > span {
                    font-weight: inherit;
                }
            }
            
        }
    }
</style>