<template>
    <div class="project">
        <h1 class="project__title">{{ project.fields.title }}</h1>
        <h2 class="project__headline">{{ project.fields.headline }}</h2>
        <pre class="project__description">{{ project.fields.description }}</pre>

        <div class="project__image">
            <!-- <client-only> -->
            <carousel 
                perPage="1"
                navigationEnabled="true"
                paginationActiveColor="#3d3d3d"
                paginationColor="#CDCDCD"
                >
                <slide v-for="(image,index) in project.fields.images" :key="`image-${index}`"><img v-img:`${project.fields.title}` :src="image.fields.file.url" /></slide>
            </carousel>
            <!-- </client-only> -->
        </div>
        <div class="project__info">
            <div class="project__info--left">
                <h3 class="project__info__label">Client</h3>
                <p class="project__info__entry" v-for="(client,index) in project.fields.clients" :key="`client-${index}`">{{ client }}</p>
                
                <h3 class="project__info__label">Place and Time</h3>
                <p class="project__info__entry" v-if="project.fields.location">{{ project.fields.location }}</p>
                <p class="project__info__entry" ><span v-if="project.fields.startDate">{{ project.fields.startDate }}&ndash;</span>{{ project.fields.endDate }}</p>
                
            </div>
            <div class="project__info--right">
                <h3 class="project__info__label">Role</h3>
                <p class="project__info__entry" v-for="(role, index) in project.fields.role" :key="`role-${index}`">{{ role }}</p>
                <h3 class="project__info__label">Tech</h3>
                <div class="project__info--right">
                    <span class="project__info__entry" v-for="(tech,index) in project.fields.tech" :key="`tech-${index}`">
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
            font-size: 2rem;
            grid-area: headline;
            max-width: 28ch;
            }
        &__description {
            grid-area: description;
            max-width: 56ch;
        }
        &__image {
            width: 100%;
            height: auto;

            img {
                object-fit: cover;
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