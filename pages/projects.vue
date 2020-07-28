<template>
    <div class="projects">
        <h3>Selected Projects</h3>
        <ul>
            <li v-for="project in projects" :key="project.fields.id">
                {{ project.fields.title }}
            </li>
        </ul>

        <nuxt-child :project="project" />
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
        display: grid;
        grid-template-areas: ". . ."
                " title  img "
                " headline img "
                " body img "
                " info . .";
        grid-template-rows: 10vh auto;
        grid-template-columns: repeat(autofit, minmax(320px, 1fr));

    }

    .next-project {
        grid-area: next;
        position: relative;

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
</style>