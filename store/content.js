import client from "~/plugins/contentful"

export const state = () => ({
  homepage: null,
  projects: null,
  selectedCategory: 'All'
})

export const mutations = {
  updateHomepage: (state, homepage) => {
    state.homepage = homepage
  },
  updateProjects: (state, projects) => {
    state.projects = projects
  },
  updateSelectedCategory: (state, category) => {
    state.selectedCategory = category
  }
};

export const actions = {
  async getHomepage({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntry( process.env.CTF_HOME_PAGE_ID )
      commit("updateHomepage", response);
    } catch (err) {
      console.error(err)
    }
  },
  async getProjects({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        content_type: process.env.CTF_PROJECT_TYPE_ID,
        order: "fields.id"
      });
      if (response.items.length > 0) commit("updateProjects", response.items)
    } catch (err) {
      console.error(err)
    }
  }
};