<template>
    <div class="projects">
        <aside class="projects__aside">
            <h3>Selected Projects</h3>
            <ul>
                <li v-for="project in projects" :key="project.fields.id">
                    <nuxt-link :to="`/projects/${project.fields.id}`"> {{ project.fields.title }}</nuxt-link>
                </li>
            </ul>
        </aside>
        

        <div class="projects__project">
            <nuxt-child :project="project"/>
        </div>

        <div class="next-project">
            <nuxt-link :to="nextProject.link">
                <span class="next-project__text">{{ nextProject.buttonText }}</span>
                <span class="next-project__title">{{ nextProject.title }}</span>
            </nuxt-link>
            <nuxt-link :to="'/art'">
                <span class="next-project__art">Or check out this AI art machine</span>
            </nuxt-link>
            <nuxt-link :to="'/contact'" v-if="nextProject.lastProject">
                <span class="next-project__contact">Or get in touch &rarr;</span>
            </nuxt-link>
        </div>
        
    </div>
        
</template>

<script>
    import {createClient} from '~/plugins/contentful.js'
    const client = createClient()

    export default {
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
                const currentId = Number.parseInt(this.$route.params.id)

                let lastProject = currentId == this.totalProjects

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
        top: 80vh;
        left: calc(5 * 100vw / 6);
        padding: 0 1rem 1rem 0;
        width: auto;

        &__text {
            font-weight: 700;
            display: block;
        }
        &__title {
            display: block;
        }
        &::before {
            content: '\2192';
            position: absolute;
            left: -2rem;
            top: 0;
        }
        &__art,
        &__contact {
            font-size: 0.75rem;
            margin-top: 2rem;
            display: block;
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