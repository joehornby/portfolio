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
                <span class="next-project__text">Next up</span>
                <span class="next-project__title">{{ nextProject.title }}</span>
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
                     'content_type': env.CTF_PROJECT_TYPE_ID
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
                return this.projects.find( p => p.fields.id == this.$route.params.id )
            },
            nextProject() {
                let link;
                let title;
                const currentId = Number.parseInt(this.$route.params.id)

                console.log(`total: ${this.totalProjects}, current ID: ${currentId}`)

                if ( currentId < this.totalProjects) {
                    let nextProject = this.projects.find( p => p.fields.id == ( currentId + 1) )
                    link = `/projects/${nextProject.fields.id}`
                    title = nextProject.fields.title
                } else {
                    link = '/about'
                    title = 'Learn more about me'
                }
                return {
                    title: title,
                    link : link
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
        bottom: 20vh;
        left: 33vw;
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