<template>
    <div class="projects">
        <div class="projects__project">
            <nuxt-child :project="project"/>
        </div>
        <div class="next-project">
            <nuxt-link :to="nextProject.link" class="next-project__next">
                <span class="next-project__text">{{ nextProject.buttonText }}</span><span class="next-project__title">{{ nextProject.title }}</span>
            </nuxt-link>
            <nuxt-link :to="'/contact'" v-if="nextProject.lastProject" class="next-project__contact">
                Or get in touch
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import {createClient} from '~/plugins/contentful.js'
    const client = createClient()
    
    export default {
        head() {
        return {
            title: `${this.title} | ${this.page}`,
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
            page: "Projects"
        }
        },
            asyncData ({env}) {
                return Promise.all([
                    client.getEntries({
                        'content_type': env.CTF_PROJECT_TYPE_ID,
                        order: 'fields.id'
                    })
                ])
                .then(([entries]) => {
                    return {
                        projects: entries.items,
                        totalProjects: entries.total
                    }
                }).catch(console.error)
            },
            computed: {
                project() {
                    return this.projects.find ( p => p.fields.slug == this.$route.params.slug )
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
                        link = '/about'
                        title = 'Learn more about me'
                        buttonText = "Thanks for looking"
                    } else {
                        let nextProject = this.projects.find ( p => p.fields.id == ( currentId + 1 ) )
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
        margin-bottom: 4rem;
        height: 80vh;
        display: grid;
        grid-template-areas: "project project project"
                             ".       .       next";
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 10vh;
        gap: 1rem;

        &__project {
            grid-area: project;
        }
    }

    .next-project {
        grid-area: next;
        &__next {
            position: relative;
            &::before {
                content: '\2192';
                position: absolute;
                left: -1.5rem;
            }
        }
        &__text,
        &__title {
            display: block;
        }
        &__text {
            font-weight: inherit;
            transition: color $returnEasing;
            &:hover {
                color: $orange;
                transition: color $hoverEasing;
            }
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

    .nuxt-link-active {
        position: relative;
        left: 0;
        &::before {
            content: '\2192';
            position: absolute;
            left: -2rem;
        }
    }

    
</style>