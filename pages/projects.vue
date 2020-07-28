<template>
  <div>
      <h3>Selected Projects</h3>
      <ul>
          <li v-for="project in projects" :key="project.id">
              {{ project.fields.title }}
          </li>
      </ul>
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
                console.log(entries)
                return {
                    projects: entries.items
                }
            }).catch(console.error)
        }
    }
</script>

