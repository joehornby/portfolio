<template>
    <div class="project">
        <h1 class="project__title">{{ project.fields.title }}</h1>
        <h2 class="project__headline">{{ project.fields.headline }}</h2>

        <div class="project__image">
            <carousel 
                ref="carousel"
                :perPage="carouselPerPage"
                :paginationPosition="carouselPaginationPosition"
                :navigationEnabled="carouselNav"
                :paginationActiveColor="orange"
                :paginationColor="lightGrey"
                v-model="currentImage"
                >
                <slide v-for="(image,index) in project.fields.images" :key="`image-${index}`"><img v-img:`${project.fields.title}` :src="image.fields.file.url" /></slide>
            </carousel>
        </div>

        <div class="project__info">
            <div class="project__description">
                <pre>{{ project.fields.description }}</pre>
            </div>
            <div class="project__details">
                <div class="project__details--1">
                    <h3 class="project__details__label">Client</h3>
                    <p class="project__details__entry" v-for="(client,index) in project.fields.clients" :key="`client-${index}`">{{ client }}</p>
                    
                    <h3 class="project__details__label">Place and Time</h3>
                    <p class="project__details__entry" v-if="project.fields.location">{{ project.fields.location }}</p>
                    <p class="project__details__entry"><span v-if="project.fields.startDate">{{ project.fields.startDate }}&ndash;</span>{{ project.fields.endDate }}</p>
                    
                </div>
                <div class="project__details--2">
                    <h3 class="project__details__label">Role</h3>
                    <p class="project__details__entry" v-for="(role, index) in project.fields.role" :key="`role-${index}`">{{ role }}</p>
                    <h3 class="project__details__label">Tech</h3>
                    <div class="project__details--2">
                        <span class="project__details__entry" v-for="(tech,index) in project.fields.tech" :key="`tech-${index}`">
                            <span>{{ tech }}</span><span v-if="index+1 < project.fields.tech.length">, </span>
                        </span>
                    </div>
                </div>
                <div class="project__details--3">
                    <h3 v-if="project.fields.url" class="project__details__label">Links</h3>
                    <p class="project__details__entry" v-for="(url, index) in project.fields.url" :key="`url-${index}`"><a :href="url.url">{{ url.name }}</a></p>
                </div>            
            </div>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        scrollToTop: true,
        transition: 'project',
        data() {
            return {
                carouselPerPage: 1,
                carouselNav: false,
                carouselPaginationPosition: 'bottom-overlay',
                lightGrey: '#FCFCFC',
                orange: '#FF5C00',
                currentImage: 0

            }
        },
        props: ['project'],
        mounted(){
                this.currentImage = 0
        }
    }
</script>

<style lang="scss" scoped>
    .project {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:  "title"
                              "headline"
                              "image"
                              "info";
        gap: 1rem;
        grid-template-rows: 10rem min-content min-content auto;

           
        &__title,
        &__headline {
            font-family: $font-stack-text;
            letter-spacing: -0.015em;
            margin: 0;            
        }
        &__title{
            font-size: 2rem;
            grid-area: title;
        }
        &__headline { 
            font-size: 2rem;
            grid-area: headline;

            }
        &__description {
            grid-area: description;

        }
        &__image {
            width: auto;
            height: 100%;
            grid-area: image;

            img {
                object-fit: cover;
            }
        }

        &__info {
            grid-area: info;
        }

        
        &__details{
            grid-area: details;

            // display: grid;
            // grid-template-columns: repeat(3, minmax(15ch,1fr));
            // gap: 2rem;

            &__label {
                margin: 0;
                padding-top: 1rem;
                // padding-bottom: 0.2rem;
                font-size: inherit;
            }
            &__entry {
                margin: 0;
                color: rgba($dark-grey, 0.6);
                & > span {
                    color: inherit;
                }
            }
            
        }
    }

    @media screen and (min-width: $bp-md) {
        .project {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:  ". title title"
                                ". headline headline"
                                ". image image"
                                ". info info";
            &__details {
                width: clamp(15ch, 45ch, 30%);
                position: fixed;
                bottom: 1rem;
                left: 1rem;
            }
        }
    }
</style>