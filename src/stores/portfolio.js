import { defineStore } from 'pinia'
import profile from '@/data/profile.json'
import skills from '@/data/skills.json'
import experience from '@/data/experience.json'
import projects from '@/data/projects.json'
import services from '@/data/services.json'
import contact from '@/data/contact.json'
import resume from '@/data/resume.json'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    profile,
    skills,
    experience,
    projects,
    services,
    contact,
    resume,
    activeProjectFilter: 'All'
  }),
  getters: {
    filteredProjects: (state) => {
      if (state.activeProjectFilter === 'All') return state.projects.items
      return state.projects.items.filter((p) => p.category === state.activeProjectFilter)
    },
    getProjectById: (state) => (id) => state.projects.items.find((p) => p.id === id)
  },
  actions: {
    setProjectFilter(filter) {
      this.activeProjectFilter = filter
    }
  }
})
