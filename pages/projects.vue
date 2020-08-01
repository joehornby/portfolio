<template>
    <div class="projects">
        <div class="projects__project">
            <nuxt-child :project="project"/>
        </div>

        <div class="next-project">
            <nuxt-link :to="nextProject.link">
                <strong>{{ nextProject.buttonText }}</strong> {{ nextProject.title }}
            </nuxt-link>
            <nuxt-link :to="'/art'" class="next-project__art">
                Or check out my AI art machine
            </nuxt-link>
            <nuxt-link :to="'/contact'" v-if="nextProject.lastProject" class="next-project__contact">
                Or get in touch
            </nuxt-link>
        </div>
        <div class="external-links">
            <a href="https://github.com/joehornby" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/joehornby/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
                return this.projects.find ( p => p.fields.id == this.$route.params.id )
            },
            nextProject() {
                let link;
                let title;
                let buttonText;
                let currentId;

                if (this.$route.params.id){
                    currentId = Number.parseInt(this.$route.params.id)
                } else {
                    currentId = 0
                }

                let lastProject = ( currentId == this.totalProjects )

                if ( lastProject ) {
                    link = '/about'
                    title = 'Learn more about me'
                    buttonText = "Thanks for looking"
                } else {
                    let nextProject = this.projects.find ( p => p.fields.id == ( currentId + 1 ) )
                    link = `/projects/${nextProject.fields.id}`
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

        &__aside {
            position: fixed;
            right: 0;
            width: calc( 100vw / 6 );
            ul {
                margin-top: 1rem;
            }
            li {
                list-style: none;
            }
        }
        &__project {
            grid-area: project;
        }
    }

    .next-project {
        position: fixed;
        top: 75vh;
        left: calc( 50% + 1rem );
        padding: 0 1rem 1rem 0;
        width: auto;
        
        &__text {
            font-weight: 700;
        }
        &__link {
            color: inherit;
            transition: color $returnEasing;
            &:hover {
                color: $orange;
                transition: color $hoverEasing;
            }
                
        }

        &::before {
            content: '\2192';
            position: absolute;
            left: -2rem;
            top: 0;
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
            font-weight: 700;
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