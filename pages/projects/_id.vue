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
                <div class="project__info--two-col">
                    <p class="project__info__entry project__info__entry--two-col" v-for="tech in project.fields.tech">{{ tech }}</p>
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
            width: clamp(35ch, 100%, 33vw);
            &__title,
            &__headline {
                font-family: $font-stack-text;
                letter-spacing: -0.015em;
                font-size: 2rem;                
            }
            &__title{
                font-weight: 700;
            }
            &__description {
                margin-top: 2rem;
            }
        }

        
        &__info{
            position: fixed;
            top: 80vh;
            left: 0;
            height: 33vh;
            padding-bottom: 1rem;
            margin-left: 1rem;
            border-top: 2px solid $dark-grey;
            width: 33vw;

            background-color: $light-grey;

            font-size: 0.75rem;

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
                font-size: 0.75rem;
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