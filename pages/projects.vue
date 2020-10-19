<template>
    <div class="projects">
        <div class="projects__project">
            <ProjectList v-if="project == undefined" :projects="projects" />
            <nuxt-child else :key="$route.params.slug" :project="project"/>
        </div>
        
        <nuxt-link v-if="project !== undefined" class="back alt-focus" to="/projects">
            <span class="next-project__text">Back to</span>
            <span class="next-project__title">Project list</span>
        </nuxt-link>
        
        <nuxt-link v-if="project !== undefined" :to="nextProject.link" class="next-project next-project__next alt-focus">
            <span class="next-project__text">{{ nextProject.buttonText }}</span>
            <span class="next-project__title">{{ nextProject.title }}</span>
        </nuxt-link>
    </div>
</template>

<script>    
    export default {
        head() {
        return {
            title: `${this.title} | ${this.pageTitle}`,
            meta: [
            // // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            // {
            //   hid: 'description',
            //   name: 'description',
            //   content: 'My custom description'
            // }
            ]
        }
        },
        data() {
        return {
            title: "Joseph Hornby",
            pageTitle: "Projects"
        }
        },
        computed: {
            project() {
                return this.$store.state.projects.find ( p => p.fields.slug == this.$route.params.slug )
            },
            totalProjects() {
                return this.$store.state.projects.length
            },
            nextProject() {
                let link;
                let title;
                let buttonText;
                let currentId;

                if ( this.project ){
                    currentId = this.project.fields.id
                } else {
                    currentId = 1
                }

                let lastProject = ( currentId == this.totalProjects )

                if ( lastProject ) {
                    link = '/contact'
                    title = 'Thanks for looking'
                    buttonText = "Get in touch"
                } else {
                    let nextProject = this.$store.state.projects.find ( p => p.fields.id == ( currentId + 1 ) )
                    link = `/projects/${nextProject.fields.slug}`
                    title = nextProject.fields.title
                    buttonText = "Next project"
                    
                }
                return {
                    title: title,
                    link : link,
                    buttonText : buttonText,
                    lastProject : lastProject
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .projects {
        margin-top: 10vh;
        margin-bottom: 0.75rem;
        min-height: 80vh;
        display: grid;
        grid-template-areas: "project project project"
                             "back    .       next";
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 10vh;
        gap: 1rem;

        &__project {
            grid-area: project;
            margin-bottom: 3rem;
        }
    }

    .back {
        grid-area: back;
        display: inline;
    }

    .back,
    .next-project {
        height: min-content;
        transition: color $transition-props;
        width: max-content;
        border-top: 0.5px solid $dark-grey;
        padding-top:0.5rem; 
        &:hover,
        &:hover * {
            color: $orange;
            transition: color $transition-props;
        }
        .alt-focus,
        .alt-focus > * {
        &:focus,
        &:focus-visible {
            outline: none !important;
            outline-width: 0;
            box-shadow: none;
            
            & * {
                color: $orange !important;
            }
            & > * {
                outline: none !important;
            }
        }
    }
    }

    .next-project {
        grid-area: next;
        
        &__next {
            position: relative;
        }
        &__text,
        &__title {
            display: block;
            margin: 0;
        }
        &__text {
            font-weight: inherit;
        }
        &__title {
            color: rgba($dark-grey, 0.6);
        }
    
        &__art,
        &__contact {
            margin-top: 2rem;
            display: block;
            &::after {
                content: ' \2192'
            }
        }
        &__contact {
            font-weight: inherit;
            margin-bottom: 3rem;
        }
    }

    @media screen and (min-width: $bp-md) {
        .projects {
            grid-template-areas: "project project project"
                                 ".    back       next";
        }
    }

    
</style>